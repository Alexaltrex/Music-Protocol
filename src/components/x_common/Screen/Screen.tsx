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
    button?: {
        label: string
        onClick?: () => void
        href?: string
        innerHref?: string
    }
    videoUrl?: string
    urlSegments?: string[]
}

export const Screen: FC<IScreen> = ({
                                        className,
                                        title,
                                        description,
                                        orangeButton = false,
                                        button,
                                        videoUrl,
                                        urlSegments
                                    }) => {
    return (
        <div className={clsx({
            [style.screen]: true,
            [style.screen_orangeButton]: orangeButton,
        }, Boolean(className) && className)}>

            {
                videoUrl && (
                    <div className={clsx({
                        [style.videoWrapper]: true,
                        [style.videoWrapper_orangeButton]: orangeButton,
                    })}>
                        <video src={videoUrl}
                               loop={true}
                               autoPlay={true}
                               muted={true}
                               playsInline={true}
                                //controls={true}
                        />
                    </div>
                )
            }

            <div className={clsx({
                [style.inner]: true,
                [style.inner_orangeButton]: orangeButton,
            })}>

                {
                    urlSegments && (
                        <p className={style.urlSegments}>
                            <span>{urlSegments[0]}</span><span>{urlSegments[1]}</span>
                        </p>
                    )
                }

                <div className={style.content}>
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
                                <div className={clsx(style.descriptionWrapper, style.descriptionWrapper_mobile)}>
                                    <div className={style.blur}/>
                                    {
                                        description.mobile.map((text, key) => (
                                            <TextUp key={key}>
                                                <p className={style.description}>{text}</p>
                                            </TextUp>
                                        ))
                                    }
                                </div>
                                <div className={clsx(style.descriptionWrapper, style.descriptionWrapper_desktop)}>
                                    <div className={style.blur}/>
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
                            <ButtonCustom label="$RECORD"
                                          className={style.orangeButton}
                            />
                        )

                    }
                    {
                        button && (
                            <ButtonCustom {...button}
                                          className={clsx({
                                              [style.btn]: true,
                                              [style.btn_withOrangeButton]: orangeButton,
                                          })}
                                          variant={ButtonVariantEnum.outlined}
                            />
                        )
                    }
                </div>


            </div>
        </div>
    )
}