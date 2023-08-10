import React from "react";

export interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    size?: "large" | "small";
    color?: string;
}

const Button = ({ text, size, color, ...props }: Button) => {
    const padding = size === "large" ? "p-8" : "p-4";
    const fontSize = size === "large" ? "text-xl" : "text-lg";

    return (
        <button className={`${padding} ${fontSize} bg-${color}-100`} {...props}>
            {text}
        </button>
    );
};

export default Button;
