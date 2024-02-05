import React from "react";
import logo from "../../public/images/apaztron_logo.png"

const Hero = () => {
  return (

    <section className="w-full">
      <div className="w-full h-screen apaztron-bg">
        <div className="flex items-center justify-center h-full">
          <div className="mb-[55%] xs:mb-[18%]">
            <img src={logo} className="xs:w-[50rem] w-[25rem]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
