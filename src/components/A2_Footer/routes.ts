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
                label: "Advancing Music Rights and Ownership",
                href: "/technology0",
            },
            {
                label: "IP Core Asset Library",
                href: "/technology1",
            },
            {
                label: "IP Licencing Core Engine",
                href: "/technology2",
            },
            {
                label: "IP Settlement Gateway",
                href: "/technology3",
            },
            {
                label: "IP Inter-Chain Distribution Gateway",
                href: "/technology4",
            },
        ]
    },
    {
        title: "Use Cases",
        icon: true,
        subRoutes: [
            {
                label: "Real-world assets",
                href: "/use0",
            },
            {
                label: "AI",
                href: "/use1",
            },
            {
                label: "Traditional music Distribution Gateway",
                href: "/use2",
            },
            {
                label: "Gaming and Metaverse",
                href: "/use3",
            },
        ]
    },
]