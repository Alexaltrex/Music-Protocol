//"use client"

import style from "./DevelopersPage.module.scss"
import {WaveText} from "../../components/x_common/WaveText/WaveText";
import {backgrounds} from "../../const/backgrounds";
import {JoinForm} from "../../components/x_common/JoinForm/JoinForm";

const title = {
    mobile: [
        "Join the",
        "Developers",
        "community of",
        "Music Protocol",
    ],
    desktop: [
        "Join the Developers",
        "ecosystem",
    ]
}

const items = [
    "Receive updates and participate in the testnet phase",
    "Join in the protocol development, creating music IP code building blocks and getting rewarded",
    "Stay up to date about the Music Protocol grants programme",
]

const DevelopersPage = () => {

    return (
        <div className={style.developersPage}>
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
                </div>

                <JoinForm/>

            </div>
        </div>
    )
}
export default DevelopersPage