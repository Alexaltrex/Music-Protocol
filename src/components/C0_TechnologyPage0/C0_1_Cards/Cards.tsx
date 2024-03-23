'use client'

import style from "./Cards.module.scss"
import {ButtonCustom, ButtonVariantEnum} from "../../x_common/ButtonCustom/ButtonCustom";
import {svgIcons} from "./svgIcons";

const cards = [
    {
        title: "IP Core Asset Library",
        text: "The core of Music Protocol is a data repository for music IP. The architecture was built to accommodate all intellectual property and licensing structures within the industry. We actively encourage all ecosystem involvement. Find out more about contributing towards new IP standards and licensing frameworks.",
        href: "#",
    },
    {
        title: "IP Licensing Core Engine",
        text: "The digital landscape is constantly evolving, and so is how we create and consume music. Our IP Licensing Protocol facilitates a seamless data flow between Music Protocol and ecosystem applications, ensuring the music IP permissions are managed efficiently across our network.",
        href: "#",
    },
    {
        title: "IP Settlement Gateway",
        text: "Music Protocol is a pivotal link to the current technological and regulatory landscape. By connecting through key content distribution and management networks, we bridge the gap between music IP and the music industry's extensive counterparties, streamlining financial and licensing transactions.",
        href: "#",
    },
    {
        title: "IP Inter-Chain Distribution Gateway",
        text: "Our infrastructure extends the reach of Music Protocol, enabling easy integrations with other blockchain ecosystems. We supply verifiable music IP rights across the Web3 landscape. This enhances application versatility and fosters a wide array of creative and commercial opportunities.",
        href: "#",
    },
]

export const Cards = () => {
    return (
        <div className={style.cards}>
            <div className={style.inner}>

                <div className={style.cards}>
                    {
                        cards.map(({title, text, href}, key) => (
                            <div key={key}
                                 className={style.card}
                            >
                                <div className={style.topWrapper}>

                                    <div className={style.topWrapper}>
                                        <div className={style.blackCard}>
                                            <p className={style.step}>{`0${key + 1}`}</p>
                                            <p className={style.title}>{title}</p>
                                            {/*{svgIcons[key]}*/}
                                        </div>
                                    </div>

                                    <p className={style.text}>
                                        {text}
                                    </p>

                                </div>

                                <div className={style.btnWrapper}>
                                    <ButtonCustom label="Read More"
                                                  href={href}
                                                  className={style.btn}
                                                  variant={ButtonVariantEnum.black}
                                    />
                                </div>

                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}