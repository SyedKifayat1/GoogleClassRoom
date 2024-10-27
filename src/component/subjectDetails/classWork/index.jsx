import React from 'react';
import Assignment from './assignment';

const Classwork = () => {
    return (
      // <div className="px-4 py-4 sm:px-8 md:px-16 lg:px-20">
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
          <Assignment
            title="Assignment 3"
            dueDate="Due May 13"
            postedDate="May 2"
            editedDate="May 6"
            fileName="assignment NM 3 (1).pdf"
            fileType="PDF"
            status="Turned in"
          />
          <Assignment
            title="Assignment #1"
            dueDate="Due Feb 26"
            postedDate="Feb 10"
            editedDate=""
            fileName="assignment 1.docx"
            fileType="DOCX"
            status="Not turned in"
          />
          <Assignment
            title="Assignment 2"
            dueDate="Due Mar 28"
            postedDate="Mar 15"
            editedDate="Mar 20"
            fileName="assignment 2.pptx"
            fileType="PPTX"
            status="Graded"
          />
        </div>
      </div>
    );
  };
  
  export default Classwork;



