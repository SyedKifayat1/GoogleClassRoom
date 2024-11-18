import React from 'react';

const JoinClass = ({ user, toggleModal }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-auto max-w-lg">
      <h2 className="text-xl font-semibold mb-4">Join class</h2>

      {/* Profile Section */}
      <div className="flex sm:flex-row flex-col items-start sm:items-center mb-4">
        <div className="flex items-start sm:items-center mb-4">
          <img
            alt={user.altText}
            className="w-10 h-10 rounded-full mr-3"
            src={user.avatar}
          />
          <div>
            <p className="text-sm">You're currently signed in as</p>
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>
        <button className="sm:ml-auto ml-4 text-blue-600 font-semibold">Switch account</button>
      </div>

      {/* Class Code Section */}
      <div className="border-t border-gray-200 pt-4">
        <label className="block text-sm font-medium mb-2">Class code</label>
        <p className="text-sm text-gray-500 mb-2">
          Ask your teacher for the class code, then enter it here.
        </p>
        <input
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
          placeholder="Class code"
          type="text"
        />
      </div>

      {/* Information Section */}
      <div className="border-t border-gray-200 pt-4">
        <p className="text-sm font-medium mb-2">To sign in with a class code</p>
        <ul className="list-disc list-inside text-sm text-gray-500 mb-4">
          <li>Use an authorized account</li>
          <li>Use a class code with 5-7 letters or numbers, and no spaces or symbols</li>
        </ul>
        <p className="text-sm text-gray-500">
          If you have trouble joining the class, go to the{' '}
          <a className="text-blue-600" href="#">
            Help Center article
          </a>
        </p>
      </div>

      {/* Buttons Section */}
      <div className="flex justify-end mt-4">
        <button className="text-gray-600 mr-4" onClick={toggleModal}>
          Cancel
        </button>
        <button className="text-gray-400" disabled>
          Join
        </button>
      </div>
    </div>
  );
};

export default JoinClass;
