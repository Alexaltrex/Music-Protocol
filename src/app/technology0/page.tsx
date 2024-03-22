import {Screen} from "../../components/x_common/Screen/Screen";


const TechnologyPage0 = () => {
    return (
        <div>
            <Screen title={{
                mobile: [
                    "Advancing Music",
                    "Rights and",
                    "Ownership"
                ],
                desktop: [
                    "Advancing Music",
                    "Rights and Ownership",
                ]
            }}
                    description={[
                        "We are advancing the music rights",
                        "landscape. This transforms the music",
                        "industry's foundational infrastructure. We",
                        "harnessing the power of blockchain to",
                        "provide a secure, streamline and",
                        "transparent model.",
                    ]}
                    button={{
                        label: "Learn more"
                    }}
            />
        </div>
    )
}
export default TechnologyPage0