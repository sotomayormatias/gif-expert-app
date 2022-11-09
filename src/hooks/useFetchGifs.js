import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [gifs, setGifs] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    useEffect(()=> {
        getGifs(category).then((newGifs => {
            setGifs(newGifs);
            setisLoading(false);
        }));
    }, [category]);

    return {
        gifs,
        isLoading
    }
}