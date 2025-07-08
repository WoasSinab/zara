// src/components/SearchOverlay.jsx
import React, { useEffect, useRef } from 'react';

function SearchOverlay({ isOpen, onClose }) {
  const inputRef = useRef(null);

  // Focus on the input when the overlay opens
  useEffect(() => {
    if (isOpen) {
      // A small delay to ensure the element is rendered before focusing
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Close overlay on Escape key press
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    // Main Overlay: fixed to cover the entire screen
    // bg-black/70: black background with 70% opacity
    // z-50: highest z-index to be on top of everything
    // transition-opacity duration-300: smooth animation for opacity
    // opacity-0 pointer-events-none: invisible and not clickable when closed
    // opacity-100 pointer-events-auto: fully visible and clickable when open
    <div
      className={`fixed inset-0 bg-black/70 flex items-center justify-center z-50
        transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      onClick={onClose} // Closes the overlay when clicking on the overlay itself
    >
      {/* Search Container: for input and close button */}
      {/* w-full max-w-2xl: full width up to max-w-2xl */}
      {/* bg-[#FFFCEE]: background color as requested */}
      {/* p-6: inner padding */}
      {/* rounded-lg: rounded corners */}
      {/* shadow-xl: large shadow */}
      {/* onClick={(e) => e.stopPropagation()}: prevents closing when clicking on the container itself */}
      <div
        className="relative w-full max-w-2xl bg-[#FFFCEE] p-6 rounded-lg shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 p-2 rounded-full transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Search Input Field */}
        <div className="relative flex items-center">
          <input
            ref={inputRef} // Ref for auto-focus
            type="text"
            placeholder="Search products..." // English placeholder
            className="w-full p-3 pl-10 text-gray-800 border-b border-gray-300 focus:outline-none focus:border-gray-500 text-xl md:text-2xl font-light"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                // Add search logic here
                console.log('Searching for:', e.target.value);
                onClose(); // Close overlay after search
              }
            }}
          />
          {/* Search Icon inside input */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-400 absolute left-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default SearchOverlay;