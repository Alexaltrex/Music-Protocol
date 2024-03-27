import style from "./HomePage.module.scss";
import {ElevatingMusic} from "../components/B0_HomePage/ElevatingMusic/ElevatingMusic";
import {screen} from "./screen";
import {Screen} from "../components/x_common/Screen/Screen";
import {TransformingMusic} from "../components/B0_HomePage/TransformingMusic/TransformingMusic";

const HomePage = () => {
    return (
        <div className={style.homePage}>
            <Screen {...screen}/>
            <ElevatingMusic/>
            <TransformingMusic/>
        </div>
    )
}

export default HomePage
