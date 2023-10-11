import React, { useState } from 'react';

const SingleColorPicker = ({ color, value, onChange }) => {
  const [colorValue, setColorValue] = useState(value);

  const handleColorChange = (e) => {
    const newValue = parseInt(e.target.value);
    setColorValue(newValue);
    onChange(color, newValue);
  };

  const colorLabel = color === 'r' ? 'R' : color === 'g' ? 'G' : 'B';

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: `rgb(${color === 'r' ? colorValue : 0}, ${
              color === 'g' ? colorValue : 0
            }, ${color === 'b' ? colorValue : 0})`,
            marginRight: '10px',
            border: '1px solid black'
          }}
        ></div>
        <span>{colorLabel} : </span>
        <input
          type="number"
          min="0"
          max="255"
          value={colorValue}
          onChange={handleColorChange}
        />
      </div>
    </div>
  );
};

export default SingleColorPicker;