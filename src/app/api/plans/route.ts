import { NextResponse } from "next/server";
import { AvailablePlans, Plan } from "@/types/plans";
import prisma from "@/lib/prisma";
import { cacheHelper } from "@/lib/redis";
import { CACHE_KEYS, CACHE_TTL } from "@/constants";

type PlansResponse = {
  data?: Record<AvailablePlans, Plan>;
  error?: string;
};

export async function GET(): Promise<NextResponse<PlansResponse>> {
  try {
    const formattedPlans = await cacheHelper.getOrSet<Record<AvailablePlans, Plan>>(
      CACHE_KEYS.PLANS,
      async () => {
        console.log("Cache miss - fetching plans from database");
        
        const plans = await prisma.plan.findMany({
          include: {
            features: {
              include: {
                descriptionList: {
                  orderBy: {
                    order: "asc",
                  },
                },
              },
              orderBy: {
                order: "asc",
              },
            },
          },
          orderBy: {
            order: "asc",
          },
        });

        const formatted = plans.reduce((acc, plan) => {
          acc[plan.name as AvailablePlans] = plan as Plan;
          return acc;
        }, {} as Record<AvailablePlans, Plan>);

        return formatted;
      },
      CACHE_TTL.PLANS
    );

    return NextResponse.json({
      data: formattedPlans,
    });
  } catch (error) {
    console.error("Plans API error:", error);
    return NextResponse.json(
      { error: "Failed to retrieve plans!" },
      { status: 500 }
    );
  }
}
