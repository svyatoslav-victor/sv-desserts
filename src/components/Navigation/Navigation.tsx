import React, { useEffect, useState } from 'react';
import './Navigation.scss';

interface Nav {
  link: string,
  name: string,
}

type Props = {
  nav: Nav[];
  onClick: () => void;
};

export const Navigation: React.FC<Props> = ({ nav, onClick }) => {
  const [linkName, setLinkName] = useState<string>('');

  return (
      <ul className='Navigation__List'>
        {nav.map((item, index) => (
          <li
            className='Navigation__List--Item'
            key={index}
          >
            <button
              type='button'
              name={item.name}
              className='Navigation__List--Link'
              onMouseOver={(event) => setLinkName(event.currentTarget.name)}
              onTouchStart={(event) => setLinkName(event.currentTarget.name)}
              onMouseOut={() => setLinkName('')}
              onTouchEnd={() => setLinkName('')}
              onClick={onClick}
            >
              <img
                className='Navigation__List--Image'
                src={item.link}
                alt={item.name}
              />
              <p
                className='Navigation__List--Name'
                style={linkName === item.name
                  ? {visibility: 'visible'}
                  : {visibility: 'collapse'}
                }
              >
                {item.name}
              </p>
            </button>
          </li>
        ))}
      </ul>
  );
};
