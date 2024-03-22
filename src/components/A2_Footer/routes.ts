export interface IGroup {
    title: string
    icon: boolean
    subRoutes: {
        label: string
        href: string
    }[]
}


export const routes = [
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
                href: "/",
            },
        ]
    },
    {
        title: "Technology",
        icon: true,
        subRoutes: [
            {
                label: "Music Protocol Technology",
                href: "/",
            },
            {
                label: "The IP Building Blocks",
                href: "/",
            },
            {
                label: "The IP Licensing Stream",
                href: "/",
            },
            {
                label: "The IP Market Bridge",
                href: "/",
            },
            {
                label: "The IP Multi-Chain Protocol",
                href: "/",
            },
        ]
    },
    {
        title: "Use Cases",
        icon: true,
        subRoutes: [
            {
                label: "Real-world assets",
                href: "/",
            },
            {
                label: "AI",
                href: "/",
            },
            {
                label: "MusicTech Innovation",
                href: "/",
            },
            {
                label: "Gaming and Metaverse",
                href: "/",
            },
        ]
    },
]