import {screen} from "./screen";
import {Screen} from "../../components/x_common/Screen/Screen";
import {Slider} from "../../components/x_common/Slider/Slider";
import {slides} from "./slides";
import {screenWithCircles} from "./screenWithCircles";
import {ScreenWithCircles} from "../../components/x_common/ScreenWithCircles/ScreenWithCircles";
import {ScreenWithEditor} from "../../components/x_common/ScreenWithEditor/ScreenWithEditor";
import type {Metadata} from "next";
import {screenWithEditor} from "../technology1_ip_core_asset_library/screenWithEditor";

export const metadata: Metadata = {
    title: "IP Settlement Gateway",
};

const TechnologyPage3 = () => {
    return (
        <div>
            <Screen {...screen}/>
            <ScreenWithCircles {...screenWithCircles}/>
            <Slider slides={slides}/>
            <ScreenWithEditor {...screenWithEditor}/>
        </div>
    )
}
export default TechnologyPage3