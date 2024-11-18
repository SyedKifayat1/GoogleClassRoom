import React from 'react';
import { Link } from 'react-router-dom';

const Stream = ({ classData }) => {
  if (!classData) {
    // If classData is not available, render a loading state or message
    return <div>Loading...</div>;
  }

  return (
    <main className="max-w-6xl mx-auto p-4">
      <div className="bg-teal-600 text-white p-6 rounded-lg flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">{classData.classTitle}</h1>
          <p>{classData.batch}</p>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/4 p-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold">Upcoming</h2>
            <p className="text-gray-500 mt-2">
              {classData.upcoming ? classData.upcoming : 'Woohoo, no work due soon!'}
            </p>
            <Link className="text-blue-500 mt-4 block" to="/todo">
              View all
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-3/4 p-4">
          {/* Announcement Input */}
          <div className="bg-white p-4 rounded-lg shadow mb-4 flex items-center">
            <img
              alt="User profile picture"
              className="rounded-full w-10 h-10 mr-4"
              src={classData.profilePicture || 'https://picsum.photos/150'} // This will fetch a random 150x150 image
            />

            <input
              className="w-full border border-gray-300 rounded-full px-4 py-2"
              placeholder="Announce something to your class"
              type="text"
            />
          </div>

          {/* Render messages */}
          {Array.isArray(classData.messages) && classData.messages.length > 0 ? (
            classData.messages.map((message, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow mb-4">
                <div className="flex items-center mb-2">
                  <img
                    alt="User profile picture"
                    className="rounded-full w-10 h-10 mr-4"
                    src={classData.profilePicture || 'https://picsum.photos/150'} // This will fetch a random 150x150 image
                  />

                  <div>
                    <h3 className="font-semibold">{message.sender}</h3>
                    <p className="text-gray-500 text-sm">{message.date}</p>
                  </div>
                </div>
                <p className="mb-2">{message.text}</p>
                <p className="text-black mb-4">{message.message}</p>

                <div className="border-t border-gray-300 pt-2">
                  <div className="flex items-center mb-2">
                    <i className="fas fa-user text-gray-500 mr-2" />
                    <p className="text-gray-500">{message.comments?.length} class comment{message.comments?.length > 1 ? 's' : ''}</p>
                  </div>

                  {/* Render comments for each message */}
                  {Array.isArray(message.comments) && message.comments.length > 0 ? (
                    message.comments.map((comment, index) => (
                      <div key={index} className="flex items-start space-x-4 mb-4">
                        <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">
                          {comment.sender?.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-medium">{comment.sender}</h4>
                          <p className="text-xs text-gray-500">{comment.date}</p>
                          <p className="mt-1 text-gray-800">{comment.comment}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No comments yet.</p>
                  )}

                  {/* Add Comment Input */}
                  <div className="flex items-center mt-2">
                    <img
                      alt="User profile picture"
                      className="rounded-full w-10 h-10 mr-4"
                      src={classData.profilePicture || 'https://picsum.photos/150'} // This will fetch a random 150x150 image
                    />

                    <input
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      placeholder="Add class comment..."
                      type="text"
                    />
                    <button className="ml-2 text-blue-500">
                      <i className="fas fa-paper-plane" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No messages available.</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default Stream;
