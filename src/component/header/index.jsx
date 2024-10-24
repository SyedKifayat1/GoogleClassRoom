import React from 'react';
import Logo from '../../pictures/logo_square_rounded.svg'
import Avatar from '../../pictures/blur.jpg'
// Header Component
const Header = ({toggleSidebar}) => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center">
      <button className="mobile-menu-button" onClick={toggleSidebar}>
        <i className="fas fa-bars text-gray-600 text-2xl mr-4"></i>
      </button>
        <img
          // src="https://placehold.co/24x24"
          src={Logo}
          alt="Classroom logo"
          className="w-6 h-6 mr-2"
        />
        <span className="text-gray-700 text-xl">Classroom</span>
      </div>
      <div className="flex items-center">
        <i className="fas fa-plus text-gray-600 text-2xl mr-4"></i>
        {/* <i className="fas fa-th text-gray-600 text-2xl mr-4"></i> */}
        <img
          // src="https://placehold.co/24x24"
          src={Avatar}
          alt="User profile picture"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
};

export default Header