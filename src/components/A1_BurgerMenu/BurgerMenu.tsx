"use client";
import style from "./BurgerMenu.module.scss";
import {clsx} from "clsx";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";
import {mulish} from "../../assets/fonts/fonts";
import Link from "next/link";
import React, {useState} from "react";
import {RouteEnum} from "../A0_Header/Submenu/Submenu";
import {LinksItem} from "./LinksItem/LinksItem";
import {svgIcons} from "../../assets/svgIcons";

export const BurgerMenu = observer(() => {
    const {
        appStore: {
            burgerMenu, setBurgerMenu
        }
    } = useStore();

    const [openedRoutes, setOpenedRoutes] = useState<RouteEnum | null>(null);

    const onClick = () => {

    }

    return (
        <div className={clsx({
            [style.burgerMenu]: true,
            [style.burgerMenu_open]: burgerMenu,
        })}>

            <div className={style.inner}>

                <div className={style.links}>

                    <Link href="/"
                          className={style.link}
                    >
                        <span className={mulish.className}>Home</span>
                    </Link>

                    <LinksItem route={RouteEnum.Technology}
                               openedRoutes={openedRoutes}
                               onClick={() => {
                                   setOpenedRoutes(openedRoutes !== RouteEnum.Technology
                                       ? RouteEnum.Technology
                                       : null
                                   );
                               }}
                    />

                    <LinksItem route={RouteEnum.Industry_use_case}
                               openedRoutes={openedRoutes}
                               onClick={() => {
                                   setOpenedRoutes(openedRoutes !== RouteEnum.Industry_use_case
                                       ? RouteEnum.Industry_use_case
                                       : null
                                   );
                               }}
                    />

                    <Link href="/token"
                          className={style.link}
                    >
                        <span className={mulish.className}>Token</span>
                    </Link>
                </div>

                <div className={style.bottom}>
                    <div className={style.socialLinks}>
                        {
                            [
                                {
                                    href: "#",
                                    icon: svgIcons.twitter
                                },
                                {
                                    href: "#",
                                    icon: svgIcons.instagram
                                },
                            ].map(({href, icon}, key) => (
                                <a key={key}
                                   href={href}
                                   target="_blank"
                                   rel="nofollow noreferrer noopener"
                                >
                                    {icon}
                                </a>
                            ))
                        }
                    </div>

                    <div className={style.bottom_links}>
                        {
                            [
                                {
                                    label: "Privacy Policy",
                                    href: "/policy"
                                },
                                {
                                    label: "Terms of use",
                                    href: "/terms"
                                },
                            ].map(({label, href}, key) => (
                                <Link key={key}
                                      href={href}
                                      className={style.link}
                                >
                                    {label}
                                </Link>
                            ))
                        }
                    </div>

                    <p className={style.policy}>© 2023 Music Protocol All rights reserved</p>


                </div>


            </div>

        </div>
    )
})