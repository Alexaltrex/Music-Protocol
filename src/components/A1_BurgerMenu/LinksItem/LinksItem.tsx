"use client";

import style from "./LinksItem.module.scss"
import {FC, Fragment} from "react";
import {clsx} from "clsx";
import {svgIcons} from "../../../assets/svgIcons";
import {Collapse} from "@mui/material";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {SubLinksEnum, subLinksHeader} from "../../../const/links";

interface ILinksItem {
    route: SubLinksEnum
    openedRoutes: SubLinksEnum | null
    onTopClick: () => void
    onLinkClick: () => void
}

export const LinksItem: FC<ILinksItem> = ({
                                              route,
                                              openedRoutes,
                                              onTopClick,
                                              onLinkClick
                                          }) => {
    const subMenu = subLinksHeader[route];

    const pathname = usePathname();

    return (
        <div className={clsx({
            [style.linksItem]: true,
            [style.linksItem_open]: route === openedRoutes,
        })}>
            <div className={style.top}
                 onClick={onTopClick}
            >
                <p className={style.title}>
                    {route === SubLinksEnum.Industry ? 'Industry Use Cases' : route}
                    {/*{route === RouteEnum.Technology ? "Technology" : "Industry use case"}*/}
                </p>

                {svgIcons.link_arrow}

            </div>

            <Collapse in={route === openedRoutes}>
                {
                    subMenu.map(({label, href, description, src, outer}, key) => (
                        <Fragment>
                            {
                                outer ? (
                                    <a className={clsx({
                                        [style.item]: true,
                                        [style.item_secected]: pathname === href,
                                    })}
                                       href={href}
                                       target="_blank"
                                       rel="nofollow noreferrer noopener"
                                       onClick={() => onLinkClick()}
                                    >
                                        <img src={src} alt=""/>
                                        <div className={style.itemContent}>
                                            <div>
                                                <p className={style.label}>{label}</p>
                                                <p className={style.description}>{description}</p>
                                            </div>

                                            <div className={style.icon}>
                                                {svgIcons.arrow_right}
                                            </div>
                                        </div>
                                    </a>
                                ) : (
                                    <Link className={clsx({
                                              [style.item]: true,
                                              [style.item_secected]: pathname === href,
                                          })}
                                          href={href}
                                          onClick={() => onLinkClick()}
                                    >
                                        <img src={src} alt=""/>
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
                                )
                            }

                        </Fragment>

                    ))
                }
            </Collapse>

        </div>
    )
}