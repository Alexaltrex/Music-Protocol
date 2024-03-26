import style from "./FieldTextarea.module.scss";
import {DetailedHTMLProps, FC, TextareaHTMLAttributes, useState} from "react";
import {clsx} from "clsx";
import {useField} from "formik";

interface IFieldCustom extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    label: string
    name: string
    className?: string
}

export const FieldTextarea: FC<IFieldCustom> = ({
                                                label,
                                                name,
                                                className,
                                                ...props
                                            }) => {
    const [field, meta, helpers] = useField(name);

    const [focus, setFocus] = useState(false);

    const onFocus = () => setFocus(true);

    return (
        <div className={clsx(style.fieldTextarea, Boolean(className) && className)}>
            <p className={style.label}>
                {label}
            </p>

            <div className={clsx({
                [style.textareaWrapper]: true,
                [style.textareaWrapper_focus]: focus && !(meta.touched && meta.error),
                [style.textareaWrapper_error]: meta.touched && meta.error,
            })}>

                <textarea {...props}
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