"use client";

import style from "./FieldTimezone.module.scss";
import timezones from 'timezones-list';
import {SelectProps} from "@mui/material";
import {useEffect, useRef, useState} from "react";
import {clsx} from "clsx";
import {svgIcons} from "../../../../assets/svgIcons";
import {useOutsideClick} from "../../../../hooks/useOutsideClick";
import {useOutsideButNotOnTargetClick} from "../../../../hooks/useOutsideButNotOnTargetClick";

// label: "Pacific/Midway (GMT-11:00)"
// name: "(GMT-11:00) Midway"
// tzCode: "Pacific/Midway"
// utc: "-11:00"


export const FieldTimezone = (props: SelectProps) => {
    const ref = useRef<HTMLDivElement>(null!);
    const targetRef = useRef<HTMLDivElement>(null!);
    const dropdownRef = useRef<HTMLDivElement>(null!);

    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const [bottom, setBottom] = useState(0);
    useEffect(() => {
        setBottom(ref?.current?.getBoundingClientRect().bottom);
    }, [ref.current])

    const [innerHeight, setInnerHeight] = useState(0);

    useEffect(() => {
        setInnerHeight(window.innerHeight);
    }, []);


    useEffect(() => {
        const handleResize = (event: any) => {
            setInnerHeight(event.target.innerHeight);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handler = (event: any) => {
            setBottom(ref?.current?.getBoundingClientRect().bottom);
        };
        window.addEventListener('scroll', handler);
        return () => {
            window.removeEventListener('scroll', handler);
        };
    }, []);

    //console.log(innerHeight, bottom)

    useOutsideButNotOnTargetClick(dropdownRef, targetRef, () => setOpen(false));

    return (
        <div className={style.fieldTimezone}
             ref={ref}
        >

            <p className={style.label}>
                Timezone
            </p>

            <div className={clsx({
                [style.wrapper]: true,
                [style.wrapper_open]: open,
            })}
            >

                <div className={style.left}
                     onClick={() => setOpen(!open)}
                     ref={targetRef}
                >
                    <p className={style.utc}>
                        {
                            `(GMT ${timezones[selectedIndex].utc.slice(0,3)})`
                        }
                    </p>
                    {svgIcons.slider_arrow}
                </div>

                <div className={style.right}>
                    <p className={style.tzCode}>
                        {timezones[selectedIndex].tzCode}
                    </p>
                </div>

                {
                    open && (
                        <div className={clsx({
                            [style.dropdown]: true,
                            [style.dropdown_top]: innerHeight && bottom && innerHeight - bottom < 250,
                        })}
                             ref={dropdownRef}
                        >
                            <div className={style.dropdownInner}>
                                {
                                    timezones.map(({utc, tzCode}, key) => (
                                        <p key={key}
                                           className={style.dropdownItem}
                                           onClick={() => {
                                               setSelectedIndex(key);
                                               setOpen(false);
                                           }}
                                        >
                                            <span>{`(GMT ${utc.slice(0,3)})`}</span> {tzCode}
                                        </p>
                                    ))
                                }
                            </div>

                        </div>
                    )

                }


            </div>


        </div>
    )
}


