import React from 'react';

const Element = ({ element, onClick }) => {
  return (
    <div
      style={{
        display: 'inline-block',
        width: '100px',
        height: '100px',
        border: '1px solid black',
        textAlign: 'center',
        lineHeight: '100px',
        cursor: 'pointer',
      }}
      onClick={() => onClick(element)}
    >
      {element.name}
    </div>
  );
};

export default Element;