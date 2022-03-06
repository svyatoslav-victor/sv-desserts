import React from 'react';

import './MainLarge.scss';

type Props = {
  close: () => void,
};

export const MainLarge: React.FC<Props> = ({ close }) => {
  return (
    <div className="container">
      <div className="main__large">
        <h1>HELLO!!!</h1>
        <button
          onClick={close}
        >X</button>
      </div>
    </div>
  );
};
