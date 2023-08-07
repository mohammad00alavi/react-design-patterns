import { ReactNode, useState } from "react";

interface Props {
    children: ReactNode;
}

const Modal = ({ children }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <button onClick={() => setIsOpen(true)}>Show modal</button>
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed z-1 left-0 top-0 w-full h-full overflow-auto bg-black/[0.5]"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white mx-auto my-[10%] p-5 w-2/4"
                    >
                        <button onClick={() => setIsOpen(false)}>
                            Hide modal
                        </button>

                        {children}
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
