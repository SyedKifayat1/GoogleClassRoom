// import React from 'react';
// import { Route, Outlet, Routes, useParams, Link, useLocation } from 'react-router-dom';
// import People from './people';
// import Classwork from './classWork';
// import Stream from './stream';

// const SubjectDetails = ({ classmates, teachers, assignments, semester, upcomingMessage, userData, comments }) => {
//   const { title } = useParams();
//   const location = useLocation();


//   // const isActive = (path) => location.pathname === path;
//   const isActive = (path) => {
//     const decodedPath = decodeURIComponent(location.pathname);
//     return decodedPath === path;
//   };
//   console.log(location.pathname);
//   return (
//     <div>

      // <header className="bg-white border fixed w-full z-40">
      //   <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      //     <nav className="flex space-x-4">
      //       <Link
      //         to=""
      //         className={isActive(`/subject-details/${title}`) ? "text-blue-600 font-semibold" : "text-gray-600"}
      //       >
      //         Stream
      //       </Link>
      //       <Link
      //         to="classwork"
      //         className={isActive(`/subject-details/${title}/classwork`) ? "text-blue-600 font-semibold" : "text-gray-600"}
      //       >
      //         Classwork
      //       </Link>
      //       <Link
      //         to="people"
      //         className={isActive(`/subject-details/${title}/people`) ? "text-blue-600 font-semibold" : "text-gray-600"}
      //       >
      //         People
      //       </Link>
      //     </nav>
      //   </div>
      // </header>

//       <main className="container mx-auto px-4 py-6 pt-16">
//         <Outlet />
//         <Routes>
//           <Route path="/" element={<Stream title={title}
//             semester={semester}
//             upcomingMessage={upcomingMessage}
//             userData={userData}
//             comments={comments} />} />
//           <Route path="classwork" element={<Classwork assignments={assignments} />} />
//           <Route path="people" element={<People teachers={teachers} classmates={classmates} />} />
//         </Routes>
//       </main>
//     </div>
//   );
// };


// export default SubjectDetails;



// import React from 'react';
// import { Outlet, Routes, Route, useParams, useLocation, Link } from 'react-router-dom';
// import People from './people';
// import Classwork from './classWork';
// import Stream from './stream';



// const SubjectDetails = ({appData}) => {
//   const { title } = useParams();
//   const location = useLocation();
  
//   // Find the specific class data by title
//   const classData = appData.classes.find(cls => cls.classTitle === title);
  
//   if (!classData) return <div>Class not found</div>;

//   // Helper to set active navigation style
//   const isActive = (path) => decodeURIComponent(location.pathname) === path;

//   return (
//     <div>
      
//       <header className="bg-white border fixed w-full z-40">
//         <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//           <nav className="flex space-x-4">
//             <Link
//               to=""
//               className={isActive(`/subject-details/${title}`) ? "text-blue-600 font-semibold" : "text-gray-600"}
//             >
//               Stream
//             </Link>
//             <Link
//               to="classwork"
//               className={isActive(`/subject-details/${title}/classwork`) ? "text-blue-600 font-semibold" : "text-gray-600"}
//             >
//               Classwork
//             </Link>
//             <Link
//               to="people"
//               className={isActive(`/subject-details/${title}/people`) ? "text-blue-600 font-semibold" : "text-gray-600"}
//             >
//               People
//             </Link>
//           </nav>
//         </div>
//       </header>

//       <main className="container mx-auto px-4 py-6 pt-16">
//         <Outlet />
//         <Routes>
//           <Route
//             path=""
//             element={
//               <Stream
//                 // title={classData.classTitle}
//                 // semester={classData.batch}
//                 // upcomingMessage="Woohoo, no work due soon!"
//                 userData={classData}
//                 // userData={appData.user}
//                 // comments={classData.assignments.flatMap(a => a.messages.flatMap(m => m.comments))}
//               />
//             }
//           />
//           <Route path="classwork" element={<Classwork assignments={classData.assignments} />} />
//           <Route path="people" element={<People teachers={[{ name: classData.teacher }]} classmates={classData.classmates} />} />
//         </Routes>
//       </main>
//     </div>
//   );
// };

// export default SubjectDetails;



import React from 'react';
import { Outlet, Routes, Route, useParams, useLocation, Link } from 'react-router-dom';
import People from './people';
import Classwork from './classWork';
import Stream from './stream';

const SubjectDetails = ({ appData }) => {
  const { title } = useParams(); // Get the title from the URL params
  const location = useLocation(); // Get current location for active link styling
  
  // Find the specific class data by title
  const classData = appData.classes.find(cls => cls.classTitle === title);
  
  if (!classData) return <div>Class not found</div>;

  // Helper to set active navigation style
  const isActive = (path) => decodeURIComponent(location.pathname) === path;

  return (
    <div>
      <header className="bg-white border fixed w-full z-40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <nav className="flex space-x-4">
            <Link
              to="" // Go to the base route for Stream
              className={isActive(`/subject-details/${title}`) ? "text-blue-600 font-semibold" : "text-gray-600"}
            >
              Stream
            </Link>
            <Link
              to="classwork" // Navigate to classwork section
              className={isActive(`/subject-details/${title}/classwork`) ? "text-blue-600 font-semibold" : "text-gray-600"}
            >
              Classwork
            </Link>
            <Link
              to="people" // Navigate to people section
              className={isActive(`/subject-details/${title}/people`) ? "text-blue-600 font-semibold" : "text-gray-600"}
            >
              People
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 pt-16">
        {/* Outlet for rendering child routes */}
        <Outlet />
        <Routes>
          <Route
            path="" // Default route (Stream)
            element={
              <Stream
                classData={classData} // Passing classData as userData to Stream
              />
            }
          />
          <Route 
            path="classwork" 
            element={<Classwork assignments={classData.assignments} />} 
          />
          <Route 
            path="people" 
            element={<People teachers={[{ name: classData.teacher }]} classmates={classData.classmates} />} 
          />
        </Routes>
      </main>
    </div>
  );
};

export default SubjectDetails;
