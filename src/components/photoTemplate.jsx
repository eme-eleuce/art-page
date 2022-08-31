import React from 'react'

const photoTemplate = ({ socialImg, user }) => {
    return (
      <div className='relative'>
        <img
          src={socialImg}
          alt='/'
          
          layout='responsive'
        />
        {/* Overlay */}
        <div className='flex justify-center w-full h-full items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/60 group'>
        <p className=' text-white text-lg hidden group-hover:block'>
          {user}
        </p>
        </div>
      </div>
    );
  };

export default photoTemplate