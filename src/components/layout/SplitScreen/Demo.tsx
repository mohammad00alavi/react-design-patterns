import FirstSplitScreen from "./version-1/SplitScreen";
import SplitScreen from "./version-2";

/* Example children components */
const LeftHandComponent = () => {
    return <h1 style={{ backgroundColor: "green" }}>Left!</h1>;
};

const RightHandComponent = () => {
    return <p style={{ backgroundColor: "red" }}>Right!</p>;
};

const SplitScreenDemo = () => {
    return (
        <>
            {/* Version 1 */}
            <FirstSplitScreen
                left={LeftHandComponent}
                right={RightHandComponent}
            />
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
