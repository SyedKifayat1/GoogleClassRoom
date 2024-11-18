import React from 'react';

const AccountCard = ({ user, toggleModal }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative">
      <div className="flex justify-center items-center mb-4">
        <div className="text-center">
          <p className="text-sm text-gray-500">{user.email}</p>
          <p className="text-xs text-gray-400">Managed by {user.domain}</p>
        </div>
        <button className="absolute top-4 right-4 text-gray-500" onClick={toggleModal}>
          <i className="fas fa-times"></i>
        </button>
      </div>

      <div className="flex flex-col items-center">
        <img
          alt={user.altText}
          className="w-20 h-20 rounded-full mb-2"
          height="80"
          src={user.avatar}
          width="80"
        />
        <p className="text-lg font-semibold">Hi, {user.name.split(" ")[0]}!</p>
        <button className="mt-2 mb-4 px-4 py-2 bg-blue-500 text-white rounded-full">
          Manage your Google Account
        </button>
      </div>

      <div className="flex justify-between items-center mb-4">
        <button className="flex items-center px-4 py-2 bg-gray-100 rounded-full w-1/2 mr-2 justify-center">
          <i className="fas fa-user-plus mr-2"></i>
          <span>Add account</span>
        </button>
        <button className="flex items-center px-4 py-2 bg-gray-100 rounded-full w-1/2 ml-2 justify-center">
          <i className="fas fa-sign-out-alt mr-2"></i>
          <span>Sign out</span>
        </button>
      </div>

      <div className="flex justify-between text-xs text-gray-500">
        <a className="hover:underline" href="#">
          Privacy Policy
        </a>
        <a className="hover:underline" href="#">
          Terms of Service
        </a>
      </div>
    </div>
  );
};

export default AccountCard;
