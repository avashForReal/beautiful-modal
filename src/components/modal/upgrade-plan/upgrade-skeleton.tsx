import { Skeleton } from "@/components/ui/skeleton"

const UpgradeSkeleton = () => {
    return (
        <div className="mt-8 flex flex-col space-y-3">
            <div className="flex flex-row items-center justify-between gap-4">
                <Skeleton className="w-[104px] h-[59px] rounded-md" />
                <Skeleton className="w-[104px] h-[59px] rounded-md" />
                <Skeleton className="w-[104px] h-[59px] rounded-md" />
            </div>
            <div className="space-y-2 mt-8">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[250px]" />
            </div>

            <div className="gap-4 mt-8 space-y-2">
                <Skeleton className="w-[172px] h-[22px] rounded-md" />
                <Skeleton className="h-4 w-[250px]" />
            </div>


            <div className="flex flex-row items-center justify-between gap-4 mt-2">
                <Skeleton className="w-full h-[59px] rounded-md" />
            </div>

        </div>
    )
}

export default UpgradeSkeleton