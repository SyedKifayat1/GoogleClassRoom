import React from 'react';

const People = ({ teachers, classmates }) => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <section>
        <h1 className="text-2xl font-bold mb-4">Teachers</h1>
        {teachers?.map((teacher, index) => (
          <div className="flex items-center mb-4" key={index}>
            <img src={teacher.profilePicture} alt={`Profile picture of ${teacher.name}`} className="w-10 h-10 rounded-full mr-4" />
            <span className="text-lg">{teacher.name}</span>
          </div>
        ))}
      </section>

      <section>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Classmates</h1>
          <span className="text-lg text-gray-500">{classmates?.length} students</span>
        </div>
        {classmates?.map((classmate, index) => (
          <div className="flex items-center mb-4" key={index}>
            {classmate.profilePicture ? (
              <img src={classmate.profilePicture} alt={`Profile picture of ${classmate.name}`} className="w-10 h-10 rounded-full mr-4" />
            ) : (
              <div className={`w-10 h-10 rounded-full ${classmate.initialsBackground} text-white flex items-center justify-center mr-4`}>
                <span className="text-lg">{classmate.initials}</span>
              </div>
            )}
            <span className="text-lg">{classmate.name}</span>
            {classmate.hasEmail && (
              <div className="ml-auto">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <i className="fas fa-envelope"></i>
                </div>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default People;
