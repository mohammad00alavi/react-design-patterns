import { screen, render, act, waitFor } from "@testing-library/react";
import { describe, test } from "@jest/globals";
import "@testing-library/jest-dom";
import DataProvider from "./DataProvider";
import DataProviderDemo, { Heading } from "../Demo";

// Mock localStorage
type LocalStorage = {
    getItem: (key: string) => string | null;
    setItem: (key: string, value: string) => void;
    clear: () => void;
    removeItem: (key: string) => void;
};

const localStorageMock: LocalStorage = (() => {
    let store: Record<string, string> = {};
    return {
        getItem: (key) => store[key] || null,
        setItem: (key, value) => {
            store[key] = value.toString();
        },
        clear: () => {
            store = {};
        },
        removeItem: (key) => {
            delete store[key];
        },
    };
})();

Object.defineProperty(window, "localStorage", {
    value: localStorageMock,
});
// TODO - fix the problem with this test
describe("<DataProvider />", () => {
    test("test DataProvider component", async () => {
        await waitFor(() => {
            localStorageMock.setItem("hello", "hello");
        });
        await act(async () => {
            render(
                <DataProvider getDataFunc={() => "hello"} dataKey="hello">
                    <Heading />
                </DataProvider>
            );
        });
        await waitFor(() => {
            screen.getByRole("heading");
        });
        screen.debug();
        const heading = screen.getByRole("heading");
        expect(heading).toHaveTextContent("hello");
    });

    test("test DataProvider component when there is no data in local storage", async () => {
        await act(async () => {
            render(<DataProviderDemo />);
        });
        const heading = screen.getByRole("heading");
        expect(heading).toHaveTextContent("No data found");
    });
});
