import { iconMap } from "@/iconmap";
import { FeatureDescription } from "@/types/plans";

interface FeaturesPaneProps {
    title: string;
    titleIcon?: string;
    features: FeatureDescription[]
}

interface FeatureRowProps {
    feature: FeatureDescription
}

const FeaturesPane = ({
    title,
    titleIcon,
    features,
}: FeaturesPaneProps) => {
    const Icon = iconMap[titleIcon ?? ''];

    return (
        <div
            className="w-full h-full overflow-hidden rounded-l-[28px] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
            style={{ backgroundImage: 'url(/blue.png)' }}
        >
            <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center justify-center w-[280px] h-[26px] mx-auto">
                    <div className="text-white text-2xl font-medium flex flex-row items-center gap-2">
                        {titleIcon && <Icon width={20} height={20} className="text-white" />}
                        {title}
                    </div>
                </div>
                <div className="flex flex-col gap-6 mt-6">
                    {features.map((feature) => (
                        <FeatureRow
                            key={feature.title}
                            feature={feature}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}



const FeatureRow = ({
    feature,
}: FeatureRowProps) => {
    const Icon = iconMap[feature.icon];

    return (
        <div className="flex flex-row items-center justify-start gap-2">
            <div className="w-[40px] h-[40px] bg-white/10 rounded-full flex items-center justify-center">
                <Icon width={15} height={15} className="text-white" />
            </div>
            <div>
                <div className="text-white font-normal text-sm leading-5 tracking-[0.02em]">{feature.title}</div>
                <div className="text-white opacity-50 text-xs leading-5 tracking-[0.02em]">
                    {feature.description}
                </div>
            </div>
        </div>
    )
}

export default FeaturesPane