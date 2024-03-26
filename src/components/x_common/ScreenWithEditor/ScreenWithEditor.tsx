"use client"

import style from "./ScreenWithEditor.module.scss";
import {Editor} from "../Editor/Editor";
import {FC} from "react";
import {ButtonCustom, ButtonVariantEnum} from "../ButtonCustom/ButtonCustom";
import {WaveText} from "../WaveText/WaveText";
import {useRouter} from 'next/navigation'

interface ICard {
    cardTitle: string
    step: string
    button: {
        label: string
        onClick?: () => void
        href?: string
    }
}

export interface IScreenWithEditor {
    title: {
        mobile: string[],
        desktop: string[],
    }
    description?: {
        mobile: string[]
        desktop: string[]
    }[]
    cards: ICard[],
}

export const ScreenWithEditor: FC<IScreenWithEditor> = ({
                                                            title,
                                                            description,
                                                            cards,
                                                        }) => {
    return (
        <div className={style.screenWithEditor}>
            <div className={style.inner}>

                <div className={style.titleMobileWrapper}>
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
                </div>


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

                <div className={style.content}>

                    <div className={style.first}>

                        {
                            description && (
                                <div className={style.descriptionMobile}>


                                </div>
                            )
                        }

                        <Editor/>

                    </div>

                    <div className={style.cards}>
                        <div className={style.cardsMobile}>
                            {
                                cards.map((card, key) => (
                                    <Card index={key} key={key} {...card}/>
                                ))
                            }
                        </div>
                        <div className={style.cardsDesktop}>
                            <Card index={0} {...cards[0]}/>
                            <div className={style.row}>
                                <Card index={1} {...cards[1]}/>
                                <Card index={2} {...cards[2]}/>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

//========= CARD =========//
interface ICardComponent extends ICard {
    index: number
}


const Card: FC<ICardComponent> = ({
                                      cardTitle,
                                      step,
                                      index,
                                      button
                                  }) => {
    const router = useRouter()

    return (
        <div className={style.card}>
            <div className={style.top}>
                <p className={style.step}>{step}</p>
                <p className={style.cardTitle}>{cardTitle}</p>
            </div>
            <ButtonCustom variant={ButtonVariantEnum.black}
                          onClick={() => router.push(button.href as string)}
                          label={button.label}
            />
        </div>
    )
}