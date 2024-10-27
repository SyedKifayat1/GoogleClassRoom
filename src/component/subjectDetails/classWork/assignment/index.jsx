  
import React, { useState } from 'react';
import {  Link } from 'react-router-dom';

  const Assignment = ({ title, dueDate, postedDate, editedDate, fileName, fileType, status }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="bg-white shadow rounded-lg mb-4">
        <div
          className="flex justify-between items-center border-b border-gray-200 p-4 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center">
            <i className="fas fa-clipboard text-gray-500 text-2xl mr-4"></i>
            <span className="text-lg font-medium">{title}</span>
          </div>
          <span className="text-gray-500 text-sm">{dueDate}</span>
        </div>
        {isOpen && (
          <div className="p-4">
            <p className="text-gray-500 text-sm mb-2">
              Posted {postedDate} {editedDate && `(Edited ${editedDate})`}
            </p>
            {fileName && (
              <div className="flex items-center mb-4">
                <img src="https://placehold.co/100x100" alt={`Thumbnail of ${fileName}`} className="w-16 h-16 border border-gray-300 rounded mr-4" />
                <div>
                  <p className="text-gray-700">{fileName}</p>
                  <p className="text-gray-500 text-sm">{fileType}</p>
                </div>
                <span className="ml-auto text-gray-500 text-sm">{status}</span>
              </div>
            )}
            <Link to='' className="text-blue-600 text-sm">View instructions</Link>
          </div>
        )}
      </div>
    );
  };

  export default Assignment;