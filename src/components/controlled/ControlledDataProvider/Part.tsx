import { createRef, useEffect } from "react";
import { PartProps } from "./types";

const Part = ({ handleNext, title, placeHolder, name, type }: PartProps) => {
    const currentRef = createRef<HTMLInputElement>();
    useEffect(() => {
        if (currentRef.current) {
            currentRef.current.focus();
        }
    }, []);
    const clickHandler = () => {
        if (currentRef.current?.value && handleNext) {
            handleNext({
                [name]: {
                    value: currentRef.current?.value,
                    title: title,
                },
            });
        }
    };
    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            clickHandler();
        }
    };

    return (
        <div className="flex gap-2 bg-blue-100 p-10 rounded items-center">
            <label htmlFor={name}>{placeHolder}:</label>
            <input
                id={name}
                type={type}
                name={name}
                ref={currentRef}
                placeholder={placeHolder}
                onKeyDown={handleKeyDown}
                className="p-2 bg-gray-100"
            />
            <button onClick={clickHandler}>Next</button>
        </div>
    );
};

export default Part;
