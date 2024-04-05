import {screen} from "./screen";
import {Screen} from "../../components/x_common/Screen/Screen";
import {Slider} from "../../components/x_common/Slider/Slider";
import {slides} from "./slides";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "AI",
};

const IndustryPage1 = () => {
    return (
        <div>
            <Screen {...screen}/>
            <Slider slides={slides}/>
        </div>
    )
}
export default IndustryPage1