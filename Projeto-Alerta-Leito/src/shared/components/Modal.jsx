import React from 'react';
import { X } from 'lucide-react';

function Modal({ isOpen, setClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.7)] z-[1000] flex items-center justify-center">
      <div className="relative bg-white p-10 rounded-lg text-black w-full max-w-lg">
        
        <button
          onClick={setClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <X size={24} />
        </button>

        {children}
      </div>
    </div>
  );
}

export default Modal;
