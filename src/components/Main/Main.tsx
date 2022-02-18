import React from 'react';
import { main } from '../../libs/main/main';

import './Main.scss';

export const Main: React.FC = () => {
  return (
      <div className="main">
        <div className="main__wrapper">
        {main.map((element, index) => (
          <div
            key={index}
            className="main__image"
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
