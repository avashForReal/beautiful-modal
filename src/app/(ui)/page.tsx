"use client";

import { Button } from "@/components/ui/button";
import UpgradePlan from "@/components/modal/upgrade-plan";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  return (
    <>
      <div className="w-[100vw] h-[100vh] bg-primary-100">
        <div className="flex flex-row items-center justify-between px-[100px] py-[20px]">
          <div className="flex flex-row items-center justify-center gap-3">
            <Image src="/logo.svg" alt="logo" width={28} height={28} />
            <h1 className="text-white text-lg font-medium">MusicGPT</h1>
            <h1 className="text-white text-sm font-medium border-1 rounded-md px-3">Beta</h1>
          </div>
          <div>
            <Button
              onClick={() => setShowUpgradeModal(true)}
              className="cursor-pointer w-full rounded-md gap-2 px-3 py-[3px] bg-white hover:bg-white border border-primary-500 text-primary-100 font-semibold text-[14px]"
            >
              Upgrade
            </Button>
          </div>
        </div>
      </div>
      <UpgradePlan showUpgradeModal={showUpgradeModal} setShowUpgradeModal={setShowUpgradeModal} />
    </>
  );
}
