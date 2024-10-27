import React from 'react';
import {  Route, Outlet, Routes, useParams, Link, useLocation } from 'react-router-dom';
import People from './people';
import Classwork from './classWork';
import Stream from './stream';

const SubjectDetails = () => {
    const { title } = useParams();
    const location = useLocation();
  
  
    // const isActive = (path) => location.pathname === path;
    const isActive = (path) => {
      const decodedPath = decodeURIComponent(location.pathname);
      return decodedPath === path;
    };
    console.log(location.pathname);
    return (
      <div>
  
        <header className="bg-white border fixed w-full z-40">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <nav className="flex space-x-4">
              <Link
                to=""
                className={isActive(`/subject-details/${title}`) ? "text-blue-600 font-semibold" : "text-gray-600"}
              >
                Stream
              </Link>
              <Link
                to="classwork"
                className={isActive(`/subject-details/${title}/classwork`) ? "text-blue-600 font-semibold" : "text-gray-600"}
              >
                Classwork
              </Link>
              <Link
                to="people"
                className={isActive(`/subject-details/${title}/people`) ? "text-blue-600 font-semibold" : "text-gray-600"}
              >
                People
              </Link>
            </nav>
          </div>
        </header>
  
        <main className="container mx-auto px-4 py-6 pt-16">
          <Outlet />
          <Routes>
            <Route path="/" element={<Stream title={title} />} />
            <Route path="classwork" element={<Classwork title={title} />} />
            <Route path="people" element={<People title={title} />} />
          </Routes>
        </main>
      </div>
    );
  };
  

  export default SubjectDetails;
  
  
  
  