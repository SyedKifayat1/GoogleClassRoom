import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import Avatar from './pictures/blur.jpg';




const appData = {
  user: {
    name: 'Syed Kifayat Ur Rahman',
    email: 'bsce22026@itu.edu.pk',
    domain: 'itu.edu.pk',
    avatar: Avatar,
    altText: 'Profile picture of Syed',
  },
  classes :[
    {
      classTitle: "Quran Translation 3",
      batch: "BS CE 22",
      teacher: "Muhammad Akhlaq",
      bgColor: "bg-gray-700",
      messages: [
        {
          sender: "Dr. Sara Khan",
          date: "2024-09-26",
          message: "Study the OSI layers thoroughly.",
          comments: [{ sender: "Sahar",date: "2024-09-22", comment: "Will do, thanks!" },
            { sender: "Kifayat",date: "2024-09-22", comment: "Will do" },
            { sender: "Asad",date: "2024-09-22", comment: "Thanks!" }
          ],
          
        },
      ],
      assignments: [
        {
          title: "Assignment 1: The Hereafter (Akhirah) According to the Quran",
          dueDate: "2024-10-21",
          postedDate: "2024-09-21",
          status: "Pending",
          messages: [
            {
              sender: "Haris Mehmood",
              date: "2024-09-22",
              message: "This is a reminder for Assignment 1 submission. Make sure to follow the guidelines.",
              comments: [
                { sender: "Zunawr",date: "2024-09-22", comment: "Noted, thanks!" },
                { sender: "Maheen",date: "2024-09-22", comment: "Can we have an extension?" },
              ],
            },
            {
              sender: "Muhammad Akhlaq",
              date: "2024-09-23",
              message: "Please submit by the due date as mentioned.",
              comments: [{ sender: "Sahar",date: "2024-09-22", comment: "Understood, working on it!" }],
            },
          ],
        },
        {
          title: "Assignment 2: The Concept of Prophethood",
          dueDate: "2024-11-15",
          postedDate: "2024-10-05",
          status: "In Progress",
          messages: [
            {
              sender: "Muhammad Akhlaq",
              date: "2024-10-10",
              message: "Focus on understanding the main theme discussed in the lecture.",
              comments: [
                { sender: "Zunawr",date: "2024-09-22", comment: "I need clarification on this topic." },
                { sender: "Sahar",date: "2024-09-22", comment: "Looking forward to feedback." },
              ],
            },
          ],
        },
      ],
      classmates: [
        { name: "Sahar", profilePicture: "https://placehold.co/40x40", initials: "S", initialsBackground: "bg-blue-500" },
        { name: "Zunawr", profilePicture: "https://placehold.co/40x40", initials: "Z", initialsBackground: "bg-green-500" },
      ],
    },
    {
      classTitle: "Web Development",
      batch: "BS CE 22",
      teacher: "Syed Kifayat",
      bgColor: "bg-gray-500",
      assignments: [
        {
          title: "Assignment 1: Introduction to HTML & CSS",
          dueDate: "2024-10-15",
          postedDate: "2024-09-01",
          status: "Graded",
          messages: [
            {
              sender: "Kifayat",
              date: "2024-09-02",
              message: "Great work! Continue practicing HTML tags.",
              comments: [{ sender: "Daniyal",date: "2024-09-22", comment: "Thanks for the feedback!" }],
            },
          ],
        },
        {
          title: "Assignment 2: Responsive Design Implementation",
          dueDate: "2024-11-10",
          postedDate: "2024-10-25",
          status: "Graded",
          messages: [
            {
              sender: "Kifayat",
              date: "2024-10-26",
              message: "Good work on the assignment! Keep improving your responsive designs.",
              comments: [
                { sender: "Sahar",date: "2024-09-22", comment: "Thank you! I’ll keep working on it." },
              ],
            },
          ],
        },
      ],
      classmates: [
        { name: "Maham", profilePicture: "https://placehold.co/40x40", initials: "M", initialsBackground: "bg-purple-500" },
        { name: "Daniyal", profilePicture: "https://placehold.co/40x40", initials: "D", initialsBackground: "bg-orange-500" },
      ],
    },
    {
      classTitle: "Database Management Systems",
      batch: "BS CE 22",
      teacher: "Ali Hassan",
      bgColor: "bg-teal-500",
      messages: [
        {
          sender: "Ali Hassan",
          date: "2024-10-16",
          message: "Ensure accuracy in relationships and attributes.",
          comments: [{ sender: "Maham",date: "2024-09-22", comment: "Can we get an example?" }],
        },
        
          {
            sender: "Ali Hassan",
            date: "2024-10-26",
            message: "Focus on avoiding redundancy.",
            comments: [
              { sender: "Daniyal",date: "2024-09-22", comment: "Thank you, will do!" },
            ],
          },
       
      ],
      assignments: [
        {
          title: "Assignment 1: Entity-Relationship Diagrams",
          dueDate: "2024-11-05",
          postedDate: "2024-10-15",
          status: "Pending",
          messages: [
            {
              sender: "Ali Hassan",
              date: "2024-10-16",
              message: "Ensure accuracy in relationships and attributes.",
              comments: [{ sender: "Maham",date: "2024-09-22", comment: "Can we get an example?" }],
            },
          ],
        },
        {
          title: "Assignment 2: Normalization Techniques",
          dueDate: "2024-11-20",
          postedDate: "2024-10-25",
          status: "Pending",
          messages: [
            {
              sender: "Ali Hassan",
              senderProfile:"",
              date: "2024-10-26",
              message: "Focus on avoiding redundancy.",
              comments: [
                { sender: "Daniyal",date: "2024-09-22", comment: "Thank you, will do!" },
              ],
            },
          ],
        },
      ],
      classmates: [
        { name: "Amna", profilePicture: "https://placehold.co/40x40", initials: "A", initialsBackground: "bg-yellow-500" },
        { name: "Usman", profilePicture: "https://placehold.co/40x40", initials: "U", initialsBackground: "bg-red-500" },
      ],
    },
    {
      classTitle: "Computer Networks",
      batch: "BS CE 22",
      teacher: "Dr. Sara Khan",
      bgColor: "bg-indigo-600",
      messages: [
        {
          sender: "Dr. Sara Khan",
          date: "2024-09-26",
          message: "Study the OSI layers thoroughly.",
          comments: [{ sender: "Sahar",date: "2024-09-22", comment: "Will do, thanks!" }],
        },
      ],
      assignments: [
        {
          title: "Assignment 1: OSI Model",
          dueDate: "2024-10-30",
          postedDate: "2024-09-25",
          status: "Graded",
          messages: [
            {
              sender: "Dr. Sara Khan",
              date: "2024-09-26",
              message: "Study the OSI layers thoroughly.",
              comments: [{ sender: "Sahar",date: "2024-09-22", comment: "Will do, thanks!" }],
            },
          ],
        },
        {
          title: "Assignment 2: Network Topologies",
          dueDate: "2024-11-15",
          postedDate: "2024-10-20",
          status: "In Progress",
          messages: [
            {
              sender: "Dr. Sara Khan",
              date: "2024-10-21",
              message: "Provide real-world examples of each topology.",
              comments: [
                { sender: "Usman",date: "2024-09-22", comment: "Great suggestion, thanks!" },
              ],
            },
          ],
        },
      ],
      classmates: [
        { name: "Ali", profilePicture: "https://placehold.co/40x40", initials: "A", initialsBackground: "bg-blue-400" },
        { name: "Nadia", profilePicture: "https://placehold.co/40x40", initials: "N", initialsBackground: "bg-pink-500" },
      ],
    },
  ]
  
};


function extractNotifications(appData) {
  const notifications = [];

  appData.classes.forEach(classItem => {
    const { classTitle, batch, bgColor } = classItem;

    // Determine the initial from the first letter of the classTitle
    const initial = classTitle.charAt(0);

    // Add the notification object to the notifications array
    notifications.push({
      color: bgColor || 'bg-gray-800',  // Use a default color if bgColor is not specified
      initial: initial,
      title: classTitle,
      details: batch || 'N/A'  // Use 'N/A' if batch is not specified
    });
  });

  return notifications;
}

// Get the notifications data
const notifications = extractNotifications(appData);

function extractEvents(appData) {
  const events = {};

  appData.classes.forEach(classItem => {
    classItem.assignments.forEach(assignment => {
      const { dueDate, title } = assignment;

      // Check if the dueDate already has entries in events
      if (!events[dueDate]) {
        events[dueDate] = [];
      }

      // Add assignment data to the events object for the due date
      events[dueDate].push({
        subject: classItem.classTitle,
        title: title,
        time: '11:59 PM',  // Assuming 11:59 PM for all due times as per the example
        address: ''
      });
    });
  });

  return events;
}

// Get the events data
const events = extractEvents(appData);





const App = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const [isSmallScreen, setSmallScreen] = useState(false);
  const [selectedHeading, setSelectedHeading] = useState("");




  const initialSettings = {
    emailNotifications: true,
    commentsOnPosts: true,
    commentsMention: true,
    privateComments: true,
    workPosts: true,
    returnedWork: true,
    invitations: true,
    dueDateReminders: true,
    isOpen: false,
  };

  const [notificationSettings, setNotificationSettings] = useState(initialSettings);

  const toggleSetting = (setting) => {
    setNotificationSettings((prev) => ({
      ...prev,
      [setting]: !prev[setting],
    }));
  };

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
        <Header user={appData.user} toggleSidebar={toggleSidebar} selectedHeading={selectedHeading} onSelectHeading={handleSelectHeading} isSmallScreen={isSmallScreen} />
        <Sidebar classData={appData?.classes} isVisible={isSidebarVisible} onSelectHeading={handleSelectHeading} />
        <div className={`flex-1 transition-all duration-300 mt-16 ${!isSmallScreen && isSidebarVisible ? 'ml-64' : 'ml-0'} relative`}>
          <Routes>
            <Route index element={<MainContent classData={appData.classes} onSelectHeading={handleSelectHeading} />} />
            <Route path="/todo" element={<Todo />}>
              <Route index element={<Assigned appData={appData} />} />
              <Route path="done" element={<Done />} />
              <Route path="missed" element={<Missed />} />
            </Route>
            <Route path="/calendar" element={<Calendar events={events} />} />
            <Route path="/archived-classes" element={<ArchivedClasses />} />
            <Route path="/settings" element={<Settings
              notifications={notifications}
              notificationSettings={notificationSettings}
              toggleSetting={toggleSetting}
            />} />
            <Route path="/subject-details/:title/*" element={<SubjectDetails
              appData={appData}
            />} />
            <Route path="/assignment-details/:title/*" element={<AssignmentDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};



export default App;
