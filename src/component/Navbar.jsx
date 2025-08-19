import React from 'react'
import { Link } from 'react-router-dom'
import { HiEllipsisVertical,HiMiniBars3BottomRight } from "react-icons/hi2";
import { useState } from 'react';




const Navbar = () => {

  const[showCategories , setShowCategories] = useState(false);

  return (
    <div>
        <nav className='flex relative justify-between items-center '>
        <div>
        <Link to="/" className='text-5xl flex gap-2'>
        <img src="../giphy_logo_icon-freelogovectors.net_.png " alt="Logo not visible" className="w-8" />
        GIPHY
        </Link>
        </div>
        <div> 
          {/* {category} */}
        <div className='font-bold text-md flex gap-2 items-center'>
        <Link to ="/favourites" className="gradient">Favourite Gifs</Link>
        <button onClick={() => (setShowCategories(!showCategories))} 
        className={`py-0.5 transition ease-in-out ${showCategories?"gradient-hover":""} border-b-4 cursor-pointer hidden lg:block`}>
          <HiEllipsisVertical size={35}/>
        </button>
        <button onClick={() => setShowCategories(!showCategories)}>
            <HiMiniBars3BottomRight
              className="text-sky-400 block lg:hidden"
              size={30}
            />
          </button>
        </div>
        </div>
        { showCategories && 
        <div className='absolute right-0 top-14 px-10 pt-6 pb-9 w-full gradient z-20 '> 
          <span className="text-3xl font-extrabold">Categories</span>
            <hr className="bg-gray-100 opacity-50 my-5" />
          <span>Reaction</span>
        </div>
        }
      </nav>
    </div>
  )
}

export default Navbar
