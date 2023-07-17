import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('test on useFetchGifs', () => {
    test('should return initial state', () => {
        const {result} = renderHook(() => useFetchGifs('Goku'));
        const { gifs, isLoading } = result.current;

        expect(gifs.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('should return gifs after render', async() => {
        const {result} = renderHook(() => useFetchGifs('Goku'));

        await waitFor(
            () => expect(result.current.gifs.length).toBeGreaterThan(0)
        );
        const { gifs, isLoading } = result.current;

        expect(gifs.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
});