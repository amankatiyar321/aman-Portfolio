import React from 'react';
import './hero.css'
// import img
import Image from '../assets/img/port.webp';

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className=' flex flex-col xl:flex-row gap-24'>
          <img
            className=' create object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Aman Katiyar
              </h2>
              <p className='mb-4 text-accent'>
               Full Stack Web Developer
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
              Passion-driven learner and a web developer with the ability to write clean, reusable, optimised code. Skilled and experienced at building and maintaining MERN based web applications. Looking forward to joining a progressive and challenging work environment. <br />
                <br />
                | email: amankatiyar0002016@gmail.com |
                mobile: +91 8826899917 |
                location: Noida, Uttar Pradesh |
              </p>
            </div>
            <button className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>
              Contact me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
