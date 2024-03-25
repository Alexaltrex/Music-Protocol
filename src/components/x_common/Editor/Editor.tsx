"use client";

import {FC, Fragment, useRef} from "react";
import style from "./Editor.module.scss";
import {clsx} from "clsx";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {robotoMono} from "../../../assets/fonts/fonts";
import TweenTarget = gsap.TweenTarget;
import {menu, orangeDesktop, orangeMobile, stringsDesktop, stringsMobile} from "./const";
import {useMediaQuery} from "@mui/material";

export interface IEditor {
    className?: string
}

export const Editor: FC<IEditor> = ({className}) => {

    const matches = useMediaQuery('(min-width:1440px)');

    const appRef = useRef<HTMLDivElement>(null!);

    const step = 0.025;

    useGSAP((self) => {

        gsap.timeline({repeat: -1})
            .set(".pointerInner", {opacity: 1})
            .to(".pointerInner", {opacity: 1, duration: 0.2})
            .set(".pointerInner", {opacity: 0})
            .to(".pointerInner", {opacity: 0, duration: 0.2})

        // @ts-ignore
        const stringsTargetMobile = self.selector(".stringMobile") as TweenTarget[];
        // @ts-ignore
        const stringsTargetDesktop = self.selector(".stringDesktop") as TweenTarget[];

        const tl = gsap.timeline({repeat: -1})

        if (matches) {
            stringsTargetDesktop.forEach((stringTarget, key) => {

                // @ts-ignore
                const letters = self.selector(`.stringDesktop${key} .letterDesktop`) as TweenTarget[];

                letters.forEach((letter, index) => {
                    tl.set(`.pointerDesktop${key}`, {opacity: 1})
                        .to(letter, {
                            opacity: 1,
                            duration: step,
                            delay: step,
                        })
                        .to(`.pointerDesktop${key}`, {
                            x: 10.81 * (index + 1),
                            duration: step,
                        })
                        .set(`.pointerDesktop${key}`, {opacity: 0})
                })

            })
        } else {
            stringsTargetMobile.forEach((stringTarget, key) => {

                // @ts-ignore
                const letters = self.selector(`.stringMobile${key} .letterMobile`) as TweenTarget[];

                letters.forEach((letter, index) => {
                    tl.set(`.pointerMobile${key}`, {opacity: 1})
                        .to(letter, {
                            opacity: 1,
                            duration: step,
                            delay: step,
                        })
                        .to(`.pointerMobile${key}`, {
                            x: 8.41 * (index + 1),
                            duration: step,
                        })
                        .set(`.pointerMobile${key}`, {opacity: 0})
                })

            })
        }



    }, {scope: appRef, dependencies: [matches]})


    return (
        <div className={clsx(style.editor, Boolean(className) && className)}
             ref={appRef}
        >

            <div className={style.top}>
                <div className={style.dots}>
                    {
                        [0, 1, 2].map(key => <div key={key}/>)
                    }
                </div>
                <div className={style.menu}>
                    {
                        menu.map((el, key) => (
                            <p key={key}>
                                {el}
                            </p>
                        ))
                    }
                </div>

            </div>

            <div className={style.sectionTop}/>

            <div className={style.middleMenu}>
                <p>NORMAL</p>
                <p>server.js</p>
            </div>

            <div className={style.sectionBottom}/>

            <div className={style.stringsWrapperMobile}>
                {
                    stringsMobile.map((string, key) => (
                        <div key={key}
                             className={clsx(style.string, "stringMobile", `stringMobile${key}`)}
                        >
                            {
                                string.split("").map((l, index) => (
                                        <Fragment key={index}>
                                            {
                                                l === "" ? (
                                                    <span className={clsx(style.empty, "letterMobile")}/>
                                                ) : (
                                                    <span className={clsx(
                                                        robotoMono.className,
                                                        "letterMobile",
                                                        orangeMobile[key].includes(index) && style.orange
                                                    )}>{l}</span>
                                                )
                                            }
                                        </Fragment>
                                    )
                                )
                            }

                            <div className={clsx(style.pointer, "pointerMobile", `pointerMobile${key}`)}>
                                <div className={clsx(style.pointerInner, "pointerInner")}/>
                            </div>

                        </div>
                    ))
                }
            </div>

            <div className={style.stringsWrapperDesktop}>
                {
                    stringsDesktop.map((string, key) => (
                        <div key={key}
                             className={clsx(style.string, "stringDesktop", `stringDesktop${key}`)}
                        >
                            {
                                string.split("").map((l, index) => (
                                        <Fragment key={index}>
                                            {
                                                l === "" ? (
                                                    <span className={clsx(style.empty, "letterDesktop")}/>
                                                ) : (
                                                    <span className={clsx(
                                                        robotoMono.className,
                                                        "letterDesktop",
                                                        orangeDesktop[key].includes(index) && style.orange
                                                    )}>{l}</span>
                                                )
                                            }
                                        </Fragment>
                                    )
                                )
                            }

                            <div className={clsx(style.pointer, "pointerDesktop", `pointerDesktop${key}`)}>
                                <div className={clsx(style.pointerInner, "pointerInner")}/>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}