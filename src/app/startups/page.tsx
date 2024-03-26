"use client";

import style from "./StartupsPage.module.scss"
import {WaveText} from "../../components/x_common/WaveText/WaveText";
import {backgrounds} from "../../const/backgrounds";
import {JoinForm} from "../../components/x_common/JoinForm/JoinForm";
import {ButtonCustom, ButtonVariantEnum} from "../../components/x_common/ButtonCustom/ButtonCustom";

const title = {
    mobile: [
        "Join the Music",
        "Protocol startup",
        "ecosystem",
    ],
    desktop: [
        "Join the Music Protocol",
        "startup ecosystem",
    ]
}

const items = [
    "Stay up to date about the Music Protocol grants programme",
    "Develop apps on top of music protocol and access the music protocol ecosystem",
]

const StartupsPage = () => {
    return (
        <div className={style.startupsPage}>
            <div className={style.inner}>

                <div className={style.top}>
                    {
                        title.mobile.map((text, key) => (
                            <WaveText key={key}
                                      label={text}
                                      className={style.titleMobile}
                                      textClassName={style.title}
                                      size={40}
                            />
                        ))
                    }

                    {
                        title.desktop.map((text, key) => (
                            <WaveText key={key}
                                      label={text}
                                      className={style.titleDesktop}
                                      textClassName={style.title}
                                      size={64}
                            />
                        ))
                    }

                    <div className={style.items}>
                        {
                            items.map((item, key) => (
                                <div key={key}
                                     className={style.item}
                                >
                                    <div className={style.dot}
                                         style={{background: backgrounds[key]}}
                                    />
                                    <p className={style.text}>{item}</p>
                                </div>
                            ))
                        }
                    </div>

                    <ButtonCustom label="Go to W3M"
                                  href="#"
                                  className={style.btn}
                                  variant={ButtonVariantEnum.outlined}
                    />
                </div>

                <JoinForm/>

            </div>
        </div>
    )
}
export default StartupsPage