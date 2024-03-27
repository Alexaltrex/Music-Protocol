import style from "./TransformingMusic.module.scss"
import {WaveText} from "../../x_common/WaveText/WaveText";
import {Fragment} from "react";
import {clsx} from "clsx";
import {TextUp} from "../../x_common/TextUp/TextUp";
import {ButtonCustom} from "../../x_common/ButtonCustom/ButtonCustom";

const title = {
    mobile: [
        "Transforming Music",
        "into a Tradable Asset",
        "Class",
    ],
    desktop: [
        "Transforming Music into a",
        " Tradable Asset Class"
    ]
}

const text = {
    mobile: [
        "Music Protocol unlocks the potential of the",
        "music industry by enabling efficient",
        "tokenisation and capital market",
        "integration, fostering a scalable and",
        "accessible asset ecosystem.",
    ],
    desktop: [
        "Music Protocol unlocks the industry's",
        "potential by enabling efficient tokenisation",
        "and financial integration, creating a",
        "scalable and accessible asset ecosystem.",
    ]
}

export const TransformingMusic = () => {
    return (
        <div className={style.transformingMusic}>
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

                    <div className={clsx(style.block, style.block_mobile)}>
                        {
                            text.mobile.map((text, key) => (
                                <TextUp key={key}>
                                    <p className={style.description}>{text}</p>
                                </TextUp>
                            ))
                        }
                    </div>

                    <div className={clsx(style.block, style.block_desktop)}>
                        {
                            text.desktop.map((text, key) => (
                                <TextUp key={key}>
                                    <p className={style.description}>{text}</p>
                                </TextUp>
                            ))
                        }
                    </div>


                </div>

                <div className={style.card}>
                    <div className={style.cardTop}>
                        <p>01</p>
                        <p>Capital Market Industry Report</p>
                    </div>

                    <ButtonCustom label="Discover"
                    />
                </div>

            </div>
        </div>
    )
}