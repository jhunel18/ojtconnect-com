import React, { useState, useEffect } from 'react';

const ImageContainer = ({ src }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    
    setIsVisible(true);
  }, []);

  const containerStyle = {
    width: '62%',
    overflow: 'hidden',
    borderRadius: '20px 0 0 20px',
    background: `url(${src}) center/cover no-repeat`,
    transition: 'opacity 1s ease', 
    opacity: isVisible ? 1 : 0, 
  };

  return (
    <div style={containerStyle} />
  );
};

export default ImageContainer;