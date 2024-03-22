"use client";

import style from "./LinksItem.module.scss"
import {RouteEnum} from "../../A0_Header/Submenu/Submenu";
import {FC} from "react";
import {clsx} from "clsx";
import {subMenus} from "../../A0_Header/subMenus";
import {svgIcons} from "../../../assets/svgIcons";
import {Collapse} from "@mui/material";
import Link from "next/link";
import {usePathname} from "next/navigation";

interface ILinksItem {
    route: RouteEnum
    openedRoutes: RouteEnum | null
    onClick: () => void
}

export const LinksItem: FC<ILinksItem> = ({
                                              route,
                                              openedRoutes,
                                              onClick,
                                          }) => {
    const subMenu = subMenus[route === RouteEnum.Technology ? 0 : 1];

    const pathname  = usePathname();
    //console.log(pathname)

    return (
        <div className={clsx({
            [style.linksItem]: true,
            [style.linksItem_open]: route === openedRoutes,
        })}>
            <div className={style.top}
                 onClick={onClick}
            >
                <p className={style.title}>
                    {route === RouteEnum.Technology ? "Technology" : "Industry use case"}
                </p>

                {svgIcons.link_arrow}

            </div>

            <Collapse in={route === openedRoutes}>
                {
                    subMenu.map(({label, href, description}, key) => (
                        <Link key={key}
                              className={clsx({
                                  [style.item]: true,
                                  [style.item_secected]: false//pathname === href,
                              })}
                              href={href}
                        >
                            <img src="/jpeg/header/submenuItem.jpg" alt=""/>
                            <div className={style.itemContent}>
                                <div>
                                    <p className={style.label}>{label}</p>
                                    <p className={style.description}>{description}</p>
                                </div>

                                <div className={style.icon}>
                                    {svgIcons.arrow_right}
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </Collapse>

        </div>
    )
}