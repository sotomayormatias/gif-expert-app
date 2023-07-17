import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe('test on <gifGrid />', () => {
    const category = 'Dragon Ball';

    test('Should show loading at beginning', () => {
        const loading = 'Cargando...';

        useFetchGifs.mockReturnValue({
            gifs: [],
            isLoading: true
        })

        render(<GifGrid category={category}/>);
        expect(screen.getByText(loading));
        expect(screen.getByText(category));
    });

    test('Should show items after loading gifs with useFtechGifs', () => {

        const gifs = [
            {
                id: '123',
                src: 'https://www.mercadolibre.com.ar',
                title: 'Goku'
            },
            {
                id: '321',
                src: 'https://www.mercadolibre.com.ar',
                title: 'Gohan'
            },
            {
                id: '246',
                src: 'https://www.mercadolibre.com.ar',
                title: 'Vegeta'
            },
        ];

        useFetchGifs.mockReturnValue({
            gifs: gifs,
            isLoading: false
        })

        render(<GifGrid category={category}/>);
        expect(screen.getAllByRole('img').length).toBe(3);
    });
});