import { Outlet } from "react-router-dom";
import Player from "./Player";
import Sidebar from "./Sidebar";
import Header from "./Header";

import { useState, useRef } from "react";

function Layout() {

  // list of songs
  const [songs] = useState([
    {
      title: "Maglipay",
      artist: "Yordaddy",
      album: "Libreng Experimento",
      artwork: "./assets/songs/libreng-experimento/yordaddy-artwork-01.jpg",
      songfile: "./assets/songs/libreng-experimento/01-maglipay.mp3"
    },
    {
      title: "Sala Ba Diay",
      artist: "Yordaddy",
      album: "Libreng Experimento",
      artwork: "./assets/songs/libreng-experimento/yordaddy-artwork-01.jpg",
      songfile: "./assets/songs/libreng-experimento/02-sala-ba-diay.mp3"
    },
    {
      title: "Sinelas",
      artist: "Yordaddy",
      album: "Libreng Experimento",
      artwork: "./assets/songs/libreng-experimento/yordaddy-artwork-01.jpg",
      songfile: "./assets/songs/libreng-experimento/03-sinelas.mp3"
    },
    {
      title: "Naytlayp Ni Batman",
      artist: "Yordaddy",
      album: "Libreng Experimento",
      artwork: "./assets/songs/libreng-experimento/yordaddy-artwork-01.jpg",
      songfile: "./assets/songs/libreng-experimento/04-naytlayp-ni-batman.mp3"
    },
    {
      title: "Kina Nihitan",
      artist: "Yordaddy",
      album: "Libreng Experimento",
      artwork: "./assets/songs/libreng-experimento/yordaddy-artwork-01.jpg",
      songfile: "./assets/songs/libreng-experimento/06-kinanihitan.mp3"
    },
    {
      title: "Asa Na",
      artist: "Yordaddy",
      album: "Libreng Experimento",
      artwork: "./assets/songs/libreng-experimento/yordaddy-artwork-01.jpg",
      songfile: "./assets/songs/libreng-experimento/07-asa-na.mp3"
    },
    {
      title: "Laay Blues",
      artist: "Yordaddy",
      album: "Libreng Experimento",
      artwork: "./assets/songs/libreng-experimento/yordaddy-artwork-01.jpg",
      songfile: "./assets/songs/libreng-experimento/08-laay-blues.mp3"
    },
    {
      title: "Karnero",
      artist: "Yordaddy",
      album: "Libreng Experimento",
      artwork: "./assets/songs/libreng-experimento/yordaddy-artwork-01.jpg",
      songfile: "./assets/songs/libreng-experimento/09-karnero.mp3"
    },
    {
      title: "Nihit",
      artist: "Yordaddy",
      album: "Libreng Experimento",
      artwork: "./assets/songs/libreng-experimento/yordaddy-artwork-01.jpg",
      songfile: "./assets/songs/libreng-experimento/10-nihit.mp3"
    },
    {
      title: "Angelie",
      artist: "Yordaddy",
      album: "Libreng Experimento",
      artwork: "./assets/songs/libreng-experimento/yordaddy-artwork-01.jpg",
      songfile: "./assets/songs/libreng-experimento/11-angelie.mp3"
    },
    {
      title: "Unsaon Na Lang",
      artist: "Yordaddy",
      album: "Libreng Experimento",
      artwork: "./assets/songs/libreng-experimento/yordaddy-artwork-01.jpg",
      songfile: "./assets/songs/libreng-experimento/12-unsaon-na-lang.mp3"
    }
  ]);

  const [menuHidden, setMenuHidden] = useState(false);
  const [currentSongIndex] = useState(0);
  const sidebarRef = useRef(null);

  return (
    <div className="flex flex-row bg-slate-100 h-[calc(100dvh)] w-screen overflow-hidden box-border">
      <Sidebar
        sidebarRef={sidebarRef}
      />
      <div className="flex flex-col w-full">
        <Header 
          menuHidden={menuHidden}
          setMenuHidden={setMenuHidden}
          sidebarRef={sidebarRef}
        />
        <div className="w-full overflow-y-auto">
          <div className="px-4 md:px-6 py-8 md:pt-16 md:pb-32 md:p-12 container mx-auto">
            {/* <div>{songs[0].album}</div> */}
            <Outlet />
          </div>
        </div>
        <Player 
          songs={songs}
          currentSongIndex={currentSongIndex}
        />
      </div>
    </div>
  )
}

export default Layout;
