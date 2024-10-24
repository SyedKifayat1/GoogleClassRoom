import React, { useState, useEffect } from 'react';

import './App.css'; // Assuming you have a custom CSS for additional styles
import './index.css'; // Tailwind CSS
import Header from './component/header';

const Sidebar = ({ isVisible }) => {
  const [isEnrolledDropdownOpen, setEnrolledDropdownOpen] = useState(false);

  const toggleEnrolledDropdown = () => {
    setEnrolledDropdownOpen(!isEnrolledDropdownOpen);
  };

  return (
    <div
      className={`fixed top-10 mt-6 pb-5 left-0 h-[92vh] w-64 bg-white shadow-md sidebar transition-transform transform 
        ${isVisible ? 'translate-x-0' : '-translate-x-full'} z-50 overflow-y-auto`}
    >
      <nav className="mt-4">
        <ul>
          <NavItem icon="fas fa-home" label="Home" />
          <NavItem icon="fas fa-calendar-alt" label="Calendar" />
          <hr className="my-2 border-t border-gray-300" />
          <li onClick={toggleEnrolledDropdown} className="flex items-center p-4 text-gray-700 hover:bg-gray-200 cursor-pointer">
            <i className="fas fa-user-graduate mr-4"></i>
            <span>Enrolled</span>
            <i className={`fas fa-chevron-${isEnrolledDropdownOpen ? 'up' : 'down'} ml-auto`}></i>
          </li>
          {isEnrolledDropdownOpen && (
            <ul className="">
              <NavItem icon="fas fa-tasks" label="To-do" />
              <ClassItem initial="Q" label="Quran Translation 3" subtitle1="CE 22" bgColor="bg-black" />
              <ClassItem initial="P" label="Pak Studies and Ideology" subtitle1="CE 22" bgColor="bg-purple-600" />
              <ClassItem initial="D" label="Database Management Sys" subtitle1="CE 22" bgColor="bg-blue-600" />
              <ClassItem initial="E" label="Entrepreneurship CE ITU" subtitle1="CE 22" bgColor="bg-green-600" />
              <ClassItem initial="D" label="Data Based Management S" subtitle1="CE 22" bgColor="bg-purple-600" />
              <ClassItem initial="D" label="DSP (Lab) Fall 2024" subtitle1="CE 22" bgColor="bg-red-600" />
            </ul>
          )}
        </ul>
        <hr className="my-2 border-t border-gray-300" />
      </nav>
      <nav className="mt-4">
        <ul>
          <NavItem icon="fas fa-archive" label="Archived classes" />
          <NavItem icon="fas fa-cog" label="Settings" />
        </ul>
      </nav>
    </div>
  );
};

// Navigation Item Component
const NavItem = ({ icon, label }) => (
  <li className="flex items-center p-4 text-gray-700 hover:bg-gray-200">
    <i className={`${icon} mr-4`}></i>
    <span>{label}</span>
  </li>
);

// Class Item Component
const ClassItem = ({ initial, label, bgColor, subtitle1 }) => (
  <li className="flex items-center p-4 text-gray-700 hover:bg-gray-200">
    <div className={`w-6 h-6 ${bgColor} text-white flex items-center justify-center rounded-full mr-4`}>
      {initial}
    </div>
    
    <div>
      <span>{label.length > 22 ? `${label.slice(0, 15)}...` : label}</span>
      <p className="text-sm">{subtitle1}</p>
    </div>

  </li>
);

// Card Component
const Card = ({ bgColor, initial, title, subtitle1, subtitle2 }) => {
  return (
    <div className={`max-w-xs rounded-lg shadow-md bg-white overflow-hidden w-[340px]`}>
      {/* Card Header */}
      <div className={`bg-cover bg-center h-24 flex flex-col justify-end p-4 text-white relative ${bgColor}`}>
        <div className="absolute top-4 right-4">
          <i className="fas fa-ellipsis-v"></i>
        </div>
        <h2 className="text-lg font-semibold">{title.length > 22 ? `${title.slice(0, 15)}...` : title}</h2>
        <p className="text-sm">{subtitle1}</p>
        <p className="text-sm">{subtitle2}</p>
        <div className="absolute bottom-[-35px] right-4 w-20 h-20 bg-purple-700 text-white rounded-full flex justify-center items-center text-lg font-bold">
          {initial}
        </div>
      </div>
      {/* Card Content */}
      <div className="p-6 h-[8rem]">
        {/* Additional content can go here */}
      </div>
      {/* Card Footer */}
      <div className="flex justify-end gap-2 p-2 border-t border-gray-200">
        <i className="fas fa-camera text-gray-500 text-2xl"></i>
        <i className="fas fa-folder text-gray-500 text-2xl"></i>
      </div>
    </div>
  );
};


// Main Content Component
const MainContent = () => (
  <div className="flex-1 p-6 main-content">

    <div className="flex flex-wrap justify-start gap-5">
      <div className="max-w-[340px] w-full">
        <Card
          bgColor="bg-gray-700"
          initial="M"
          title="Quran Translation 3"
          subtitle1="BS CE 22"
          subtitle2="Muhammad Akhlaq"
        />
      </div>
      <div className="max-w-[340px] w-full">
        <Card
          bgColor="bg-purple-500"
          initial="M"
          title="Pak Studies and Ideology"
          subtitle1="BSCE2022 & BSSE2024"
          subtitle2="Maleeha Sattar"
        />
      </div>
      <div className="max-w-[340px] w-full">
        <Card
          bgColor="bg-purple-400"
          initial="M"
          title="Pak Studies and Ideology"
          subtitle1="BSCE2022 & BSSE2024"
          subtitle2="Maleeha Sattar"
        />
      </div>
      <div className="max-w-[340px] w-full">
        <Card
          bgColor="bg-purple-600"
          initial="M"
          title="Pak Studies and Ideology"
          subtitle1="BSCE2022 & BSSE2024"
          subtitle2="Maleeha Sattar"
        />
      </div>
      <div className="max-w-[340px] w-full">
        <Card
          bgColor="bg-purple-600"
          initial="M"
          title="Pak Studies and Ideology"
          subtitle1="BSCE2022 & BSSE2024"
          subtitle2="Maleeha Sattar"
        />
      </div>
      <div className="max-w-[340px] w-full">
        <Card
          bgColor="bg-purple-600"
          initial="M"
          title="Pak Studies and Ideology"
          subtitle1="BSCE2022 & BSSE2024"
          subtitle2="Maleeha Sattar"
        />
      </div>
      <div className="max-w-[340px] w-full">
        <Card
          bgColor="bg-blue-600"
          initial="H"
          title="Database Management Sys"
          subtitle1="CE-22"
          subtitle2="Hamza Shaukat"
        />
      </div>
      <div className="max-w-[340px] w-full">
        <Card
          bgColor="bg-blue-600"
          initial="H"
          title="Database Management Sys"
          subtitle1="CE-22"
          subtitle2="Hamza Shaukat"
        />
      </div>
      <div className="max-w-[340px] w-full">
        <Card
          bgColor="bg-blue-600"
          initial="H"
          title="Database Management Sys"
          subtitle1="CE-22"
          subtitle2="Hamza Shaukat"
        />
      </div>
      <div className="max-w-[340px] w-full">
        <Card
          bgColor="bg-blue-600"
          initial="H"
          title="Database Management Sys"
          subtitle1="CE-22"
          subtitle2="Hamza Shaukat"
        />
      </div>
      <div className="max-w-[340px] w-full">
        <Card
          bgColor="bg-green-600"
          initial="Q"
          title="Entrepreneurship CE ITU"
          subtitle1="A"
          subtitle2="Qalab e Abbas"
        />
      </div>
    </div>


  </div>
);

// Main App Component
const App = () => {

  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const [isSmallScreen, setSmallScreen] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  const toggleSmallScreen = () => {
    setSmallScreen(!isSmallScreen);
  };

  useEffect(() => {
    // Check screen width on component mount
    const handleResize = () => {
      if (window.innerWidth <= 650) {
        setSidebarVisible(false);
        setSmallScreen(true);
      } else {
        setSidebarVisible(true);
        setSmallScreen(false);
      }
    };

    // Run on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex">
        <Sidebar isVisible={isSidebarVisible} />
        <div className={`flex-1 transition-all duration-300 mt-16 ${!isSmallScreen ? isSidebarVisible ? 'ml-64' : 'ml-0':'ml-0'} relative`}>
          <MainContent />
        </div>

      </div>
    </>
  );
};

export default App;
