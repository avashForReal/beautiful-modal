import { seedPlans } from "./seed";

export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    try {
      await seedPlans();
    } catch (error) {
      console.error("❌⚠️ Error seeding plans.");
      console.error(error);
    }
  }
}
