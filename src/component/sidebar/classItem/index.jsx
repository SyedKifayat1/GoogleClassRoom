import React from 'react';
import {  Link } from 'react-router-dom';


const ClassItem = ({ initial, title, subtitle1, bgColor, onSelectHeading }) => (
    <Link to={`/subject-details/${title}`}>
      <li className="flex items-center p-4 text-gray-700 hover:bg-gray-200 cursor-pointer" onClick={() => onSelectHeading(title)}>
        <div className={`w-6 h-6 ${bgColor} text-white flex items-center justify-center rounded-full mr-4`}>
          {initial}
        </div>
        <div>
          <span>{title.length > 22 ? `${title.slice(0, 15)}...` : title}</span>
          <p className="text-sm">{subtitle1}</p>
        </div>
      </li>
    </Link>
  );

  export default ClassItem;