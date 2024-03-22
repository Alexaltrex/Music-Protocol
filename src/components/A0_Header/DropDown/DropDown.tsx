'use client'
import {mulish} from "../../../assets/fonts/fonts";
import {svgIcons} from "../../../assets/svgIcons";
import React, {FC, useRef, useState} from "react";
import style from "./DropDown.module.scss";
import {clsx} from "clsx";
import {RouteEnum, Submenu} from "../Submenu/Submenu";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

interface IDropDown {
    label: string
    className?: string
    route: RouteEnum
}

export const DropDown: FC<IDropDown> = ({
                                            label,
                                            className,
                                            route
                                        }) => {
    const [open, setOpen] = useState(false);

    const onMouseEnter = () => setOpen(true)
    const onMouseLeave = () => setOpen(false)

    const appRef = useRef<HTMLDivElement>(null!);

    useGSAP(() => {
        gsap.to(".modal", {
            scale: open ? 1 : 0.8,
            opacity: open ? 1 : 0,
            display: open ? "block" : "none",
            duration: 0.3,
        });
    }, {dependencies: [open], scope: appRef});

    return (
        <div className={clsx(style.dropDown, Boolean(className) && className)}
             onMouseEnter={onMouseEnter}
             onMouseLeave={onMouseLeave}
             ref={appRef}
        >

            <button className={clsx({
                [style.button]: true,
                [style.button_open]: open,
            })}>
                <span className={mulish.className}>{label}</span>
                {svgIcons.link_arrow}
            </button>

            <div className={clsx(style.modal, "modal")}>
                <Submenu route={route}
                         onClick={() => setOpen(false)}
                />
            </div>

        </div>
    )
}