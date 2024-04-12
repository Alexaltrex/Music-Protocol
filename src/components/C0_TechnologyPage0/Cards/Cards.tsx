'use client'

import style from "./Cards.module.scss"
import {ButtonCustom, ButtonVariantEnum} from "../../x_common/ButtonCustom/ButtonCustom";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Swiper as SwiperClass} from "swiper/types";
import {FC, useState} from "react";
import Lottie from "lottie-react";
import card0_lottie from "../../../../public/lottie/card0.json";
import group_138 from "../../../../public/lottie/Group 138.json";
import group_481 from "../../../../public/lottie/Group 481.json";
import card1_lottie from "../../../../public/lottie/card1.json";
import card2_lottie from "../../../../public/lottie/card2.json";
import card3_lottie from "../../../../public/lottie/card3.json";
import {clsx} from "clsx";
import {svgIcons} from "../../../assets/svgIcons";
import {SubLinksEnum, subLinksHeader} from "../../../const/links";

interface ICard {
    src: string
    step: string
    title: string
    text: string
    href: string
    lottie: string
}


const cards: ICard[] = [
    {
        src: "/png/technology_0_cards/0.png",
        step: "01",
        title: "IP Core Asset Library",
        text: "The Music Protocol's core is a data repository for IP. The architecture has been built to accommodate intellectual property and licensing structures. Find out more about how to contribute towards these new frameworks.",
        href: subLinksHeader[SubLinksEnum.Technology][1].href,
        // @ts-ignore
        lottie: card1_lottie,
    },
    {
        src: "/png/technology_0_cards/1.png",
        step: "02",
        title: "IP Licencing Core Engine",
        text: "The digital landscape is constantly evolving, and so is how we create and consume music. Our IP Licencing Core Engine expedites a seamless data flow between Music Protocol and ecosystem applications, ensuring our network efficiently manages all music IP permissions.",
        href: subLinksHeader[SubLinksEnum.Technology][2].href,
        // @ts-ignore
        lottie: group_138,
    },
    {
        src: "/png/technology_0_cards/2.png",
        step: "03",
        title: "IP Settlement Gateway",
        text: "Music Protocol creates the link between the technological and regulatory landscapes. We bridge the gap between music IP and the industry's extensive counterparties by connecting key content distributors and management networks, simplifying financial and licensing transactions.",
        href: subLinksHeader[SubLinksEnum.Technology][3].href,
        // @ts-ignore
        lottie: card3_lottie,
    },
    {
        src: "/png/technology_0_cards/3.png",
        step: "04",
        title: "IP Inter-Chain Distribution Gateway",
        text: "Our infrastructure extends the reach of Music Protocol, enabling easy integrations with other blockchain ecosystems. We supply verifiable music IP rights across the Web3 landscape, strengthening application adaptability and promoting various creative and commercial opportunities.",
        href: subLinksHeader[SubLinksEnum.Technology][4].href,
        // @ts-ignore
        lottie: card0_lottie,
    },
]

export const Cards = () => {
    const [swiper, setSwiper] = useState<SwiperClass | null>(null)
    const [currentIndex, setCurrentIndex] = useState(0);


    return (
        <div className={style.cards}>

            <div className={style.inner}>

                <div className={style.control}>
                    <div className={style.controlInner}>
                        <button onClick={() => swiper?.slidePrev()}
                                disabled={currentIndex === 0}
                        >
                            {svgIcons.slider_arrow}
                        </button>
                        <button onClick={() => swiper?.slideNext()}
                                disabled={currentIndex === cards.length - 1}
                        >
                            {svgIcons.slider_arrow}
                        </button>
                    </div>
                </div>

                <Swiper onSwiper={swiper => {
                    setSwiper(swiper)
                }}
                        className={style.cardsMobile}
                        onSlideChange={swiper => {
                            setCurrentIndex(swiper.realIndex)
                        }}
                        slidesPerView={1}
                >
                    {
                        cards.map((card, key) => (
                            <SwiperSlide key={key}
                                         className={style.slide}
                            >
                                <Card index={key} {...card}/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

                <div className={style.cardsDesktop}>
                    {
                        cards.map((card, key) => (
                            <Card key={key} index={key} {...card}/>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}


//========= CARD =========//
interface ICardComponent extends ICard {
    index: number
}

const Card: FC<ICardComponent> = ({
                                      src,
                                      step,
                                      title,
                                      text,
                                      href,
                                      lottie,
                                      index,
                                  }) => {
    return (
        <div className={style.card}>
            <div className={style.topWrapper}>

                <div className={style.topWrapper}>
                    <div className={style.blackCard}>
                        <p className={style.step}>{step}</p>
                        <p className={style.title}>{title}</p>

                        <div className={clsx(
                            style.lottieWrapper,
                            style[`lottieWrapper_${index}`]
                        )}
                        >
                            {/*@ts-ignore*/}
                            {/*{icons[index]}*/}
                            <img src={src} alt=""/>
                            {/*<Lottie animationData={lottie}*/}
                            {/*        style={{*/}
                            {/*            width: "100%"*/}
                            {/*        }}*/}
                            {/*/>*/}
                        </div>

                    </div>
                </div>

                <p className={style.text}>
                    {text}
                </p>

            </div>

            <div className={style.btnWrapper}>
                <ButtonCustom label="Read more"
                              innerHref={href}
                              className={style.btn}
                              variant={ButtonVariantEnum.black}
                />
            </div>

        </div>
    )
}