import React, { createContext, useContext } from 'react'
import { GiphyFetch } from '@giphy/js-fetch-api'
import { useState } from 'react';


const GifContext = createContext();

const GifProvider = ({children}) => {
    const gf =new GiphyFetch(import.meta.env.VITE_GIPHY_KEY);
    const[gifs,setGifs] = useState([]);
    const[filter , setFilter] = useState("gifs");
    
    
    return(<GifContext.Provider value={{gf ,gifs,setGifs,filter,setFilter}}>{children}</GifContext.Provider>);

    
};

export const GifState=()=>{
    return useContext(GifContext);
}



export default GifProvider
