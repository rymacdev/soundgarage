import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="flex flex-row items-center sticky w-full p-6 bg-slate-200 justify-between gap-4">
      <div><input type="search" placeholder="Search library..." name="search-library" className="border-2 border-slate-300 rounded py-1 px-2 w-30 sm:w-80"/></div>
      <div className="flex flex-row items-center">
        <div className="flex flex-row items-center"><FontAwesomeIcon icon={faCircleUser} className="text-slate-400 text-2xl hover:text-slate-500 cursor-not-allowed"/></div>
      </div>
    </div>
  )
}

export default Header;
