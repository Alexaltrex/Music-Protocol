"use client";
import {FC, Fragment, useRef} from "react";
import style from "./ScreenWithCircles.module.scss"
import {WaveText} from "../WaveText/WaveText";
import {TextUp} from "../TextUp/TextUp";
import {clsx} from "clsx";
import {ButtonCustom} from "../ButtonCustom/ButtonCustom";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import TweenTarget = gsap.TweenTarget;

interface ICard {
    cardTitle: string
    step: string
    button: {
        label: string
        onClick?: () => void
        href?: string
    }
}

export interface IScreenWithCircles {
    title: {
        mobile: string[],
        desktop: string[],
    }
    texts: {
        mobile: string[]
        desktop: string[]
    }[]
    cards: ICard[],
    circleLabels: {
        mobile: string[],
        desktop: string[]
    }[]
}

const ballColors = [
    "#F0B6BF",
    "#C397E5",
    "#EAB563",
]

const duration = 3;

export const ScreenWithCircles: FC<IScreenWithCircles> = ({
                                                              title,
                                                              texts,
                                                              cards,
                                                              circleLabels
                                                          }) => {
    const appRef = useRef<HTMLDivElement>(null!);

    useGSAP((self) => {

        // @ts-ignore
        const ballWrappers = self.selector(".ballWrapper") as TweenTarget[];

        ballWrappers.forEach((ballWrapper, index) => {
            gsap.to(ballWrapper, {
                rotate: "-360deg",
                repeat: -1,
                ease: "linear",
                duration,
                delay: index * duration / 3
            })
        })




    }, {scope: appRef})

    return (
        <div className={style.screenWithCircles}
             ref={appRef}
        >
            <div className={style.inner}>

                {
                    title.mobile.map((text, key) => (
                        <WaveText key={key}
                                  label={text}
                                  className={style.titleMobile}
                                  textClassName={style.title}
                                  size={40}
                        />
                    ))
                }

                {
                    title.desktop.map((text, key) => (
                        <WaveText key={key}
                                  label={text}
                                  className={style.titleDesktop}
                                  textClassName={style.title}
                                  size={64}
                        />
                    ))
                }

                <div className={style.textBlocks}>
                    {
                        texts.map((block, key) => (
                            <Fragment key={key}>
                                <div className={clsx(style.block, style.block_mobile)}>
                                    {
                                        block.mobile.map((text, key) => (
                                            <TextUp key={key}>
                                                <p className={style.description}>{text}</p>
                                            </TextUp>
                                        ))
                                    }
                                </div>
                                <div className={clsx(style.block, style.block_desktop)}>
                                    {
                                        block.desktop.map((text, key) => (
                                            <TextUp key={key}>
                                                <p className={style.description}>{text}</p>
                                            </TextUp>
                                        ))
                                    }
                                </div>
                            </Fragment>

                        ))
                    }
                </div>

                <div className={style.bottom}>

                    <div className={style.circlesWrapper}>

                        {
                            circleLabels.map(({mobile, desktop}, key) => (
                                <div key={key}
                                     className={style.textItem}
                                     style={{
                                         position: "absolute",
                                         top: "50%",
                                         transform: `translate(-50%, -50%)`,
                                         left: `${100 * (2 * key + 1) / 6}%`,
                                         opacity: key === 0 ? 1 : key === 1 ? 0.7 : 0.5,
                                     }}
                                >
                                    {
                                        mobile.map((text, key) => (
                                            <p key={key}
                                               className={clsx(style.text, style.text_mobile)}
                                            >
                                                {text}
                                            </p>
                                        ))
                                    }
                                    {
                                        desktop.map((text, key) => (
                                            <p key={key}
                                               className={clsx(style.text, style.text_desktop)}
                                            >
                                                {text}
                                            </p>
                                        ))
                                    }

                                </div>
                            ))
                        }

                        {
                            [0, 1, 2].map(key => (
                                <div key={key}
                                     className={style.circle}
                                     style={{
                                         width: `${100 * (key + 1) / 3}%`,
                                         height: `${100 * (key + 1) / 3}%`,
                                     }}
                                />
                            ))
                        }

                        {
                            [0, 1, 2].map(key => (
                                    <div key={key}
                                         className={clsx(style.ballWrapper, "ballWrapper")}
                                         style={{
                                             top: "50%",
                                             transform: `translate(0%, -50%)`,
                                             left: `${100 * (key + 1) / 6}%`,
                                             width: `${100 * (key + 1) / 6}%`
                                         }}
                                    >
                                        <div className={style.ball}
                                             style={{
                                                 background: ballColors[key],


                                             }}
                                        />
                                    </div>
                                )
                            )
                        }


                    </div>

                    <div className={style.cardsMobile}>
                        {
                            cards.map((card, key) => (
                                <Card key={key} {...card}/>
                            ))
                        }
                    </div>

                    <div className={style.cardsDesktop}>
                        {
                            cards.length === 3 ? (
                                <>
                                    <Card {...cards[0]}/>
                                    <div className={style.cardsRow}>
                                        <Card {...cards[1]}/>
                                        <Card {...cards[2]}/>
                                    </div>
                                </>
                            ) : (
                                <div className={style.cardsRow}>
                                    <Card {...cards[0]}/>
                                    <Card {...cards[1]}/>
                                </div>
                            )
                        }
                    </div>

                </div>


            </div>
        </div>
    )
}

//========= CARD =========//
const Card: FC<ICard> = ({cardTitle, step, button}) => {
    return (
        <div className={style.card}
        >
            <div className={style.top}>
                <p className={style.step}>{step}</p>
                <p className={style.cardTitle}>{cardTitle}</p>
            </div>
            <ButtonCustom {...button}/>
        </div>
    )
}