import profile_pic from "../../public/images/apaz_pic.png";
import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import styles, { layout } from "../style";
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {

    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    
    const handleSubmit = (e) => {
      e.preventDefault();
    
      const serviceId = 'service_kk08t6e';
      const templateId = 'template_ir2xqjx';
      const publicKey = "CXyn0CGE_2lOKGX5j";
    
      const templateParams = {
        from_name: name,
        from_subject: subject,
        from_message: message,
        from_email: email,
      };
    
      emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        toast.success('Message sent!');
        setName('');
        setSubject('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        toast.error("Failed to send.")
      });
    }

  return (
    <section id="contact" className={`${layout.section} ${styles.paddingX} relative`}>
    <div className="absolute z-[0] w-[40%] h-[40%] -left-[40%] rounded-full pink__gradient" />
    <div className={`${layout.sectionInfo} pl-10 flex-col`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={profile_pic} width={180} className="pt-6"></img>       
        <p className={`pt-5 ${styles.paragraph}`}>
        At the age of 14, Apaztron delved into music production, and over the next decade, he crafted numerous title tracks and collaborated with renowned artists such as 
        Tony Junior. The journey leading up to his single, "Odin," has been a transformative one. 
        The moniker Apaztron came into existence in 2015 when he decided to take part in a remix contest for 
        Thomas Gold's "Believe." Post this release, he continued to create and produce his own material. 
        <br/><br/> In 2018, the completion of the track "Ares" marked a significant milestone for Apaztron 
        as it became his inaugural release with a major record label, Revealed Recordings. Throughout his career, 
        Apaztron has explored various musical styles, but he is particularly known for drawing inspiration from the Hardstyle genre. 
        Nevertheless, he remains enthusiastic about infusing each new track with unique elements, always on the 
        lookout for something special to incorporate into his music.
        </p>
    </div>
    <div className={`${layout.sectionImg} flex-col`}>
   <h2 className={`${styles.heading2} text-center pb-4 pt-24`}>Get in touch.</h2>
   <Toaster position="bottom-center" reverseOrder={false}/>
      <form onSubmit={handleSubmit} className={`font-poppins space-y-8 pt-8 font-normal`}>
        <div className="flex flex-wrap">
          {/* Name Input */}
          <div className="relative mr-3 flex-1">
              <input
                type="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
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

          {/* Subject Input */}
          <div className="relative flex-1">
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="peer bg-transparent border-b-2 border-gray-300 text-dimWhite focus:text-white text-sm p-2.5 focus:border-primary-500 focus:outline-none block w-full"
                placeholder=" "
              />
              <label
                htmlFor="subject"
                className="absolute left-0 -top-3.5 text-dimWhite text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Subject
              </label>
          </div>
        </div>

        {/* Email Input */}
        <div className="relative">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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


        {/* Message Textarea */}
        <div className="relative">
            <textarea
              id="message"
              rows="6"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="resize-none peer bg-transparent border-b-2 border-gray-300 text-dimWhite focus:text-white text-sm p-2.5 focus:border-primary-500 focus:outline-none block w-full"
              placeholder=" "
              required
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Message
            </label>
        </div>

        {/* Submit Button - Assuming Button is a custom component */}
        <div className="flex">
        <button type="submit" 
          className="hover-animation bg-purple-blue-gradient mx-auto pr-8 pt-3 pb-3 pl-8
           text-white font-semibold text-base w-1/2 text-center py-4 px-6 font-poppins text-[18px] outline-none rounded-[10px]">Send</button>
        </div>

      </form>
    </div>
  </section>
  );
};

export default Contact;
