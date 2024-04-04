import {Screen} from "../../components/x_common/Screen/Screen";

import {screen} from "./screen";
import {Cards} from "../../components/C0_TechnologyPage0/Cards/Cards";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Advancing Music Rights and Ownership",
};

const TechnologyPage0 = () => {
    return (
        <div>
            <Screen {...screen}/>
            <Cards/>
        </div>
    )
}
export default TechnologyPage0