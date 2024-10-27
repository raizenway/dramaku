import React from 'react';

const ConfirmationModal = ({ show, title, message, onConfirm, onCancel, isDangerousAction }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <p className="mb-4">{message}</p>
        <div className="flex justify-end">
          <button
            onClick={onCancel}
            className={`mr-4 py-2 px-4 rounded ${isDangerousAction ? 'bg-gray-300 hover:bg-blue-dark' : 'bg-red-500 hover:bg-red-600'} text-white`}
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className={`py-2 px-4 rounded ${isDangerousAction ? 'bg-red-500 hover:bg-red-600' : 'bg-primary hover:bg-blue-dark'} text-white`}
          >
            {isDangerousAction ? 'Confirm' : 'Submit'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
