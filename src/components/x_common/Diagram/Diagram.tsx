"use client";
import {FC} from "react";
import style from "./Diagram.module.scss";
import {clsx} from "clsx";
import Lottie from "lottie-react";

export interface IDiagram {
    black?: boolean
    lottie: any
}

export const Diagram: FC<IDiagram> = ({
                                          black = true,
                                          lottie
                                      }) => {
    return (
        <div className={clsx({
            [style.diagram]: true,
            [style.diagram_white]: !black,
        })}>
            <div className={style.inner}>
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