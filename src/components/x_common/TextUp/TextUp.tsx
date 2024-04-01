"use client";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
import {FC, ReactNode, useRef} from "react";
import style from "./TextUp.module.scss";
import {clsx} from "clsx";

gsap.registerPlugin(ScrollTrigger);

interface ITextUp {
    children: ReactNode
    className?: string
}

export const TextUp: FC<ITextUp> = ({
                                        children,
                                        className
                                    }) => {
    const appRef = useRef<HTMLDivElement>(null!);

    useGSAP((self) => {

        // gsap.from(".text", {
        //     yPercent: 100,
        //     duration: 0.5,
        //     scrollTrigger: {
        //         trigger: ".text",
        //         //markers: true,
        //         start: "top bottom-=5%",
        //         end: "top bottom-=5%",
        //         toggleActions: "play none reverse none",
        //     }
        // })

    }, {scope: appRef})

    return (
        <div ref={appRef}
             className={clsx(style.textUp, Boolean(className) && className)}

        >
            <div className={clsx(style.text, "text")}>
                {children}
            </div>
        </div>
    )
}