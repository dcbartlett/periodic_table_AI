import React from 'react';

const Element = ({ element, onClick }) => {
  return (
    <div
      style={{
        display: 'inline-block',
        width: '100px',
        height: '140px', // Adjusted height to accommodate symbol
        border: '1px solid black',
        textAlign: 'center',
        cursor: 'pointer',
      }}
      onClick={() => onClick(element)}
    >
      <div style={{ marginBottom: '10px' }}>{element.symbol}</div> {/* Symbol */}
      <div>{element.name}</div> {/* Name */}
    </div>
  );
};

export default Element;
