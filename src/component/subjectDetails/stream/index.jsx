import React from 'react';
import {  Link } from 'react-router-dom';

const Stream = ({ title }) => {
    return (
      // <main className="container mx-auto px-4 py-6">
      <main className="max-w-6xl mx-auto p-4">
        <div className="bg-teal-600 text-white p-6 rounded-lg flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">{title}</h1>
            <p>BSCE22 spring2024</p>
          </div>
          <img src="https://placehold.co/150x100" alt="Illustration of a mobile phone and documents" className="w-32 h-20" />
        </div>
  
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
  
          <div className="bg-white p-2 rounded-lg shadow lg:w-60 h-40">
            <h2 className="text-base font-medium">Upcoming</h2> {/* Title with medium font size */}
            <p className="text-gray-600 text-sm">Woohoo, no work due soon!</p> {/* Message with smaller font size */}
            <Link to={`/todo`} className="text-blue-600 text-sm">View all</Link> {/* Link with smaller font size */}
          </div>
  
          {/* Second Child */}
          <div className="col-span-2 bg-white p-4 rounded-lg shadow">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold">H</div> {/* Adjusted avatar size */}
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-sm font-medium">Hira Yaseen</h3>
                    <p className="text-xs text-gray-500">Jun 11</p>
                  </div>
                  <div className="text-gray-500 transform rotate-90">
                    <i className="fas fa-ellipsis-h"></i>
                  </div>
                </div>
                <p className="mt-2 text-gray-800">Hi,<br />Your TA will be available at 10.30 am, if you want to review your exams. I'll be available by 12 pm for this.</p>
                <div className="mt-2 text-gray-500 text-sm flex items-center">
                  <i className="fas fa-comments mr-1"></i>
                  1 class comment
                </div>
                <div className="mt-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">A</div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">Abdullah Farrukh Sanani</h4>
                      <p className="text-xs text-gray-500">Jun 11</p>
                      <p className="mt-1 text-gray-800">Ap kha Han mam?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <input type="text" placeholder="Add class comment..." className="w-full border rounded-full px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
          </div>
        </div>
  
  
      </main>
    );
  };


  export default Stream;