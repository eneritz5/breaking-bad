import { render, screen } from "@testing-library/react";
import {Menu} from './Menu';

describe('Menu', () => {
    it("muestra boton de ingles", () => {
        render(<Menu />)
        const english = screen.findAllByTestId('english')
        expect(english).toBeTruthy();
    })
})
