import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import UpgradePlanBtn from "./atoms/UpgradePlanBtn";
import { useMemo, useState } from "react";
import { AvailablePlans, FeatureKey } from "@/types/plans";
import { ArrowRight } from "lucide-react";
import FeatureRow from "./atoms/FeatureRow";
import { Button } from "@/components/ui/button";
import { renderPane } from "./panes";
import { useGetPlans } from "@/hooks/plan/plan.hook";
import UpgradeSkeleton from "./upgrade-skeleton";

type UpgradePlanProps = {
  showUpgradeModal: boolean;
  setShowUpgradeModal: (show: boolean) => void;
}

// for accessibility
const VisuallyHidden = ({ children }: { children: React.ReactNode }) => (
  <span className="sr-only">{children}</span>
);

const UpgradePlan = ({ showUpgradeModal, setShowUpgradeModal }: UpgradePlanProps) => {
  const [selectedPlan, setSelectedPlan] = useState<AvailablePlans>('Pro');
  const [hoveredFeature, setHoveredFeature] = useState<FeatureKey | null>(null);

  const { data: plansData, isLoading: isLoadingPlans } = useGetPlans();

  const plans = useMemo(() => {
    return plansData?.data;
  }, [plansData]);

  const allPlans = useMemo(() => {
    return Object.values(plans || {}).map((plan) => ({
      id: plan.id,
      name: plan.name,
      isPopular: plan.isPopular,
    }));
  }, [plans]);

  const planDetails = useMemo(() => {
    return plans?.[selectedPlan];
  }, [selectedPlan, plans]);

  const hoveredFeatureDetails = useMemo(() => {
    if (!hoveredFeature) return null;
    return planDetails?.features.find((feature) => feature.key === hoveredFeature)!;
  }, [planDetails, hoveredFeature]);

  const handlePlanSelection = (plan: AvailablePlans) => {
    setSelectedPlan(plan);
  }

  const handleOpenChange = (open: boolean) => {
    setShowUpgradeModal(open);
    setSelectedPlan('Pro');
  }

  const handleFeatureHover = (featureKey: FeatureKey) => {
    setHoveredFeature(featureKey);
  }

  const handleHoverLeave = () => {
    setHoveredFeature(null);
  }

  const handleUnlockFeatures = () => {
    window.open("https://musicgpt.com", "_blank");
  }

  return (
    <Dialog open={showUpgradeModal} onOpenChange={handleOpenChange}>
      <DialogContent className="h-[600px] !w-[800px] !max-w-[800px] rounded-[28px] bg-primary-100 flex flex-row gap-0 p-0 border-0" showCloseButton={false}>
        <VisuallyHidden>
          <DialogTitle>Upgrade Plan</DialogTitle>
        </VisuallyHidden>

        {renderPane(hoveredFeature, hoveredFeatureDetails)}

        <div className="w-[400px] mt-[48.5px] mx-[32px]">
          <div className="text-primary-5000 text-4xl font-medium leading-[100%]">
            Unlock the future of music.
          </div>

          {
            isLoadingPlans ? (
              <UpgradeSkeleton />
            ) : (
              <>
                <div className="flex flex-row items-center justify-between gap-[12px] mt-[32px]">
                  {
                    allPlans?.map((plan) => (
                      <UpgradePlanBtn key={plan.id} text={plan.name} handlePlanSelection={handlePlanSelection} selectedPlan={selectedPlan} isPopular={plan.isPopular} />
                    ))
                  }
                </div>

                <div onMouseLeave={handleHoverLeave} className="mt-[47px]" >
                  {
                    planDetails?.features.map((feature) => (
                      <FeatureRow
                        key={feature.key}
                        featureText={feature.title}
                        hasAnyFeatureHovered={!!hoveredFeature}
                        isCurrentHovered={hoveredFeature === feature.key}
                        onHover={() => handleFeatureHover(feature.key)}
                      />
                    ))
                  }
                </div>

                <div className="mt-[32px] flex flex-col gap-4">
                  <div>
                    <div className="text-primary-5000 text-4xl font-medium leading-[100%]">
                      ${planDetails?.price}
                    </div>
                    <div className="mt-1 text-primary-1200 text-[14px] font-medium leading-[150%]">
                      USD per month, billed yearly
                    </div>
                  </div>
                  <Button onClick={handleUnlockFeatures} className="cursor-pointer w-full h-[56px] rounded-[12px] gap-2 px-3 py-[3px] bg-white hover:bg-white border border-primary-500 text-primary-100 font-semibold text-[16px]">
                    Unlock {selectedPlan} Features
                    <ArrowRight />
                  </Button>
                </div>
              </>
            )
          }
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UpgradePlan