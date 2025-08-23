import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiEllipsisVertical, HiMiniBars3BottomRight } from "react-icons/hi2";
import { GifState } from "../context/gifcontext";
import SearchGif from "./SearchGif";

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);

  const { gf } = GifState();

  const fetchCategories = async () => {
    try {
      const res = await fetch(
        `https://api.giphy.com/v1/gifs/categories?api_key=${
          import.meta.env.VITE_GIPHY_KEY
        }`
      );
      const json = await res.json();
      setCategories(json.data);
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <nav className="relative w-full">
      {/* Top Navbar */}
      <div className="flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link to="/" className="text-5xl flex gap-2 items-center">
          <img
            src="/giphy_logo_icon-freelogovectors.net_.png"
            alt="Logo not visible"
            className="w-8"
          />
          GIPHY
        </Link>

        {/* Main Menu */}
        <div className="font-bold text-md flex gap-4 items-center">
          {categories?.slice(0, 5)?.map((category) => (
            <Link
              key={category.name_encoded}
              to={`/${category.name_encoded}`}
              className="gradient-hover"
            >
              {category.name}
            </Link>
          ))}

          <Link to="/favourites" className="gradient-hover">
            Favourite Gifs
          </Link>

          {/* Desktop Toggle */}
          <button
            onClick={() => setShowCategories(!showCategories)}
            className={`py-0.5 transition ease-in-out ${
              showCategories ? "gradient-hover" : ""
            } border-b-4 cursor-pointer hidden lg:block`}
          >
            <HiEllipsisVertical size={35} />
          </button>

          {/* Mobile Toggle */}
          <button onClick={() => setShowCategories(!showCategories)}>
            <HiMiniBars3BottomRight
              className="text-sky-400 block lg:hidden"
              size={30}
            />
          </button>
        </div>
      </div>

      {/* Categories Dropdown */}
      {showCategories && (
        <div className="absolute right-0 top-14 px-10 pt-6 pb-9 w-full gradient z-20">
          <span className="text-3xl font-extrabold">Categories</span>
          <hr className="bg-gray-100 opacity-50 my-5" />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {categories?.map((category) => (
              <Link
                key={category.name_encoded}
                onClick={() => setShowCategories(false)}
                className="transition ease-in-out font-bold"
                to={`/${category.name_encoded}`}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Search Bar */}
      <SearchGif />
    </nav>
  );
};

export default Navbar;
