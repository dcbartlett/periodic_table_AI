import React, { useRef, useEffect } from 'react';

const Popup = ({ element, onClose }) => {
  const popupRef = useRef(null);

  // Close the popup when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      className="popup-overlay"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 999, // Ensure the overlay is above other elements
      }}
    >
      <div
        ref={popupRef}
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          padding: '20px',
          border: '1px solid black',
          zIndex: 1000, // Ensure the popup is above the overlay
        }}
      >
        <h2>{element.name}</h2>
        <p>Atomic Number: {element.atomicNumber}</p>
        <p>{element.description}</p>
      </div>
    </div>
  );
};

export default Popup;
