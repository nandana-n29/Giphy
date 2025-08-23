import React, { useEffect } from 'react'
import { GifState } from '../context/gifcontext'
import Gif from '../component/Gif'
import Filter from '../component/Filter'

const Home = () => {
  const { gifs, setGifs, filter } = GifState()

  const fetchTrending = async () => {
    let endpoint = filter === "stickers" ? "stickers" : "gifs" // default gifs
    const result = await fetch(
      `https://api.giphy.com/v1/${endpoint}/trending?api_key=${import.meta.env.VITE_GIPHY_KEY}`
    )
    const output = await result.json()
    console.log(output.data)
    setGifs(output.data)
  }

  useEffect(() => {
    fetchTrending()
  }, [filter])

  return (
    <div className=" w-full min-h-screen overflow-x-hidden ">
      
       {/* <div className="mt-2 mx-2"> */}
    <img
      src="/banner.gif"
      alt="earth banner"
      className="w-full rounded-md px-2 mt-2 "
    />
       {/* </div> */}
      

      <div>
        <Filter showTrending />

        {/* Masonry layout */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 p-4">
          {gifs?.map((gif) => (
            <div key={gif.id} className="mb-4 break-inside-avoid">
              <Gif gif={gif} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
