import React from 'react';
import HeroImg from "../assets/about.png";
import { FaLinkedin, FaInstagramSquare } from "react-icons/fa";

const Intro = () => {
  return (
    <section className='bg-slate-800 text-white flex flex-col md:flex-row py-10 px-5 justify-center items-center'>
      <div className='w-full md:w-1/2 text-center md:text-left'>
        <h1 className='mb-4'>
          <span className='block text-lg md:text-4xl font-font animate-slide-left'>
            Hello, It's ME!
          </span>
          <span className='block text-xl md:text-5xl font-pop font-bold  animate-slide-down pulse '>
            Bala Saraswathi
          </span>
          <p className='text-base md:text-3xl  animate-slide-left'>
            I am a MERN stack developer
          </p>
        </h1>
        <div className="flex justify-center md:justify-start space-x-2 mt-4">
          <FaLinkedin 
            size={30} 
            className='hover:text-blue-300 transition duration-300 transform hover:scale-110' 
          />
          <FaInstagramSquare 
            size={30} 
            className='hover:text-blue-300 transition duration-300 transform hover:scale-110' 
          />
        </div>
      </div>

      <img 
        src={HeroImg} 
        alt="Hero" 
        className='w-2/3 sm:w-1/2 md:w-1/3 mt-8 md:mt-0 transition-transform duration-300 hover:scale-105' 
      />
    </section>
  );
}

export default Intro;
