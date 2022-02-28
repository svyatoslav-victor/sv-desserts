import React from 'react';
import { reviews } from '../../libs/content/reviews';
import { easter } from '../../libs/content/easter';
import { prices } from '../../libs/content/prices';
import { cakes } from '../../libs/content/cakes';
import { process } from '../../libs/content/process';
import { marshmallow } from '../../libs/content/marshmallow';
import { schtollen } from '../../libs/content/schtollen';

import '../Main/Main.scss';

type Props = {
  linkName: string,
};

export const Content: React.FC<Props> = ({ linkName }) => {
  let arr: string[] = [];

  switch (linkName) {
    case 'reviews':
      arr = [...reviews];
      break;

    case 'easter':
      arr = [...easter];
      break;

    case 'prices':
      arr = [...prices];
      break;

    case 'cakes':
      arr = [...cakes];
      break;
  
    case 'process':
      arr = [...process];
      break;
  
    case 'marshmallow':
      arr = [...marshmallow];
      break;

    case 'schtollen':
      arr = [...schtollen];
      break;

      default:
      break;
  }

  return (
      <div className="main">
        <div className="main__wrapper">
        {arr.map((element, index) => (
          <div
            key={index}
            className="main__image"
            // style={{
            //   backgroundImage: `url(${element})`,
            // }}
          >
            <img
              className="main__content--image"
              src={element}
              alt="main_content"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
