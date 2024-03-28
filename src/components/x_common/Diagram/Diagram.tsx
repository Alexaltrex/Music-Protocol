"use client";

import {FC} from "react";
import style from "./Diagram.module.scss";
import {clsx} from "clsx";
import Lottie from "lottie-react";

export interface IDiagram {
    black?: boolean
    lottie: any
    src: string
}

export const Diagram: FC<IDiagram> = ({
                                          black = true,
                                          lottie,
                                          src
                                      }) => {
    return (
        <div className={clsx({
            [style.diagram]: true,
            [style.diagram_white]: !black,
        })}>
            <div className={style.inner}>
                <img src={src} alt=""/>
                <div className={style.lottieWrapper}>
                    <Lottie animationData={lottie}
                            style={{
                                width: "100%", height: "100%"
                            }}
                    />
                </div>
            </div>
        </div>
    )
}