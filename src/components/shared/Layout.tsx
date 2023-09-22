import { Outlet } from "react-router-dom";
import Player from "./Player";
import Sidebar from "./Sidebar";
import Header from "./Header";

import { useState } from "react";

function Layout() {

  // list of songs
  const [songs] = useState([
    {
      title: "Maglipay",
      artist: "Yordaddy",
      album: "Libreng Experimento",
      artwork: "./assets/yordaddy-artwork-01.jpg",
      songfile: "./assets/songs/01-maglipay.mp3"
    },
    {
      title: "Sala Ba Diay",
      artist: "Yordaddy",
      album: "Libreng Experimento",
      artwork: "./assets/yordaddy-artwork-01.jpg",
      songfile: "./assets/songs/02-sala-ba-diay.mp3"
    },
    {
      title: "Sinelas",
      artist: "Yordaddy",
      album: "Libreng Experimento",
      artwork: "./assets/yordaddy-artwork-01.jpg",
      songfile: "./assets/songs/03-sinelas.mp3"
    },
    {
      title: "Naytlayp Ni Batman",
      artist: "Yordaddy",
      album: "Libreng Experimento",
      artwork: "./assets/yordaddy-artwork-01.jpg",
      songfile: "./assets/songs/04-naytlayp-ni-batman.mp3"
    },
    {
      title: "Kina Nihitan",
      artist: "Yordaddy",
      album: "Libreng Experimento",
      artwork: "./assets/yordaddy-artwork-01.jpg",
      songfile: "./assets/songs/06-kinanihitan.mp3"
    },
    {
      title: "Asa Na",
      artist: "Yordaddy",
      album: "Libreng Experimento",
      artwork: "./assets/yordaddy-artwork-01.jpg",
      songfile: "./assets/songs/07-asa-na.mp3"
    },
    {
      title: "Laay Blues",
      artist: "Yordaddy",
      album: "Libreng Experimento",
      artwork: "./assets/yordaddy-artwork-01.jpg",
      songfile: "./assets/songs/08-laay-blues.mp3"
    },
    {
      title: "Karnero",
      artist: "Yordaddy",
      album: "Libreng Experimento",
      artwork: "./assets/yordaddy-artwork-01.jpg",
      songfile: "./assets/songs/09-karnero.mp3"
    },
    {
      title: "Nihit",
      artist: "Yordaddy",
      album: "Libreng Experimento",
      artwork: "./assets/yordaddy-artwork-01.jpg",
      songfile: "./assets/songs/10-nihit.mp3"
    },
    {
      title: "Angelie",
      artist: "Yordaddy",
      album: "Libreng Experimento",
      artwork: "./assets/yordaddy-artwork-01.jpg",
      songfile: "./assets/songs/11-angelie.mp3"
    },
    {
      title: "Unsaon Na Lang",
      artist: "Yordaddy",
      album: "Libreng Experimento",
      artwork: "./assets/yordaddy-artwork-01.jpg",
      songfile: "./assets/songs/12-unsaon-na-lang.mp3"
    }
  ]);

  return (
    <div className="flex flex-row bg-slate-100 h-screen w-screen overflow-hidden box-border">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <div className="w-full overflow-y-auto">
          <div className="px-6 py-12 md:pt-16 md:pb-32 md:p-12 container mx-auto">
            <div>{songs[0].album}</div>
            <Outlet />
          </div>
        </div>
        <Player />
      </div>
    </div>
  )
}

export default Layout;
