import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./gifItem";

export const GifGrid = ({category}) => {

    const [gifs, setGifs] = useState([]);

    useEffect(()=> {
        getGifs(category).then((newGifs => {
            setGifs(newGifs);
        }));
    }, [category]);

    return (
        <>
            <h2>{category}</h2>
            <div className='card-grid'>
                {gifs.map(gif => (
                    <GifItem key={gif.id} {...gif} />
                ))}
            </div>
        </>
    )
}