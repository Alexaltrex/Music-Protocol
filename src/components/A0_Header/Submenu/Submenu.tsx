import style from "./Submenu.module.scss"
import {FC} from "react";
import {clsx} from "clsx";
import Link from "next/link";
import {svgIcons} from "../../../assets/svgIcons";
import {gilroy} from "../../../assets/fonts/fonts";
import {subMenus} from "../subMenus";

export enum RouteEnum {
    Technology = "Technology",
    Industry_use_case = "Industry use case"
}

interface ISubmenu {
    route: RouteEnum
    onClick: () => void
}

export const Submenu: FC<ISubmenu> = ({
                                          route,
                                          onClick,
                                      }) => {
    return (
        <div className={clsx({
            [style.submenu]: true,
            [style.submenu_twoRow]: route === RouteEnum.Technology,
        })}>
            {
                (route === RouteEnum.Technology ? subMenus[0] : subMenus[1])
                    .map(({label, href, description}, key) => (
                        <Link key={key}
                              href={href}
                              className={style.item}
                              onClick={() => onClick()}
                        >
                            <img src="/jpeg/header/submenuItem.jpg" alt="" className={style.back}/>
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