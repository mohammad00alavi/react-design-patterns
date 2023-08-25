import { screen, render, waitFor } from "@testing-library/react";
import { describe, test } from "@jest/globals";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import ControlledForm from "./ControlledForm";

describe("<ControlledForm />", () => {
    test("should handle inputs and show the success message", async () => {
        render(<ControlledForm />);
        const firstNameMessage = screen.getByText(
            /please fill your first name/i
        );
        expect(firstNameMessage).toHaveTextContent(
            "Please fill your first name"
        );
        const firstName = screen.getByRole("textbox", {
            name: /first name:/i,
        });
        userEvent.type(firstName, "Luis");
        await waitFor(() => {
            expect(firstName).toHaveValue("Luis");
        });
        await waitFor(() => {
            screen.getByText(/please fill your last name/i);
        });
        const lastNameMessage = screen.getByText(/please fill your last name/i);
        expect(lastNameMessage).toHaveTextContent("Please fill your last name");
        const lastName = screen.getByRole("textbox", {
            name: /last name:/i,
        });
        userEvent.type(lastName, "Andres");
        await waitFor(() => {
            expect(lastName).toHaveValue("Andres");
        });
        // test age
        await waitFor(() => {
            screen.getByText(/please fill your age/i);
        });
        const ageMessage = screen.getByText(/please fill your age/i);
        expect(ageMessage).toHaveTextContent("Please fill your age");
        const age = screen.getByRole("spinbutton", {
            name: /years of experience:/i,
        });
        userEvent.type(age, "5");
        await waitFor(() => {
            expect(age).toHaveValue(5);
        });
        screen.debug();
        // TODO - check the final message
    });
});
