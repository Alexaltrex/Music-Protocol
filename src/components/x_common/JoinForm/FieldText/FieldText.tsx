import style from "./FieldText.module.scss";
import {DetailedHTMLProps, FC, InputHTMLAttributes, useState} from "react";
import {clsx} from "clsx";
import {useField} from "formik";

interface IFieldCustom extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label: string
    name: string
    className?: string
}

export const FieldText: FC<IFieldCustom> = ({
                                                label,
                                                name,
                                                className,
                                                ...props
                                            }) => {
    const [field, meta, helpers] = useField(name);

    const [focus, setFocus] = useState(false);

    const onFocus = () => setFocus(true);

    return (
        <div className={clsx(style.fieldText, Boolean(className) && className)}>
            <p className={style.label}>
                {label}
            </p>

            <div className={clsx({
                [style.inputWrapper]: true,
                [style.inputWrapper_focus]: focus && !(meta.touched && meta.error),
                [style.inputWrapper_error]: meta.touched && meta.error,
            })}>

                <input {...props}
                       name={field.name}
                       value={field.value}
                       onChange={field.onChange}
                       onFocus={onFocus}
                       onBlur={(e) => {
                           setFocus(false);
                           field.onBlur(e);
                       }}
                />

                {
                    meta.touched && meta.error && (
                        <p className={style.error}>
                            {meta.error}
                        </p>
                    )
                }

            </div>

        </div>
    )
}