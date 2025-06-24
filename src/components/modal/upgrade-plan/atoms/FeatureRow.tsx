import { cn } from '@/lib/utils';
import { Check, Info } from 'lucide-react'

interface FeatureRowProps {
    featureText: string;
    onHover: () => void;
    hasAnyFeatureHovered: boolean;
    isCurrentHovered: boolean;
}

const FeatureRow = ({ featureText, onHover, hasAnyFeatureHovered, isCurrentHovered }: FeatureRowProps) => {

    const rowClassName = cn(
        "flex items-start gap-2 mb-[8px]",
        {
            "text-white": isCurrentHovered || !hasAnyFeatureHovered,
            "text-primary-1000": !isCurrentHovered && hasAnyFeatureHovered,
        }
    );

    const infoIconClassName = cn(
        {
            "text-white": isCurrentHovered,
            "text-primary-1000": !isCurrentHovered,
        }
    );

    return (
        <div onMouseEnter={onHover} className={rowClassName}>
            <div className="flex-shrink-0 mr-sm">
                <Check width={20} height={20} />
            </div>
            <div className="flex-1">
                <div className="flex items-start">
                    <div>
                        <div className="flex items-center gap-1.5">
                            <span className="text-[14px] font-medium cursor-pointer mr-sm">{featureText}</span>
                            <Info className={infoIconClassName} width={18} height={18} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeatureRow