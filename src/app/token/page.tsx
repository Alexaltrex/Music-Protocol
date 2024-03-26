import {screen} from "./screen";
import {Screen} from "../../components/x_common/Screen/Screen";
import {Diagram} from "../../components/x_common/Diagram/Diagram";
import {Faq} from "./Faq/Faq";
import {Cards} from "./Cards/Cards";
import {MusicReward} from "./MusicReward/MusicReward";

const TokenPage = () => {
    return (
        <div>
            <Screen {...screen}/>
            <Diagram black={false}
                     src={{
                         mobile: "/jpeg/diagram_mobile.jpg",
                         desktop: "/jpeg/diagram_desktop.jpg"
                     }}
            />
            <Cards/>
            <MusicReward/>
            <Faq/>

        </div>
    )
}
export default TokenPage