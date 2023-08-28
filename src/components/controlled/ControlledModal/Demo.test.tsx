import { screen, render, act, waitFor } from "@testing-library/react";
import { describe, test } from "@jest/globals";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import ModalDemo from "../../layout/Modal/Demo";
describe("<ModalDemo />", () => {
    test("test if the modal works fine", async () => {
        await act(async () => render(<ModalDemo />));
        userEvent.click(
            screen.getByRole("button", {
                name: /show modal/i,
            })
        );
        await waitFor(() => {
            screen.getByRole("heading", {
                name: /lorem, ipsum dolor\./i,
            });
        });
        expect(
            screen.getByRole("heading", {
                name: /lorem, ipsum dolor\./i,
            })
        ).toHaveTextContent("Lorem, ipsum dolor.");
        expect(
            screen.getByText(
                /lorem ipsum dolor sit amet consectetur adipisicing elit\. alias, ea\./i
            )
        ).toHaveTextContent(
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ea."
        );
        userEvent.click(
            screen.getByRole("button", {
                name: /hide modal/i,
            })
        );
        await waitFor(() =>
            screen.getByRole("button", {
                name: /show modal/i,
            })
        );
        await new Promise((resolve) => setTimeout(resolve, 100));
        expect(
            screen.getByRole("button", {
                name: /show modal/i,
            })
        ).toHaveTextContent("Show modal");
        screen.debug();
    });
});
