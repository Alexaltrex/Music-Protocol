import style from "./MusicReward.module.scss"
import {text, title} from "../Cards/const";
import {WaveText} from "../../../components/x_common/WaveText/WaveText";
import {clsx} from "clsx";
import {TextUp} from "../../../components/x_common/TextUp/TextUp";

export const MusicReward = () => {
    return (
        <div className={style.musicReward}>
            <div className={style.inner}>

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

            <img src="/png/music_reward.png" alt=""/>
        </div>
    )
}