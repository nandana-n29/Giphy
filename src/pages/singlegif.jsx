import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GifState } from "../context/gifcontext";
import Gif from "../component/Gif";

import { HiOutlineExternalLink } from "react-icons/hi";
import { HiMiniChevronDown, HiMiniChevronUp, HiMiniHeart } from "react-icons/hi2";
import { FaPaperPlane } from "react-icons/fa6";
import { IoCodeSharp } from "react-icons/io5";

const contentType = ["gifs", "stickers", "texts"];

const SingleGif = () => {
  const { type, slug } = useParams();
  const [gif, setGif] = useState(null);
  const [relatedGifs, setRelatedGifs] = useState([]);
  const [readMore, setReadMore] = useState(false);

  const { gf, addToFavorites, favorites = [] } = GifState(); // fallback for safety

  useEffect(() => {
    if (!type || !contentType.includes(type)) {
      console.error("Invalid Content Type");
      return;
    }

    const fetchGif = async () => {
      try {
        const gifIdParts = slug?.split("-") || [];
        const gifId = gifIdParts[gifIdParts.length - 1];

        if (!gifId) return;

        const { data } = await gf.gif(gifId);
        const { data: related } = await gf.related(gifId, { limit: 10 });

        setGif(data);
        setRelatedGifs(related);
      } catch (err) {
        console.error("Error fetching gif:", err);
      }
    };

    fetchGif();
  }, [type, slug, gf]);

  const shareGif = () => {
    if (gif?.url) {
      navigator.clipboard.writeText(gif.url);
      alert("GIF link copied to clipboard!");
    }
  };

  const EmbedGif = () => {
    if (gif?.embed_url) {
      navigator.clipboard.writeText(gif.embed_url);
      alert("Embed code copied to clipboard!");
    }
  };

  return (
    <div className="grid grid-cols-4 my-10 gap-4">
      {/* Left Sidebar */}
      <div className="hidden sm:block">
        {gif?.user && (
          <>
            <div className="flex gap-1">
              <img
                src={gif.user.avatar_url}
                alt={gif.user.display_name}
                className="h-14"
              />
              <div className="px-2">
                <div className="font-bold">{gif.user.display_name}</div>
                <div className="faded-text">@{gif.user.username}</div>
              </div>
            </div>
            {gif.user.description && (
              <p className="py-4 whitespace-pre-line text-sm text-gray-400">
                {
                   gif.user.description
                  }
                <div
                  className="flex items-center faded-text cursor-pointer"
                  //onClick={() => setReadMore(!readMore)}
                >
                  {/* {readMore ? (
                    <>
                      Read less <HiMiniChevronUp size={20} />
                    </>
                  ) : (
                    <>
                      Read more <HiMiniChevronDown size={20} />
                    </>
                  )} */}
                </div>
              </p>
            )}
          </>
        )}

        <div className="divider" />

        {/* {gif?.source && (
          <div>
            <span className="faded-text">Source</span>
            <div className="flex items-center text-sm font-bold gap-1">
              <HiOutlineExternalLink size={25} />
              <a href={gif.source} target="_blank" rel="noreferrer" className="truncate">
                {gif.source}
              </a>
            </div>
          </div>
        )} */}
      </div>

      {/* Main Content */}
      <div className="col-span-4 sm:col-span-3">
        <div className="flex gap-6">
          <div className="w-full sm:w-3/4">
            <div className="faded-text truncate mb-2">{gif?.title}</div>
            {gif && <Gif gif={gif} hover={false} />}

            {/* -- Mobile UI -- */}
            {gif?.user && (
              <div className="flex sm:hidden gap-1">
                <img
                  src={gif.user.avatar_url}
                  alt={gif.user.display_name}
                  className="h-14"
                />
                <div className="px-2">
                  <div className="font-bold">{gif.user.display_name}</div>
                  <div className="faded-text">@{gif.user.username}</div>
                </div>

                <button className="ml-auto" onClick={shareGif}>
                  <FaPaperPlane size={25} />
                </button>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="hidden sm:flex flex-col gap-5 mt-6">
            <button
              onClick={() => gif && addToFavorites(gif.id)}
              className="flex gap-5 items-center font-bold text-lg"
            >
              <HiMiniHeart
                size={30}
                className={favorites?.includes(gif?.id) ? "text-red-500" : ""}
              />
              Favorite
            </button>
            <button onClick={shareGif} className="flex gap-6 items-center font-bold text-lg">
              <FaPaperPlane size={25} />
              Share
            </button>
            <button onClick={EmbedGif} className="flex gap-5 items-center font-bold text-lg">
              <IoCodeSharp size={30} />
              Embed
            </button>
          </div>
        </div>

        {/* Related GIFs */}
        {relatedGifs.length > 0 && (
          <div>
            <span className="font-extrabold">Related GIFs</span>
            <div className="columns-2 md:columns-3 gap-2">
              {relatedGifs.slice(1).map((gif) => (
                <Gif gif={gif} key={gif.id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleGif;
