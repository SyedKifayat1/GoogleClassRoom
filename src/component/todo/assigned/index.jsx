import React, { useEffect, useState } from 'react';

// Section Component
const Section = ({ title, count, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="shadow-sm p-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-gray-700">{title}</span>
        <span className={`text-${count > 0 ? 'blue' : 'gray'}-500`}>
          {count} <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
        </span>
      </div>
      {isOpen && (
        <div className="mt-2 space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-start px-5 rounded py-4 space-x-4 transition-transform transform hover:shadow"
            >
              <div className="flex-shrink-0">
                <div
                  className={`rounded-full flex justify-center items-center w-10 h-10 p-2 ${item.bgColor || 'bg-green-500'} text-white`}
                >
                  <i className={item.icon}></i>
                </div>
              </div>
              <div>
                <div className="text-gray-900 font-medium">{item.title}</div>
                <div className="text-gray-500">{item.course}</div>
                <div className="text-gray-400">{item.date}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Assigned Component
const Assigned = ({ appData }) => {
  const [sectionsData, setSectionsData] = useState([]);
  const [selectedClass, setSelectedClass] = useState('All classes');

  const categorizeAssignments = (assignments) => {
    const today = new Date();

    // Get the start of this week (Sunday)
    const thisWeekStart = new Date(today);
    thisWeekStart.setDate(today.getDate() - today.getDay());

    // Get the start of next week (Sunday)
    const nextWeekStart = new Date(today);
    nextWeekStart.setDate(today.getDate() + (7 - today.getDay()));

    const sections = [
      { title: 'No due date', count: 0, items: [] },
      { title: 'This week', count: 0, items: [] },
      { title: 'Next week', count: 0, items: [] },
      { title: 'Later', count: 0, items: [] },
    ];

    assignments.forEach((assignment) => {
      if (!assignment.dueDate || isNaN(new Date(assignment.dueDate).getTime())) {
        const item = {
          icon: 'fas fa-file-alt',
          title: assignment.title,
          course: assignment.classTitle,
          date: `Posted ${new Date(assignment.postedDate).toLocaleDateString()}`,
          bgColor: assignment.bgColor,
        };
        sections[0].items.push(item);
        return;
      }

      const dueDate = new Date(assignment.dueDate);
      const item = {
        icon: 'fas fa-file-alt',
        title: assignment.title,
        course: assignment.classTitle,
        date: `Posted ${new Date(assignment.postedDate).toLocaleDateString()}`,
        bgColor: assignment.bgColor,
      };

      if (dueDate >= thisWeekStart && dueDate < nextWeekStart) {
        sections[1].items.push(item);
      } else if (dueDate >= nextWeekStart) {
        sections[2].items.push(item);
      } else {
        sections[3].items.push(item);
      }
    });

    return sections.map((section) => ({
      ...section,
      count: section.items.length,
    }));
  };

  useEffect(() => {
    if (!appData || !appData.classes) return;

    const allAssignments = appData.classes.flatMap((cls) =>
      cls.assignments.map((assignment) => ({
        ...assignment,
        classTitle: cls.classTitle, // Add the class title to each assignment
        bgColor: cls.bgColor, // Pass along the background color from class
      }))
    );

    const filteredAssignments = selectedClass === 'All classes'
      ? allAssignments
      : allAssignments.filter((assignment) => assignment.classTitle === selectedClass);

    const dynamicSections = categorizeAssignments(filteredAssignments);
    setSectionsData(dynamicSections);
  }, [appData, selectedClass]);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-4 w-64">
        <select
          className="border border-gray-300 w-full rounded px-4 py-2"
          onChange={(e) => setSelectedClass(e.target.value)}
          value={selectedClass}
        >
          <option value="All classes">All classes</option>
          {appData.classes.map((cls, index) => (
            <option key={index} value={cls.classTitle}>
              {cls.classTitle}
            </option>
          ))}
        </select>
      </div>
      <div className="space-y-4">
        {sectionsData.length === 0 ? (
          <p>No assignments available</p>
        ) : (
          sectionsData.map((section, index) => (
            <Section key={index} title={section.title} count={section.count} items={section.items} />
          ))
        )}
      </div>
    </div>
  );
};

export default Assigned;
