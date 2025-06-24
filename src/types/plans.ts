export type AvailablePlans = "Plus" | "Pro" | "Ultra";
export type FeatureKey =
  | "credits"
  | "downloads"
  | "features"
  | "fastgen"
  | "commercial";

export type Plan = {
  name: AvailablePlans;
  price: number;
  features: Feature[];
};

export type Feature = {
  key: FeatureKey;
  title: string;
  paneTitle: string;
  paneTitleIcon: string | null;
  description: string | null;
  descriptionList?: FeatureDescription[];
};

export type FeatureDescription = {
  icon: string;
  title: string;
  description: string;
}