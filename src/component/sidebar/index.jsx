
import React, { useState } from 'react';
import NavItem from './navItem';
import ClassItem from './classItem';


const Sidebar = ({ isVisible, onSelectHeading,classData }) => {
    const [isEnrolledDropdownOpen, setEnrolledDropdownOpen] = useState(true);
  
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
            <NavItem icon="fas fa-home" label="Home" onSelectHeading={onSelectHeading} to="/" />
            <NavItem icon="fas fa-calendar-alt" label="Calendar" onSelectHeading={onSelectHeading} to="/calendar" />
            <hr className="my-2 border-t border-gray-300" />
            <li onClick={toggleEnrolledDropdown} className="flex items-center p-4 text-gray-700 hover:bg-gray-200 cursor-pointer">
              <i className="fas fa-user-graduate mr-4"></i>
              <span>Enrolled</span>
              <i className={`fas fa-chevron-${isEnrolledDropdownOpen ? 'up' : 'down'} ml-auto`}></i>
            </li>
            {isEnrolledDropdownOpen && (
              <ul>
                <NavItem icon="fas fa-tasks" label="To-do" onSelectHeading={onSelectHeading} to="/todo" />
                {classData.map((classItem, index) => (
                  <ClassItem
                    key={index}
                    initial={classItem.subtitle2.charAt(0)} // Set initial dynamically
                    {...classItem}
                    onSelectHeading={onSelectHeading}
                  />
                ))}
              </ul>
            )}
          </ul>
          <hr className="my-2 border-t border-gray-300" />
        </nav>
        <nav className="mt-4">
          <ul>
            <NavItem icon="fas fa-archive" label="Archived classes" onSelectHeading={onSelectHeading} to="/archived-classes" />
            <NavItem icon="fas fa-cog" label="Settings" onSelectHeading={onSelectHeading} to="/settings" />
          </ul>
        </nav>
      </div>
    );
  };
  export default Sidebar;