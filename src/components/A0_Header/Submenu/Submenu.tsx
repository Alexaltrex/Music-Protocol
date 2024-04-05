'use client'

import style from "./Submenu.module.scss"
import {FC} from "react";
import {clsx} from "clsx";
import Link from "next/link";
import {svgIcons} from "../../../assets/svgIcons";
import {outfit} from "../../../assets/fonts/fonts";
import {ISubLinks, SubLinksEnum, subLinksHeader} from "../../../const/links";
import {usePathname} from "next/navigation";

interface ISubmenu {
    subLinks: SubLinksEnum
    onClick: () => void
}

export const Submenu: FC<ISubmenu> = ({
                                          subLinks,
                                          onClick,
                                      }) => {
    const pathname = usePathname();

    return (
        <div className={clsx({
            [style.submenu]: true,
            [style.submenu_twoRow]: subLinks === SubLinksEnum.Technology,
        })}>
            {
                // @ts-ignore
                (subLinksHeader[subLinks] as ISubLinks[])?.map(({
                                                                    label,
                                                                    href,
                                                                    description,
                                                                    src,
                                                                }, key) => (
                    <Link key={key}
                          href={href}
                          className={clsx({
                              [style.item]: true,
                              [style.item_selected]: pathname === href,
                          })}
                          onClick={() => {
                              onClick()
                          }}
                    >
                        {
                            src && (
                                <img src={src}
                                     alt=""
                                     className={clsx(style.back, style.back_desktop)}
                                />
                            )
                        }

                        <div className={style.item_inner}>
                            <div className={style.top}>
                                <p className={style.label}>{label}</p>
                                <div className={style.icon}>
                                    {svgIcons.arrow_right}
                                </div>
                            </div>
                            <p className={clsx(style.description, outfit.className)}>
                                {description}
                            </p>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}