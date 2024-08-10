// CustomLeftArrow.js


export const CustomLeftArrow = ({ onClick }) => {
  return (
    <button onClick={onClick} className="custom-arrow custom-arrow-left">
      &#9664; {/* Unicode for left arrow */}
    </button>
  );
};


// CustomRightArrow.js
import React from 'react';

export const CustomRightArrow = ({ onClick }) => {
    return (
        <button onClick={onClick} className="custom-arrow custom-arrow-right">
      &#9654; {/* Unicode for right arrow */}
    </button>
  );
};


