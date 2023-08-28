import { render, screen } from "@testing-library/react";
import { describe, test } from "@jest/globals";
import CurrentDataLoaderDemo from "./Demo";
import "@testing-library/jest-dom";
import { user } from "./utils";

describe("<CurrentDataLoaderDemo />", () => {
    test("test CurrentDataLoaderDemo component", () => {
        render(<CurrentDataLoaderDemo />);

        const nameElement = screen.getByText(/Name:/i);
        expect(nameElement).toHaveTextContent(user.name);

        const ageElement = screen.getByText(/Age:/i);
        expect(ageElement).toHaveTextContent(String(user.age));

        user.hobbies.forEach((hobby) => {
            const hobbyElement = screen.getByText(hobby);
            expect(hobbyElement).toBeInTheDocument();
        });
    });
});
