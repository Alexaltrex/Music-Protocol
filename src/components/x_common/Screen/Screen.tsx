'use client'

import {FC} from "react";
import style from "./Screen.module.scss";
import {clsx} from "clsx";
import {WaveText} from "../WaveText/WaveText";
import {TextUp} from "../TextUp/TextUp";
import {ButtonCustom, ButtonVariantEnum} from "../ButtonCustom/ButtonCustom";

interface IScreen {
    className?: string
    title: {
        mobile: string[]
        desktop: string[]
    }
    description?: string[]
    button: {
        label: string
        onClick?: () => void
        href?: string
    }
}

export const Screen: FC<IScreen> = ({
                                        className,
                                        title,
                                        description,
                                        button,
                                    }) => {
    return (
        <div className={clsx(style.screen, Boolean(className) && className)}>
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
                    title.mobile.map((text, key) => (
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

                <ButtonCustom {...button}
                              className={style.btn}
                              variant={ButtonVariantEnum.outlined}
                />


            </div>
        </div>
    )
}