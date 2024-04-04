import style from "./TransformingMusic.module.scss"
import {WaveText} from "../../x_common/WaveText/WaveText";
import {clsx} from "clsx";
import {TextUp} from "../../x_common/TextUp/TextUp";
import {ButtonCustom} from "../../x_common/ButtonCustom/ButtonCustom";
import {outfit} from "../../../assets/fonts/fonts";

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

                    <h2 className={clsx(style.title, outfit.className)}>
                        Transforming Music into a Tradable and Liquid Asset Class
                    </h2>

                    <p className={style.description}>
                        Music Protocol unlocks the full economic potential of the music industry by enabling efficient
                        tokenisation and capital market integration, fostering a scalable and accessible asset
                        ecosystem.
                    </p>



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