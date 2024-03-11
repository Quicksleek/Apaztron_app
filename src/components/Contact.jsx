import profile_pic from "../../public/images/apaz_pic.png";

import React from "react";
import styles, { layout } from "../style";

const Contact = () => {
  return (
    <section
      id="contact"
      className={`${layout.section} ${styles.paddingX} relative}`}
    >
      <div className={`${layout.sectionInfo} flex-col}`}>
        <h2 className={styles.heading2}>Get in touch</h2>
      </div>
      <div className={`${layout.sectionImg} flex-col}`}>
        <form action="#" className={`font-poppins space-y-8 pt-8 font-normal`}>
          <div className="flex flex-wrap">
            {/* Name Input */}
            <div className="relative">
              <input
                type="text"
                id="name"
                className="peer bg-transparent border-b-2 border-gray-300 text-dimWhite focus:text-white text-sm p-2.5 focus:border-primary-500 focus:outline-none block w-full"
                placeholder=" "
                required
              />
              <label
                htmlFor="name"
                className="absolute left-0 -top-3.5 text-dimWhite text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Name
              </label>
            </div>
          </div>

          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              id="email"
              className="peer bg-transparent border-b-2 border-gray-300 text-dimWhite focus:text-white text-sm p-2.5 focus:border-primary-500 focus:outline-none block w-full"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Email
            </label>
          </div>

          {/* Subject Input */}
          <div className="relative">
            <input
              type="text"
              id="subject"
              className="peer bg-transparent border-b-2 border-gray-300 text-dimWhite focus:text-white text-sm p-2.5 focus:border-primary-500 focus:outline-none block w-full"
              placeholder=" "
              required
            />
            <label
              htmlFor="subject"
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Subject
            </label>
          </div>

          {/* Message Textarea */}
          <div className="relative">
            <textarea
              id="message"
              rows="6"
              className="resize-none peer bg-transparent border-b-2 border-gray-300 text-dimWhite focus:text-white text-sm p-2.5 focus:border-primary-500 focus:outline-none block w-full"
              placeholder=" "
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Message
            </label>
          </div>

          {/* Submit Button - Assuming Button is a custom component */}
          {/* <Button
            type="submit"
            href="#footer"
            name="Skicka"
            styles="hover-animation bg-purple-blue-gradient pr-8 pt-3 pb-3 pl-8 text-white font-semibold text-base w-full text-center"
          /> */}
        </form>
      </div>
    </section>
  );
};

export default Contact;
