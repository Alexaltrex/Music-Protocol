import {Screen} from "../../components/x_common/Screen/Screen";
import {Cards} from "../../components/C0_TechnologyPage0/C0_1_Cards/Cards";
import {screen} from "./screen";
import {Editor} from "../../components/x_common/Editor/Editor";

const TechnologyPage0 = () => {
    return (
        <div>
            <Screen {...screen}/>
            <Cards/>

            {/*<div style={{*/}
            {/*    padding: "40px 100px",*/}
            {/*    background: "#FFF",*/}
            {/*}}>*/}
            {/*    <Editor/>*/}
            {/*</div>*/}
        </div>
    )
}
export default TechnologyPage0