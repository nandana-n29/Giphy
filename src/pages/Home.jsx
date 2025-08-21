import React from 'react'
import { GifState } from '../context/gifcontext';
// import { GifState } from '../context/gifcontext';
import Gif from '../component/Gif';
import { useEffect } from 'react';
import Filter from '../component/Filter';


const Home = () => {

  const {gf,gifs,setGifs,filter,setFilter} = GifState();

  const fetchTrending = async() => {
    let endpoint = "";

    if (filter === "gifs") {
      endpoint = "gifs";
    } else if (filter === "stickers") {
      endpoint = "stickers";
    } 
    const result= await fetch(
      `https://api.giphy.com/v1/${endpoint}/trending?api_key=${import.meta.env.VITE_GIPHY_KEY}`
    );
    const output = await result.json();
    console.log(output.data);
    setGifs(output.data);
    


  };

  useEffect( () => {
    fetchTrending();
  }, [filter]);

  return (
    <div className='w-full min-h-screen overflow-hidden'>
      <img
        src="/banner.gif"
        alt="earth banner"
        className="mt-2 rounded w-full"
      />
    
    <div>

      <Filter showTrending></Filter>

      <div >
        {gifs?.map( (gif) => {
          return<Gif gif={gif} key={gif.id}/>

        })
        }
        
        
      </div>
      
    </div>
    </div>
  )
}

export default Home
