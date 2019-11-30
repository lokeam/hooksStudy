import React, { useEffect } from 'react';

export const ShowHideHello = () => {
  useEffect(() => {
    console.log('render');
  
    return () => {
      console.log('unmount');
    };
  }, []);

  return (
    <div className="showHideHello__wrapper">
      <p>Hello?</p>
      <p>Is it me you're looking for?</p>
    </div>
  );
};
