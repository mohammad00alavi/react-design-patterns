import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    isOpen: boolean;
    closeHandler: () => void;
}

const ControlledModal = ({ isOpen, closeHandler, children }: Props) => {
    return (
        <>
            {isOpen && (
                <div
                    onClick={closeHandler}
                    className="fixed z-1 left-0 top-0 w-full h-full overflow-auto bg-black/[0.5]"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white mx-auto my-[10%] p-5 w-2/4"
                    >
                        <button onClick={closeHandler}>Hide modal</button>
                        {children}
                    </div>
                </div>
            )}
        </>
    );
};

export default ControlledModal;
