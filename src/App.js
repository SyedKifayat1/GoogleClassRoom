import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import './App.css';
import './index.css';
import Header from './component/header';
import Sidebar from './component/sidebar';
import MainContent from './component/mainContent';
import NotFound from './component/notFound';
import SubjectDetails from './component/subjectDetails';
import Calendar from './component/calender';
import Todo from './component/todo';
import Assigned from './component/todo/assigned';
import Done from './component/todo/done';
import Missed from './component/todo/missed';
import Settings from './component/setting';
import AssignmentDetails from './component/assignmentDetails';
import ArchivedClasses from './component/archivedClasses';
// Sample data for class items
const classData = [
  { title: "Quran Translation 3", subtitle1: "BS CE 22", subtitle2: "Muhammad Akhlaq", bgColor: "bg-gray-700" },
  { title: "Web Development", subtitle1: "BS CE 22", subtitle2: "Kifayat", bgColor: "bg-gray-500" },
  { title: "Pak Studies and Ideology", subtitle1: "BSCE2022 & BSSE2024", subtitle2: "Maleeha Sattar", bgColor: "bg-purple-500" },
  { title: "Database Management System", subtitle1: "CE-22", subtitle2: "Hamza Shaukat", bgColor: "bg-blue-600" },
  { title: "Entrepreneurship CE ITU", subtitle1: "A", subtitle2: "Qalab e Abbas", bgColor: "bg-green-600" },
];


const App = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const [isSmallScreen, setSmallScreen] = useState(false);
  const [selectedHeading, setSelectedHeading] = useState("");

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const handleSelectHeading = (heading) => {
    setSelectedHeading(heading);
  };

  useEffect(() => {
    const handleResize = () => {
      setSmallScreen(window.innerWidth <= 650);
      setSidebarVisible(window.innerWidth > 650);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Router>
      <div className="flex">
        <Header toggleSidebar={toggleSidebar} selectedHeading={selectedHeading} onSelectHeading={handleSelectHeading} isSmallScreen={isSmallScreen} />
        <Sidebar classData={classData} isVisible={isSidebarVisible} onSelectHeading={handleSelectHeading} />
        <div className={`flex-1 transition-all duration-300 mt-16 ${!isSmallScreen && isSidebarVisible ? 'ml-64' : 'ml-0'} relative`}>
          <Routes>
            <Route index element={<MainContent classData={classData} onSelectHeading={handleSelectHeading} />} />
            <Route path="/todo" element={<Todo />}>
              <Route index element={<Assigned />} /> 
              <Route path="done" element={<Done />} />
              <Route path="missed" element={<Missed />} />
            </Route>
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/archived-classes" element={<ArchivedClasses />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/subject-details/:title/*" element={<SubjectDetails />} />
            <Route path="/assignment-details/:title/*" element={<AssignmentDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};



export default App;
