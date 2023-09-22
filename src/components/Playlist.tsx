import { faPlayCircle, faPlusCircle, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Playlist() {
  return (
    <div className="my-6 rounded-xl bg-white p-6">
      <div>
        <h2 className="font-semibold mb-4">Recommended</h2>
      </div>
      <div className="flex flex-col gap-2">

        <div className="flex flex-row items-center justify-between py-4 px-4 rounded-xl gap-3 bg-slate-100 hover:border-blue-600 border border-slate-100 box-border">
          <div className="flex flex-row flex-1 items-center gap-3">
            <FontAwesomeIcon icon={faPlayCircle} className="text-blue-700 text-xl"/>
            <div className="flex flex-col flex-1 justify-between lg:flex-row gap-0 lg:gap-8">
              <p className="flex flex-row items-center gap-3">Title of the song</p>
              <p className="text-sm text-slate-600 lg:text-base">Yordaddy</p>
              <p className="text-sm text-slate-600 lg:text-base">Libreng Experimento</p>
              <p className="text-sm text-slate-600 lg:text-base">3:43</p>
            </div>
          </div>
          <div className="flex flex-row justify-end gap-4 lg:w-40">
            <div><FontAwesomeIcon icon={faPlusCircle} className="text-slate-300 hover:text-blue-400"/></div>
            <div><FontAwesomeIcon icon={faHeart} className="text-slate-400 hover:text-blue-400"/></div>
          </div>
        </div>
        
        <div className="flex flex-row items-center justify-between py-4 px-4 rounded-xl gap-3 bg-slate-100 hover:border-blue-600 border border-slate-100 box-border">
          <div className="flex flex-row flex-1 items-center gap-3">
            <FontAwesomeIcon icon={faPlayCircle} className="text-blue-700 text-xl"/>
            <div className="flex flex-col flex-1 justify-between lg:flex-row gap-0 lg:gap-8">
              <p className="flex flex-row items-center gap-3">Title of the song</p>
              <p className="text-sm text-slate-600 lg:text-base">Yordaddy</p>
              <p className="text-sm text-slate-600 lg:text-base">Libreng Experimento</p>
              <p className="text-sm text-slate-600 lg:text-base">3:43</p>
            </div>
          </div>
          <div className="flex flex-row justify-end gap-4 lg:w-40">
            <div><FontAwesomeIcon icon={faPlusCircle} className="text-slate-300 hover:text-blue-400"/></div>
            <div><FontAwesomeIcon icon={faHeart} className="text-slate-400 hover:text-blue-400"/></div>
          </div>
        </div>
        
        <div className="flex flex-row items-center justify-between py-4 px-4 rounded-xl gap-3 bg-slate-100 hover:border-blue-600 border border-slate-100 box-border">
          <div className="flex flex-row flex-1 items-center gap-3">
            <FontAwesomeIcon icon={faPlayCircle} className="text-blue-700 text-xl"/>
            <div className="flex flex-col flex-1 justify-between lg:flex-row gap-0 lg:gap-8">
              <p className="flex flex-row items-center gap-3">Title of the song</p>
              <p className="text-sm text-slate-600 lg:text-base">Yordaddy</p>
              <p className="text-sm text-slate-600 lg:text-base">Libreng Experimento</p>
              <p className="text-sm text-slate-600 lg:text-base">3:43</p>
            </div>
          </div>
          <div className="flex flex-row justify-end gap-4 lg:w-40">
            <div><FontAwesomeIcon icon={faPlusCircle} className="text-slate-300 hover:text-blue-400"/></div>
            <div><FontAwesomeIcon icon={faHeart} className="text-slate-400 hover:text-blue-400"/></div>
          </div>
        </div>
        
        <div className="flex flex-row items-center justify-between py-4 px-4 rounded-xl gap-3 bg-slate-100 hover:border-blue-600 border border-slate-100 box-border">
          <div className="flex flex-row flex-1 items-center gap-3">
            <FontAwesomeIcon icon={faPlayCircle} className="text-blue-700 text-xl"/>
            <div className="flex flex-col flex-1 justify-between lg:flex-row gap-0 lg:gap-8">
              <p className="flex flex-row items-center gap-3">Title of the song</p>
              <p className="text-sm text-slate-600 lg:text-base">Yordaddy</p>
              <p className="text-sm text-slate-600 lg:text-base">Libreng Experimento</p>
              <p className="text-sm text-slate-600 lg:text-base">3:43</p>
            </div>
          </div>
          <div className="flex flex-row justify-end gap-4 lg:w-40">
            <div><FontAwesomeIcon icon={faPlusCircle} className="text-slate-300 hover:text-blue-400"/></div>
            <div><FontAwesomeIcon icon={faHeart} className="text-slate-400 hover:text-blue-400"/></div>
          </div>
        </div>
        
        <div className="flex flex-row items-center justify-between py-4 px-4 rounded-xl gap-3 bg-slate-100 hover:border-blue-600 border border-slate-100 box-border">
          <div className="flex flex-row flex-1 items-center gap-3">
            <FontAwesomeIcon icon={faPlayCircle} className="text-blue-700 text-xl"/>
            <div className="flex flex-col flex-1 justify-between lg:flex-row gap-0 lg:gap-8">
              <p className="flex flex-row items-center gap-3">Title of the song</p>
              <p className="text-sm text-slate-600 lg:text-base">Yordaddy</p>
              <p className="text-sm text-slate-600 lg:text-base">Libreng Experimento</p>
              <p className="text-sm text-slate-600 lg:text-base">3:43</p>
            </div>
          </div>
          <div className="flex flex-row justify-end gap-4 lg:w-40">
            <div><FontAwesomeIcon icon={faPlusCircle} className="text-slate-300 hover:text-blue-400"/></div>
            <div><FontAwesomeIcon icon={faHeart} className="text-slate-400 hover:text-blue-400"/></div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Playlist;
