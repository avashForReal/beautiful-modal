# MusicGPT

A modern Next.js application for music generation with subscription plans, built with TypeScript, Prisma, Redis caching, and Docker support.

## Prerequisites

- Node.js 20 and above or Docker
- pnpm (recommended) or npm
- Redis (for caching)

## Setup Instructions

### Run Locally

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd musicgpt
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env` file from the given `.env.example`:

   ```env
   REDIS_URL="redis://localhost:6379"
   ```

4. **Initialize the database**

   ```bash
   # generate Prisma client
   pnpm  db:generate

   # run migrations
   pnpm db:migrate:dev

   # seed the database (optional)
   pnpm db:seed
   ```

5. **Start the development server**

   ```bash
   pnpm dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Run With Docker

1. **Start services with Docker Compose**

   ```bash
   docker-compose up
   ```

   ```bash
   # run in the background
   docker-compose up -d
   ```

   Navigate to [http://localhost:3000](http://localhost:3000)

2. **View logs (if running in the background)**

   ```bash
   docker-compose logs -f
   ```

3. **Stop services**
   ```bash
   docker-compose down
   ```

## 📁 Project Structure

```
musicgpt/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (ui)/              # UI route group
│   │   │   ├── globals.css    # Global styles
│   │   │   ├── layout.tsx     # Root layout
│   │   │   └── page.tsx       # Home page
│   │   └── api/               # API routes
│   │       └── plans/         # Plans API endpoint
│   │
│   ├── components/            # React components
│   │   ├── modal/            # Modal components
│   │   │   └── upgrade-plan/ # Upgrade plan modal
│   │   └── ui/               # Reusable UI components
│   ├── hooks/                # Custom React hooks
│   │   ├── plan/            # Plan-related hooks
│   │   └── query/           # Query client hooks
│   ├── lib/                 # Utility libraries
│   │   ├── prisma.ts        # Prisma client
│   │   ├── redis.ts         # Redis client & helpers
│   │   ├── api-client.ts    # Axios configuration
│   │   └── utils.ts         # Utility functions
│   ├── types/               # TypeScript type definitions
│   ├── constants.ts         # Application constants
│   ├── data.ts             # Static data definitions
│   └── iconmap.ts          # Icon mappings
├── prisma/                 # Database schema & migrations
│   ├── schema.prisma       # Database schema
│   └── migrations/         # Database migrations
├── public/                 # Static assets
├── docker-compose.yml      # Docker Compose configuration
├── Dockerfile             #  Docker image
└── README.md              # This file
```

## 🏗️ Design Decisions

### Architecture Choices

#### **Prisma ORM**

- **Why**: Type-safe database access with excellent TypeScript integration
- **Benefits**: Auto-generated types, migration management, great developer experience
- **Trade-offs**: Additional abstraction layer, learning curve for complex queries

#### **SQLite Database**

- **Why**: Simple setup, file-based, perfect for development and small-scale deployments
- **Benefits**: Zero configuration, ACID compliance, good performance for read-heavy workloads
- **Trade-offs**: Not suitable for high-concurrency or distributed systems

#### **Redis Caching**

- **Why**: Significant performance improvement for frequently accessed data
- **Benefits**: Sub-millisecond response times, reduced database load, scalability
- **Implementation**: Cache-first strategy with automatic fallback to database

### Frontend Architecture

#### **React Query (TanStack Query)**

- **Why**: Sophisticated data fetching with caching, background updates, and error handling
- **Benefits**: Reduced boilerplate, automatic refetching, optimistic updates
- **Usage**: All API calls go through React Query for consistent state management

#### **Radix UI + Tailwind CSS**

- **Why**: Accessible components with utility-first styling
- **Benefits**: Consistent design system, accessibility built-in, rapid development
- **Customization**: Custom theme through CSS variables and Tailwind configuration

#### **TypeScript**

- **Why**: Type safety prevents runtime errors and improves developer experience
- **Benefits**: Better IDE support, refactoring safety, self-documenting code
- **Coverage**: 100% TypeScript with strict mode enabled

### Caching Strategy

#### **Redis Implementation**

- **Cache Keys**: Structured with constant keys
- **TTL Strategy**: 5 minutes for plans data
- **Fallback**: Graceful degradation when Redis is unavailable

### Performance Optimizations

#### **Docker Multi-Stage Build**

- **Stage 1**: Dependencies installation
- **Stage 2**: Application build
- **Stage 3**: Production runtime
- **Benefits**: Smaller final image, faster deployments, better security

#### **Next.js Optimizations**

- **Standalone Output**: Minimal production bundle
- **Static Assets**: Optimized image and font loading
- **Code Splitting**: Automatic route-based splitting
