"use client"

import style from "./Slider.module.scss"
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {FC, useState} from "react";
import {Swiper as SwiperClass} from "swiper/types";
import {svgIcons} from "../../../assets/svgIcons";
import {clsx} from "clsx";
import {backgrounds} from "../../../const/backgrounds";

interface ISlide {
    title: {
        mobile: string[]
        desktop: string[]
    }
    text: string
}

interface ISlider {
    slides: ISlide[]
}

export const Slider: FC<ISlider> = ({slides}) => {
    const [swiper, setSwiper] = useState<SwiperClass | null>(null)
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className={style.slider}>

            <div className={style.control}>
                <div className={style.controlInner}>
                    <button onClick={() => swiper?.slidePrev()}
                            disabled={currentIndex === 0}
                    >
                        {svgIcons.slider_arrow}
                    </button>
                    <button onClick={() => swiper?.slideNext()}
                            disabled={currentIndex === slides.length - 1}
                    >
                        {svgIcons.slider_arrow}
                    </button>
                </div>
            </div>

            <Swiper onSwiper={swiper => {
                setSwiper(swiper)
            }}
                    className={style.swiper}
                    onSlideChange={swiper => {
                        setCurrentIndex(swiper.realIndex)
                    }}

                    breakpoints={{
                        [320]: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        [1440]: {
                            slidesPerView: "auto",
                            spaceBetween: 16,
                        }

                    }}
            >
                {
                    slides.map((card, key) => (
                        <SwiperSlide key={key}
                                     className={style.slide}
                        >
                            <Card key={key} {...card}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <div className={clsx(style.cardsDesktop)}>
                <div className={style.inner}
                     style={{
                         gridTemplateRows: `repeat(${slides.length % 3 + 1}, 1fr)`
                     }}
                >
                    {
                        slides.map((card, key) => (
                            <Card key={key} {...card}/>
                        ))
                    }
                </div>


            </div>

        </div>
    )
}

//========= CARD =========//
const Card: FC<ISlide> = ({title, text}) => {
    return (
        <div className={style.card}>
            <div className={style.dots}>
                {
                    backgrounds.map((background, key) => (
                            <div key={key}
                                 className={style.dot}
                                 style={{background}}
                            />

                        ))
                }
            </div>
            <div className={clsx(style.slideTitle, style.slideTitle_mobile)}>
                {
                    title.mobile.map((el, key) => (
                        <p key={key}>{el}</p>
                    ))
                }
            </div>

            <div className={clsx(style.slideTitle, style.slideTitle_desktop)}>
                {
                    title.desktop.map((el, key) => (
                        <p key={key}>{el}</p>
                    ))
                }
            </div>

            <p className={style.slideText}>
                {text}
            </p>
        </div>
    )
}