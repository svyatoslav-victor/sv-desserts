import { useState, useEffect } from 'react';
import headerImages from '../../tools/backgrounds';

import './Background.scss';

export const Background = () => {
  const date: Date = new Date();
  const month: number = date.getMonth();
  const [background, setBackground] = useState(headerImages[0]);

  useEffect(() => {
    if (month === 3) {
      setBackground(headerImages[1]);
    } else if (month === 11) {
      setBackground(headerImages[2]);
    } else {
      setBackground(headerImages[0]);
    };
  });

  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
    </div>
  );
};
