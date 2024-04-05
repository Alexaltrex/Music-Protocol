import type {Metadata} from "next";
import "../assets/styles/globals.css";
import {mulish} from "../assets/fonts/fonts";
import style from "./Layout.module.scss";
import {clsx} from "clsx";
import {Header} from "../components/A0_Header/Header";
import {StoreProvider} from "../store/StoreProvider";
import {BurgerMenu} from "../components/A1_BurgerMenu/BurgerMenu";
import {Footer} from "../components/A2_Footer/Footer";
import {Preloader} from "../components/A3_Preloader/Preloader";

export const metadata: Metadata = {
    title: "Music Protocol - Home",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en">
        <body className={clsx(mulish.className, style.layout)}>
        <link rel="icon" href="/favicon.ico" sizes="any"/>
        <StoreProvider>
            <>
                {/*<Preloader/>*/}
                <Header/>
                <BurgerMenu/>

                <main className={style.main}>
                    {children}
                </main>

                <Footer/>
            </>
        </StoreProvider>

        </body>

        </html>
    );
}
