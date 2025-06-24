import { Button } from '@/components/ui/button'
import { AvailablePlans } from '@/types/plans'
import { useMemo } from 'react'
import { cn } from '@/lib/utils'

interface UpgradePlanBtnProps {
  text: AvailablePlans
  isPopular?: boolean
  selectedPlan: AvailablePlans
  handlePlanSelection: (plan: AvailablePlans) => void
}

const UpgradePlanBtn = ({ text, isPopular, selectedPlan, handlePlanSelection }: UpgradePlanBtnProps) => {
  const isSelected = useMemo(() => selectedPlan === text, [selectedPlan, text]);

  const buttonClassName = cn(
    "cursor-pointer w-[104px] h-[59px] rounded-[12px] gap-[39px] border px-[15px] py-[12px]",
    "bg-primary-100 font-semibold text-[16px] text-primary-5000 hover:bg-primary-300",
    {
      "relative": isPopular,
      "border-[2px] border-white !bg-primary-300": isSelected,
      "border-primary-500": !isSelected,
    }
  );

  return (
    <Button
      onClick={() => handlePlanSelection(text)}
      className={buttonClassName}
    >
      {isPopular && (
        <span className="absolute top-0 left-[34px] -translate-y-1/2 -translate-x-1/4 flex items-center justify-center w-[71px] h-[25px] text-xs font-semibold bg-white text-primary-100 rounded-full px-sm py-[2px]">
          Popular
        </span>
      )}
      {text}
    </Button>
  )
}

export default UpgradePlanBtn

