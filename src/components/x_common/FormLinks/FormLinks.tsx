"use client"

import style from "./FormLinks.module.scss";
import {ButtonCustom, ButtonVariantEnum} from "../ButtonCustom/ButtonCustom";
import {usePathname, useRouter} from "next/navigation";

export const FormLinks = () => {
    const pathname = usePathname();
    const router = useRouter();

    return (
        <div className={style.formLinks}>
            {
                [
                    {
                        label: "Devs",
                        href: "/developers",
                    },
                    {
                        label: "Startups",
                        href: "/startups",
                    },
                    {
                        label: "Partners",
                        href: "/partners",
                    },
                ].map(({label, href}, key) => (
                    <ButtonCustom key={key}
                                  label={label}
                                  className={style.btn}
                                  variant={href === pathname ? ButtonVariantEnum.orange : ButtonVariantEnum.outlined}
                                  onClick={() => router.push(href)}
                    />
                ))
            }
        </div>
    )
}