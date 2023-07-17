import PropTypes from "prop-types";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./gifItem";

export const GifGrid = ({category}) => {

    const { gifs, isLoading } = useFetchGifs(category);

    return (
        <>
            <h2>{category}</h2>
            {
                isLoading 
                    ? <h2>Cargando...</h2>
                    : <div className='card-grid'>
                        {gifs.map(gif => (
                            <GifItem key={gif.id} {...gif} />
                        ))}
                    </div>
            }
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}