"use client";

import {FC, Fragment} from "react";
import style from "./Editor.module.scss";
import {clsx} from "clsx";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {robotoMono} from "../../../assets/fonts/fonts";

export interface IEditor {
    className?: string
}

const menu = [
    "-/GET",
    "NFTs",
    "REG",
    "USER",
    "ADDRESS",
]

export const Editor: FC<IEditor> = ({className}) => {
    return (
        <div className={clsx(style.editor, Boolean(className) && className)}>

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

            <div className={style.sectionTop}>
                <div className={style.text}>
                    {
                        "rytu jd[r]u dnirdu:dr".split("").map((l, key) => (
                            <Fragment key={key}>
                                {
                                    l === "" ? (
                                        <span className={style.empty}/>
                                    ) : (
                                        <span className={robotoMono.className}>{l}</span>
                                    )
                                }
                            </Fragment>
                        ))

                    }
                    <div className={clsx(style.pointer, "pointer")}/>


                </div>
            </div>

            <div className={style.middleMenu}>
                <p>NORMAL</p>
                <p>server.js</p>
            </div>

            <div className={style.sectionBottom}>

            </div>

        </div>
    )
}