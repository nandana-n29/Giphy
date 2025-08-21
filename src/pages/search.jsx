import {useEffect, useState} from "react";
import {GifState} from "../context/gifcontext";
import {useParams} from "react-router-dom";
import Gif from "../component/Gif";

import Filter from "../component/Filter";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);

  const {gf, filter} = GifState();

  const {query} = useParams();

  const fetchSearchResults = async () => {
    let endpoint = "";

    if (filter === "gifs") {
      endpoint = "gifs";
    } else if (filter === "stickers") {
      endpoint = "stickers";
    } 
    const result = await fetch(
  `https://api.giphy.com/v1/${endpoint}/search?api_key=${
    import.meta.env.VITE_GIPHY_KEY
  }&q=${encodeURIComponent(query)}&limit=10&rating=g`
);
    const output = await result.json();
    console.log(output.data);
    setSearchResults(output.data);


  };

  useEffect(() => {
    fetchSearchResults();
  }, [filter,query]);

  return (
    <div className="my-4">
      <h2 className="text-5xl pb-3 font-extrabold">{query}</h2>
      <Filter />
      {searchResults.length > 0 ? (
        <div className="columns-2 md:columns-3 lg:columns-4 gap-2">
          {searchResults.map((gif) => (
            <Gif gif={gif} key={gif.id} />
          ))}
        </div>
      ) : (
        <span>
          No GIFs found for {query}. Try searching for Stickers instead?
        </span>
      )}
    </div>
  );
};

export default SearchPage;
