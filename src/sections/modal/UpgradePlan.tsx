import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"

const UpgradePlan = ({ showUpgradeModal, setShowUpgradeModal }: { showUpgradeModal: boolean, setShowUpgradeModal: (show: boolean) => void }) => {
    return (
    <Dialog open={showUpgradeModal} onOpenChange={setShowUpgradeModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upgrade Plan</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Upgrade to a paid plan to get access to more features.
        </DialogDescription>
        <DialogFooter>
          <Button>Upgrade</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UpgradePlan