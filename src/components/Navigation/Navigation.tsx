import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

interface Nav {
  link: string,
  name: string,
  title: string,
}

type Props = {
  navigation: Nav[],
  pickLink: (event: React.MouseEvent) => void,
  month: number,
};

export const Navigation: React.FC<Props> = ({ navigation, pickLink, month }) => {
  const [backVisible, isBackVisible] = useState<boolean>();
  const [forwardVisible, isForwardVisible] = useState<boolean>();

  const navList = document.querySelector('ul');

  useEffect(() => {
    isBackVisible(false);
    isForwardVisible(true);
  }, [navigation]);

  const toStart = () => {
    navList?.scrollTo({
      left: 0,
      behavior: 'smooth',
    });
    isBackVisible(false);
    isForwardVisible(true);
  };

  const toEnd = () => {
    navList?.scrollTo({
      left: 910,
      behavior: 'smooth',
    });
    isBackVisible(true);
    isForwardVisible(false);
  };

  const trackScroll = () => {
    if (navList && navList.scrollLeft === 0) {
      isBackVisible(false);
    } 
    
    if (navList && (navList.scrollLeft > 0
        && navList.scrollLeft < (navList.scrollWidth - navList.clientWidth))) {
      isBackVisible(true);
      isForwardVisible(true);
    }
    if (navList && navList.scrollLeft >= (navList.scrollWidth - navList.clientWidth)) {
      isForwardVisible(false);
    }
  };

  return (
    <div className="navigation">
      <button
        className={month === 3 ? 'scroll--easter' : 'scroll'}
        onClick={toStart}
        style={{
          visibility: backVisible ? 'visible' : 'collapse',
        }}
      >
        &#8920;
      </button>
      <ul
        className='navigation__list'
        onScroll={trackScroll}
      >
        {navigation.map((item, index) => (
          <li
            className="navigation__list--item"
            key={index}
          >
            <NavLink
              id={item.name}
              to={`/${item.name}`}
              className="navigation__list--link"
              onClick={pickLink}
            >
              <button
                type='button'
                name={item.name}
                className='navigation__list--button'
              >
                <img
                  className={month === 3 ? 'navigation__list--image--easter' : 'navigation__list--image'}
                  src={item.link}
                  alt={item.name}
                />
                <p
                  className='navigation__list--name'
                >
                  {item.title}
                </p>
              </button>
            </NavLink>
          </li>
        ))}
      </ul>
      <button
        className={month === 3 ? 'scroll--easter' : 'scroll'}
        onClick={toEnd}
        style={{
          visibility: forwardVisible ? 'visible' : 'collapse',
        }}
      >
        &#8921;
      </button>
    </div>
  );
};
