import React from 'react';
import './Tour.css';

const Tour = ({ tour }) => {
  

  return (
    <div className='tour'>
      <img src={tour.image} alt={tour.name} />
      <div className='tour-info'>
        <h4>{tour.name}</h4>
      </div>
    </div>
  );
};

export default Tour;
