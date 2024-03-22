"use client";

import style from "./Header.module.scss";
import {svgIcons} from "../../assets/svgIcons";
import Link from "next/link";
import React from "react";
import {mulish} from "../../assets/fonts/fonts";
import {ButtonCustom} from "../x_common/ButtonCustom/ButtonCustom";
import {DropDown} from "./DropDown/DropDown";
import {RouteEnum} from "./Submenu/Submenu";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";

export const Header = observer(() => {
    const {
        appStore: {
            burgerMenu, setBurgerMenu
        }
    } = useStore();

    return (
        <header className={style.header}>

            <div className={style.inner}>

                <div className={style.left}>

                    <Link href="/"
                          className={style.logo}
                    >
                        {svgIcons.logo}
                    </Link>

                    <nav className={style.linksWrapper}>
                        <div className={style.back}/>
                        <div className={style.links}>
                            {
                                [
                                    {
                                        label: "Home",
                                        href: "/"
                                    },
                                    {
                                        label: "Technology",
                                        href: ""
                                    },
                                    {
                                        label: "Industry use case",
                                        href: ""
                                    },
                                    {
                                        label: "Token",
                                        href: "/token"
                                    }

                                ].map(({label, href}, key) => (
                                    <React.Fragment key={key}>
                                        {
                                            (key === 0 || key === 3) ? (
                                                <Link href={href}
                                                      className={style.link}
                                                >
                                                    <span className={mulish.className}>{label}</span>
                                                </Link>
                                            ) : (
                                                <DropDown label={label}
                                                          className={style.dropDown}
                                                          route={label as RouteEnum}
                                                />
                                            )
                                        }
                                    </React.Fragment>
                                ))
                            }
                        </div>

                    </nav>


                </div>

                <div className={style.right}>
                    <ButtonCustom label="Get started"
                                  className={style.getStartedBtn}
                    />

                    <button className={style.burgerBtn}
                            onClick={() => setBurgerMenu(!burgerMenu)}
                    >
                        {
                            burgerMenu ? svgIcons.close : svgIcons.burger
                        }
                    </button>

                </div>

            </div>

        </header>
    )
})