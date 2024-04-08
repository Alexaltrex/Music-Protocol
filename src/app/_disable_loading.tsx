import style from "./Loading.module.scss";
import {outfit} from "../assets/fonts/fonts";

const _disable_loading = () => {

    return (
        <div className={style.loading}>
            <p className={outfit.className}>Loading...</p>
        </div>
    )
}
export default _disable_loading