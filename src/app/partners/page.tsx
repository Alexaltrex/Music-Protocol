import style from "./PartnersPage.module.scss"
import {WaveText} from "../../components/x_common/WaveText/WaveText";
import {JoinForm} from "../../components/x_common/JoinForm/JoinForm";
import {FormLinks} from "../../components/x_common/FormLinks/FormLinks";

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

                    <FormLinks/>

                    <p className={style.text}>
                        {`If you're working in the music industry and would like to find out how to get involved, fill out the form and we'll be in touch soon.`}
                    </p>


                </div>

                <JoinForm/>

            </div>
        </div>
    )
}
export default PartnersPage