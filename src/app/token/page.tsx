import {screen} from "./screen";
import {Screen} from "../../components/x_common/Screen/Screen";
import {Diagram} from "../../components/x_common/Diagram/Diagram";
import {Faq} from "./Faq/Faq";
import {Cards} from "./Cards/Cards";
import {MusicReward} from "./MusicReward/MusicReward";
import lottie from "../../../public/lottie/Music_Protocol.json";

const TokenPage = () => {
    return (
        <div>
            <Screen {...screen}/>
            <Diagram black={false}
                     lottie={lottie}
            />
            <Cards/>
            <MusicReward/>
            <Faq/>

        </div>
    )
}
export default TokenPage