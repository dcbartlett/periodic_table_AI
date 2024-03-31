import React from 'react';

const Element = ({ element, onClick }) => {
  return (
    <div
      style={{
        width: '100px',
        height: '100px', // Updated height to match width
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
