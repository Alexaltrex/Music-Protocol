import {IScreenWithEditor} from "../../components/x_common/ScreenWithEditor/ScreenWithEditor";

export const screenWithEditor: IScreenWithEditor = {
    title: {
        mobile: [
            "Join the Ecosystem",
        ],
        desktop: [
            "Join the Ecosystem",
        ],
    },
    cards: [
        {
            cardTitle: "Developers",
            step: "01",
            button: {
                label: "Apply to join",
                href: "/developers",
            },
        },
        {
            cardTitle: "Startups",
            step: "02",
            button: {
                label: "Apply to join",
                href: "/startups",
            },
        },
        {
            cardTitle: "Partners",
            step: "03",
            button: {
                label: "Apply to join",
                href: "/partners",
            },
        },
    ],
}


