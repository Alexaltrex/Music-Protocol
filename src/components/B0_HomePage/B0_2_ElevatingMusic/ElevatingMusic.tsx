import style from "./ElevatingMusic.module.scss"
import {WaveText} from "../../x_common/WaveText/WaveText";
import {TextUp} from "../../x_common/TextUp/TextUp";
import {ButtonCustom} from "../../x_common/ButtonCustom/ButtonCustom";
import {FC} from "react";

interface ICard {
    step: string
    label: string
    buttonLabel: string
    href: string
}

const cards = [
    {
        step: "01",
        label: "Blog docs",
        buttonLabel: "Go to the blog",
        href: "#",
    },
    {
        step: "02",
        label: "Developer docs",
        buttonLabel: "Go to gitbook",
        href: "#",
    },
    {
        step: "03",
        label: "Whitepaper",
        buttonLabel: "Go to gitbook",
        href: "#",
    },
]

export const ElevatingMusic = () => {
    return (
        <div className={style.elevatingMusic}>
            <div className={style.inner}>

                <WaveText label="Elevating Music"
                          className={style.titleMobile}
                          textClassName={style.title}
                          size={32}
                />
                <WaveText label="Rights"
                          className={style.titleMobile}
                          textClassName={style.title}
                          size={32}
                />

                <WaveText label="Elevating Music Rights"
                          className={style.titleDesktop}
                          textClassName={style.title}
                          size={48}
                />

                <div className={style.descriptionWrapper}>
                    {
                        [
                            "Our modular layer 1 transforms music IP",
                            "from a static to a dynamic asset. We",
                            "designed the protocol through blockchain",
                            "technology to propel the music industry",
                            "forward through a digital licensing",
                            "framework that mirrors the Internet's needs",
                            "and developments.",
                        ].map((text, key) => (
                            <TextUp key={key}>
                                <p className={style.description}>
                                    {text}
                                </p>
                            </TextUp>
                        ))
                    }
                </div>


                <div className={style.cardsMobile}>
                    {
                        cards.map((card, key) => (
                            <Card key={key} {...card}/>
                        ))
                    }
                </div>

                <div className={style.cardsDesktop}>
                    <div className={style.left}>
                        <Card {...cards[0]}/>
                    </div>
                    <div className={style.right}>
                        <Card {...cards[1]}/>
                        <Card {...cards[2]}/>
                    </div>
                </div>


            </div>


        </div>
    )
}

//========= CARD =========//
const Card: FC<ICard> = ({step, label, buttonLabel, href}) => {
    return (
        <div className={style.card}
        >
            <div className={style.top}>
                <p className={style.step}>{step}</p>
                <p className={style.label}>{label}</p>
            </div>
            <ButtonCustom label={buttonLabel}
                          href={href}
            />
        </div>
    )
}