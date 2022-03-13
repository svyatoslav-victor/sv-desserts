import React, { SyntheticEvent, useState } from 'react';
import { process } from '../../libs/content/process';
import { ContentLarge } from './ContentLarge';

export const Process: React.FC = () => {
  const [visibility, setVisibility] = useState<boolean>(false);
  const body = document.querySelector('body');
  const [index, setIndex] = useState<number>(-1);

  const goBack = () => {
    setIndex(index - 1);
  };

  const goForward = () => {
    setIndex(index + 1);
  };

  const showContentLarge = (event: SyntheticEvent<HTMLImageElement>) => {
    if (body) {
      body.style.overflow = 'hidden';
    };

    setIndex(+event.currentTarget.id);
    setVisibility(true);
  };

  const close = (event: React.SyntheticEvent) => {
    if (event.target !== event.currentTarget) {
      event.preventDefault();
      return;
    }

    if (body) {
      body.style.overflow = 'overlay';
    };

    setVisibility(false);
  };

  return (
      <div className="main">
        <div className="main__wrapper">
        {process.map((element, index) => (
          <div
            key={index}
            className="main__image"
          >
            <img
              className="main__content--image"
              src={element.image}
              alt="main_content"
              onClick={showContentLarge}
            />
          </div>
        ))}
      </div>

      {visibility && <ContentLarge
        close={close}
        goBack={goBack}
        goForward={goForward}
        array={process}
        index={index}
      />}
    </div>
  );
}