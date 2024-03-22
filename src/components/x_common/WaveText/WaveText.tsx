"use client";
import style from "./WaveText.module.scss"
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
import {FC, useRef} from "react";
import {clsx} from "clsx";

gsap.registerPlugin(ScrollTrigger);

interface IWaveText {
    label: string,
    className?: string,
    textClassName?: string,
    size: number
}

export const WaveText: FC<IWaveText> = ({
                                            label,
                                            className,
                                            textClassName,
                                            size
                                        }) => {
    const factor = 0.01;
    const appRef = useRef<HTMLDivElement>(null!);

    useGSAP((self) => {

        gsap.from(".letter", {
            yPercent: 100,
            stagger: 8 * factor,
            duration: label.length * factor,
            scrollTrigger: {
                trigger: ".text",
                //markers: true,
                start: "top bottom-=10%",
                end: "top bottom-=10%",
                toggleActions: "play none reverse none",
            }
        })

    }, {scope: appRef})

    return (
        <div className={clsx(style.waveText, Boolean(className) && className)}
             ref={appRef}
        >
            <div className={clsx(style.innerWrapper, "text")}>
                {
                    label.split("").map((l, key) => (
                        <span key={key}
                              className={clsx({
                                  "letter": l !== " ",
                                  [style.empty]: l === " ",
                              }, Boolean(textClassName) && textClassName)}
                              style={l === " " ? {width: 0.25 * size} : {}}
                        >
                        {l}
                    </span>
                    ))
                }
            </div>

        </div>
    )
}