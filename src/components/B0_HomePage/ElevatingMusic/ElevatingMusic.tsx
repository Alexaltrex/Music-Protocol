"use client"

import style from "./ElevatingMusic.module.scss"
import {WaveText} from "../../x_common/WaveText/WaveText";
import {TextUp} from "../../x_common/TextUp/TextUp";
import {ButtonCustom, ButtonVariantEnum} from "../../x_common/ButtonCustom/ButtonCustom";
import {FC} from "react";

interface ICard {
    step: string
    label: string
    buttonLabel: string
    href: string
}

const cards = [
    {
        step: "01",
        label: "Blog docs",
        buttonLabel: "Go to the blog",
        href: "#",
    },
    {
        step: "02",
        label: "Developer docs",
        buttonLabel: "Go to gitbook",
        href: "#",
    },
    {
        step: "03",
        label: "Whitepaper",
        buttonLabel: "Go to gitbook",
        href: "#",
    },
]

export const ElevatingMusic = () => {
    return (
        <div className={style.elevatingMusic}>
            <div className={style.inner}>

                <WaveText label="Elevating Music"
                          className={style.titleMobile}
                          textClassName={style.title}
                          size={32}
                />
                <WaveText label="Rights"
                          className={style.titleMobile}
                          textClassName={style.title}
                          size={32}
                />

                <WaveText label="Elevating Music Rights"
                          className={style.titleDesktop}
                          textClassName={style.title}
                          size={48}
                />

                <p className={style.description}>
                    Our sovereign layer one transforms Music IP from a static asset into a dynamic asset. Blockchain and
                    our digital licensing framework will advance the music industry forward to mirror the evolving
                    digital landscape.
                </p>

                <ButtonCustom label="Whitepaper"
                              variant={ButtonVariantEnum.outlined}
                              href="/"
                              className={style.btn}
                />


            </div>


        </div>
    )
}

//========= CARD =========//
const Card: FC<ICard> = ({step, label, buttonLabel, href}) => {
    return (
        <div className={style.card}
        >
            <div className={style.top}>
                <p className={style.step}>{step}</p>
                <p className={style.label}>{label}</p>
            </div>
            <ButtonCustom label={buttonLabel}
                          href={href}
            />
        </div>
    )
}