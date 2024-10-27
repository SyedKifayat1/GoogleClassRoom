import React, { useState } from 'react';

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
  
  export default Assigned;