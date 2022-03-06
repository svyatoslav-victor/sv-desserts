import React, { useState } from 'react';
import { main } from '../../libs/main/main';
import { MainLarge } from './MainLarge';

import './Main.scss';

export const Main: React.FC = () => {
  const [visibility, setVisibility] = useState<boolean>(false);
  const body = document.querySelector('body');

  const showMainLarge = () => {
    if (body) {
      body.style.overflow = 'hidden';
    };

    setVisibility(true);
  };

  const close = () => {
    if (body) {
      body.style.overflow = 'overlay';
    };

    setVisibility(false);
  };

  return (
      <div className="main">
        <div className="main__wrapper">
        {main.map((element, index) => (
          <div
            key={index}
            className="main__content"
            // style={{
            //   backgroundImage: `url(${element})`,
            // }}
          >
            <img
              className="main__content--image"
              src={element}
              alt="main_content"
              onClick={showMainLarge}
            />
          </div>
        ))}
      </div>

      {visibility && <MainLarge close={close} />}
    </div>
  );
}
