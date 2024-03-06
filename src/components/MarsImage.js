// MarsImage.js
import React from 'react';

const MarsImage = ({ imageUrl }) => {
  return (
    <div>
      <img src={imageUrl} alt="Mars" />
    </div>
  );
};

export default MarsImage;
