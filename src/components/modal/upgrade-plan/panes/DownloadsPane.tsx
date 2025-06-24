interface DownloadsPaneProps {
    title: string;
    description: string;
}

const DownloadsPane = ({
    title,
    description,
}: DownloadsPaneProps) => {
    return (
        <div
            className="w-full h-full overflow-hidden rounded-l-[28px] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
            style={{ backgroundImage: 'url(/blue.png)' }}
        >
            <div className="flex flex-col gap-4">
                <div className="flex flex-row items-center justify-center w-[280px] h-[26px] mx-auto">
                    <div className="text-white text-2xl font-medium">{title}</div>
                </div>
                <div className="text-center !max-w-[298px] !h-[57px] text-white opacity-50 font-normal text-base leading-[110%]">
                    {description}
                </div>
            </div>
        </div>
    )
}

export default DownloadsPane