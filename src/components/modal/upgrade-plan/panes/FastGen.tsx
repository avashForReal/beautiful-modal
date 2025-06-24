import { Zap } from "lucide-react"

const FastGen = () => {
    return (
        <div
            className="w-full h-full overflow-hidden rounded-l-[28px] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
            style={{ backgroundImage: 'url(/blue.png)' }}
        >
            <div className="flex flex-col gap-4">
                <div className="flex flex-row items-center justify-center w-[280px] h-[26px] mx-auto">
                    <div className="text-white text-2xl font-medium flex flex-row items-center gap-2"><Zap width={24} height={24} /> Fastlane queue</div>
                </div>
                <div className="text-center !max-w-[298px] !h-[57px] text-white opacity-50 font-normal text-base leading-[110%]">
                    Get prioritized in the queue and enjoy lower waiting times.
                </div>
            </div>
        </div>
    )
}

export default FastGen