import style from "./Loading.module.scss";
import {outfit} from "../assets/fonts/fonts";

const Loading = () => {

    return (
        <div className={style.loading}>
            <p className={outfit.className}>Loading...</p>
        </div>
    )
}
export default Loading