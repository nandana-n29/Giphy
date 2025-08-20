import React from 'react'
import { GifState } from '../context/gifcontext'
import { Link } from 'react-router-dom'

const Gif = ({gif}) => {

    // const{gf,gifs,setGifs,}
  return (
    <div>
        <Link key={gif.id} to={`/${gif.title}s/${gif.slug}`}>
        
            <img src={gif.images.original.webp}  alt={gif.title}/>
        
        </Link>


      
    </div>
  )
}

export default Gif
