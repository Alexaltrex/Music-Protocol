import style from "./Cards.module.scss";
import {WaveText} from "../../../components/x_common/WaveText/WaveText";
import {cards, text, title} from "./const";
import {clsx} from "clsx";
import {TextUp} from "../../../components/x_common/TextUp/TextUp";

export const Cards = () => {
    return (
        <div className={style.cards}>
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

                <div className={style.cardItems}>
                    {
                        cards.map(({label, src, text}, key) => (
                            <div key={key}
                                 className={style.cardItem}
                            >
                                <p className={style.label}>
                                    {label}
                                </p>

                                <img src={src} alt=""/>

                                <p className={style.text}>{text}</p>

                            </div>
                        ))
                    }
                </div>


            </div>
        </div>
    )
}