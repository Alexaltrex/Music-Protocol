import {Mulish, Roboto_Mono, Outfit} from "next/font/google";
import localFont from 'next/font/local'

export const mulish = Mulish({
    subsets: ["latin"],
    // weight: [
    //     '400',
    //     '500',
    //     '700',
    // ],
});

export const outfit = Outfit({
    subsets: ["latin"],
    weight: [
        '300'
    ]
})

export const gilroy = localFont({
    src: "./Gilroy-Light.otf",
    display: "swap"
})

export const robotoMono = Roboto_Mono({
    subsets: ["latin"],
})

