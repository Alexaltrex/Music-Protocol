export enum SubLinksEnum {
    Technology = "Technology",
    Industry = "Industry",
    Resources = "Resources",
}

export interface ISubLinks {
    label: string
    href: string
    description: string
}

export const subLinksHeader = {
    "Technology": [
        {
            label: "Advancing Music Rights and Ownership",
            href: "/technology0",
            description: "Progressing music rights with secure, streamlined IP management protocol"
        },
        {
            label: "IP Core Asset Library",
            href: "/technology1",
            description: "Music Protocol's core is an IP data repository that supports licensing structures."
        },
        {
            label: "IP Licencing Core Engine",
            href: "/technology2",
            description: "Ensuring efficient music IP permissions management."
        },
        {
            label: "IP Settlement Gateway",
            href: "/technology3",
            description: "Bridges music IP with industry and simplifies financial and licensing transactions."
        },
        {
            label: "IP Inter-Chain Distribution Gateway",
            href: "/technology4",
            description: "Extends Music Protocol reach, integrates blockchains, and promotes opportunities."
        },
    ],
    "Industry": [
        {
            label: "Real-world assets",
            href: "/industry0",
            description: "Music IP attracts investors with royalties, low market correlation, and accessibility."
        },
        {
            label: "AI",
            href: "/industry1",
            description: "AI innovation meets IP protection."
        },
        {
            label: "Traditional music Distribution Gateway",
            href: "/industry2",
            description: "Modernising IP management, boosting distribution and revenue efficiency."
        },
        {
            label: "Gaming and Metaverse",
            href: "/industry3",
            description: "Immersive experiences redefine music monetisation."
        },
    ],
    "Resources": [
        {
            label: "Blogs",
            href: "/resources0",
            description: ""
        },
        {
            label: "Docs",
            href: "/resources1",
            description: ""
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
        title: "Use Cases",
        icon: true,
        subRoutes: subLinksHeader["Industry"]
    },
    {
        title: "Resources",
        icon: true,
        subRoutes: subLinksHeader["Resources"]
    },
]