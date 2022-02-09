import headerImages from '../../tools/backgrounds';

import './Background.scss';

export const Background = () => {
  const date: Date = new Date();
  const month: number = date.getMonth();
  let background: string = '';

  if (month === 3) {
    background = headerImages[1];
  } else if (month === 11) {
    background = headerImages[2];
  } else {
    background = headerImages[0];
  };

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
