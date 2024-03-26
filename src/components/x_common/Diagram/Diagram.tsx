import {FC} from "react";
import style from "./Diagram.module.scss";
import {clsx} from "clsx";

export interface IDiagram {
    black?: boolean
    src: {
        mobile: string
        desktop: string
    }
}

export const Diagram: FC<IDiagram> = ({
                                          black = true,
                                          src: {
                                              mobile,
                                              desktop
                                          },
                                      }) => {
    return (
        <div className={clsx({
            [style.diagram]: true,
            [style.diagram_white]: !black,
        })}>
            <div className={style.inner}>
                <img src={mobile} alt=""/>
                <img src={desktop} alt=""/>
            </div>
        </div>
    )
}