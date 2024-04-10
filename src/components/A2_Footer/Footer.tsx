import style from "./Footer.module.scss";
import {svgIcons} from "../../assets/svgIcons";
import Link from "next/link";
import React, {FC} from "react";
import {clsx} from "clsx";
import {outfit} from "../../assets/fonts/fonts";
import {socialLinks} from "../../const/socialLinks";
import {linksFooter} from "../../const/links";

export const Footer = () => {

    return (
        <footer className={style.footer}>
            <div className={style.inner}>

                <div className={style.logo}>
                    {svgIcons.logo}
                </div>

                {/*<div className={style.top}>*/}
                {/*    <p className={clsx(style.title, outfit.className)}>*/}
                {/*        Dynamic Music IP for Web3*/}
                {/*    </p>*/}

                {/*    <div className={style.right}>*/}
                {/*        <p className={style.description}>*/}
                {/*            The Web3 Music Association is the main contributor to the Music Protocol, working with the*/}
                {/*            music industry to help them adopt emerging technologies. <a href="www.web3music.org"*/}
                {/*                                                                        target="_blank"*/}
                {/*                                                                        rel="nofollow noreferrer noopener">*/}
                {/*            Find out more.*/}
                {/*        </a>*/}
                {/*        </p>*/}

                    {/*    <a href="www.web3music.org"*/}
                    {/*       target="_blank"*/}
                    {/*       rel="nofollow noreferrer noopener"*/}
                    {/*    >*/}
                    {/*        {svgIcons.logo_footer}*/}
                    {/*    </a>*/}

                    {/*</div>*/}

                {/*</div>*/}

                <div className={clsx(style.linksMobile)}>
                    <div className={style.column}>
                        <Group {...linksFooter[0]}/>
                        <Group {...linksFooter[3]}/>
                        <Group {...linksFooter[1]}/>
                    </div>
                    <div className={style.column}>
                        <Group {...linksFooter[2]}/>
                        <Group {...linksFooter[4]}/>
                    </div>

                    {/*<div className={style.row}>*/}
                    {/*    <Group {...linksFooter[0]}/>*/}
                    {/*    <Group {...linksFooter[1]}/>*/}
                    {/*</div>*/}
                    {/*<div className={style.row}>*/}
                    {/*    <Group {...linksFooter[2]}/>*/}
                    {/*    <div className={style.column}>*/}
                    {/*        <Group {...linksFooter[3]}/>*/}
                    {/*        <Group {...linksFooter[4]}/>*/}
                    {/*    </div>*/}

                    {/*</div>*/}
                    {/*{*/}
                    {/*    [*/}
                    {/*        [routes[0], routes[1]],*/}
                    {/*        [routes[2], routes[3]]*/}
                    {/*    ].map((row, key) => (*/}
                    {/*        <div className={style.row} key={key}>*/}
                    {/*            {*/}
                    {/*                row.map((group, key) => (*/}
                    {/*                    <Group key={key} {...group}/>*/}
                    {/*                ))*/}
                    {/*            }*/}
                    {/*        </div>*/}
                    {/*    ))*/}
                    {/*}*/}
                </div>


                <div className={clsx(style.linksDesktop)}>
                    {
                        linksFooter.map((group, key) => (
                            <Group key={key} {...group}/>
                        ))
                    }
                </div>

                <div className={style.socialLinksWrapper}>

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

                    <a href="www.web3music.org"
                       target="_blank"
                       rel="nofollow noreferrer noopener"
                       className={style.web3music}
                    >
                        {svgIcons.logo_footer}
                    </a>

                </div>

                <div className={style.bottom}>

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

                    <p className={style.rights}>
                        © 2024 Music Protocol All rights reserved
                    </p>
                </div>

            </div>
        </footer>
    )
}

//========= GROUP =========//
export interface IGroup {
    title: string
    icon: boolean
    subRoutes: {
        label: string
        href: string
    }[]
}

const Group: FC<IGroup> = ({
                               icon,
                               title,
                               subRoutes
                           }) => {
    return (
        <div className={style.group}>

            <div className={clsx({
                [style.groupTitle]: true,
                [style.groupTitle_noPadding]: !icon,
            })}>
                {icon && svgIcons.link_arrow}
                <p>{title}</p>
            </div>

            <div className={clsx({
                [style.groupLinks]: true,
                [style.groupLinks_noPaddingLeft]: !icon,
            })}>
                {
                    subRoutes.map(({label, href}, key) => (
                        <Link key={key}
                              href={href}
                              className={style.link}
                        >
                            {label}
                        </Link>
                    ))
                }
            </div>

        </div>
    )
}