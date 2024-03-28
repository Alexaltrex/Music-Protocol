import style from "./Submenu.module.scss"
import {FC} from "react";
import {clsx} from "clsx";
import Link from "next/link";
import {svgIcons} from "../../../assets/svgIcons";
import {gilroy} from "../../../assets/fonts/fonts";
import {ISubLinks, SubLinksEnum, subLinksHeader} from "../../../const/links";

interface ISubmenu {
    subLinks: SubLinksEnum
    onClick: () => void
}

export const Submenu: FC<ISubmenu> = ({
                                          subLinks,
                                          onClick,
                                      }) => {


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
                          className={style.item}
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
                            <p className={clsx(style.description, gilroy.className)}>
                                {description}
                            </p>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}