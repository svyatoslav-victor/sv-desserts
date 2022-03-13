import React from 'react';
import sonyaLogo from '../../images/icons/sv-desserts_logo.png';

import '../Main/MainLarge.scss';

type Props = {
  array: {
    image: string,
    description: string,
  }[],
  index: number,
  close: (event: React.SyntheticEvent) => void,
  goBack: () => void,
  goForward: () => void,
};

export const ContentLarge: React.FC<Props> = ({
  array,
  index,
  close,
  goBack,
  goForward,
}) => {
  return (
    <div className="container" onClick={close}>
      <div className="main__large">
        <div className="main__large--content">
          <img className="image" src={array[index].image} alt="/" />
          <div className="description">
            <div className="description__logo">
              <img className="description__logo--image" src={sonyaLogo} width='30px' height='30px' alt="" />
              <p className="description__logo--name">@sv_desserts</p>
            </div>
            <p className="description__text">{array[index].description}</p>
          </div>
        </div>

        <div className="buttons">
          <button
            className="button button--back"
            style={{
              visibility: index === 0 ? 'collapse' : 'visible'
            }}
            onClick={goBack}
          >
            &#10096;
          </button>

          <button
            className="button button--close"
            onClick={close}
          >
            &#10005;
          </button>

          <button
            className="button button--forward"
            style={{
              visibility: index === array.length - 1 ? 'collapse' : 'visible'
            }}
            onClick={goForward}
          >
            &#10097;
          </button>
        </div>
      </div>
    </div>
  );
};
