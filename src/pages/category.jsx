import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Category = () => {
  const [categoryPage, setCategoryPage] = useState([])
  const { category } = useParams()

  const fetchCategoriesForPage = async () => {
    try {
      const res = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${import.meta.env.VITE_GIPHY_KEY}&q=${category}`
      )
      const json = await res.json()
      console.log(json.data)
      setCategoryPage(json.data)
    } catch (err) {
      console.error('Error fetching page:', err)
    }
  }

  useEffect(() => {
    fetchCategoriesForPage()
  }, [category])

  return (
    <div className="p-4">
      {/* Masonry layout */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
        {categoryPage.map((catpg) => (
          <div key={catpg.id} className="mb-4 break-inside-avoid">
            <img
              src={catpg.images.original.webp}
              alt={catpg.title}
              className="w-full rounded-lg shadow-md hover:opacity-90 transition"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Category
