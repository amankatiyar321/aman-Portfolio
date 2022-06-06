import React from 'react';
import './hero.css'
// import social data
import { social } from '../data';

// import logo
import Logo from '../assets/img/logo.png';

const Footer = () => {

  
 
  return (
    <footer className='bg-tertiary py-12'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
          <div className='flex space-x-6 items-center justify-center'>
            {social.map((item, index) => {
              const { href, icon } = item;
              let handleGit = () => {
                window.open(href);
              };
              

              return (
                <div className='text-accent text-base' onClick={handleGit} key={index}>
                  {icon}
                </div>
              );
            })}
          </div>
          <div className='neww'>
            <img src={Logo} alt='' />
          </div>
          <p className='text-paragraph opacity-80 text-[15px]'>
            &copy; 2022 Aman Katiyar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
