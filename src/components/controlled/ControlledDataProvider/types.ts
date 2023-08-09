import { ReactNode } from "react";

export interface Props {
    onNext: (data: Data) => void;
    children: ReactNode[];
    currentIndex: number;
}

export type DataItem = {
    value: string;
    title: string;
};

export type Data = {
    [key: string]: DataItem;
};

export type HandleNext = {
    handleNext: (data: Data) => void;
};

export interface PartProps {
    handleNext?: (data: Data) => void;
    title: string;
    name: string;
    placeHolder: string;
    type: "text" | "number";
}
