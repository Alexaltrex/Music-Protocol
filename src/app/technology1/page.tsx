import {Screen} from "../../components/x_common/Screen/Screen";
import {Slider} from "../../components/x_common/Slider/Slider";
import {slides} from "./slides";
import {screen} from "./screen";
import {screenWithCircles} from "./screenWithCircles";
import {ScreenWithCircles} from "../../components/x_common/ScreenWithCircles/ScreenWithCircles";
import {ScreenWithEditor} from "../../components/x_common/ScreenWithEditor/ScreenWithEditor";
import {screenWithEditor} from "./screenWithEditor";
import {Diagram} from "../../components/x_common/Diagram/Diagram";
import lottie from "../../../public/lottie/IP_Core.json"

const TechnologyPage1 = () => {
    return (
        <div>
            <Screen {...screen}/>
            <Diagram lottie={lottie}/>
            <ScreenWithCircles {...screenWithCircles}/>
            <Slider slides={slides}/>
            <ScreenWithEditor {...screenWithEditor}/>
        </div>
    )
}
export default TechnologyPage1