import {screen} from "./screen";
import {Screen} from "../../components/x_common/Screen/Screen";
import {Slider} from "../../components/x_common/Slider/Slider";
import {slides} from "./slides";
import {ScreenWithCircles} from "../../components/x_common/ScreenWithCircles/ScreenWithCircles";
import {screenWithCircles} from "./screenWithCircles";
import {screenWithEditor} from "../technology1/screenWithEditor";
import {ScreenWithEditor} from "../../components/x_common/ScreenWithEditor/ScreenWithEditor";

const TechnologyPage4 = () => {
    return (
        <div>
            <Screen {...screen}/>
            <ScreenWithCircles {...screenWithCircles}/>
            <Slider slides={slides}/>
            <ScreenWithEditor {...screenWithEditor}/>
        </div>
    )
}
export default TechnologyPage4