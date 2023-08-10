export interface CompositionButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    size?: "large" | "small";
    color?: string;
}

const CompositionButton = ({
    text,
    size,
    color,
    ...props
}: CompositionButtonProps) => {
    const padding = size === "large" ? "p-8" : "p-4";
    const fontSize = size === "large" ? "text-xl" : "text-lg";

    return (
        <button className={`${padding} ${fontSize} bg-${color}-100`} {...props}>
            {text}
        </button>
    );
};

export default CompositionButton;
