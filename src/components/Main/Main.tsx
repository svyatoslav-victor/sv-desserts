import React, { SyntheticEvent, useState } from 'react';
import { main } from '../../libs/main/main';
import { MainLarge } from './MainLarge';

import './Main.scss';

export const Main: React.FC = () => {
  const [visibility, setVisibility] = useState<boolean>(false);
  const body = document.querySelector('body');
  const [index, setIndex] = useState<number>(-1);

  const goBack = () => {
    setIndex(index - 1);
  };

  const goForward = () => {
    setIndex(index + 1);
  };

  const showMainLarge = (event: SyntheticEvent<HTMLImageElement>) => {
    if (body) {
      body.style.overflow = 'hidden';
    };

    setIndex(+event.currentTarget.id);
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
              id={index.toString()}
              className="main__content--image"
              src={element}
              alt="main_content"
              onClick={showMainLarge}
            />
          </div>
        ))}
      </div>

      {visibility && <MainLarge
        close={close}
        goBack={goBack}
        goForward={goForward}
        array={main}
        index={index}
      />}
    </div>
  );
}
