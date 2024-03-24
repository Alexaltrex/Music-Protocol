import {screen} from "./screen";
import {Screen} from "../../components/x_common/Screen/Screen";
import {Slider} from "../../components/x_common/Slider/Slider";
import {slides} from "./slides";
import {screenWithCircles} from "./screenWithCircles";
import {ScreenWithCircles} from "../../components/x_common/ScreenWithCircles/ScreenWithCircles";

const TechnologyPage3 = () => {
    return (
        <div>
            <Screen {...screen}/>
            <ScreenWithCircles {...screenWithCircles}/>
            <Slider slides={slides}/>
        </div>
    )
}
export default TechnologyPage3