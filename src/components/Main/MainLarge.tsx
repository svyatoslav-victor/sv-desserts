import React from 'react';

import './MainLarge.scss';

type Props = {
  array: string[],
  index: number,
  close: () => void,
  goBack: () => void,
  goForward: () => void,
};

export const MainLarge: React.FC<Props> = ({
  array,
  index,
  close,
  goBack,
  goForward,
}) => {
  return (
    <div className="container">
      <div className="main__large">
        <button
          className="back"
          style={{
            visibility: index === 0 ? 'collapse' : 'visible'
          }}
          onClick={goBack}
        >
          back
        </button>

        <img className="image" src={array[index]} alt="/" />

        <button
          className="forward"
          style={{
            visibility: index === array.length - 1 ? 'collapse' : 'visible'
          }}
          onClick={goForward}
        >
          forward
        </button>

        <button
          onClick={close}
        >
          X
        </button>
      </div>
    </div>
  );
};
