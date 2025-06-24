import { Music } from "lucide-react"

const FeaturesPane = () => {
    return (
        <div
            className="w-full h-full overflow-hidden rounded-l-[28px] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
            style={{ backgroundImage: 'url(/blue.png)' }}
        >
            <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center justify-center w-[280px] h-[26px] mx-auto">
                    <div className="text-white text-2xl font-medium">Core features</div>
                </div>
                <div className="flex flex-col gap-6 mt-6">
                    <FeatureRow />
                    <FeatureRow />
                    <FeatureRow />
                </div>
            </div>
        </div>
    )
}

const FeatureRow = () => {
    return (
        <div className="flex flex-row items-center justify-start gap-2">
            <div className="w-[40px] h-[40px] bg-white/10 rounded-full flex items-center justify-center">
                <Music width={15} height={15} className="text-white" />
            </div>
            <div>
                <div className="text-white font-normal text-sm leading-5 tracking-[0.02em]">Songs</div>
                <div className="text-white opacity-50 text-xs leading-5 tracking-[0.02em]">
                    Create full songs and add your own lyrics
                </div>
            </div>
        </div>
    )
}

export default FeaturesPane