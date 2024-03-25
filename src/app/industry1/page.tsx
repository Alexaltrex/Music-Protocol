import {screen} from "./screen";
import {Screen} from "../../components/x_common/Screen/Screen";
import {Slider} from "../../components/x_common/Slider/Slider";
import {slides} from "./slides";

const IndustryPage1 = () => {
    return (
        <div>
            <Screen {...screen}/>
            <Slider slides={slides}/>
        </div>
    )
}
export default IndustryPage1