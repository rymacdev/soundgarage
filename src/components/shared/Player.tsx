import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faForward, faBackward } from "@fortawesome/free-solid-svg-icons";

function Player() {
  return (
    <div className="flex flex-col justify-center sm:flex-row gap-2 sm:justify-between items-center sticky bottom-0 pt-6 pb-4 px-6 w-full z-50 bg-slate-800 sm:bg-slate-200 box-border text-slate-300 sm:text-slate-700">
      <div className="text-sm p-0">Song Title by Song Artist</div>
      <div className="flex flex-row justify-center items-center gap-4 w-40 text-slate-400">
        <button className="skip-btn hover:text-blue-600">
          <FontAwesomeIcon icon={faBackward} />
        </button>
        <button className="play-btn hover:text-blue-600">
          <FontAwesomeIcon icon={faCirclePlay} className="text-2xl"/>
        </button>
        <button className="skip-btn hover:text-blue-600">
          <FontAwesomeIcon icon={faForward} />
        </button>
      </div>
      <div>
        <p className="text-sm p-0 hidden sm:block">Album: Libreng Experimento</p>
      </div>
    </div>
  )
}

export default Player;
