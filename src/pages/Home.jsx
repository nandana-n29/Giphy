import React from 'react'
import { GifState } from '../context/gifcontext';
// import { GifState } from '../context/gifcontext';
import Gif from '../component/Gif';
import { useEffect } from 'react';


const Home = () => {

  const {gf,gifs,setGifs,filter,setFilter} = GifState();

  const fetchTrending = async() => {
    const result= await fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=${import.meta.env.VITE_GIPHY_KEY}`
    );
    const output = await result.json();
    console.log(output.data);
    setGifs(output.data);
    


  };

  useEffect( () => {
    fetchTrending();
  }, [filter]);

  return (
    <div>
      {/* <Filter></Filter> */}

      <div >
        {gifs?.map( (gif) => {
          return<Gif gif={gif} key={gif.id}/>

        })
        }
        
        
      </div>
      
    </div>
  )
}

export default Home
