import React from 'react';
  
  
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
    

  export default People;