import React, { useState } from 'react';
import Element from './Element';
import Popup from './Popup';
import elements from '../Data/elements.json';

const PeriodicTable = () => {
  const [selectedElement, setSelectedElement] = useState(null);

  const handleElementClick = (element) => {
    setSelectedElement(element);
  };

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {elements.map((element) => (
          <Element key={element.atomicNumber} element={element} onClick={handleElementClick} />
        ))}
      </div>
      {selectedElement && (
        <Popup element={selectedElement} onClose={() => setSelectedElement(null)} />
      )}
    </div>
  );
};

export default PeriodicTable;