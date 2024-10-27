import React from 'react';
import {  Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faCamera, faFolder } from '@fortawesome/free-solid-svg-icons';

const Card = ({ bgColor, initial, title, subtitle1, subtitle2, onSelectHeading }) => (
    <div className="max-w-xs w-full rounded-lg border hover:shadow-xl bg-white overflow-hidden">
      <div className={`bg-cover bg-center h-24 flex flex-col justify-end p-4 text-white relative ${bgColor}`}>
        <div className="absolute top-4 right-4">
          <FontAwesomeIcon icon={faEllipsisV} />
        </div>
        <Link to={`/subject-details/${title}`}>
  
          <h2 className="text-lg font-semibold cursor-pointer" onClick={() => onSelectHeading(title)}>{title}</h2>
        </Link>
        <p className="text-sm">{subtitle1}</p>
        <p className="text-sm">{subtitle2}</p>
        <div className="absolute bottom-[-35px] right-4 w-20 h-20 bg-purple-700 text-white rounded-full flex justify-center items-center text-lg font-bold">
          {initial}
        </div>
      </div>
      <div className="p-6 min-h-[8rem]">
        <div className="content pb-1">
          <p className="text-sm opacity-80">Due Thursday</p>
          <Link to={`/assignment-details/${title}`} onClick={() => onSelectHeading(title)}><h3 className="text-sm font-bold mt-1">Assignment</h3></Link>
        </div>
  
      </div>
      <div className="flex justify-end gap-2 p-2 border-t border-gray-200">
        <FontAwesomeIcon icon={faCamera} className="text-gray-500 text-2xl" />
        <FontAwesomeIcon icon={faFolder} className="text-gray-500 text-2xl" />
      </div>
    </div>
  );

  export default Card;