import style from "./Footer.module.scss";
import {svgIcons} from "../../assets/svgIcons";
import {IGroup, routes} from "./routes";
import Link from "next/link";
import React, {FC} from "react";
import {clsx} from "clsx";
import {gilroy} from "../../assets/fonts/fonts";
import defaultLoader from "next/dist/shared/lib/image-loader";
import __next_img_default = defaultLoader.__next_img_default;
import {socialLinks} from "../../const/socialLinks";

export const Footer = () => {

    return (
        <footer className={style.footer}>
            <div className={style.inner}>

                <div className={style.logo}>{svgIcons.logo}</div>

                <div className={style.top}>
                    <p className={clsx(style.title, gilroy.className)}>
                        Dynamic Music IP for Web3
                    </p>

                    <div className={style.right}>
                        <p className={style.description}>
                            The Web3 Music Association is the main contributor to the Music Protocol, working with the music industry to onboard them to advanced technologies. Find out more about the association.
                        </p>
                        {svgIcons.logo_footer}
                    </div>

                </div>

                <div className={clsx(style.linksMobile)}>
                    {
                        [
                            [routes[0], routes[1]],
                            [routes[2], routes[3]]
                        ].map((row, key) => (
                            <div className={style.row} key={key}>
                                {
                                    row.map((group, key) => (
                                        <Group key={key} {...group}/>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>


                <div className={clsx(style.linksDesktop)}>
                    {
                        routes.map((group, key) => (
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

                    <p className={style.designed}>
                        Designed by <a href="https://demyanchukart.com/" target="_blank" rel="nofollow noreferrer noopener">Demyanchuk Art </a>
                    </p>
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
                        © 2023 Music Protocol All rights reserved
                    </p>
                </div>

            </div>
        </footer>
    )
}

//========= GROUP =========//
const Group: FC<IGroup> = ({
                               icon,
                               title,
                               subRoutes
                           }) => {
    return (
        <div className={style.group}>

            <div className={style.groupTitle}>
                {icon && svgIcons.link_arrow}
                <p>{title}</p>
            </div>

            <div className={style.groupLinks}>
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