import React from 'react';
import { reviews } from '../../libs/navigation/reviews';

import '../Home/Home.scss';

export const Reviews: React.FC = () => {
  return (
      <div className="home">
        <div className="home__wrapper">
        {reviews.map((element, index) => (
          <div
            key={index}
            className="home__image"
            style={{
              backgroundImage: `url(${element})`,
            }}
          >
          </div>
        ))}
      </div>
    </div>
  );
}
