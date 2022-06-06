import React from 'react';
import './hero.css'

import WomanImg from '../assets/img/aman.webp';

const Hero = () => {
  return (
    <section
      id='home'
      className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className='text-lg text-accent text-sm mb-[22px] '>
              Hey, I'm Aman! 👋
            </p>
            <h1 className='text-2xl leading-[44px] md:text-3xl md:leading-tight lg:text-5xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              I Build & Design <br /> Web Interfaces.
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
            </p>
            <button className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all'>
              Work with me
            </button>
          </div>
          <div className='hidden lg:flex flex-1 justify-end items-end h-full'>
            <img src={WomanImg} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
