'use client'

import {FC} from "react";
import style from "./ButtonCustom.module.scss";
import {clsx} from "clsx";

export enum ButtonVariantEnum {
    outlined = "outlined",
    black = "black",
    orange = "orange"
}

interface IButtonCustom {
    label: string
    className?: string
    onClick?: () => void
    variant?: ButtonVariantEnum
    href?: string
}

export const ButtonCustom: FC<IButtonCustom> = ({
                                                    label,
                                                    className,
                                                    onClick,
                                                    variant = ButtonVariantEnum.orange,
                                                    href,
                                                }) => {
    return (
        <>
            {
                href ? (
                    <a href={href}
                       target="_blank"
                       rel="nofollow noreferrer noopener"
                       className={clsx({
                           [style.buttonCustom]: true,
                           [style.buttonCustom_orange]: variant === ButtonVariantEnum.orange,
                           [style.buttonCustom_outlined]: variant === ButtonVariantEnum.outlined,
                           [style.buttonCustom_black]: variant === ButtonVariantEnum.black,
                       }, Boolean(className) && className)}
                       onClick={() => {
                           if (onClick) {
                               onClick();
                           }
                       }}
                    >
                        <span>{label}</span>
                    </a>
                ) : (
                    <button className={clsx({
                        [style.buttonCustom]: true,
                        [style.buttonCustom_orange]: variant === ButtonVariantEnum.orange,
                        [style.buttonCustom_outlined]: variant === ButtonVariantEnum.outlined,
                        [style.buttonCustom_black]: variant === ButtonVariantEnum.black,

                    }, Boolean(className) && className)}
                            onClick={() => {
                                if (onClick) {
                                    onClick();
                                }
                            }}
                    >
                        <span>{label}</span>
                    </button>
                )
            }
        </>

    )
}