import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faForwardStep, faBackwardStep, faCirclePause } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState, useEffect } from "react";

function Player(props: any) {

  const audioRef = useRef(document.createElement("audio"));

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  });

  return (

    <div className="flex flex-row sticky bottom-0 w-full z-50 bg-slate-800 sm:bg-slate-200 box-border text-slate-300 sm:text-slate-700">
      
      <audio src={props.songs[0].songfile} ref={audioRef} ></audio>
      <div className="h-24 sm:h-20 aspect-square relative" aria-label="Current Playlist">
        <img className="aspect-square" src={props.songs[props.currentSongIndex].artwork} alt="props.songs[props.currentSongIndex].title" />
      </div>
      <div className="flex flex-col sm:flex-row gap-2 justify-center content-center sm:justify-between items-center p-4 w-full">
        <div className="text-sm p-0">{props.songs[props.currentSongIndex].title} by {props.songs[props.currentSongIndex].artist}</div>
        <div className="flex flex-row justify-center items-center gap-4 w-40 text-slate-400">
          <button className="skip-btn hover:text-blue-600">
            <FontAwesomeIcon icon={faBackwardStep} />
          </button>
          <button onClick={() => setIsPlaying(!isPlaying)} className="play-btn hover:text-blue-600">
            <FontAwesomeIcon icon={isPlaying ? faCirclePause : faCirclePlay} className="text-2xl"/>
          </button>
          <button className="skip-btn hover:text-blue-600">
            <FontAwesomeIcon icon={faForwardStep} />
          </button>
        </div>
        <div>
          <p className="text-sm p-0 hidden sm:block">Current Playlist: {props.songs[props.currentSongIndex].album}</p>
        </div>
      </div>
      
    </div>
  )
}

export default Player;
