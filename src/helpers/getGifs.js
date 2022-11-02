export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=UgW7C9NyAG5OtjjMAGWuZGtHT3iSROLZ&q=${category}&limit=5`;
    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map((gif)=>(
        {id: gif.id, src: gif.images.fixed_height_small.url, title: gif.title}
    ));
    
    return gifs;
}