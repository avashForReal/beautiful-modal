import Image from "next/image"

interface CreditsPaneProps {
    title: string;
    description: string;
}

const CreditsPane = ({
    title,
    description,
}: CreditsPaneProps) => {
    return (
        <div
            className="w-full h-full overflow-hidden rounded-l-[28px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/blue.png)' }}
        >
            <div className="mt-[157px] flex flex-col gap-2">
                <div className="flex flex-row items-center justify-center w-[280px] h-[26px] mx-auto">
                    <div className="text-white text-2xl font-medium">{title}</div>
                </div>
                <div className="flex flex-row items-center justify-center w-[321px] h-[57px] text-white mx-auto opacity-50 font-normal text-base leading-[100%] text-center">
                    {description}
                </div>
            </div>

            <div className="mt-6 relative">
                <Image
                    className="object-cover blur-sm"
                    src="/create-anything/colors.svg" alt="colors"
                    width={516}
                    height={136}
                />
                <Image
                    className="object-cover absolute top-8 left-6"
                    src="/create-anything/rectangle.svg" alt="colors"
                    width={516}
                    height={136}
                />
            </div>
        </div>
    )
}

export default CreditsPane