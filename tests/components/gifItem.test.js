import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/gifItem";

describe('<GifItem /> test', () => {
    const titulo = 'titulo';
    const source = 'https://source.com/example.jpg';

    test('sholud', () => {
        const {container} = render(<GifItem title={titulo} src={source} />);
        expect(container).toMatchSnapshot();
    });

    test('should get img with title and source', () => {
        render(<GifItem title={titulo} src={source} />);

        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(source);
        expect(alt).toBe(titulo);
    });

    test('should get title', () => {
        render(<GifItem title={titulo} src={source} />);
        expect(screen.getByText(titulo)).toBeTruthy();
    });
})