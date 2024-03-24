import style from "./Scheme.module.scss"

export const Scheme = () => {
    return (
        <div className={style.scheme}>
            <div className={style.inner}>
                <img src="/png/scheme_mobile.png" alt=""/>
                <img src="/png/scheme_desktop.png" alt=""/>
            </div>
        </div>
    )
}