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
    description?: string[]
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

                {
                    description && (
                        <div className={style.descriptionWrapper}>
                            {
                                description.map((text, key) => (
                                    <TextUp key={key}>
                                        <p className={style.description}>{text}</p>
                                    </TextUp>
                                ))
                            }
                        </div>
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