import React from 'react';
import {  Link } from 'react-router-dom';


const ClassItem = ({ initial, classTitle, batch, bgColor, onSelectHeading }) => (
    <Link to={`/subject-details/${classTitle}`}>
      <li className="flex items-center p-4 text-gray-700 hover:bg-gray-200 cursor-pointer" onClick={() => onSelectHeading(classTitle)}>
        <div className={`w-6 h-6 ${bgColor} text-white flex items-center justify-center rounded-full mr-4`}>
          {initial}
        </div>
        <div>
          <span>{classTitle.length > 22 ? `${classTitle.slice(0, 15)}...` : classTitle}</span>
          <p className="text-sm">{batch}</p>
        </div>
      </li>
    </Link>
  );

  export default ClassItem;