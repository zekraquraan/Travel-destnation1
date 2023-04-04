import React, { useState } from 'react';

const TourDetail = ({ tours, id }) => {
  const [showMore, setShowMore] = useState(false);

  const tour = tours.find((tour) => tour.id === id);

  return (
    <div className="tour-detail">
      <img src={tour.image} alt={tour.name} />
      <h3>{tour.name}</h3>
      <p>
        {showMore ? tour.description : `${tour.description.slice(0, 3)}...`}
        <button onClick={() => setShowMore(!showMore)}>
          {showMore ? 'See Less' : 'See More'}
        </button>
      </p>
    </div>
  );
};

export default TourDetail;

