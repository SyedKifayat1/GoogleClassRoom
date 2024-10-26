import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Outlet, Routes, useParams, Link, useLocation } from 'react-router-dom';
import './App.css';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faCamera, faFolder } from '@fortawesome/free-solid-svg-icons';
import Header from './component/header';

// Sample data for class items
const classData = [
  { title: "Quran Translation 3", subtitle1: "BS CE 22", subtitle2: "Muhammad Akhlaq", bgColor: "bg-gray-700" },
  { title: "Web Development", subtitle1: "BS CE 22", subtitle2: "Kifayat", bgColor: "bg-gray-500" },
  { title: "Pak Studies and Ideology", subtitle1: "BSCE2022 & BSSE2024", subtitle2: "Maleeha Sattar", bgColor: "bg-purple-500" },
  { title: "Database Management System", subtitle1: "CE-22", subtitle2: "Hamza Shaukat", bgColor: "bg-blue-600" },
  { title: "Entrepreneurship CE ITU", subtitle1: "A", subtitle2: "Qalab e Abbas", bgColor: "bg-green-600" },
];

const Sidebar = ({ isVisible, onSelectHeading }) => {
  const [isEnrolledDropdownOpen, setEnrolledDropdownOpen] = useState(true);

  const toggleEnrolledDropdown = () => {
    setEnrolledDropdownOpen(!isEnrolledDropdownOpen);
  };

  return (
    <div
      className={`fixed top-10 mt-6 pb-5 left-0 h-[92vh] w-64 bg-white shadow-md sidebar transition-transform transform 
        ${isVisible ? 'translate-x-0' : '-translate-x-full'} z-50 overflow-y-auto`}
    >
      <nav className="mt-4">
        <ul>
          <NavItem icon="fas fa-home" label="Home" onSelectHeading={onSelectHeading} to="/" />
          <NavItem icon="fas fa-calendar-alt" label="Calendar" onSelectHeading={onSelectHeading} to="/calendar" />
          <hr className="my-2 border-t border-gray-300" />
          <li onClick={toggleEnrolledDropdown} className="flex items-center p-4 text-gray-700 hover:bg-gray-200 cursor-pointer">
            <i className="fas fa-user-graduate mr-4"></i>
            <span>Enrolled</span>
            <i className={`fas fa-chevron-${isEnrolledDropdownOpen ? 'up' : 'down'} ml-auto`}></i>
          </li>
          {isEnrolledDropdownOpen && (
            <ul>
              <NavItem icon="fas fa-tasks" label="To-do" onSelectHeading={onSelectHeading} to="/todo" />
              {classData.map((classItem, index) => (
                <ClassItem
                  key={index}
                  initial={classItem.subtitle2.charAt(0)} // Set initial dynamically
                  {...classItem}
                  onSelectHeading={onSelectHeading}
                />
              ))}
            </ul>
          )}
        </ul>
        <hr className="my-2 border-t border-gray-300" />
      </nav>
      <nav className="mt-4">
        <ul>
          <NavItem icon="fas fa-archive" label="Archived classes" onSelectHeading={onSelectHeading} to="/archived-classes" />
          <NavItem icon="fas fa-cog" label="Settings" onSelectHeading={onSelectHeading} to="/settings" />
        </ul>
      </nav>
    </div>
  );
};

const NavItem = ({ icon, label, onSelectHeading, to }) => (
  <Link to={to}><li
    className="flex items-center p-4 text-gray-700 hover:bg-gray-200 cursor-pointer"
    onClick={() => onSelectHeading(label === "Home" ? null : label)}
  >

    <i className={`${icon} mr-4`}></i>
    <span>{label}</span>

  </li>
  </Link>
);

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

const Card = ({ bgColor, initial, title, subtitle1, subtitle2, onSelectHeading }) => (
  <div className="max-w-xs w-full rounded-lg shadow-md bg-white overflow-hidden">
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
    <div className="p-6 h-[8rem]"></div>
    <div className="flex justify-end gap-2 p-2 border-t border-gray-200">
      <FontAwesomeIcon icon={faCamera} className="text-gray-500 text-2xl" />
      <FontAwesomeIcon icon={faFolder} className="text-gray-500 text-2xl" />
    </div>
  </div>
);

const MainContent = ({ onSelectHeading }) => (
  <div className="flex-1 p-6 main-content">
    <div className="flex flex-wrap sm:justify-start justify-center gap-5">
      {classData.map((classItem, index) => (
        <div className="max-w-[340px] w-full" key={index}>
          <Card {...classItem} initial={classItem.subtitle2.charAt(0)} onSelectHeading={onSelectHeading} />
        </div>
      ))}
    </div>
  </div>
);


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
        <Sidebar isVisible={isSidebarVisible} onSelectHeading={handleSelectHeading} />
        <div className={`flex-1 transition-all duration-300 mt-16 ${!isSmallScreen && isSidebarVisible ? 'ml-64' : 'ml-0'} relative`}>
          <Routes>
            <Route path="/" element={<MainContent onSelectHeading={handleSelectHeading} />} />
            {/* <Route path="/todo" element={<Todo />} /> */}
            <Route path="/todo" element={<Todo />}>
              <Route index element={<Assigned />} /> {/* Default route */}
              <Route path="done" element={<Done />} />
              <Route path="missed" element={<Missed />} />
            </Route>
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/archived-classes" element={<ArchivedClasses />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/subject-details/:title/*" element={<SubjectDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

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
          <a href="#" className="text-blue-600 text-sm">View all</a> {/* Link with smaller font size */}
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
          <a href="#" className="text-blue-600 text-sm">View instructions</a>
        </div>
      )}
    </div>
  );
};

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


const People = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <section>
        <h1 className="text-2xl font-bold mb-4">Teachers</h1>
        <div className="flex items-center mb-4">
          <img src="https://placehold.co/40x40" alt="Profile picture of Haris Mehmood" className="w-10 h-10 rounded-full mr-4" />
          <span className="text-lg">Haris Mehmood</span>
        </div>
        <div className="flex items-center mb-4">
          <img src="https://placehold.co/40x40" alt="Profile picture of Ayesha Saeed" className="w-10 h-10 rounded-full mr-4" />
          <span className="text-lg">Ayesha Saeed</span>
        </div>
      </section>
      <section>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Classmates</h1>
          <span className="text-lg text-gray-500">78 students</span>
        </div>
        <div className="flex items-center mb-4">
          <img src="https://placehold.co/40x40" alt="Profile picture of Sahar" className="w-10 h-10 rounded-full mr-4" />
          <span className="text-lg">Sahar</span>
        </div>
        <div className="flex items-center mb-4">
          <img src="https://placehold.co/40x40" alt="Profile picture of Zunawr" className="w-10 h-10 rounded-full mr-4" />
          <span className="text-lg">Zunawr</span>
        </div>
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center mr-4">
            <span className="text-lg">M</span>
          </div>
          <span className="text-lg">Maheen</span>
        </div>
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center mr-4">
            <span className="text-lg">D</span>
          </div>
          <span className="text-lg">Daniyal Abid</span>
          <div className="ml-auto">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
              <i className="fas fa-envelope"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Sample pages for routing
const Calendar = () => {
  return (
    <div className="p-4 border border-gray-300 rounded-lg m-4">
      <div className="flex justify-between items-center mb-4">
        <div className="relative w-64">
          <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-6 py-3 pr-10 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option>All classes</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
          </div>
        </div>
        <div className="flex items-center justify-center flex-grow">
          <button className="text-gray-600 hover:text-gray-800 mx-2">
            <i className="fas fa-chevron-left"></i>
          </button>
          <span className="text-gray-600">Oct 20 - Oct 26, 2024</span>
          <button className="text-gray-600 hover:text-gray-800 mx-2">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 border border-gray-300 rounded-lg">
        <div className="text-center border-r border-gray-300 p-4">
          <div className="text-gray-500">Sun</div>
          <div className="text-2xl">20</div>
        </div>
        <div className="text-center border-r border-gray-300 p-4">
          <div className="text-gray-500">Mon</div>
          <div className="text-2xl">21</div>
          <div className="bg-black text-white p-2 mt-2 rounded">
            <div>Assignment:</div>
            <div>Assignment-1: The Hereafter (Akhirah) According to the Quran</div>
            <div>11:59 PM</div>
          </div>
        </div>
        <div className="text-center border-r border-gray-300 p-4">
          <div className="text-gray-500">Tue</div>
          <div className="text-2xl">22</div>
        </div>
        <div className="text-center border-r border-gray-300 p-4">
          <div className="text-gray-500">Wed</div>
          <div className="text-2xl">23</div>
          <div className="text-yellow-500">|</div>
        </div>
        <div className="text-center border-r border-gray-300 p-4">
          <div className="text-gray-500">Thu</div>
          <div className="text-2xl">24</div>
        </div>
        <div className="text-center border-r border-gray-300 p-4">
          <div className="text-gray-500">Fri</div>
          <div className="text-2xl">25</div>
        </div>
        <div className="text-center p-4">
          <div className="text-gray-500">Sat</div>
          <div className="text-2xl bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto">26</div>
        </div>
      </div>
    </div>
  );
};


const Section = ({ title, count, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" shadow-sm p-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-gray-700">{title}</span>
        <span className={`text-${count > 0 ? 'blue' : 'gray'}-500`}>
          {count} <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
        </span>
      </div>
      {isOpen && <div className="mt-2">{children}</div>}
    </div>
  );
};


const Todo = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div>
      <header className="bg-white border fixed w-full z-40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <nav className="flex space-x-4">
            <Link
              to="/todo"
              className={isActive("/todo") ? "text-blue-600 font-semibold" : "text-gray-600"}
            >
              Assign
            </Link>
            <Link
              to="/todo/done"
              className={isActive("/todo/done") ? "text-blue-600 font-semibold" : "text-gray-600"}
            >
              Done
            </Link>
            <Link
              to="/todo/missed"
              className={isActive("/todo/missed") ? "text-blue-600 font-semibold" : "text-gray-600"}
            >
              Missed
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 pt-16">
        <Outlet /> {/* This will render the nested route components */}
      </main>
    </div>
  );
};




const Done = () => {
  return <Assigned />;
};

const Missed = () => {
  return <Assigned />;
};

const Assigned = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-4 w-64">
        <select className="border border-gray-300 w-full rounded px-4 py-2">
          <option>All classes</option>
        </select>
      </div>
      <div className="space-y-4">
        <Section title="No due date" count={6}>
          <div className="space-y-4">
            {[
              {
                icon: 'fas fa-file-alt',
                title: 'Reading - How Uber, Airbnb, and Etsy Attracted Their First 1,000 Customers',
                course: 'Entrepreneurship CE ITU',
                date: 'Posted Wednesday, Aug 28',
              },
              {
                icon: 'fas fa-question-circle',
                title: 'Do You agree with what Steve Jobs said in the uploaded video ???',
                course: 'Entrepreneurship CE ITU',
                date: 'Posted Saturday, Sep 14',
              },
              {
                icon: 'fas fa-file-alt',
                title: 'Develop a Porters Five Force Analysis Report',
                course: 'Entrepreneurship CE ITU',
                date: 'Posted Sunday, Sep 29',
              },
              {
                icon: 'fas fa-file-alt',
                title: 'Lab 07',
                course: 'CE301L: Operating Systems Lab',
                date: 'Posted Monday, Oct 7',
                bgColor: 'bg-blue-500',
              },
            ].map((item, index, array) => (
              <div key={index}>
                <div className="flex items-start px-5 rounded py-4 space-x-4 transition-transform transform  hover:shadow">
                  <div className="flex-shrink-0">
                    <div className={`rounded-full flex justify-center items-center w-10 h-10 p-2 ${item.bgColor || 'bg-green-500'} text-white`}>
                      <i className={item.icon}></i>
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-900 font-medium">{item.title}</div>
                    <div className="text-gray-500">{item.course}</div>
                    <div className="text-gray-400">{item.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>
        <Section title="This week" count={0}>
          {/* Add content for "This week" section here if needed */}
        </Section>
        <Section title="Next week" count={1}>
          <div className="flex items-start px-5 rounded py-4 space-x-4 transition-transform transform  hover:shadow">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-500 text-white rounded-full p-2 flex justify-center items-center w-10 h-10">
                <i className="fas fa-clipboard"></i>
              </div>
              <div>
                <div className="text-gray-700">Assignment no 2</div>
                <div className="text-gray-500">DSP</div>
              </div>
            </div>
            <div className="text-green-500">Thursday, Oct 31</div>
          </div>
        </Section>
        <Section title="Later" count={0}>
          {/* Add content for "Later" section here if needed */}
        </Section>
      </div>
    </div>
  );
};

const ToggleSwitch = ({ checked, onChange }) => {
  return (
    <input
      type="checkbox"
      className="toggle-checkbox"
      checked={checked}
      onChange={onChange}
    />
  );
};


const Settings = () => {

  const [emailNotifications, setEmailNotifications] = React.useState(true);
  const [commentsOnPosts, setCommentsOnPosts] = React.useState(true);
  const [commentsMention, setCommentsMention] = React.useState(true);
  const [privateComments, setPrivateComments] = React.useState(true);
  const [workPosts, setWorkPosts] = React.useState(true);
  const [returnedWork, setReturnedWork] = React.useState(true);
  const [invitations, setInvitations] = React.useState(true);
  const [dueDateReminders, setDueDateReminders] = React.useState(true);
  const notifications = [
    { color: 'bg-black', initial: 'Q', title: 'Quran Translation 3', details: 'BS CE 22' },
    { color: 'bg-blue-600', initial: 'D', title: 'Database Management System S2024', details: 'CE-22' },
    { color: 'bg-purple-600', initial: 'D', title: 'Data Based Management Systems Lab', details: 'Fall 2024 - CE 22' },
    { color: 'bg-green-600', initial: 'E', title: 'Entrepreneurship', details: 'CE ITU A' },
    { color: 'bg-blue-600', initial: 'D', title: 'DSP', details: 'BSEE21, BSCE22, MS, PhDEE' },
    { color: 'bg-purple-600', initial: 'D', title: 'DSP (Lab) Fall 2024', details: 'BSEE-21 BSCE-22' },
    { color: 'bg-purple-800', initial: 'P', title: 'Pak Studies and Ideology & Constitution of Pakistan', details: 'BSCE2022 & BSSE2024' },
    { color: 'bg-gray-800', initial: 'C', title: 'CE301T/CE501 OS/AOS', details: 'Fall 24' },
    { color: 'bg-blue-400', initial: 'C', title: 'CE301L: Operating Systems Lab', details: 'CE22' },
    { color: 'bg-green-600', initial: 'P', title: 'Probability and Statistics', details: 'BSCE-2022' },
    { color: 'bg-blue-600', initial: 'Q', title: 'Quran Translation-2 (QT-2)', details: 'CE-22, EE-22' },
    { color: 'bg-blue-400', initial: 'C', title: 'CE-205T Microcontroller & Interfacing', details: 'BSCE22' },
    { color: 'bg-green-800', initial: 'N', title: 'Numerical Methods', details: 'BSCE22 spring2024' },
    { color: 'bg-blue-400', initial: 'C', title: 'Complex Variables & Transforms', details: 'BSCE-22' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center p-5 gap-5 py-10">
      <div className="flex justify-center pt-10 w-full">
        <div className="bg-white w-full  p-6 rounded-lg shadow-md md:w-1/2">
          <h1 className="text-2xl font-semibold mb-4">Profile</h1>
          <div className="mb-4">
            <p className="font-medium">Profile picture</p>
            <div className="flex items-center">
              <img src="https://placehold.co/40x40" alt="Profile picture" className="rounded-full w-10 h-10 mr-2" />
              <a href="#" className="text-blue-600">Change</a>
            </div>
          </div>
          <div className="mb-4">
            <p className="font-medium">Account settings</p>
            <p>Change your password and security options, and access other Google services. <a href="#" className="text-blue-600">Manage</a></p>
          </div>
          <div>
            <p className="font-medium">Change name</p>
            <p>To change your name, ask your admin. <a href="#" className="text-blue-600">Learn more</a></p>
          </div>
        </div>
      </div>

      <div className="bg-white p-5 rounded-lg shadow-md w-full max-w-2xl">
        <h1 className="text-2xl font-semibold mb-4">Notifications</h1>

        <div className="mb-6">
          <h2 className="text-lg font-medium">Email</h2>
          <p className="text-sm text-gray-600 mb-2">
            These settings apply to the notifications you get by email.
            <a href="#" className="text-blue-600">Learn more</a>
          </p>
          <div className="flex justify-between items-center mb-4">
            <div className="flex-1">Allow email notifications</div>
            <div className="flex-none">
              <ToggleSwitch
                checked={emailNotifications}
                onChange={() => setEmailNotifications(!emailNotifications)}
              />
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-medium">Comments</h2>
          <div className="flex justify-between items-center mb-4">
            <div className="flex-1">Comments on your posts</div>
            <div className="flex-none">
              <ToggleSwitch
                checked={commentsOnPosts}
                onChange={() => setCommentsOnPosts(!commentsOnPosts)}
              />
            </div>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div className="flex-1">Comments that mention you</div>
            <div className="flex-none">
              <ToggleSwitch
                checked={commentsMention}
                onChange={() => setCommentsMention(!commentsMention)}
              />
            </div>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div className="flex-1">Private comments on work</div>
            <div className="flex-none">
              <ToggleSwitch
                checked={privateComments}
                onChange={() => setPrivateComments(!privateComments)}
              />
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-medium">Classes you're enrolled in</h2>
          <div className="flex justify-between items-center mb-4">
            <div className="flex-1">Work and other posts from teachers</div>
            <div className="flex-none">
              <ToggleSwitch
                checked={workPosts}
                onChange={() => setWorkPosts(!workPosts)}
              />
            </div>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div className="flex-1">Returned work and grades from your teachers</div>
            <div className="flex-none">
              <ToggleSwitch
                checked={returnedWork}
                onChange={() => setReturnedWork(!returnedWork)}
              />
            </div>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div className="flex-1">Invitations to join classes as a student</div>
            <div className="flex-none">
              <ToggleSwitch
                checked={invitations}
                onChange={() => setInvitations(!invitations)}
              />
            </div>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div className="flex-1">Due-date reminders for your work</div>
            <div className="flex-none">
              <ToggleSwitch
                checked={dueDateReminders}
                onChange={() => setDueDateReminders(!dueDateReminders)}
              />
            </div>
          </div>
        </div>

        <div className="border-t pt-4">
          <h2 className="text-lg font-medium">Class notifications</h2>
          <div className="flex justify-between items-center mt-2" onClick={() => setIsOpen(!isOpen)}>
            <p className="text-sm text-gray-600">
              These settings apply to both your email and device notifications for each class
            </p>
            <i className="fas fa-chevron-down"></i>
          </div>
          {isOpen && (
            <div className="mt-4 space-y-4">
              {notifications.map((notification, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${notification.color}`}>
                      {notification.initial}
                    </div>
                    <div>
                      <p className="font-medium">{notification.title.slice(0,20)}...</p>
                      <p className="text-gray-500">{notification.details}</p>
                    </div>
                  </div>
                  <div>
                    <ToggleSwitch/>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>



    </div>
  );

}

const ArchivedClasses = () => <div>Archived Classes Page</div>;

export default App;

