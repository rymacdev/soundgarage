import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faForward, faBackward } from "@fortawesome/free-solid-svg-icons";

function Player() {
  return (
    <div className="flex flex-row justify-between items-center sticky bottom-0 p-6 w-full z-50 bg-slate-200/50 box-border text-slate-700">
      <div className="text-sm p-0">Song Title by Song Artist</div>
      <div className="flex flex-row items-center gap-4 w-40 text-slate-400">
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
        <p className="text-sm p-0">Album: Libreng Experimento</p>
      </div>
    </div>
  )
}

export default Player;
