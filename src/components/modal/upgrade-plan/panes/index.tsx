import { Feature, FeatureKey } from "@/types/plans";
import CreditsPane from "./CreditsPane";
import DownloadsPane from "./DownloadsPane";
import FeaturesPane from "./FeaturesPane";
import FastGen from "./FastGen";
import CommercialUse from "./CommercialUse";
import PrimaryPane from "./PrimaryPane";

export const renderPane = (
    pane: FeatureKey | null,
    hoveredFeatureDetails: Feature | null,
) => {
    switch (pane) {
        case "credits":
            return (
                <CreditsPane
                    title={hoveredFeatureDetails?.paneTitle ?? ''}
                    description={hoveredFeatureDetails?.description ?? ''}
                />
            );
        case "downloads":
            return (
                <DownloadsPane
                    title={hoveredFeatureDetails?.paneTitle ?? ''}
                    description={hoveredFeatureDetails?.description ?? ''}
                />
            );
        case "features":
            return (
                <FeaturesPane
                    title={hoveredFeatureDetails?.paneTitle ?? ''}
                    titleIcon={hoveredFeatureDetails?.paneTitleIcon ?? ''}
                    features={hoveredFeatureDetails?.descriptionList ?? []}
                />
            );
        case "fastgen":
            return (
                <FastGen
                    title={hoveredFeatureDetails?.paneTitle ?? ''}
                    titleIcon={hoveredFeatureDetails?.paneTitleIcon ?? ''}
                    description={hoveredFeatureDetails?.description ?? ''}
                />
            );
        case "commercial":
            return (
                <CommercialUse
                    title={hoveredFeatureDetails?.paneTitle ?? ''}
                    description={hoveredFeatureDetails?.description ?? ''}
                />
            );
        default:
            return <PrimaryPane />;
    }
}