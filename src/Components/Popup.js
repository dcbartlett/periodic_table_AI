import React, { useRef, useEffect } from 'react';
import Element from './Element'; // Assuming Element component is imported from a file

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
      ref={popupRef}
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        padding: '20px',
        border: '1px solid black',
        display: 'flex', // Added to align elements horizontally
      }}
    >
      {/* Element component shown to the left */}
      <Element element={element} onClick={() => {}} />

      {/* Content of the popup */}
      <div style={{ marginLeft: '20px' }}> {/* Added margin to separate content */}
        <h2>{element.name}</h2>
        <p>Atomic Number: {element.atomicNumber}</p>
        <p>{element.description}</p>
      </div>
    </div>
  );
};

export default Popup;
