"use client"

import style from "./Faq.module.scss";
import {IItem, items, title} from "./const";
import {FC, useState} from "react";
import {svgIcons} from "../../../assets/svgIcons";
import {clsx} from "clsx";
import {Collapse} from "@mui/material";
import {WaveText} from "../../../components/x_common/WaveText/WaveText";
import {backgrounds} from "../../../const/backgrounds";


export const Faq = () => {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <div className={style.faq}>

            <div className={style.titleWrapper}>
                <div className={style.titleWrapperInner}>
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
                </div>
            </div>

            <div className={style.items}>
                {
                    items.map((item, key) => (
                        <Item key={key}
                              index={key}
                              selectedIndex={selectedIndex}
                              onClick={() => {
                                  setSelectedIndex(key === selectedIndex ? -1 : key)
                              }}
                              {...item}
                        />
                    ))
                }
            </div>

        </div>
    )
}

//========= ITEM =========//
interface IItemComponent extends IItem {
    selectedIndex: number
    index: number
    onClick: () => void
}

const Item: FC<IItemComponent> = ({
                                      selectedIndex,
                                      index,
                                      label,
                                      step,
                                      texts,
                                      onClick
                                  }) => {
    return (
        <div className={style.item}
             onClick={() => onClick()}
        >
            <div className={style.itemInner}>

                <div className={style.header}>
                    <div className={style.left}>
                        <div className={style.step}>
                            <span>{step}</span>
                        </div>
                        <p className={style.label}>{label}</p>
                    </div>
                    <div className={clsx({
                        [style.icon]: true,
                        [style.icon_open]: index === selectedIndex,
                    })}>
                        {svgIcons.slider_arrow}
                    </div>
                </div>

                <Collapse in={index === selectedIndex}>
                    <div className={style.answer}>
                        {
                            texts.map((text, key) => (
                                <div key={key}
                                     className={style.answerItem}
                                >
                                    <div className={style.dot}
                                         style={{background: backgrounds[key]}}
                                    />
                                    <p className={style.text}>{text}</p>
                                </div>
                            ))
                        }
                    </div>
                </Collapse>

            </div>
        </div>
    )
}