import React from "react";
import styles from "../style";
import quick_logo from "../../public/images/quick_logo.svg";

const Footer = () => {
  return (
    <section className="pb-2 pt-24 text-white font-poppins md:text-sm text-xs">
      <div className="md:flex justify-between items-center">
        <p className="md:pl-6 max-md:text-center">
          Copyright Ⓒ 2024 Apaztron. All Rights Reserved.
        </p>
        <div className="md:flex md:pr-6 max-md:pt-5">
          <p className="max-md:text-center max-md:pb-1">Powered By</p>
          <a href="https://quicksleek.se/" target="_blank" className="hover:opacity-80 ">
          <img src={quick_logo} className="mx-auto" width={110} alt="Powered By Quick Logo" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
