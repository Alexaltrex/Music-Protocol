'use client'
import style from "./Preloader.module.scss"
import {useGSAP} from "@gsap/react";
import {useRef, useState} from "react";
import {clsx} from "clsx";
import gsap from "gsap";
import {outfit} from "../../assets/fonts/fonts";

export const Preloader = () => {
    const appRef = useRef<HTMLDivElement>(null!);
    const [progress, setProgress] = useState(0);
    const [end, setEnd] = useState(false);

    useGSAP((self) => {

        const a = gsap.to(".mask", {
            bottom: "100%",
            ease: "none",
            duration: 3,
            onUpdate: () => {
                //console.log(a.progress())
                setProgress(a.progress())
            },
            onComplete: () => setEnd(true)
        })

        gsap.to(".value", {
            bottom: "calc(100vh - 30px)",
            ease: "none",
            duration: 3,
        })

    }, {scope: appRef})


    return (
        <div className={clsx({
            [style.preloader]: true,
            [style.preloader_end]: end,
        })}
             ref={appRef}>
            <div className={style.scaleWrapper}
            >
                {
                    Array.from(({length: 101}), (v, k) => k).map(k => (
                            <div key={k}
                                 className={style.item}
                                 style={{
                                     top: `${k}%`,
                                     width: k % 10 === 0 ? '100px' : '30px'
                                 }}
                            />
                        )
                    )
                }
                <div className={clsx(style.mask, "mask")}/>
            </div>

            <span className={clsx(style.value, "value", outfit.className)}>
                {`${Math.ceil(progress * 100)}%`}
            </span>
        </div>
    )
}