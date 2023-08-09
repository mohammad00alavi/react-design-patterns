import printProps from "./printProps";

interface WrapperProps {
    name: string;
    age: number;
    role: string;
}

const ChildComponent = () => {
    return (
        <div>
            <h2>Lorem, ipsum.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    );
};

const Wrapper = printProps<WrapperProps>(ChildComponent);

const PrintPropsDemo = () => {
    return <Wrapper name="David Benji" age={22} role="Senior developer" />;
};

export default PrintPropsDemo;
