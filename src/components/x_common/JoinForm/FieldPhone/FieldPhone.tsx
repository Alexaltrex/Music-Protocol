"use client";

import {DetailedHTMLProps, FC, InputHTMLAttributes, useEffect, useRef, useState} from "react";
import {useField} from "formik";
import {useOutsideButNotOnTargetClick} from "../../../../hooks/useOutsideButNotOnTargetClick";
import {clsx} from "clsx";
import {svgIcons} from "../../../../assets/svgIcons";
import style from "./FieldPhone.module.scss";
import {hasFlag} from 'country-flag-icons'
import codes from 'country-calling-code';
import {phoneMasks} from "../../../../const/phoneMasks";
import {useMask} from '@react-input/mask';

interface IFieldPhone extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    phoneIndex: number,
    onSelectHandler: (index: number) => void
}

export const FieldPhone: FC<IFieldPhone> = ({
                                                phoneIndex,
                                                onSelectHandler,
                                                ...props
                                            }) => {
    //console.log(codes)

    const [
        field,
        meta,
        helpers
    ] = useField("phone");

    const [focus, setFocus] = useState(false);

    const onFocus = () => setFocus(true);


    const ref = useRef<HTMLDivElement>(null!);
    const targetRef = useRef<HTMLDivElement>(null!);
    const dropdownRef = useRef<HTMLDivElement>(null!);

    const [open, setOpen] = useState(false);

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


    // const inputRef = useMask(
    //     {
    //         // @ts-ignore
    //         mask: phoneMasks.hasOwnProperty(codes[phoneIndex].isoCode2)
    //             // @ts-ignore
    //             ? phoneMasks[codes[phoneIndex].isoCode2]
    //             : "##-###-####",
    //         replacement: {"#": /\d/}
    //     }
    // );


    return (
        <div className={style.fieldPhone}
             ref={ref}
        >

            <p className={style.label}>
                Phone
            </p>

            <div className={clsx({
                [style.wrapper]: true,
                [style.wrapper_open]: open || focus,
                [style.wrapper_error]: meta.touched && meta.error,
            })}
            >

                <div className={style.left}
                     onClick={() => setOpen(!open)}
                     ref={targetRef}
                >
                    <div className={style.left_left}>
                        <img alt={codes[phoneIndex].country}
                             src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${codes[phoneIndex].isoCode2}.svg`}
                             className={style.flag}
                        />
                        <p className={style.code}>
                            (+{codes[phoneIndex].countryCodes[0]})
                        </p>
                    </div>

                    {svgIcons.slider_arrow}
                </div>

                <div className={style.right}>

                    {/*<input className={style.maskinput}/>*/}

                    <input {...props}
                           ref={
                               useMask(
                                   {
                                       // @ts-ignore
                                       mask: phoneMasks.hasOwnProperty(codes[phoneIndex].isoCode2)
                                           // @ts-ignore
                                           ? phoneMasks[codes[phoneIndex].isoCode2]
                                           : "##-###-####",
                                       replacement: {"#": /\d/}
                                   }
                               )
                           }
                           placeholder={
                               (phoneMasks.hasOwnProperty(codes[phoneIndex].isoCode2)
                                   // @ts-ignore
                                   ? phoneMasks[codes[phoneIndex].isoCode2]
                                   // @ts-ignore
                                   : "##-###-####").split("").map(el => el === "#" ? "0" : el).join("")
                           }
                           name={field.name}
                           value={field.value}
                           onChange={field.onChange}
                           onFocus={onFocus}
                           onBlur={(e) => {
                               setFocus(false);
                               field.onBlur(e);
                           }}
                    />
                </div>

                {
                    meta.touched && meta.error && (
                        <p className={style.error}>
                            {meta.error}
                        </p>
                    )
                }

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
                                    codes.map(({isoCode2, countryCodes, country}, key) => {
                                            if (!hasFlag(isoCode2) || !Object.keys(phoneMasks).includes(isoCode2)) return null
                                            return (
                                                <div key={key}
                                                     className={style.dropdownItem}
                                                     onClick={() => {
                                                         onSelectHandler(key);
                                                         setOpen(false);
                                                         helpers.setValue("");
                                                     }}
                                                >
                                                    <img alt={country}
                                                         src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${isoCode2}.svg`}
                                                         className={style.flag}
                                                    />

                                                    <p className={style.code}>
                                                        {`(+${countryCodes[0]})`}
                                                    </p>

                                                    <p className={style.country}>
                                                        {country}
                                                    </p>
                                                </div>
                                            )
                                        }
                                    )
                                }
                            </div>

                        </div>
                    )
                }
            </div>
        </div>
    )
}