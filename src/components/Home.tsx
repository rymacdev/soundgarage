import Playlist from "./Playlist";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

function Home() {

  return (
    <div>
      <h1 className="text-3xl mb-6 pb-2">Home</h1>

      <div className="my-6 rounded-xl bg-white p-6 shadow-xl">
        <div>
          <h2 className="font-semibold mb-4">Spotlight</h2>
        </div>
        <div className="grid gap-4 grid-rows-4 grid-cols-8">
          <div className="bg-slate-900 rounded-lg row-span-4 col-span-8 lg:row-span-4 lg:col-span-4 overflow-hidden relative">
            <img src="/assets/images/banner-1200x600-01.jpg" className="w-full object-cover h-full opacity-70 hover:opacity-40" alt="banner" />
            <div className="absolute bottom-4 lg:bottom-8 left-6 lg:left-12 text-white">
              <h3 className="text-2xl lg:text-4xl">Bisrock Favourites</h3>
              <button className="flex flex-row items-center gap-2 my-1 py-2 pl-3 pr-5 bg-blue-900 hover:bg-blue-400 rounded-3xl text-xs lg:text-xs"><FontAwesomeIcon icon={faCirclePlay} /> Listen to this playlist</button>
            </div>
          </div>
          <div className="bg-slate-900 rounded-lg row-span-1 lg:row-span-4 lg:col-span-2 md:col-span-4 col-span-8 relative overflow-hidden">
            <img src="/assets/images/banner-1200x600-03.jpg" className="w-full object-cover h-full opacity-40 hover:opacity-20" alt="banner" />
            <div className="absolute bottom-8 left-6 text-white">
              <p className="text-xl">Libreng Experimento</p>
              <p className="text-neutral-300">by Yordaddy</p>
              <button className="flex flex-row items-center gap-2 my-1 py-2 pl-3 pr-5 bg-blue-900 hover:bg-blue-400 rounded-3xl text-xs lg:text-xs"><FontAwesomeIcon icon={faCirclePlay} /> Listen to this playlist</button>
            </div>
          </div>
          <div className="bg-slate-900 rounded-lg row-span-1 lg:row-span-4 lg:col-span-2 md:col-span-4 col-span-8 relative overflow-hidden">
            <img src="/assets/images/banner-1200x600-02.jpg" className="w-full object-cover h-full opacity-40 hover:opacity-20" alt="banner" />
            <div className="absolute bottom-8 left-6 text-white">
              <p className="text-xl">Libreng Experimento</p>
              <p className="text-neutral-300">by Yordaddy</p>
              <button className="flex flex-row items-center gap-2 my-1 py-2 pl-3 pr-5 bg-blue-900 hover:bg-blue-400 rounded-3xl text-xs lg:text-xs"><FontAwesomeIcon icon={faCirclePlay} /> Listen to this playlist</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Playlist

        />
      </div>
      <div className="my-6 rounded-xl bg-white p-6 shadow-xl">
        <div>
          <h2 className="font-semibold mb-4">Featured Songs</h2>
        </div>
        <div className="grid gap-4 grid-rows-1 lg:grid-cols-6 md:grid-cols-3 grid-cols-2">
          <div className="flex justify-center relative items-center col-span-1 row-span-1 bg-slate-700 rounded-md aspect-square text-slate-400 hover:text-slate-300 overflow-hidden">
            <img src="/assets/images/banner-1200x600-04.jpg" className="w-full object-cover h-full opacity-40 hover:opacity-30" alt="banner" />
            <div className="absolute flex flex-col justify-center">
              <FontAwesomeIcon icon={faCirclePlay} className="text-2xl mb-3"/>
            </div>
            <div className="absolute bottom-0 text-xs lg:text-sm bg-blue-800 w-full text-center p-2">Sala ba Diay</div>
          </div>
          <div className="flex justify-center relative items-center col-span-1 row-span-1 bg-slate-700 rounded-md aspect-square text-slate-400 hover:text-slate-300 overflow-hidden">
            <img src="/assets/images/banner-1200x600-02.jpg" className="w-full object-cover h-full opacity-40 hover:opacity-30" alt="banner" />
            <div className="absolute flex flex-col justify-center">
              <FontAwesomeIcon icon={faCirclePlay} className="text-2xl mb-3"/>
            </div>
            <div className="absolute bottom-0 text-xs lg:text-sm bg-blue-800 w-full text-center p-2">Sala ba Diay</div>
          </div>
          <div className="flex justify-center relative items-center col-span-1 row-span-1 bg-slate-700 rounded-md aspect-square text-slate-400 hover:text-slate-300 overflow-hidden">
            <img src="/assets/images/banner-1200x600-03.jpg" className="w-full object-cover h-full opacity-40 hover:opacity-30" alt="banner" />
            <div className="absolute flex flex-col justify-center">
              <FontAwesomeIcon icon={faCirclePlay} className="text-2xl mb-3"/>
            </div>
            <div className="absolute bottom-0 text-xs lg:text-sm bg-blue-800 w-full text-center p-2">Sala ba Diay</div>
          </div>
          <div className="flex justify-center relative items-center col-span-1 row-span-1 bg-slate-700 rounded-md aspect-square text-slate-400 hover:text-slate-300 overflow-hidden">
            <img src="/assets/images/banner-1200x600-04.jpg" className="w-full object-cover h-full opacity-40 hover:opacity-30" alt="banner" />
            <div className="absolute flex flex-col justify-center">
              <FontAwesomeIcon icon={faCirclePlay} className="text-2xl mb-3"/>
            </div>
            <div className="absolute bottom-0 text-xs lg:text-sm bg-blue-800 w-full text-center p-2">Sala ba Diay</div>
          </div>
          <div className="flex justify-center relative items-center col-span-1 row-span-1 bg-slate-700 rounded-md aspect-square text-slate-400 hover:text-slate-300 overflow-hidden">
            <img src="/assets/images/banner-1200x600-01.jpg" className="w-full object-cover h-full opacity-40 hover:opacity-30" alt="banner" />
            <div className="absolute flex flex-col justify-center">
              <FontAwesomeIcon icon={faCirclePlay} className="text-2xl mb-3"/>
            </div>
            <div className="absolute bottom-0 text-xs lg:text-sm bg-blue-800 w-full text-center p-2">Sala ba Diay</div>
          </div>
          <div className="flex justify-center relative items-center col-span-1 row-span-1 bg-slate-700 rounded-md aspect-square text-slate-400 hover:text-slate-300 overflow-hidden">
            <img src="/assets/images/banner-1200x600-02.jpg" className="w-full object-cover h-full opacity-40 hover:opacity-30" alt="banner" />
            <div className="absolute flex flex-col justify-center">
              <FontAwesomeIcon icon={faCirclePlay} className="text-2xl mb-3"/>
            </div>
            <div className="absolute bottom-0 text-xs bg-blue-800 w-full text-center p-2">Sala ba Diay</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
