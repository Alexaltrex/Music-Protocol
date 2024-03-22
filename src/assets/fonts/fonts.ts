import {Mulish} from "next/font/google";
import localFont from 'next/font/local'

export const mulish = Mulish({
    subsets: ["latin"],
    // weight: [
    //     '400',
    //     '500',
    //     '700',
    // ],
});

export const gilroy = localFont({
    src: "./Gilroy-Light.otf",
    display: "swap"
})

