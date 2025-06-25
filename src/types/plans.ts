export type AvailablePlans = "Plus" | "Pro" | "Ultra";
export type FeatureKey =
  | "credits"
  | "downloads"
  | "features"
  | "fastgen"
  | "commercial";

export type Plan = {
  id: string;
  name: AvailablePlans;
  price: number;
  order: number;
  isPopular: boolean;
  features: Feature[];
};

export type Feature = {
  id: string;
  key: FeatureKey;
  title: string;
  paneTitle: string;
  paneTitleIcon: string | null;
  description: string | null;
  order: number;
  descriptionList?: FeatureDescription[];
};

export type FeatureDescription = {
  id: string;
  icon: string;
  title: string;
  description: string;
  order: number;
};