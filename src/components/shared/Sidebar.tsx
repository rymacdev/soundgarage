import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompactDisc, faUser, faHome, faMusic, faCog } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Sidebar(props: any) {

  return (
    <div ref={props.sidebarRef} className="md:flex flex-col w-20 justify-items-between sm:w-80 bg-slate-900 text-white p-3 sm:p-6 hidden ">
      <div className="flex-1">
        <div className="mt-6 mb-12 ml-4 text-xl font-bold hidden sm:block">SoundGarage Music Library</div>
        <div className="flex flex-col gap-2">
            <div><Link to="/" className="flex flex-row items-center gap-4 hover:bg-slate-700 p-4 rounded-lg"><FontAwesomeIcon icon={faHome} /> <span className="hidden sm:block">Home</span></Link></div>
            <div><Link to="/Albums" className="flex flex-row items-center gap-4 hover:bg-slate-700 p-4 rounded-lg"><FontAwesomeIcon icon={faCompactDisc} /> <span className="hidden sm:block">Albums</span></Link></div>
            <div><Link to="/Artists" className="flex flex-row items-center gap-4 hover:bg-slate-700 p-4 rounded-lg"><FontAwesomeIcon icon={faUser} /> <span className="hidden sm:block">Artists</span></Link></div>
            <div><Link to="/Genres" className="flex flex-row items-center gap-4 hover:bg-slate-700 p-4 rounded-lg"><FontAwesomeIcon icon={faMusic} /> <span className="hidden sm:block">Genres</span></Link></div>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-2">
            <div><Link to="/Settings" className="flex flex-row items-center gap-4 hover:bg-slate-700 p-4 rounded-lg"><FontAwesomeIcon icon={faCog} /> <span className="hidden sm:block">Settings</span></Link></div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
