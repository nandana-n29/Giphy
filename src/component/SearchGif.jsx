import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { HiMiniXMark,HiOutlineMagnifyingGlass } from 'react-icons/hi2';

const SearchGif = () => {
    const navigate = useNavigate();
    const[query , setQuery] = useState("");

    const searchGifs = async() => {
        if(query.trim()==="")
            return;

        navigate(`/search/${query}`);

    };

  return (
    <div className='flex relative mt-4 '>

        <input type="text" value={query} placeholder="Search all the GIFs and Stickers" onChange={ (e) => {setQuery(e.target.value)}} className='w-full pl-4 pr-14 py-5 text-xl text-black rounded-tl rounded-bl border border-gray-300 outline-none' />  

        {<button onClick={ () => setQuery("")}><HiMiniXMark size={22} className="absolute bg-gray-300 opacity-90 rounded-full right-20 mr-2 top-6 "/></button>}  

        {<button onClick={searchGifs} className="bg-gradient-to-tr from-pink-600 to-pink-400 text-white px-4 py-2 rounded-tr rounded-br"> <HiOutlineMagnifyingGlass size={35} className="-scale-x-100" /></button>}  
    </div>
  )
}

export default SearchGif
