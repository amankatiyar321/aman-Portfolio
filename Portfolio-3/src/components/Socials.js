import React from 'react';

// import icons
import { social } from '../data';

const Socials = () => {
  return (
    <ul className='flex space-x-6 '>
      {social.map((item, index) => {
         const { href, icon } = item;
         let handleGit = () => {
          window.open(href);
        };
        return (
          <li
            className='flex justify-center items-center text-accent'
            key={index}
          >
            <div className='text-base' onClick={handleGit}>
              {icon}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
