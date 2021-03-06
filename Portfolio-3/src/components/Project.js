import React from 'react';

const Project = ({ item }) => {

   let git=item.href;
  let handleGit = () => {
    window.open(git);
  };

  return (
    <div key={item.id} className='flex flex-col items-center text-center'>
      <div className='mb-8'>
        <img className='rounded-2xl' src={item.image} alt='' />
      </div>
      <p className='capitalize text-accent text-sm mb-3'>{item.category}</p>
      <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3>
      <p className='text-base max-w-md'>
       {item.details}
      </p>
      <div className='text-accent text-base'  key={item.index} onClick={handleGit}>
                  {item.icon}
                </div>
    </div>
  );
};

export default Project;
