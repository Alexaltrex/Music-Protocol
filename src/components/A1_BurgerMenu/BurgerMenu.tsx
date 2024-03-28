"use client";
import style from "./BurgerMenu.module.scss";
import {clsx} from "clsx";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";
import {mulish} from "../../assets/fonts/fonts";
import Link from "next/link";
import React, {useState} from "react";
import {LinksItem} from "./LinksItem/LinksItem";
import {svgIcons} from "../../assets/svgIcons";
import {SubLinksEnum} from "../../const/links";
import {socialLinks} from "../../const/socialLinks";
import {ButtonCustom} from "../x_common/ButtonCustom/ButtonCustom";

export const BurgerMenu = observer(() => {
    const {
        appStore: {
            burgerMenu, setBurgerMenu
        }
    } = useStore();

    const [openedRoutes, setOpenedRoutes] = useState<SubLinksEnum | null>(null);

    const onClick = () => {

    }

    const onClose = () => {
        setBurgerMenu(false);
        setOpenedRoutes(null);
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
                          onClick={() => onClose()}
                    >
                        <span className={mulish.className}>Home</span>
                    </Link>

                    <LinksItem route={SubLinksEnum.Technology}
                               openedRoutes={openedRoutes}
                               onTopClick={() => {
                                   setOpenedRoutes(openedRoutes !== SubLinksEnum.Technology
                                       ? SubLinksEnum.Technology
                                       : null
                                   );
                               }}
                               onLinkClick={() => {
                                   setBurgerMenu(false);
                                   setOpenedRoutes(null);
                               }}

                    />

                    <LinksItem route={SubLinksEnum.Industry}
                               openedRoutes={openedRoutes}
                               onTopClick={() => {
                                   setOpenedRoutes(openedRoutes !== SubLinksEnum.Industry
                                       ? SubLinksEnum.Industry
                                       : null
                                   );
                               }}
                               onLinkClick={() => {
                                   setBurgerMenu(false);
                                   setOpenedRoutes(null);
                               }}
                    />

                    <Link href="/token"
                          className={style.link}
                          onClick={() => onClose()}
                    >
                        <span className={mulish.className}>Token</span>
                    </Link>

                    <LinksItem route={SubLinksEnum.Resources}
                               openedRoutes={openedRoutes}
                               onTopClick={() => {
                                   setOpenedRoutes(openedRoutes !== SubLinksEnum.Resources
                                       ? SubLinksEnum.Resources
                                       : null
                                   );
                               }}
                               onLinkClick={() => {
                                   setBurgerMenu(false);
                                   setOpenedRoutes(null);
                               }}
                    />


                </div>

                <div className={style.bottom}>

                    <div className={style.bottom_top}>

                        <ButtonCustom label="Get started"
                                      href="#"
                                      className={style.getStatredBtn}
                        />

                        <div className={style.socialLinks}>
                            {
                                socialLinks.map(({href, icon}, key) => (
                                    <a key={key}
                                       href={href}
                                       target="_blank"
                                       rel="nofollow noreferrer noopener"
                                    >
                                        <>
                                            {
                                                key === 1 ? (
                                                    // @ts-ignore
                                                    <img src="/png/in.png" alt=""/>
                                                ) : (
                                                    <>{icon}</>
                                                )
                                            }
                                        </>
                                    </a>
                                ))
                            }
                        </div>
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