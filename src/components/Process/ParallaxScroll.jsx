import React from 'react';

const ParallaxScroll = ({ children, className }) => {
  return (
    <div className={`parallax-scroll ${className}`}>
      {children}
    </div>
  );
};

export default ParallaxScroll;
