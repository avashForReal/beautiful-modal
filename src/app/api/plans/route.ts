import { NextResponse } from "next/server";
import { AvailablePlans, Plan } from "@/types/plans";
import prisma from "@/lib/prisma";

type PlansResponse = {
  data?: Record<AvailablePlans, Plan>;
  error?: string;
};

export async function GET(): Promise<NextResponse<PlansResponse>> {
  try {
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
    const formattedPlans = plans.reduce((acc, plan) => {
      acc[plan.name as AvailablePlans] = plan as Plan;
      return acc;
    }, {} as Record<AvailablePlans, Plan>);

    return NextResponse.json({
      data: formattedPlans,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to retrieve plans!" },
      { status: 500 }
    );
  }
}
