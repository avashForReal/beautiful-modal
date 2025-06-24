import { Dialog, DialogContent } from "@/components/ui/dialog"
import UpgradePlanBtn from "./atoms/UpgradePlanBtn";
import { useState } from "react";
import { AvailablePlans } from "@/types/plans";
import { ArrowRight } from "lucide-react";
import FeatureRow from "./atoms/FeatureRow";
import { Button } from "@/components/ui/button";
import PrimaryPane from "./panes/PrimaryPane";
import CreditsPane from "./panes/CreditsPane";
import DownloadsPane from "./panes/DownloadsPane";
import FeaturesPane from "./panes/FeaturesPane";
import FastGen from "./panes/FastGen";
import CommercialUse from "./panes/CommercialUse";


type UpgradePlanProps = {
  showUpgradeModal: boolean;
  setShowUpgradeModal: (show: boolean) => void;
}


const UpgradePlan = ({ showUpgradeModal, setShowUpgradeModal }: UpgradePlanProps) => {
  const [selectedPlan, setSelectedPlan] = useState<AvailablePlans>('Pro');

  const handlePlanSelection = (plan: AvailablePlans) => {
    setSelectedPlan(plan);
  }

  const handleOpenChange = (open: boolean) => {
    setShowUpgradeModal(open);
    setSelectedPlan('Pro');
  }

  return (
    <Dialog open={showUpgradeModal} onOpenChange={handleOpenChange}>
      <DialogContent className="h-[600px] !w-[800px] !max-w-[800px] rounded-[28px] bg-primary-100 flex flex-row gap-0 p-0 border-0" showCloseButton={false}>
       
        <div className="w-1/2">
          {/* <PrimaryPane /> */}
          {/* <CreditsPane /> */}
          {/* <DownloadsPane /> */}
          {/* <FeaturesPane /> */}
          {/* <FastGen /> */}
          <CommercialUse />
        </div>

        <div className="w-1/2 mt-[48.5px] mx-[32px]">
          <div className="text-primary-5000 text-4xl font-medium leading-[100%]">
            Unlock the future of music.
          </div>
          <div className="flex flex-row items-center justify-between gap-[12px] mt-[32px]">
            <UpgradePlanBtn text="Plus" handlePlanSelection={handlePlanSelection} selectedPlan={selectedPlan} />
            <UpgradePlanBtn text="Pro" handlePlanSelection={handlePlanSelection} selectedPlan={selectedPlan} isPopular />
            <UpgradePlanBtn text="Ultra" handlePlanSelection={handlePlanSelection} selectedPlan={selectedPlan} />
          </div>

          <div className="mt-[47px]">
            <FeatureRow featureText="Generate 6000 songs /year" />
            <FeatureRow featureText="Unlimited downloads" />
            <FeatureRow featureText="Unlock all features" />
            <FeatureRow featureText="Fast generation" />
            <FeatureRow featureText="Commercial use" />
          </div>

          <div className="mt-[32px] flex flex-col gap-4">
            <div>
              <div className="text-primary-5000 text-4xl font-medium leading-[100%]">
                $9.99
              </div>
              <div className="mt-1 text-primary-1200 text-[14px] font-medium leading-[150%]">
                USD per month, billed yearly
              </div>
            </div>
            <Button className="cursor-pointer w-full h-[56px] rounded-[12px] gap-2 px-3 py-[3px] bg-white hover:bg-white border border-primary-500 text-primary-100 font-semibold text-[16px]">
              Unlock {selectedPlan} Features
              <ArrowRight />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UpgradePlan