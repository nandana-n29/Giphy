import React from 'react'
import { Link } from 'react-router-dom'
import { HiEllipsisVertical } from "react-icons/hi2";



const Navbar = () => {
  return (
    <div>
        <nav className='flex relative justify-between items-center '>
        <div>
        <Link to="/" className='text-5xl flex gap-2'>
        <img src="../giphy_logo_icon-freelogovectors.net_.png " alt="Logo not visible" className="w-8" />
        GIPHY
        </Link>
        </div>
        <div className='font-bold text-md flex gap-2 items-center'>
        <Link to="/reactions">Reactions</Link>
        <Link to="/adjective">Adjective</Link>
        <Link to ="/animals">Animals</Link>
        <Link to ="/anime">Anime</Link>
        <Link to ="/art&design">Art & Design</Link>
        <Link to ="/favourites"><HiEllipsisVertical  /></Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
