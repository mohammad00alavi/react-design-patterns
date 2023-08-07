import FirstSplitScreen from "./version-1/SplitScreen";
import SplitScreen from "./version-2";

/* Example children components */
interface Props {
    name?: string;
    message?: string;
}
const LeftHandComponent = ({ name }: Props) => {
    return <h1 style={{ backgroundColor: "green" }}>{name}</h1>;
};

const RightHandComponent = ({ message }: Props) => {
    return <p style={{ backgroundColor: "red" }}>{message}!</p>;
};

const SplitScreenDemo = () => {
    return (
        <>
            {/* Version 1 */}
            <FirstSplitScreen leftWeight={1} rightWeight={3}>
                <LeftHandComponent name="Leo" />
                <RightHandComponent message="Hey there" />
            </FirstSplitScreen>
            {/* Version 2 */}
            <SplitScreen.Container>
                <SplitScreen.Pane>
                    <LeftHandComponent />
                </SplitScreen.Pane>
                <SplitScreen.Pane>
                    <RightHandComponent />
                </SplitScreen.Pane>
            </SplitScreen.Container>
        </>
    );
};

export default SplitScreenDemo;
