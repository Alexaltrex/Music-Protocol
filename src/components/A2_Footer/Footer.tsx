import style from "./Footer.module.scss";
import {svgIcons} from "../../assets/svgIcons";
import {IGroup, routes} from "./routes";
import Link from "next/link";
import React, {FC} from "react";
import {clsx} from "clsx";

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.inner}>

                <div className={style.logo}>{svgIcons.logo}</div>

                <div className={style.top}>
                    <p className={style.title}>
                        The Web3 world
                    </p>
                    <p className={style.description}>
                        Music protocol is the decentralized music IP repository for legal access to music in the digital
                        space
                    </p>
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

                    <p className={style.designed}>
                        Designed by <span>Demyanchuk Art </span>
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