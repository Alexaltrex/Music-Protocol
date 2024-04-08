"use client";

import style from "./Header.module.scss";
import {svgIcons} from "../../assets/svgIcons";
import Link from "next/link";
import React from "react";
import {mulish} from "../../assets/fonts/fonts";
import {ButtonCustom} from "../x_common/ButtonCustom/ButtonCustom";
import {DropDown} from "./DropDown/DropDown";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";
import {SubLinksEnum} from "../../const/links";
import {clsx} from "clsx";

export const Header = observer(() => {
    const {
        appStore: {
            burgerMenu, setBurgerMenu
        }
    } = useStore();

    //const [position, setPosition] = useState(window.scrollY)

    // useEffect(() => {
    //     const handleScroll = () => {
    //         let moving = window.scrollY;
    //         setPosition(moving);
    //     };
    //     window.addEventListener("scroll", handleScroll);
    //     return (() => {
    //         window.removeEventListener("scroll", handleScroll);
    //     })
    // })

    return (
        <header className={clsx({
            [style.header]: true,
            //[style.header_scroll]: position > 0 && !burgerMenu,
        })}>

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
                                        href: "/",
                                        subLinks: null
                                    },
                                    {
                                        label: "Technology",
                                        href: "",
                                        subLinks: SubLinksEnum.Technology
                                    },
                                    {
                                        label: "Industry Use Case",
                                        href: "",
                                        subLinks: SubLinksEnum.Industry
                                    },
                                    {
                                        label: "Token",
                                        href: "/token",
                                        subLinks: null
                                    },
                                    {
                                        label: "Resources",
                                        href: "",
                                        subLinks: SubLinksEnum.Resources
                                    },
                                ].map(({label, href, subLinks}, key) => (
                                    <React.Fragment key={key}>
                                        {
                                            (subLinks) ? (
                                                <DropDown label={label}
                                                          className={style.dropDown}
                                                          subLinks={subLinks as SubLinksEnum}
                                                />
                                            ) : (
                                                <Link href={href}
                                                      className={style.link}
                                                >
                                                    <span className={mulish.className}>{label}</span>
                                                </Link>
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