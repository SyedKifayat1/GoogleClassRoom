// import React, { useState } from 'react';
// import { format, addDays, subWeeks, addWeeks, startOfWeek, isToday } from 'date-fns';

// const Calendar = () => {
//   const [currentWeek, setCurrentWeek] = useState(startOfWeek(new Date(), { weekStartsOn: 0 }));

//   const events = {
//     '2024-10-21': [
//       {
//         subject:"Quran Translation 3",
//         title: 'Assignment-1: The Hereafter (Akhirah) According to the Quran',
//         time: '11:59 PM',
//         address: ''
//       },
//       {
//         subject:"Quran Translation 3",
//         title: 'Assignment-1: The Hereafter (Akhirah) According to the Quran',
//         time: '11:59 PM',
//         address: ''
//       },
//       {
//         subject:"Quran Translation 3",
//         title: 'Assignment-1: The Hereafter (Akhirah) According to the Quran',
//         time: '11:59 PM',
//         address: ''
//       },
//     ],
    
//     '2024-10-23': [{
//       subject:"DBMS",
//        title: 'Project Due', time: '5:00 PM',address: '' }],
//   };

//   const handlePrevWeek = () => setCurrentWeek(subWeeks(currentWeek, 1));
//   const handleNextWeek = () => setCurrentWeek(addWeeks(currentWeek, 1));

//   const renderWeekDays = () => {
//     return Array.from({ length: 7 }).map((_, index) => {
//       const date = addDays(currentWeek, index);
//       const formattedDate = format(date, 'yyyy-MM-dd');
//       const day = format(date, 'EEE');
//       const dayNum = format(date, 'd');
//       const dayEvents = events[formattedDate];
//       const isCurrentDate = isToday(date);

//       return (
//         <div
//           key={index}
//           className="md:max-w-[250px] max-w-full flex flex-col  text-center border-r border-gray-300 p-4"
//         >
//           <div className="text-gray-500">{day}</div>
//           <div
//             className={`text-2xl ${isCurrentDate ? 'bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto' : ''}`}
//           >
//             {dayNum}
//           </div>
//           {dayEvents && (
//             <div className="">
//               {dayEvents.map((event, idx) => (
//                 <div key={idx} className="bg-black text-white  p-2 mt-2 rounded">
//                   <div>{event.title}</div>
//                   <div>{event.time}</div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       );
//     });
//   };

//   return (
//     <div className="max-w-[170vh] overflow-none p-4 border-gray-300 rounded-lg m-4">
//       <div className="flex flex-col gap-4 sm:flex-row justify-between   items-center mb-4">
//         <div className="relative w-64">
//           <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-6 py-3 pr-10 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
//             <option>All classes</option>
//           </select>
//           <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//             <svg
//               className="fill-current h-4 w-4"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 20 20"
//             >
//               <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a 1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
//             </svg>
//           </div>
//         </div>
//         <div className="flex items-center justify-center flex-grow">
//           <button onClick={handlePrevWeek} className="text-gray-600 hover:text-gray-800 mx-2">
//             <i className="fas fa-chevron-left"></i>
//           </button>
//           <span className="text-gray-600">
//             {format(currentWeek, 'MMM d')} - {format(addDays(currentWeek, 6), 'MMM d, yyyy')}
//           </span>
//           <button onClick={handleNextWeek} className="text-gray-600 hover:text-gray-800 mx-2">
//             <i className="fas fa-chevron-right"></i>
//           </button>
//         </div>
//       </div>
//       {/* Responsive Scrolling Table Part */}
//       <div className="border border-gray-300 rounded-lg">
//         <div className="overflow-x-auto justify-between  flex flex-col md:flex-row">
//           {renderWeekDays()}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Calendar;




import React, { useState } from 'react';
import { format, addDays, subWeeks, addWeeks, startOfWeek, isToday } from 'date-fns';

const Calendar = () => {
  const [currentWeek, setCurrentWeek] = useState(startOfWeek(new Date(), { weekStartsOn: 0 }));
  const [selectedSubject, setSelectedSubject] = useState('All');

  const events = {
    '2024-10-21': [
      {
        subject: "Quran Translation 3",
        title: 'Assignment-1: The Hereafter (Akhirah) According to the Quran',
        time: '11:59 PM',
        address: ''
      },
      {
        subject: "Quran Translation 3",
        title: 'Assignment-1: The Hereafter (Akhirah) According to the Quran',
        time: '11:59 PM',
        address: ''
      },
      {
        subject: "Quran Translation 3",
        title: 'Assignment-1: The Hereafter (Akhirah) According to the Quran',
        time: '11:59 PM',
        address: ''
      },
    ],
    '2024-10-23': [{
      subject: "DBMS",
      title: 'Project Due',
      time: '5:00 PM',
      address: ''
    }],
  };

  const subjects = ['All', ...new Set(Object.values(events).flat().map(event => event.subject))];

  const handlePrevWeek = () => setCurrentWeek(subWeeks(currentWeek, 1));
  const handleNextWeek = () => setCurrentWeek(addWeeks(currentWeek, 1));
  const handleSubjectChange = (event) => setSelectedSubject(event.target.value);

  const renderWeekDays = () => {
    return Array.from({ length: 7 }).map((_, index) => {
      const date = addDays(currentWeek, index);
      const formattedDate = format(date, 'yyyy-MM-dd');
      const day = format(date, 'EEE');
      const dayNum = format(date, 'd');
      const dayEvents = events[formattedDate];
      const isCurrentDate = isToday(date);

      return (
        <div
          key={index}
          className="md:max-w-[250px] max-w-full flex flex-col text-center border-r border-gray-300 p-4"
        >
          <div className="text-gray-500">{day}</div>
          <div
            className={`text-2xl ${isCurrentDate ? 'bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto' : ''}`}
          >
            {dayNum}
          </div>
          {dayEvents && (
            <div>
              {dayEvents
                .filter(event => selectedSubject === 'All' || event.subject === selectedSubject)
                .map((event, idx) => (
                  <div key={idx} className="bg-black text-white p-2 mt-2 rounded">
                    <div>{event.title}</div>
                    <div>{event.time}</div>
                  </div>
                ))}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div className="max-w-[170vh] overflow-none p-4 border-gray-300 rounded-lg m-4">
      <div className="flex flex-col gap-4 sm:flex-row justify-between items-center mb-4">
        <div className="relative w-64">
          <select
            value={selectedSubject}
            onChange={handleSubjectChange}
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-6 py-3 pr-10 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            {subjects.map((subject, idx) => (
              <option key={idx} value={subject}>
                {subject}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a 1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>
        <div className="flex items-center justify-center flex-grow">
          <button onClick={handlePrevWeek} className="text-gray-600 hover:text-gray-800 mx-2">
            <i className="fas fa-chevron-left"></i>
          </button>
          <span className="text-gray-600">
            {format(currentWeek, 'MMM d')} - {format(addDays(currentWeek, 6), 'MMM d, yyyy')}
          </span>
          <button onClick={handleNextWeek} className="text-gray-600 hover:text-gray-800 mx-2">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
      <div className="border border-gray-300 rounded-lg">
        <div className="overflow-x-auto justify-between flex flex-col md:flex-row">
          {renderWeekDays()}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
