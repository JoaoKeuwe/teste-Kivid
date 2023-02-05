import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom";
import App from '../App'


describe("Titulo", () => {
    test("Deve conter o Título ' buscador de cep' dentro de um h1", () => {
        render(<App /> );

        const title = screen.getByRole('heading', {
            name: /buscador de cep/i
          })
        expect(title).toBeInTheDocument();
    });
})

describe("Input", () => {
    test("Deve conter o Input para queo usuário digite o CEP", () => {
        render(<App /> );
        const input = screen.getByRole('textbox')
        expect(input).toBeInTheDocument();
    });
})


describe("Botão", () => {
    test("Deve conter um botão com um SVG", () => {
        render(<App /> );

        // eslint-disable-next-line testing-library/no-node-access
        const card = document.querySelector('#send > svg')
        expect(card).toBeInTheDocument();
    });
})
