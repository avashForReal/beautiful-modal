import prisma from "./lib/prisma";
import { plans } from "./data";

export const seedPlans = async () => {
  const hasExistingPlans = await prisma.plan.count();
  if (hasExistingPlans > 0) {
    console.log("Plans already exist, skipping seeding.");
    return;
  }

  console.log("Starting to seed plans...");

  for (const plan of Object.values(plans)) {
    console.log(`Seeding plan ${plan.name}...`);
    await prisma.$transaction(async (tx) => {
      const createdPlan = await tx.plan.create({
        data: {
          name: plan.name,
          price: plan.price,
          order: plan.order,
          isPopular: plan.isPopular,
        },
      });

      for (const feature of plan.features) {
        console.log(`Seeding feature ${feature.key}...`);
        const createdFeature = await tx.feature.create({
          data: {
            planId: createdPlan.id,
            key: feature.key,
            title: feature.title,
            paneTitle: feature.paneTitle,
            paneTitleIcon: feature.paneTitleIcon,
            description: feature.description,
            order: feature.order,
          },
        });

        if (feature.descriptionList?.length) {
          for (const description of feature.descriptionList) {
            console.log(`Seeding description ${description.title}...`);
            await tx.featureDescription.create({
              data: {
                featureId: createdFeature.id,
                title: description.title,
                icon: description.icon,
                description: description.description,
                order: description.order,
              },
            });
          }
        }
      }
    });
  }

  console.log("Plans seeded successfully!");
};

if (require.main === module) {
  seedPlans().catch((error) => {
    console.error("❌⚠️ Error seeding plans.");
    console.error(error);
  });
}
