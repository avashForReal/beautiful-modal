import { createClient, RedisClientType } from 'redis';

class RedisClient {
  private client: RedisClientType | null = null;
  private isConnecting = false;

  private async connect(): Promise<RedisClientType> {
    if (this.client && this.client.isOpen) {
      return this.client;
    }

    if (this.isConnecting) {
      while (this.isConnecting) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      return this.client!;
    }

    this.isConnecting = true;

    try {
      this.client = createClient({
        url: process.env.REDIS_URL || 'redis://localhost:6379',
        socket: {
          reconnectStrategy: (retries) => {
            if (retries > 3) {
              console.error('Redis connection failed after 3 retries');
              return false;
            }
            return Math.min(retries * 100, 3000);
          }
        }
      });

      this.client.on('error', (err) => {
        console.error('Redis Client Error:', err);
      });

      this.client.on('connect', () => {
        console.log('Redis Client Connected');
      });

      this.client.on('disconnect', () => {
        console.log('Redis Client Disconnected');
      });

      await this.client.connect();
      this.isConnecting = false;
      return this.client;
    } catch (error) {
      this.isConnecting = false;
      console.error('Failed to connect to Redis:', error);
      throw error;
    }
  }

  async get(key: string): Promise<string | null> {
    try {
      const client = await this.connect();
      return await client.get(key);
    } catch (error) {
      console.error('Redis GET error:', error);
      return null;
    }
  }

  async set(key: string, value: string, ttlSeconds?: number): Promise<boolean> {
    try {
      const client = await this.connect();
      if (ttlSeconds) {
        await client.setEx(key, ttlSeconds, value);
      } else {
        await client.set(key, value);
      }
      return true;
    } catch (error) {
      console.error('Redis SET error:', error);
      return false;
    }
  }
}

const redisClient = new RedisClient();

export const cacheHelper = {
  setJSON: async (key: string, data: any, ttlSeconds?: number): Promise<boolean> => {
    try {
      const serialized = JSON.stringify(data);
      return await redisClient.set(key, serialized, ttlSeconds);
    } catch (error) {
      console.error('Cache setJSON error:', error);
      return false;
    }
  },

  getJSON: async <T>(key: string): Promise<T | null> => {
    try {
      const cached = await redisClient.get(key);
      if (!cached) return null;
      return JSON.parse(cached) as T;
    } catch (error) {
      console.error('Cache getJSON error:', error);
      return null;
    }
  },

  getOrSet: async <T>(
    key: string,
    fallbackFn: () => Promise<T>,
    ttlSeconds: number = 300 // 5 minutes default
  ): Promise<T> => {
    try {
      const cached = await cacheHelper.getJSON<T>(key);
      if (cached !== null) {
        console.log('Cache hit for key:', key);
        return cached;
      }

      const data = await fallbackFn();
      
      await cacheHelper.setJSON(key, data, ttlSeconds);
      
      return data;
    } catch (error) {
      console.error('Cache getOrSet error:', error);
      return await fallbackFn();
    }
  }
}; 