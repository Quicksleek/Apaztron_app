import React from "react";
import logo from "../../public/images/apaztron_logo.png";
import spotify from "../../public/images/spotify_icon.png";
import instagram from "../../public/images/instagram_icon.png";
import soundcloud from "../../public/images/soundcloud_icon.png";
import facebook from "../../public/images/fb_icon.png";
import arrow from "../../public/images/arrow.png";

const Hero = () => {
  return (
    <section className="w-full">
      <div className="relative w-full h-screen apaztron-bg">
        <div className="flex items-center justify-center h-full">
        <div className="cyan-gradient absolute z-[0] w-[20%] h-[40%] top-[15%] "></div>
          <div className="mb-[55%] ss:mb-[18%] absolute">
            <img src={logo} className="ss:w-[50rem] w-[25rem] glitch-image" />
          </div>
        </div>
        
        <div className="absolute bottom-5 left-5 ss:left-6 ss:space-x-6 space-x-4 flex flex-row">
          <img src={instagram} className="w-[35px] h-auto" />
          <img src={facebook} className="w-[35px] h-auto" />
        </div>
        <div className="absolute bottom-5 right-5 ss:right-6 ss:space-x-6 space-x-4 flex flex-row">
          <img src={spotify} className="w-[35px] h-auto" />
          <img src={soundcloud} className="w-[35px] h-auto" />
        </div>        
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
          <img src={arrow} className="arrow-animation w-[40px]" />
        </div>


      
      </div>
      

    </section>
  );
};

export default Hero;
