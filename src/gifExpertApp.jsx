import React from "react";
import { useState } from "react";
import { GifGrid, Input } from "./components";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([]);

    const handleSearch = (input) => {
        setCategories([input, ...categories])
    }

    return (
        <>
            <h1>Gif Expert App</h1>

            <Input onSearch={handleSearch} />
            {categories.map((category)=>(
                <GifGrid key={category} category={category} />
            ))}
        </>
    )
};
