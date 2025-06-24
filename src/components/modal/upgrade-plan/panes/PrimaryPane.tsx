import Image from 'next/image'

const PrimaryPane = () => {
    return (
        <div
            className="w-full h-full overflow-hidden rounded-l-[28px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/piano.png)' }}
        >
            <div className="flex flex-row items-center justify-center gap-[6px] mt-[62px]">
                <Image src="/logo.svg" alt="logo" width={36} height={35} />
                <h1 className="text-white text-lg font-medium">MusicGPT</h1>
            </div>
            <div className="flex flex-row items-center justify-center mt-[20px]">
                <div className="text-white text-2xl font-medium">Limitless creation</div>
            </div>
            <div className="flex flex-row items-center justify-center gap-[6px] mt-[398px]">
                <Image src="/corn.svg" alt="corn-right" width={14} height={33} className="rotate-180" />
                <div className="text-white text-sm font-medium">Join 1M+ users</div>
                <Image src="/corn.svg" alt="corn-left" width={14} height={33} />
            </div>
        </div>
    )
}

export default PrimaryPane