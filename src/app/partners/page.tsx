import style from "./PartnersPage.module.scss"
import {WaveText} from "../../components/x_common/WaveText/WaveText";
import {backgrounds} from "../../const/backgrounds";
import {ButtonCustom, ButtonVariantEnum} from "../../components/x_common/ButtonCustom/ButtonCustom";
import {JoinForm} from "../../components/x_common/JoinForm/JoinForm";

const title = {
    mobile: [
        "Join the Music",
        "Protocol",
        "Ecosystem",
    ],
    desktop: [
        "Join the Music",
        "Protocol Ecosystem",
    ]
}


const PartnersPage = () => {
    return (
        <div className={style.partnersPage}>
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

                    <p className={style.text}>
                        Are you involved in the music industry and you want to interact with us to build something new related to the wide filed of music IP digitisation?
                    </p>


                </div>

                <JoinForm/>

            </div>
        </div>
    )
}
export default PartnersPage