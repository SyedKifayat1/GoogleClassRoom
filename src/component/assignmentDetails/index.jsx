import React, { useState } from 'react';

const AssignmentDetails = () => {
    const handleFileUpload = (event) => {
      const files = event.target.files;
      console.log(files);
      // Handle file upload logic here
    };
  
    const [showCommentBox, setShowCommentBox] = useState(false);
  
    const toggleCommentBox = () => {
      setShowCommentBox(!showCommentBox);
    };
  
    const randomAvatarUrl = `https://avatars.dicebear.com/api/initials/${Math.random()
      .toString(36)
      .substring(7)}.svg`;
  
    return (
      <div className="flex flex-col lg:flex-row justify-between gap-8 p-4 ">
        <div className="w-full lg:w-3/4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                <i className="fas fa-clipboard-list text-2xl"></i>
              </div>
              <h1 className="text-2xl font-semibold">Assignment no 2</h1>
            </div>
            <button
              className="text-gray-500 hover:text-gray-700"
              aria-label="More options"
            >
              <i className="fas fa-ellipsis-v"></i>
            </button>
          </div>
          <div className="ml-4 lg:ml-14 mb-4">
            <p className="text-gray-600">Ayesha Saeed • Oct 21 (Edited Oct 21)</p>
            <div className="flex justify-between items-center">
              <p className="text-gray-600">50 points</p>
              <p className="text-gray-600">Due Oct 31</p>
            </div>
          </div>
          <div className="ml-4 lg:ml-14 mb-6">
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>The assignment is worth 50 marks.</li>
              <li>Contact the instructor or TA with any questions.</li>
              <li>Use both sides of the sheet to save paper.</li>
              <li>Ensure legible answers for proper grading.</li>
              <li>Submit the assignment on time in class or at the office.</li>
            </ul>
          </div>
          <div className="ml-4 lg:ml-14 mb-6">
            <a href="#" className="text-blue-500 underline flex items-center">
              <i className="fas fa-file-pdf text-red-500 mr-2"></i>
              View Assignment no 2.pdf
            </a>
          </div>
  
          <div className="border-t pt-4 ml-4 lg:ml-14">
            <h2 className="text-lg font-semibold mb-2 cursor-pointer" onClick={toggleCommentBox}>
              <i className="fas fa-comments text-gray-600 mr-2"></i>
              Class comments
            </h2>
  
            {showCommentBox && (
              <div className="mt-4 flex items-center">
                {/* User avatar */}
                <img
                  src={randomAvatarUrl} // Replace with actual user avatar URL
                  alt="User avatar"
                  className="w-10 h-10 rounded-full mr-3"
                />
  
                {/* Comment box */}
                <div className="flex-1">
                  <div className="flex items-center border rounded-lg p-3 shadow-sm">
                    <input
                      type="text"
                      placeholder="Add class comment..."
                      className="flex-1 px-3 py-2 outline-none text-gray-700"
                    />
  
                    {/* Formatting icons */}
                    <div className="flex space-x-2 ml-3">
                      <button className="text-gray-600 hover:text-black">
                        <b>B</b>
                      </button>
                      <button className="text-gray-600 hover:text-black italic">
                        I
                      </button>
                      <button className="text-gray-600 hover:text-black underline">
                        U
                      </button>
                      <button className="text-gray-600 hover:text-black">
                        <i className="fas fa-list-ul"></i>
                      </button>
                      <button className="text-gray-600 hover:text-black">
                        <i className="fas fa-strikethrough"></i>
                      </button>
                    </div>
  
                    {/* Send button */}
                    <button className="ml-3 text-gray-600 hover:text-black">
                      <i className="fas fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
  
        <div className="w-full lg:w-1/4 flex flex-col items-center lg:items-end">
          <div className="border border-gray-300 p-6 rounded-lg mb-4 w-full">
            <div className="flex items-center justify-between w-full mb-4">
              <span className="text-gray-700 font-semibold">Your work</span>
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm">Assigned</span>
            </div>
            <div className="flex flex-col gap-4 w-full mb-4">
              <label
                className="bg-gray-200 text-gray-700 px-4 py-3 rounded shadow-md hover:bg-gray-300 transition duration-300 w-full lg:w-auto text-center cursor-pointer flex-1"
                htmlFor="file-upload"
              >
                + Add or create
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  onChange={handleFileUpload}
                  aria-label="Upload assignment file"
                />
              </label>
  
              <button
                className="bg-blue-500 text-white px-4 py-3 rounded shadow-md hover:bg-blue-600 transition duration-300 w-full lg:w-auto focus:outline-none focus:ring-2 focus:ring-blue-400 flex-1"
              >
                Mark as done
              </button>
            </div>
  
          </div>
          <div className="border border-gray-300 p-6 rounded-lg mb-4 w-full">
            <h2 className="text-lg font-semibold mb-2">Private comments</h2>
            <a href="#" className="text-blue-500 underline">Add comment to Ayesha Saeed</a>
          </div>
        </div>
      </div>
    );
  };

  
  export default AssignmentDetails;