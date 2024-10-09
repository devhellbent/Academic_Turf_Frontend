import React from 'react';

const Alert = ({ message, type, onClose }) => {
  const alertStyles = {
    success: 'bg-green-500 text-white',
    error: 'bg-red-500 text-white',
    info: 'bg-blue-500 text-white',
    warning: 'bg-yellow-500 text-black',
  };

  return (
    <div
      className={`fixed top-4 right-4 p-4 rounded-md shadow-md transition-opacity duration-300 ${
        message ? 'opacity-100' : 'opacity-0'
      } ${alertStyles[type] || alertStyles.info}`} // Default to info if type is not provided
      style={{ zIndex: 1000 }}
    >
      <div className="flex justify-between items-center">
        <span>{message}</span>
        <button onClick={onClose} className="ml-2 text-white">
          &times;
        </button>
      </div>
    </div>
  );
};

export default Alert;
