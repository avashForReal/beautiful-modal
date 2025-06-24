"use client";

import { Button } from "@/components/ui/button";
import UpgradePlan from "@/components/modal/upgrade-plan";
import { useState } from "react";

export default function Home() {
  const [showUpgradeModal, setShowUpgradeModal] = useState(true);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Button onClick={() => setShowUpgradeModal(true)}>Upgrade plan</Button>
        </div>
      </main>
      <UpgradePlan showUpgradeModal={showUpgradeModal} setShowUpgradeModal={setShowUpgradeModal} />
    </div>
  );
}
