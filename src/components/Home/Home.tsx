import React from 'react';
import { home } from '../../libs/home/home';

import './Home.scss';

export const Home: React.FC = () => {
  return (
      <div className="home">
        <div className="home__wrapper">
        {home.map((element, index) => (
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
