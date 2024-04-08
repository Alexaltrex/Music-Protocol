"use client"

import style from "./ElevatingMusic.module.scss"
import {WaveText} from "../../x_common/WaveText/WaveText";
import {ButtonCustom, ButtonVariantEnum} from "../../x_common/ButtonCustom/ButtonCustom";
import {FC, useRef, useState} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {clsx} from "clsx";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

interface ICard {
    step: string
    label: string
    buttonLabel: string
    href: string
}

const pinSpacing = false;

export const ElevatingMusic = () => {
    const appRef = useRef<HTMLDivElement>(null!);

    const [progress, setProgress] = useState(0);

    useGSAP((self) => {

        gsap.to(".planet1", {
            ease: "none",
            motionPath: {
                path: "#flightPath",
                align: "#flightPath",
                alignOrigin: [0.5, 0.5],
                start: 0,
                end: -1,
            },
            scrollTrigger: {
                trigger: appRef.current,
                start: "top top",
                end: "bottom bottom",
                pin: ".fixedContent",
                scrub: true,
                //markers: true,
                pinSpacing,
                onUpdate: (self) => {
                    //console.log(self.progress)
                    setProgress(self.progress);
                }
            }
        })

        gsap.to(".planet2", {
            ease: "none",
            motionPath: {
                path: "#flightPath",
                align: "#flightPath",
                alignOrigin: [0.5, 0.5],
                start: -0.33,
                end: -1.33
            },
            scrollTrigger: {
                trigger: appRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
                pinSpacing,
            }
        })

        gsap.to(".planet3", {
            ease: "none",
            motionPath: {
                path: "#flightPath",
                align: "#flightPath",
                alignOrigin: [0.5, 0.5],
                start: -0.66,
                end: -1.66,
            },
            scrollTrigger: {
                trigger: appRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
                pinSpacing,
            }
        })

    }, {scope: appRef})

    return (
        <div className={clsx(style.elevatingMusic, "scrollingContent")}
             ref={appRef}
        >
            <div className={clsx(style.fixedContent, "fixedContent")}>
                <div className={style.inner}>

                    <div className={style.top}>
                        <div className={style.title}>
                            Elevating Music Rights
                        </div>

                        <p className={style.description}>
                            Our sovereign layer one transforms Music IP from a static asset into a dynamic asset.
                            Blockchain
                            and our digital licensing framework will advance the music industry forward to mirror the
                            evolving
                            digital landscape.
                        </p>

                        <ButtonCustom label="Whitepaper"
                                      variant={ButtonVariantEnum.outlined}
                                      href="/"
                                      className={style.btnDesktop}
                        />
                    </div>


                    <div className={style.orbitWrapper}>
                        <img src="/png/elevating_music/orbit.png" alt="" className={style.orbit}/>
                        <svg className={style.flightPath} width="837" height="350" viewBox="0 0 837 350" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                id="flightPath"
                                d="M834.11 97.199C838.038 118.188 830.464 140.485 813.016 162.923C795.57 185.359 768.36 207.785 733.374 228.921C663.412 271.186 562.643 308.119 447.654 329.639C332.665 351.158 225.36 353.165 144.849 339.06C104.588 332.006 71.1086 320.937 46.73 306.329C22.3492 291.719 7.22436 273.67 3.29634 252.681C-0.631691 231.691 6.94276 209.394 24.3903 186.957C41.8362 164.521 69.0468 142.094 104.033 120.959C173.995 78.6933 274.764 41.7603 389.752 20.2409C504.741 -1.2785 612.046 -3.28531 692.557 10.82C732.819 17.8736 766.298 28.9424 790.676 43.551C815.057 58.1609 830.182 76.2097 834.11 97.199Z"
                                stroke="#FFF" strokeWidth="3"/>
                        </svg>
                        <img src="/png/elevating_music/planet_1.png"
                             alt=""
                             className={clsx(style.planet, "planet1")}
                        />
                        <img src="/png/elevating_music/planet_2.png"
                             alt=""
                             className={clsx(style.planet, "planet2")}
                        />
                        <img src="/png/elevating_music/planet_3.png"
                             alt=""
                             className={clsx(style.planet, "planet3")}
                        />
                        <img src="/png/elevating_music/center.png" alt="" className={style.center}/>

                        <img className={style.step1}
                             style={{
                                 opacity: progress < 0.33 ? 1 : 0
                             }}
                             src="/png/elevating_music/step1.png"
                             alt=""
                        />

                        <img className={style.step2}
                             style={{
                                 opacity: (progress >= 0.33 && progress < 0.66) ? 1 : 0
                             }}
                             src="/png/elevating_music/step2.png"
                             alt=""
                        />

                        <img className={style.step3_mobile}
                             style={{
                                 opacity: progress >= 0.66 ? 1 : 0
                             }}
                             src="/png/elevating_music/step3_mobile.png"
                             alt=""
                        />

                        <img className={style.step3_desktop}
                             style={{
                                 opacity: progress >= 0.66 ? 1 : 0
                             }}
                             src="/png/elevating_music/step3_desktop.png"
                             alt=""
                        />

                        <ButtonCustom label="Whitepaper"
                                      variant={ButtonVariantEnum.outlined}
                                      href="/"
                                      className={style.btnMobile}
                        />

                    </div>


                </div>
            </div>


        </div>
    )
}