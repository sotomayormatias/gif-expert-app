import { getGifs } from "../../src/helpers/getGifs";

describe('getGifs()', ()=>{
    test('getGifs should return a list of gifs', async ()=> {
        const gifs = await getGifs('Dragon Ball');
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual(
            {
                id: expect.any(String),
                src: expect.any(String),
                title: expect.any(String)
            }
        )
    });
});