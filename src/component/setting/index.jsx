// import React, { useState } from 'react';

// const ToggleSwitch = ({ checked, onChange }) => {
//     return (
//       <input
//         type="checkbox"
//         className="toggle-checkbox"
//         checked={checked}
//         onChange={onChange}
//       />
//     );
//   };
  
  
//   const Settings = () => {
  
//     const [emailNotifications, setEmailNotifications] = React.useState(true);
//     const [commentsOnPosts, setCommentsOnPosts] = React.useState(true);
//     const [commentsMention, setCommentsMention] = React.useState(true);
//     const [privateComments, setPrivateComments] = React.useState(true);
//     const [workPosts, setWorkPosts] = React.useState(true);
//     const [returnedWork, setReturnedWork] = React.useState(true);
//     const [invitations, setInvitations] = React.useState(true);
//     const [dueDateReminders, setDueDateReminders] = React.useState(true);
//     const notifications = [
//       { color: 'bg-black', initial: 'Q', title: 'Quran Translation 3', details: 'BS CE 22' },
//       { color: 'bg-blue-600', initial: 'D', title: 'Database Management System S2024', details: 'CE-22' },
//       { color: 'bg-purple-600', initial: 'D', title: 'Data Based Management Systems Lab', details: 'Fall 2024 - CE 22' },
//       { color: 'bg-green-600', initial: 'E', title: 'Entrepreneurship', details: 'CE ITU A' },
//       { color: 'bg-blue-600', initial: 'D', title: 'DSP', details: 'BSEE21, BSCE22, MS, PhDEE' },
//       { color: 'bg-purple-600', initial: 'D', title: 'DSP (Lab) Fall 2024', details: 'BSEE-21 BSCE-22' },
//       { color: 'bg-purple-800', initial: 'P', title: 'Pak Studies and Ideology & Constitution of Pakistan', details: 'BSCE2022 & BSSE2024' },
//       { color: 'bg-gray-800', initial: 'C', title: 'CE301T/CE501 OS/AOS', details: 'Fall 24' },
//       { color: 'bg-blue-400', initial: 'C', title: 'CE301L: Operating Systems Lab', details: 'CE22' },
//       { color: 'bg-green-600', initial: 'P', title: 'Probability and Statistics', details: 'BSCE-2022' },
//       { color: 'bg-blue-600', initial: 'Q', title: 'Quran Translation-2 (QT-2)', details: 'CE-22, EE-22' },
//       { color: 'bg-blue-400', initial: 'C', title: 'CE-205T Microcontroller & Interfacing', details: 'BSCE22' },
//       { color: 'bg-green-800', initial: 'N', title: 'Numerical Methods', details: 'BSCE22 spring2024' },
//       { color: 'bg-blue-400', initial: 'C', title: 'Complex Variables & Transforms', details: 'BSCE-22' },
//     ];
  
//     const [isOpen, setIsOpen] = useState(false);
//     return (
//       <div className="flex flex-col justify-center items-center p-5 gap-5 py-10">
//         <div className="flex justify-center pt-10 w-full">
//           <div className="bg-white w-full  p-6 rounded-lg shadow-md md:w-1/2">
//             <h1 className="text-2xl font-semibold mb-4">Profile</h1>
//             <div className="mb-4">
//               <p className="font-medium">Profile picture</p>
//               <div className="flex items-center">
//                 <img src="https://placehold.co/40x40" alt="Profile picture" className="rounded-full w-10 h-10 mr-2" />
//                 <a href="#" className="text-blue-600">Change</a>
//               </div>
//             </div>
//             <div className="mb-4">
//               <p className="font-medium">Account settings</p>
//               <p>Change your password and security options, and access other Google services. <a href="#" className="text-blue-600">Manage</a></p>
//             </div>
//             <div>
//               <p className="font-medium">Change name</p>
//               <p>To change your name, ask your admin. <a href="#" className="text-blue-600">Learn more</a></p>
//             </div>
//           </div>
//         </div>
  
//         <div className="bg-white p-5 rounded-lg shadow-md w-full max-w-2xl">
//           <h1 className="text-2xl font-semibold mb-4">Notifications</h1>
  
//           <div className="mb-6">
//             <h2 className="text-lg font-medium">Email</h2>
//             <p className="text-sm text-gray-600 mb-2">
//               These settings apply to the notifications you get by email.
//               <a href="#" className="text-blue-600">Learn more</a>
//             </p>
//             <div className="flex justify-between items-center mb-4">
//               <div className="flex-1">Allow email notifications</div>
//               <div className="flex-none">
//                 <ToggleSwitch
//                   checked={emailNotifications}
//                   onChange={() => setEmailNotifications(!emailNotifications)}
//                 />
//               </div>
//             </div>
//           </div>
  
//           <div className="mb-6">
//             <h2 className="text-lg font-medium">Comments</h2>
//             <div className="flex justify-between items-center mb-4">
//               <div className="flex-1">Comments on your posts</div>
//               <div className="flex-none">
//                 <ToggleSwitch
//                   checked={commentsOnPosts}
//                   onChange={() => setCommentsOnPosts(!commentsOnPosts)}
//                 />
//               </div>
//             </div>
//             <div className="flex justify-between items-center mb-4">
//               <div className="flex-1">Comments that mention you</div>
//               <div className="flex-none">
//                 <ToggleSwitch
//                   checked={commentsMention}
//                   onChange={() => setCommentsMention(!commentsMention)}
//                 />
//               </div>
//             </div>
//             <div className="flex justify-between items-center mb-4">
//               <div className="flex-1">Private comments on work</div>
//               <div className="flex-none">
//                 <ToggleSwitch
//                   checked={privateComments}
//                   onChange={() => setPrivateComments(!privateComments)}
//                 />
//               </div>
//             </div>
//           </div>
  
//           <div className="mb-6">
//             <h2 className="text-lg font-medium">Classes you're enrolled in</h2>
//             <div className="flex justify-between items-center mb-4">
//               <div className="flex-1">Work and other posts from teachers</div>
//               <div className="flex-none">
//                 <ToggleSwitch
//                   checked={workPosts}
//                   onChange={() => setWorkPosts(!workPosts)}
//                 />
//               </div>
//             </div>
//             <div className="flex justify-between items-center mb-4">
//               <div className="flex-1">Returned work and grades from your teachers</div>
//               <div className="flex-none">
//                 <ToggleSwitch
//                   checked={returnedWork}
//                   onChange={() => setReturnedWork(!returnedWork)}
//                 />
//               </div>
//             </div>
//             <div className="flex justify-between items-center mb-4">
//               <div className="flex-1">Invitations to join classes as a student</div>
//               <div className="flex-none">
//                 <ToggleSwitch
//                   checked={invitations}
//                   onChange={() => setInvitations(!invitations)}
//                 />
//               </div>
//             </div>
//             <div className="flex justify-between items-center mb-4">
//               <div className="flex-1">Due-date reminders for your work</div>
//               <div className="flex-none">
//                 <ToggleSwitch
//                   checked={dueDateReminders}
//                   onChange={() => setDueDateReminders(!dueDateReminders)}
//                 />
//               </div>
//             </div>
//           </div>
  
//           <div className="border-t pt-4">
//             <h2 className="text-lg font-medium">Class notifications</h2>
//             <div className="flex justify-between items-center mt-2" onClick={() => setIsOpen(!isOpen)}>
//               <p className="text-sm text-gray-600">
//                 These settings apply to both your email and device notifications for each class
//               </p>
//               <i className="fas fa-chevron-down"></i>
//             </div>
//             {isOpen && (
//               <div className="mt-4 space-y-4">
//                 {notifications.map((notification, index) => (
//                   <div key={index} className="flex items-center justify-between">
//                     <div className="flex items-center space-x-4">
//                       <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${notification.color}`}>
//                         {notification.initial}
//                       </div>
//                       <div>
//                         <p className="font-medium">{notification.title.slice(0, 20)}...</p>
//                         <p className="text-gray-500">{notification.details}</p>
//                       </div>
//                     </div>
//                     <div>
//                       <ToggleSwitch />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
  
//           </div>
//         </div>
  
  
  
//       </div>
//     );
  
//   }

//   export default Settings;







import React from 'react';

const ToggleSwitch = ({ checked, onChange }) => (
  <input
    type="checkbox"
    className="toggle-checkbox"
    checked={checked}
    onChange={onChange}
  />
);

const Settings = ({ notifications, notificationSettings, toggleSetting }) => {
  return (
    <div className="flex flex-col justify-center items-center p-5 gap-5 py-10">
      {/* Profile section */}
      <div className="flex justify-center pt-10 w-full">
        <div className="bg-white w-full p-6 rounded-lg shadow-md md:w-1/2">
          <h1 className="text-2xl font-semibold mb-4">Profile</h1>
          <div className="mb-4">
            <p className="font-medium">Profile picture</p>
            <div className="flex items-center">
              <img src="https://placehold.co/40x40" alt="Profile" className="rounded-full w-10 h-10 mr-2" />
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

      {/* Notifications section */}
      <div className="bg-white p-5 rounded-lg shadow-md w-full max-w-2xl">
        <h1 className="text-2xl font-semibold mb-4">Notifications</h1>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <p>Email Notifications</p>
            <ToggleSwitch
              checked={notificationSettings.emailNotifications}
              onChange={() => toggleSetting('emailNotifications')}
            />
          </div>
          <div className="flex justify-between items-center">
            <p>Comments on Posts</p>
            <ToggleSwitch
              checked={notificationSettings.commentsOnPosts}
              onChange={() => toggleSetting('commentsOnPosts')}
            />
          </div>
          <div className="flex justify-between items-center">
            <p>Comments Mention</p>
            <ToggleSwitch
              checked={notificationSettings.commentsMention}
              onChange={() => toggleSetting('commentsMention')}
            />
          </div>
          <div className="flex justify-between items-center">
            <p>Private Comments</p>
            <ToggleSwitch
              checked={notificationSettings.privateComments}
              onChange={() => toggleSetting('privateComments')}
            />
          </div>
          <div className="flex justify-between items-center">
            <p>Work Posts</p>
            <ToggleSwitch
              checked={notificationSettings.workPosts}
              onChange={() => toggleSetting('workPosts')}
            />
          </div>
          <div className="flex justify-between items-center">
            <p>Returned Work</p>
            <ToggleSwitch
              checked={notificationSettings.returnedWork}
              onChange={() => toggleSetting('returnedWork')}
            />
          </div>
          <div className="flex justify-between items-center">
            <p>Invitations</p>
            <ToggleSwitch
              checked={notificationSettings.invitations}
              onChange={() => toggleSetting('invitations')}
            />
          </div>
          <div className="flex justify-between items-center">
            <p>Due Date Reminders</p>
            <ToggleSwitch
              checked={notificationSettings.dueDateReminders}
              onChange={() => toggleSetting('dueDateReminders')}
            />
          </div>
        </div>

        {/* Class notifications */}
        <div className="border-t pt-4">
          <h2 className="text-lg font-medium">Class notifications</h2>
          <div className="flex justify-between items-center mt-2" onClick={() => toggleSetting('isOpen')}>
            <p className="text-sm text-gray-600">
              These settings apply to both your email and device notifications for each class
            </p>
            <i className="fas fa-chevron-down"></i>
          </div>
          {notificationSettings.isOpen && (
            <div className="mt-4 space-y-4">
              {notifications.map((notification, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${notification.color}`}>
                      {notification.initial}
                    </div>
                    <div>
                      <p className="font-medium">{notification.title.slice(0, 20)}...</p>
                      <p className="text-gray-500">{notification.details}</p>
                    </div>
                  </div>
                  <ToggleSwitch />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
