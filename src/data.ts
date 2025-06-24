import { Plan } from "./types/plans";
import { AvailablePlans } from "./types/plans";

export const plans: Record<AvailablePlans, Plan> = {
  Plus: {
    name: "Plus",
    price: 9.99,
    features: [
      {
        key: 'credits',
        title: "Generate 1200 songs /year",
        paneTitle: "Get 5K credits /month",
        paneTitleIcon: null,
        description: "That equals to 100 full songs or instrumentals, and 40 sound effects generations.",
      },
      {
        key: 'downloads',
        title: "Unlimited downloads",
        paneTitle: "∞ Unlimited downloads",
        paneTitleIcon: null,
        description: "Download your own creations, and anything from our library in best quality at no cost.",
      },
      {
        key: 'features',
        title: "Standard tool",
        paneTitle: "Core features",
        paneTitleIcon: null,
        description: null,
        descriptionList: [
            {
                icon: 'music',
                title: 'Songs',
                description: 'Create full songs and add your own lyrics.',
            },
            {
                icon: 'guitar',
                title: 'Instrumentals',
                description: 'Generate instrumental songs without vocals',
            },
            {
                icon: 'audio-waveform',
                title: 'Sound effects',
                description: 'Create sound effects and samples.',
            }
        ]
      },
      {
        key: 'fastgen',
        title: "Fastlane queue",
        paneTitle: "Fastlane queue",
        paneTitleIcon: "zap",
        description: "Get prioritized in the queue and enjoy lower waiting times.",
      },
      {
        key: 'commercial',
        title: "Commercial use",
        paneTitle: "Commercial use",
        paneTitleIcon: null,
        description: "Use your downloads anywhere.",
      },
    ],
  },
  Pro: {
    name: "Pro",
    price: 16.99,
    features: [
      {
        key: 'credits',
        title: "Generate 6000 songs /year",
        paneTitle: "Get 25K credits /month",
        paneTitleIcon: null,
        description: "That equals to 500 full songs or instrumentals, and 200 sound effects generations.",
      },
      {
        key: 'downloads',
        title: "Unlimited downloads",
        paneTitle: "∞ Unlimited downloads",
        paneTitleIcon: null,
        description: "Download your own creations, and anything from our library in best quality at no cost.",
      },
      {
        key: 'features',
        title: "Unlock all features",
        paneTitle: "Unlock all features",
        paneTitleIcon: "lock-open",
        description: null,
        descriptionList: [
            {
                icon: 'music',
                title: 'Song generation',
                description: 'Create songs, instrumentals, sound effects',
            },
            {
                icon: 'type',
                title: 'Text to Speech',
                description: 'Speak text in any voice',
            },
            {
                icon: 'blend',
                title: 'Remix',
                description: 'Remix a song with custom style or lyrics',
            },
            {
                icon: 'replace',
                title: 'Replace',
                description: 'Replace a part of a song with something new',
            },
            {
                icon: 'log-out',
                title: 'Extend',
                description: 'Continue a track beyond the original',
            },
            {
                icon: 'rows-2',
                title: 'Stem download',
                description: 'Dowload instrumental and vocals individually',
            }
        ]
      },
      {
        key: 'fastgen',
        title: "Fast generation",
        paneTitle: "Fast generation",
        paneTitleIcon: "zap",
        description: "Skip the queue and get exclusive access our premium server infrastructure for faster generations.",
      },
      {
        key: 'commercial',
        title: "Commercial use",
        paneTitle: "Commercial use",
        paneTitleIcon: null,
        description: "Use your downloads anywhere.",
      },
    ],
  },
  Ultra: {
    name: "Ultra",
    price: 32.99,
    features: [
      {
        key: 'credits',
        title: "Unlimited generations",
        paneTitle: "∞ Unlimited credits",
        paneTitleIcon: null,
        description: "That equals to unlimited full songs or instrumentals, and unlimited sound effects generations.",
      },
      {
        key: 'downloads',
        title: "Unlimited downloads",
        paneTitle: "∞ Unlimited downloads",
        paneTitleIcon: null,
        description: "Download your own creations, and anything from our library in best quality at no cost.",
      },
      {
        key: 'features',
        title: "Unlock all features",
        paneTitle: "Unlock all features",
        paneTitleIcon: "lock-open",
        description: null,
        descriptionList: [
            {
                icon: 'music',
                title: 'Song generation',
                description: 'Create songs, instrumentals, sound effects',
            },
            {
                icon: 'type',
                title: 'Text to Speech',
                description: 'Speak text in any voice',
            },
            {
                icon: 'blend',
                title: 'Remix',
                description: 'Remix a song with custom style or lyrics',
            },
            {
                icon: 'replace',
                title: 'Replace',
                description: 'Replace a part of a song with something new',
            },
            {
                icon: 'log-out',
                title: 'Extend',
                description: 'Continue a track beyond the original',
            },
            {
                icon: 'rows-2',
                title: 'Stem download',
                description: 'Dowload instrumental and vocals individually',
            }
        ]
      },
      {
        key: 'fastgen',
        title: "Fast generation",
        paneTitle: "Fast generation",
        paneTitleIcon: "zap",
        description: "Skip the queue and get exclusive access our premium server infrastructure for faster generations.",
      },
      {
        key: 'commercial',
        title: "Commercial use",
        paneTitle: "Commercial use",
        paneTitleIcon: null,
        description: "Use your downloads anywhere.",
      },
    ],
  },
};
