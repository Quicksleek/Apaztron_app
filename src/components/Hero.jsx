import React from "react";
import logo from "../../public/images/apaztron_logo.png";
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
          <img src={instagram} className="w-[35px] h-auto" alt="Instagram" />
          <img src={facebook} className="w-[35px] h-auto" alt="Facebook" />
        </div>
        <div className="absolute bottom-5 right-5 ss:right-6 ss:space-x-6 space-x-4 flex flex-row">
          <img src={spotify} className="w-[35px] h-auto" alt="Spotify" />
          <img src={soundcloud} className="w-[35px] h-auto" alt="Soundcloud" />
        </div>        
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
          <img src={arrow} className="arrow-animation w-[40px]" alt="Arrow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
