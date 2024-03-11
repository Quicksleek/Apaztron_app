import React from "react";
import spotify from "../../public/images/spotify_icon.png";
import instagram from "../../public/images/instagram_icon.png";
import soundcloud from "../../public/images/soundcloud_icon.png";
import facebook from "../../public/images/fb_icon.png";
import arrow from "../../public/images/arrow.png";
import video from "../../public/images/hero_video.mp4"

const Hero = () => {
  return (
    <section className="w-full">
      <div className="relative w-full h-screen apaztron-bg">
        <video autoPlay muted loop id="background-video" className="w-full h-full object-cover">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>               
        <div className="absolute bottom-5 left-5 ss:left-6 ss:space-x-6 space-x-4 flex flex-row">
          <a href="https://www.instagram.com/djapaztron/" className=" hover:opacity-65" target="_blank">
          <img src={instagram} className="w-[35px] h-auto" alt="Instagram" />
          </a>
          <a href="https://www.facebook.com/Apaztron/" className=" hover:opacity-65" target="_blank">
          <img src={facebook} className="w-[35px] h-auto" alt="Facebook" />
          </a>
        </div>
        <div className="absolute bottom-5 right-5 ss:right-6 ss:space-x-6 space-x-4 flex flex-row">
          <a href="https://open.spotify.com/artist/1hdFJ6b5u4vpPG5t1FR55i" className=" hover:opacity-65" target="_blank">
          <img src={spotify} className="w-[35px] h-auto" alt="Spotify" />
          </a>
          <a href="https://soundcloud.com/apaztron" className=" hover:opacity-65" target="_blank">
          <img src={soundcloud} className="w-[35px] h-auto" alt="Soundcloud" />
          </a>
        </div>        
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
          <a href="#contact" className=" hover:opacity-65">
          <img src={arrow} className="arrow-animation w-[40px]" alt="Arrow" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
