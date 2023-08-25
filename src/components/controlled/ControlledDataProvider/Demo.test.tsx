import { screen, render, waitFor } from "@testing-library/react";
import { describe, test } from "@jest/globals";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import ControlledDataProviderDemo from "./Demo";

describe("<ControlledDataProviderDemo />", () => {
    beforeEach(() => {
        render(<ControlledDataProviderDemo />);
    });
    test("should handle inputs and valid age", async () => {
        const firstName = screen.getByRole("textbox", {
            name: /First name/i,
        });
        userEvent.type(firstName, "Luis");
        await waitFor(() => {
            expect(firstName).toHaveValue("Luis");
        });
        userEvent.click(
            screen.getByRole("button", {
                name: /next/i,
            })
        );
        await waitFor(() =>
            screen.getByRole("textbox", {
                name: /Last name/i,
            })
        );
        const lastName = screen.getByRole("textbox", {
            name: /Last name/i,
        });
        userEvent.type(lastName, "Andres");
        await waitFor(() => {
            expect(lastName).toHaveValue("Andres");
        });
        userEvent.click(
            screen.getByRole("button", {
                name: /next/i,
            })
        );
        await waitFor(() =>
            screen.getByRole("spinbutton", {
                name: /age in digits:/i,
            })
        );
        const age = screen.getByRole("spinbutton", {
            name: /age in digits:/i,
        });
        userEvent.type(age, "20");
        await waitFor(() => {
            expect(age).toHaveValue(20);
        });
        userEvent.click(
            screen.getByRole("button", {
                name: /next/i,
            })
        );

        await waitFor(() => {
            screen.getByRole("heading", {
                name: /first name: luis/i,
            });
            screen.getByRole("heading", {
                name: /last name: andres/i,
            });
            screen.getByRole("heading", {
                name: /age: 20/i,
            });
        });
        const resultFirstName = screen.getByRole("heading", {
            name: /first name: luis/i,
        });
        expect(resultFirstName).toHaveTextContent("First name: Luis");
        const resultLastName = screen.getByRole("heading", {
            name: /last name: andres/i,
        });
        expect(resultLastName).toHaveTextContent("Last name: Andres");

        const resultAge = screen.getByRole("heading", {
            name: /age: 20/i,
        });
        expect(resultAge).toHaveTextContent("Age: 20");
    });

    test("should handle underage scenario and also reset the component", async () => {
        const firstName = screen.getByRole("textbox", {
            name: /First name/i,
        });
        userEvent.type(firstName, "Luis");
        await waitFor(() => {
            expect(firstName).toHaveValue("Luis");
        });
        userEvent.click(
            screen.getByRole("button", {
                name: /next/i,
            })
        );
        await waitFor(() =>
            screen.getByRole("textbox", {
                name: /Last name/i,
            })
        );
        const lastName = screen.getByRole("textbox", {
            name: /Last name/i,
        });
        userEvent.type(lastName, "Andres");
        await waitFor(() => {
            expect(lastName).toHaveValue("Andres");
        });
        userEvent.click(
            screen.getByRole("button", {
                name: /next/i,
            })
        );
        await waitFor(() =>
            screen.getByRole("spinbutton", {
                name: /age in digits:/i,
            })
        );
        const age = screen.getByRole("spinbutton", {
            name: /age in digits:/i,
        });
        userEvent.type(age, "17");
        await waitFor(() => {
            expect(age).toHaveValue(17);
        });
        userEvent.click(
            screen.getByRole("button", {
                name: /next/i,
            })
        );

        await waitFor(() => {
            screen.getByText(
                /you are not allowed to use our service, because you are under 18\./i
            );
        });
        const message = screen.getByText(
            /you are not allowed to use our service, because you are under 18\./i
        );
        expect(message).toHaveTextContent(
            "You are not allowed to use our service, because you are under 18."
        );
        userEvent.click(
            screen.getByRole("button", {
                name: /reset/i,
            })
        );
        await waitFor(() =>
            screen.getByRole("textbox", {
                name: /First name/i,
            })
        );
        const resetFirstName = screen.getByRole("textbox", {
            name: /First name/i,
        });
        expect(resetFirstName).toHaveTextContent("");
    });
});
