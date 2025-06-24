import Image from "next/image"

const rowOne = () => {
    return (
        <>
            <BrandPill
                text="TikTok"
                image="/commercial/tiktok.png"
            />
            <BrandPill
                text="Twitch"
                image="/commercial/twitch.svg"
            />
            <BrandPill
                text="Instagram"
                image="/commercial/ig.png"
            />
        </>
    )
}

const rowTwo = () => {
    return (
        <>
            <BrandPill
                text="Weddings"
                image="/commercial/wedding.svg"
            />
            <BrandPill
                text="Non-Profits"
                image="/commercial/nonprofits.png"
            />
            <BrandPill
                text="Presentations"
                image="/commercial/presentation.png"
            />
        </>
    )
}

const rowThree = () => {
    return (
        <>
            <BrandPill
                text="Movies"
                image="/commercial/movies.png"
            />
            <BrandPill
                text="Online Ads"
                image="/commercial/ads.png"
            />
            <BrandPill
                text="Blogs"
                image="/commercial/blogs.png"
            />
        </>
    )
}

const MarqueeRow = ({ children, direction = "left" }: { 
    children: React.ReactNode, 
    direction?: "left" | "right" 
}) => {
    return (
        <div className="overflow-hidden whitespace-nowrap">
            <div className={`flex gap-2 ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}>
                {/* First set */}
                {children}
                {children}
                {children}
                {children}
                {/* Second set for seamless loop */}
                {children}
                {children}
                {children}
                {children}
            </div>
        </div>
    )
}   

interface CommercialUseProps {
    title: string;
    description: string;
}

const CommercialUse = ({
    title,
    description,
}: CommercialUseProps) => {
    return (
        <div
            className="w-full h-full overflow-hidden rounded-l-[28px] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
            style={{ backgroundImage: 'url(/blue.png)' }}
        >
            <div className="flex flex-col gap-4 mb-8">
                <div className="flex flex-row items-center justify-center w-[280px] h-[26px] mx-auto">
                    <div className="text-white text-2xl font-medium">{title}</div>
                </div>
                <div className="text-center !max-w-[298px] !h-[57px] text-white opacity-50 font-normal text-base leading-[110%]">
                    {description}
                </div>
            </div>

            <div className="flex flex-col gap-2 w-full">
                <MarqueeRow direction="left">
                    {rowOne()}
                </MarqueeRow>
                <MarqueeRow direction="right">
                    {rowTwo()}
                </MarqueeRow>
                <MarqueeRow direction="left">
                    {rowThree()}
                </MarqueeRow>
            </div>
        </div>
    )
}

const BrandPill = ({ text, image }: {
    text: string
    image: string
}) => {
    return (
        <div className="px-6 h-[45px] bg-white/4 rounded-[12px] flex items-center justify-center gap-2 flex-shrink-0">
            {
                image && (
                    <Image
                        className="w-[20px] h-[20px]"
                        src={image}
                        alt={text}
                        width={20}
                        height={20}
                    />
                )
            }
            <div className="text-primary-1200 font-normal text-sm whitespace-nowrap">{text}</div>
        </div>
    )
}

export default CommercialUse