
import React from 'react';
import Card from './card'
  const MainContent = ({ onSelectHeading,classData }) => (
    <div className="flex-1 p-6 main-content">
      <div className="flex flex-wrap sm:justify-start justify-center gap-5">
        {classData.map((classItem, index) => (
          <div className="max-w-[340px] w-full" key={index}>
            <Card {...classItem} initial={classItem.teacher.charAt(0)} onSelectHeading={onSelectHeading} />
          </div>
        ))}
      </div>
    </div>
  );
  
  export default MainContent;