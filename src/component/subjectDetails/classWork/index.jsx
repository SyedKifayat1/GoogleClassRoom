import React from 'react';
import Assignment from './assignment';

const Classwork = ({ assignments }) => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <button className="flex items-center bg-blue-100 text-blue-700 px-3 py-2 rounded">
        <i className="fas fa-clipboard-list mr-2"></i>
        View your work
      </button>

      <div className="mt-4 mb-4">
        <select className="border border-gray-300 py-2 w-full sm:w-48 md:w-64 lg:w-80">
          <option>All topics</option>
          <option>Assignments</option>
          <option>Books</option>
          <option>Lecture slides</option>
        </select>
      </div>
      <div className="flex items-center justify-between mt-8">
        <h1 className="text-xl sm:text-2xl font-semibold">Assignments</h1>
        <i className="fas fa-ellipsis-v text-gray-600"></i>
      </div>
      <div className="mt-4">
        {assignments?.map((assignment, index) => (
          <Assignment
            key={index}
            title={assignment.title}
            dueDate={assignment.dueDate}
            postedDate={assignment.postedDate}
            editedDate={assignment.editedDate}
            fileName={assignment.fileName}
            fileType={assignment.fileType}
            status={assignment.status}
          />
        ))}
      </div>
    </div>
  );
};

export default Classwork;


