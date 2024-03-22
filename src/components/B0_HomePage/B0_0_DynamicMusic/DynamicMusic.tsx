'use client'

import style from "./DynamicMusic.module.scss"
import {WaveText} from "../../x_common/WaveText/WaveText";
import {TextUp} from "../../x_common/TextUp/TextUp";
import {ButtonCustom, ButtonVariantEnum} from "../../x_common/ButtonCustom/ButtonCustom";

export const DynamicMusic = () => {
    return (
        <div className={style.dynamicMusic}>
            <div className={style.inner}>

                <WaveText label="Dynamic Music"
                          className={style.titleMobile}
                          textClassName={style.title}
                          size={40}
                />
                <WaveText label="IP for Web3"
                          className={style.titleMobile}
                          textClassName={style.title}
                          size={40}
                />

                <WaveText label="Dynamic Music IP"
                          className={style.titleDesktop}
                          textClassName={style.title}
                          size={64}
                />
                <WaveText label="for Web3"
                          className={style.titleDesktop}
                          textClassName={style.title}
                          size={64}
                />

                <div className={style.descriptionMobile}>
                    <TextUp>
                        <p className={style.description}>
                            Transforming music IP and licensing for
                        </p>
                    </TextUp>
                    <TextUp>
                        <p className={style.description}>
                            the full digital landscape.
                        </p>
                    </TextUp>
                </div>

                <div className={style.descriptionDesktop}>
                    <TextUp>
                        <p className={style.description}>
                            Transforming music IP and licensing for the
                        </p>
                    </TextUp>
                    <TextUp>
                        <p className={style.description}>
                            full digital landscape.
                        </p>
                    </TextUp>
                </div>

                <ButtonCustom label="View documentation"
                              href="#"
                              className={style.viewBtn}
                              variant={ButtonVariantEnum.outlined}
                />

            </div>


        </div>
    )
}