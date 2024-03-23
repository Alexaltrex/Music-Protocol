"use client";

import style from "./LinksItem.module.scss"
import {FC} from "react";
import {clsx} from "clsx";
import {svgIcons} from "../../../assets/svgIcons";
import {Collapse} from "@mui/material";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {SubLinksEnum, subLinksHeader} from "../../../const/links";

interface ILinksItem {
    route: SubLinksEnum
    openedRoutes: RouteEnum | null
    onClick: () => void
}

export const LinksItem: FC<ILinksItem> = ({
                                              route,
                                              openedRoutes,
                                              onClick,
                                          }) => {

    const subMenu = subLinksHeader[route];

    const pathname  = usePathname();

    return (
        <div className={clsx({
            [style.linksItem]: true,
            [style.linksItem_open]: route === openedRoutes,
        })}>
            <div className={style.top}
                 onClick={onClick}
            >
                <p className={style.title}>
                    {route}
                    {/*{route === RouteEnum.Technology ? "Technology" : "Industry use case"}*/}
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