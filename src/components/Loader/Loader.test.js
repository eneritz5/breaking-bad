import { render, screen } from "@testing-library/react";
import { Loader } from "./Loader";

describe('Loader', () => {
    it("loading", () => {
        render(<Loader/>)
        const textLoader = screen.findAllByTestId('loader_text');
        expect(textLoader).toBeTruthy();
    })
})