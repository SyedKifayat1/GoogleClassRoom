// import React, { useState } from 'react';
// import JoinClass from '../JoinClass';
// import Logo from '../../pictures/logo_square_rounded.svg'
// import Avatar from '../../pictures/blur.jpg'
// import { Link } from 'react-router-dom';

// // Header Component
// const Header = ({ toggleSidebar, selectedHeading, onSelectHeading, isSmallScreen }) => {

//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Function to toggle the modal visibility
//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   return (
//     <header className="flex items-center justify-between p-4 bg-white border fixed top-0 left-0 right-0 z-50">
//       <div className="flex items-center">
//         <button className="mobile-menu-button" onClick={toggleSidebar}>
//           <i className="fas fa-bars text-gray-600 text-2xl mr-4"></i>
//         </button>
//         {!isSmallScreen || !selectedHeading  ? (<Link to='/'
//           onClick={() => onSelectHeading(null)}
//         >
//           <img
//             // src="https://placehold.co/24x24"
//             src={Logo}
//             alt="Classroom logo"
//             className="w-6 h-6 mr-2"
//           />
//         </Link>) : ''}
//         {!isSmallScreen ? (
//           <Link to='/'>
//             <span
//               className="text-gray-700 text-xl cursor-pointer"
//               onClick={() => onSelectHeading(null)}
//             >
//               Classroom
//             </span>
//           </Link>
//         ) : !selectedHeading ? (
//           <Link to='/'>

//             <span
//               className="text-gray-700 text-xl cursor-pointer"
//               onClick={() => onSelectHeading(null)}
//             >
//               Classroom
//             </span>
//           </Link>
//         ) : null}
//         {/* <span className="text-gray-700 text-xl ml-2">{!isSmallScreen ? selectedHeading ? `>` : '' : ''} {selectedHeading ? `${selectedHeading}` : ''}</span> */}
//         {/* <span className="text-gray-700 text-xl ml-2">
//           {!isSmallScreen && selectedHeading ? `> ${selectedHeading}` : selectedHeading.slice(0, 20) || ''}
//         </span> */}
//         <span className="text-gray-700 text-xl ml-2">
//           {!isSmallScreen && selectedHeading
//             ? `> ${selectedHeading}`
//             : (selectedHeading ? selectedHeading.slice(0, 22) : '')}
//         </span>


//       </div>
//       <div className="flex items-center">
//         {/* <i className="fas fa-plus text-gray-600 text-2xl mr-4"></i>
//          <i className="fas fa-th text-gray-600 text-2xl mr-4"></i> 
//         <img
//            src="https://placehold.co/24x24"
//           src={Avatar}
//           alt="User profile picture"
//           className="w-8 h-8 rounded-full"
//         /> */}
//         <div
//         className="flex items-center cursor-pointer"
//         onClick={toggleModal}
//       >
//         <i className="fas fa-plus text-gray-600 text-2xl mr-4"></i>
//         <img
//           src="https://placehold.co/24x24" // Replace with your image source
//           alt="User profile picture"
//           className="w-8 h-8 rounded-full"
//         />
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <div
//           className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50"
//           onClick={toggleModal} // Close the modal when clicked outside
//         >
//           <div
//             className="bg-white rounded-lg shadow-lg p-6 w-96 relative"
//             onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
//           >
//             <button
//               className="absolute top-2 right-2 text-gray-600"
//               onClick={toggleModal} // Close button
//             >
//               <i className="fas fa-times"></i>
//             </button>
//             {/* Call the JoinClass Component */}
//             <JoinClass />
//           </div>
//         </div>
//       )}
//     </div>
      
//     </header>
//   );
// };

// export default Header


import React, { useState } from 'react';
import JoinClass from '../JoinClass';
import Logo from '../../pictures/logo_square_rounded.svg';
import Avatar from '../../pictures/blur.jpg';
import { Link } from 'react-router-dom';
import AccountCard from '../AccountCard';
// Header Component
const Header = ({ toggleSidebar, selectedHeading, onSelectHeading, isSmallScreen }) => {
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
          <img src={Avatar} alt="User profile picture" onClick={toggleProfileModal} className="w-8 h-8 rounded-full" />
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
              <AccountCard toggleModal={toggleProfileModal} />
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
              <JoinClass toggleModal={toggleCourseModal} />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
