'use client'

import {FC} from "react";
import style from "./Screen.module.scss";
import {clsx} from "clsx";
import {WaveText} from "../WaveText/WaveText";
import {TextUp} from "../TextUp/TextUp";
import {ButtonCustom, ButtonVariantEnum} from "../ButtonCustom/ButtonCustom";

export interface IScreen {
    className?: string
    title: {
        mobile: string[]
        desktop: string[]
    }
    description?: {
        mobile: string[]
        desktop: string[]
    },
    orangeButton?: boolean
    button: {
        label: string
        onClick?: () => void
        href?: string
    }
    videoUrl?: string
}

export const Screen: FC<IScreen> = ({
                                        className,
                                        title,
                                        description,
                                        orangeButton = false,
                                        button,
    videoUrl
                                    }) => {
    return (
        <div className={clsx(style.screen, Boolean(className) && className)}>

            {
                videoUrl && (
                    <div className={style.videoWrapper}>
                        <video src={videoUrl}
                               loop={true}
                               autoPlay={true}
                               muted={true}
                               //controls={true}
                        ></video>
                    </div>
                )
            }

            <div className={style.inner}>

                <div className={clsx(style.wrapper, style.wrapper_mobile)}>
                    <div className={style.blur}/>
                    <div className={style.content}>
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
                </div>

                <div className={clsx(style.wrapper, style.wrapper_desktop)}>
                    <div className={style.blur}/>
                    <div className={style.content}>
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
                    </div>

                </div>


                {
                description && (
                        <>
                            <div className={style.descriptionMobile}>
                                {
                                    description.mobile.map((text, key) => (
                                        <TextUp key={key}>
                                            <p className={style.description}>{text}</p>
                                        </TextUp>
                                    ))
                                }
                            </div>
                            <div className={style.descriptionDesktop}>
                                {
                                    description.desktop.map((text, key) => (
                                        <TextUp key={key}>
                                            <p className={style.description}>{text}</p>
                                        </TextUp>
                                    ))
                                }
                            </div>
                        </>

                    )
                }

                {
                    orangeButton && (
                        <ButtonCustom label="Get started"
                                      className={style.orangeButton}
                        />
                    )

                }

                <ButtonCustom {...button}
                              className={clsx({
                                  [style.btn]: true,
                                  [style.btn_withOrangeButton]: true,
                              })}
                              variant={ButtonVariantEnum.outlined}
                />


            </div>
        </div>
    )
}