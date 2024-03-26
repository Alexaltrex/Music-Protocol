"use client"

import style from "./JoinForm.module.scss"
import {Form, Formik, FormikErrors, FormikHelpers, FormikProps} from "formik";
import {FieldText} from "./FieldText/FieldText";
import {FieldTextarea} from "./FieldTextarea/FieldTextarea";
import {FieldTimezone} from "./FieldTimezone/FieldTimezone";

export interface IValues {
    name: string
    email: string
    phone: string
    link: string
    message: string
}

const initialValues = {
    name: "",
    email: "",
    phone: "",
    link: "",
    message: "",
}

const mailRegexp = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/;

const validate = ({name, email, phone, link, message,}: IValues): FormikErrors<IValues> => {
    const errors: FormikErrors<IValues> = {};

    if (!name) {
        errors.name = "Name required"
    }

    if (!mailRegexp.test(email)) {
        errors.email = "Invalid Email"
    }

    if (!email) {
        errors.email = "Email required"
    }

    if (!phone) {
        errors.phone = "Phone required"
    }

    if (!link) {
        errors.link = "Link required"
    }

    if (!message) {
        errors.message = "Message required"
    }

    return errors
}


export const JoinForm = () => {

    const onSubmit = async (values: IValues, formikHelpers: FormikHelpers<IValues>) => {
        try {
            console.log(values);

        } catch (e) {
            console.log(e)
        } finally {
            formikHelpers.resetForm();
        }
    }


    return (
        <div className={style.joinForm}>
            <p className={style.cardTitle}>
                Leave a request and we’ll answer you soon
            </p>

            <div className={style.formik}>
                <Formik initialValues={initialValues}
                        onSubmit={onSubmit}
                        validate={validate}
                >
                    {(props: FormikProps<IValues>) => (
                        <Form autoComplete="off">
                            <FieldText name="name" label="Name, Surname" className={style.field} placeholder="Enter"/>
                            <FieldText name="email" label="Email" className={style.field} placeholder="Enter"/>

                            <FieldTimezone/>

                            <FieldText name="link" label="GitHub" className={style.field} placeholder="Link"/>
                            <FieldTextarea name="message" label="Enter your message" className={style.field}
                                           placeholder="Enter"


                            />

                            <button type="submit"
                                    className={style.submitBtn}
                                    disabled={props.isSubmitting}
                            >
                                <span>Apply to join</span>
                            </button>

                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}