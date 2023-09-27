import { faPlayCircle, faPauseCircle, faPlusCircle, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useOutletContext } from "react-router-dom";
import { Songs } from "./shared/Layout";
import { useState } from "react";

function Playlist() {

  const [isPlaying, setIsPlaying] = useState(false);

  const data: Songs = useOutletContext();

  console.log(data)

  function handlePlay() {
    setIsPlaying(!isPlaying);
  }

  return (
    <div className="my-6 rounded-xl bg-white p-6">
      <div>
        <h2 className="font-semibold mb-4">Current Playlist</h2>
      </div>
      <div className="flex flex-col gap-2">

        {
          data ?
            data.map((song, key) => (
              <div key={key} className="flex flex-row items-center justify-between py-4 px-4 rounded-xl gap-3 bg-slate-100 hover:border-blue-600 border border-slate-100 box-border">
                <div className="flex flex-row flex-1 items-center gap-3">
                  <button className="text-l text-blue-700 hover:text-blue-300" onClick={handlePlay}>
                    <FontAwesomeIcon icon={isPlaying ? faPauseCircle : faPlayCircle} />
                  </button>
                  <div className="flex flex-col flex-1 justify-between lg:flex-row gap-0 lg:gap-8">
                    <p className="flex flex-row items-center gap-3">{song.title.replace(/^\s+|\s+$/gm,'').trim()}</p>
                    <p className="text-sm text-slate-600 lg:text-base hidden md:block">{song.artist.replace(/^\s+|\s+$/gm,'').trim()}</p>
                    <p className="text-sm text-slate-600 lg:text-base hidden md:block">{song.album.replace(/^\s+|\s+$/gm,'').trim()}</p>
                    <p className="text-sm text-slate-600 lg:text-base hidden md:block">3:43</p>
                  </div>
                </div>
                <div className="flex flex-row justify-end gap-4 lg:w-40">
                  <div><FontAwesomeIcon icon={faPlusCircle} className="text-slate-300 hover:text-blue-400"/></div>
                  <div><FontAwesomeIcon icon={faHeart} className="text-slate-400 hover:text-blue-400"/></div>
                </div>
              </div>
            ))
          : <div>no data</div>
        }

        
      </div>
    </div>
  )
}

export default Playlist;
