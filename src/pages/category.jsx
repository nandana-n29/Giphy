import React from 'react'
import { useParams } from 'react-router-dom'
import { useState , useEffect } from 'react';


const Category = () => {
  const[categoryPage , setCategoryPage] = useState([]);
const {category} = useParams();
 const fetchCategoriesForPage = async() => {
            try {
              const res = await fetch(
                `https://api.giphy.com/v1/gifs/search?api_key=${import.meta.env.VITE_GIPHY_KEY}&q=${category}`

              );
              const json = await res.json();
              console.log(json.data); 
              setCategoryPage(json.data); 
            } catch (err) {
              console.error("Error fetching page:", err);
            }
          }
      
        useEffect( () => {
           fetchCategoriesForPage();
        },[category]);

  return (
    
    <div>
      {
        categoryPage.map( (catpg) => { return<img src={catpg.images.original.webp}  alt={catpg.title}/> })
      }
     

      
    </div>
  )
}

export default Category
