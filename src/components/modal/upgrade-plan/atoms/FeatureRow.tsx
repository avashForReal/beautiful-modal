import { Check, Info } from 'lucide-react'

interface FeatureRowProps {
    featureText: string;
}

const FeatureRow = ({ featureText }: FeatureRowProps) => {
    return (
        <div className="flex items-start gap-2 mb-[8px] text-white">
            <div className="flex-shrink-0 mr-sm">
                <Check width={20} height={20} />
            </div>
            <div className="flex-1">
                <div className="flex items-start">
                    <div>
                        <div className="flex items-center gap-1.5">
                            <span className="text-[14px] font-medium cursor-pointer text-white mr-sm">{featureText}</span>
                            <Info className='text-primary-1000' width={18} height={18} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeatureRow