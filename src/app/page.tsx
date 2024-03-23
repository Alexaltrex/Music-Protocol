import style from "./HomePage.module.scss";
import {ElevatingMusic} from "../components/B0_HomePage/B0_2_ElevatingMusic/ElevatingMusic";
import {screen} from "./screen";
import {Screen} from "../components/x_common/Screen/Screen";

const HomePage = () => {
    return (
        <div className={style.homePage}>
            <Screen {...screen}/>
            <ElevatingMusic/>
        </div>
    )
}

export default HomePage
