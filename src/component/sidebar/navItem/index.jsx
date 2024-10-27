
import React from 'react';
import {  Link } from 'react-router-dom';

const NavItem = ({ icon, label, onSelectHeading, to }) => (
    <Link to={to}><li
      className="flex items-center p-4 text-gray-700 hover:bg-gray-200 cursor-pointer"
      onClick={() => onSelectHeading(label === "Home" ? null : label)}
    >
  
      <i className={`${icon} mr-4`}></i>
      <span>{label}</span>
  
    </li>
    </Link>
  );
  
  export default NavItem;