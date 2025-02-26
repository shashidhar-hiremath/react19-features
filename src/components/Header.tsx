import React from 'react';

const Header = () => (
  <header className="bg-blue-600 text-white p-4 flex">
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center md:text-left">React 19 New Features</h1>
    </div>
    <img 
      src='/pattern2.png' 
      alt='pattern' 
      className='w-25 [filter:brightness(0)_invert(1)]' 
    />
  </header>
);

export default Header;
