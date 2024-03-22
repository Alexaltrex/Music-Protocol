import style from "./HomePage.module.scss";
import {DynamicMusic} from "../components/B0_HomePage/B0_0_DynamicMusic/DynamicMusic";
import {ElevatingMusic} from "../components/B0_HomePage/B0_2_ElevatingMusic/ElevatingMusic";

const HomePage = () => {
    return (
        <div className={style.homePage}>
            <DynamicMusic/>
            <ElevatingMusic/>
        </div>
    )
}

export default HomePage
