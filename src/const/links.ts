export enum SubLinksEnum {
    Technology = "Technology",
    Industry = "Industry",
    Resources = "Resources",
}

export interface ISubLinks {
    label: string
    href: string
    description: string
    src: string
}

export const subLinksHeader: {[key: string]: ISubLinks[]} = {
    "Technology": [
        {
            label: "Advancing Music Rights and Ownership",
            href: "/technology0_advancing_music_rights_and_ownership",
            description: "Progressing music rights with our secure, streamlined IP management protocol.",
            src: "/jpeg/header/technology0.jpg",
        },
        {
            label: "IP Core Asset Library",
            href: "/technology1_ip_core_asset_library",
            description: "Music Protocol's core is an IP data repository that supports licensing structures.",
            src: "/jpeg/header/technology1.jpg",
        },
        {
            label: "IP Licencing Core Engine",
            href: "/technology2_ip_licencing_core_engine",
            description: "Ensuring efficient music IP permission management.",
            src: "/jpeg/header/technology2.jpg",
        },
        {
            label: "IP Settlement Gateway",
            href: "/technology3_ip_settlement_gateway",
            description: "Bridging music IP with multiple industries and simplifying transactions.",
            src: "/jpeg/header/technology3.jpg",
        },
        {
            label: "IP Inter-Chain Distribution Gateway",
            href: "/technology4_ip_inter-chain_distribution_gateway",
            description: "Extending the Music Protocol’s reach by integrating with multiple blockchains.",
            src: "/jpeg/header/technology4.jpg",
        },
    ],
    "Industry": [
        {
            label: "Real-World Assets",
            href: "/industry_0_Real_World_Assets",
            description: "Music IP attracts investors with royalties, low market correlation, and accessibility.",
            src: "/jpeg/header/industry0.jpg",
        },
        {
            label: "AI",
            href: "/industry_1_AI",
            description: "AI innovation meets IP protection.",
            src: "/jpeg/header/industry1.jpg",
        },
        {
            label: "Traditional Music Distribution Gateway",
            href: "/industry_2_Traditional_Music_Distribution_Gateway",
            description: "Modernising IP management, boosting distribution and revenue efficiency.",
            src: "/jpeg/header/industry2.jpg",
        },
        {
            label: "Gaming and the Metaverse",
            href: "/industry_3_Gaming_and_the_Metaverse",
            description: "Immersive experiences redefine music monetisation.",
            src: "/jpeg/header/industry3.jpg",
        },
    ],
    "Resources": [
        {
            label: "Blog",
            href: "/resources0",
            description: "",
            src: "/jpeg/header/resources0.jpg",
        },
        {
            label: "Docs",
            href: "/resources1",
            description: "",
            src: "/jpeg/header/resources1.jpg",
        },
    ]
}

export const linksFooter = [
    {
        title: "Home",
        icon: false,
        subRoutes: [
            {
                label: "Dynamic Music IP for Web3",
                href: "/",
            },
        ]
    },
    {
        title: "Token",
        icon: false,
        subRoutes: [
            {
                label: "$RECORD Token",
                href: "/token",
            },
        ]
    },
    {
        title: "Technology",
        icon: true,
        subRoutes: subLinksHeader["Technology"]
    },
    {
        title: "Industry Use Cases",
        icon: true,
        subRoutes: subLinksHeader["Industry"]
    },
    {
        title: "Resources",
        icon: true,
        subRoutes: subLinksHeader["Resources"]
    },
]