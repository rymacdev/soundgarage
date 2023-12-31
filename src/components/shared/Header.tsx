import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

function Header(props: any) {

  useEffect(() => {
    if (props.menuHidden) {
      props.sidebarRef.current.style.display = "none";
    } else  {
      props.sidebarRef.current.style.display = "flex";
    }
  }, [props.menuHidden]);

  return (
    <div className="flex flex-row items-center sticky w-full bg-slate-200 justify-between">
      <div>
        <button className="text-slate-200 bg-blue-700 p-4 sm:p-6" onClick={() => {
            props.setMenuHidden(!props.menuHidden);
          }}>
          <FontAwesomeIcon icon={props.menuHidden ? faBars : faXmark} />
        </button>
      </div>
      <div><input type="search" placeholder="Search library..." name="search-library" className="border-2 border-slate-300 rounded py-1 px-2 w-30 sm:w-80 hidden sm:block"/></div>
      <div className="flex flex-row items-center p-4 sm:p-6">
        <div className="flex flex-row items-center"><FontAwesomeIcon icon={faCircleUser} className="text-slate-400 text-2xl hover:text-slate-500 cursor-not-allowed"/></div>
      </div>
    </div>
  )
}

export default Header;
