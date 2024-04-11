import {screen} from "./screen";
import {Screen} from "../../../components/x_common/Screen/Screen";
import {Slider} from "../../../components/x_common/Slider/Slider";
import {slides} from "./slides";
import {ScreenWithCircles} from "../../../components/x_common/ScreenWithCircles/ScreenWithCircles";
import {screenWithCircles} from "./screenWithCircles";
import {ScreenWithEditor} from "../../../components/x_common/ScreenWithEditor/ScreenWithEditor";
import type {Metadata} from "next";
import {screenWithEditor} from "../../../const/screenWithEditor";

export const metadata: Metadata = {
    title: "IP Inter-Chain Distribution Gateway",
};

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