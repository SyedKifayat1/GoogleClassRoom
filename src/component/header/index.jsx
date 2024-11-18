import React, { useState } from 'react';
import JoinClass from '../JoinClass';
import Logo from '../../pictures/logo_square_rounded.svg';
import { Link } from 'react-router-dom';
import AccountCard from '../AccountCard';
// Header Component
const Header = ({user, toggleSidebar, selectedHeading, onSelectHeading, isSmallScreen }) => {
  const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);

  // Toggle the modal visibility
  const toggleCourseModal = () => {
    setIsCourseModalOpen((prevState) => !prevState);
  };

  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  // Toggle the modal visibility
  const toggleProfileModal = () => {
    setIsProfileModalOpen((prevState) => !prevState);
  };

  return (
    <header className="flex items-center justify-between p-4 bg-white border fixed top-0 left-0 right-0 z-50">
      {/* Left Section: Logo and Heading */}
      <div className="flex items-center">
        {/* Sidebar Toggle Button */}
        <button className="mobile-menu-button" onClick={toggleSidebar}>
          <i className="fas fa-bars text-gray-600 text-2xl mr-4"></i>
        </button>

        {/* Logo and Heading Links */}
        {!isSmallScreen || !selectedHeading ? (
          <Link to="/" onClick={() => onSelectHeading(null)}>
            <img src={Logo} alt="Classroom logo" className="w-6 h-6 mr-2" />
          </Link>
        ) : null}

        {/* Classroom Name */}
        {!isSmallScreen ? (
          <Link to="/">
            <span className="text-gray-700 text-xl cursor-pointer" onClick={() => onSelectHeading(null)}>
              Classroom
            </span>
          </Link>
        ) : !selectedHeading ? (
          <Link to="/">
            <span className="text-gray-700 text-xl cursor-pointer" onClick={() => onSelectHeading(null)}>
              Classroom
            </span>
          </Link>
        ) : null}

        {/* Selected Heading */}
        <span className="text-gray-700 text-xl ml-2">
          {!isSmallScreen && selectedHeading ? `> ${selectedHeading}` : selectedHeading?.slice(0, 22)}
        </span>
      </div>

      {/* Right Section: Profile and Modal Trigger */}
      <div className="flex items-center">
        {/* Add Button and Profile Avatar */}
        <div className="flex items-center cursor-pointer" >
          <i className="fas fa-plus text-gray-600 text-xl mr-4" onClick={toggleCourseModal}></i>
          <img src={user.avatar} alt="User profile picture" onClick={toggleProfileModal} className="w-8 h-8 rounded-full" />
        </div>


        {isProfileModalOpen && (
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50"
            onClick={toggleProfileModal} // Close the modal when clicked outside
          >
            <div
              className=" rounded-lg shadow-lg p-6 relative"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
              <AccountCard user={user} toggleModal={toggleProfileModal} />
            </div>
          </div>
        )}

        {/* Modal */}
        {isCourseModalOpen && (
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50"
            onClick={toggleCourseModal} // Close the modal when clicked outside
          >
            <div
              className=" rounded-lg shadow-lg p-6 relative"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
              <JoinClass user={user} toggleModal={toggleCourseModal} />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
