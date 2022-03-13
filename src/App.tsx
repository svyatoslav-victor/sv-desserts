import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { navbar } from './libs/navigation/navbar';
import { Background } from './components/Background/Background';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Navigation } from './components/Navigation/Navigation';
import classNames from 'classnames';
import cupcake from './images/cake_bandw.png';
import instaLogo from './images/ig-bw.png';
import phone from './images/phone.png';

import { Reviews } from './components/Content/Reviews';
import { Easter } from './components/Content/Easter';
import { Prices } from './components/Content/Prices';
import { Cakes } from './components/Content/Cakes';
import { Process } from './components/Content/Process';
import { Marshmallow } from './components/Content/Marshmallow';
import { Schtollen } from './components/Content/Schtollen';

import './App.scss';

export const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [link, setLink] = useState<string>('');

  const date: Date = new Date();
  const month: number = date.getMonth();
  const [backgroundColor, setBackgroundColor] = useState('antiquewhite');

  useEffect(() => {
    if (month === 3) {
      setBackgroundColor('lightblue');
    } else {
      setBackgroundColor('antiquewhite');
    };
  });

  const changeLink = (event: React.MouseEvent) => {
    setLink(event.currentTarget.id);
  };

  const trackScroll = () => {
    let heightToShowButton = 100;
    const windowScroll = document.body.scrollTop ||
      document.documentElement.scrollTop;

    if (windowScroll > heightToShowButton) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', trackScroll);
    return () => {
      window.removeEventListener('scroll', trackScroll);
    }
  }, []);

  const body = document.querySelector('body');
  if (body) {
    body.style.background = backgroundColor;
  };

  return (
    <div className="wrapper">
      <Background month={month}/>

      <div
        className={classNames('content', {
          'content--easter': month === 3,
        })}
      >
        <div className="scrollToTop">
          <button
            className={classNames('scrollToTop__button', {
              'scrollToTop__button--easter': month === 3,
            })}
            style={{
              opacity: !isVisible ? 0 : 1,
            }}
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
            }}
          >
            &#94;
            &#8285;
          </button>
        </div>

        <Header month={month} />
        <Navigation navigation={navbar} pickLink={changeLink} month={month} />

        <div className="main">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/sv-desserts/" element={<Main />} />
            <Route path="/sv-desserts/reviews" element={<Reviews />} />
            <Route path="/sv-desserts/easter" element={<Easter />} />
            <Route path="/sv-desserts/prices" element={<Prices />} />
            <Route path="/sv-desserts/cakes" element={<Cakes />} />
            <Route path="/sv-desserts/process" element={<Process />} />
            <Route path="/sv-desserts/marshmallow" element={<Marshmallow />} />
            <Route path="/sv-desserts/schtollen" element={<Schtollen />} />
          </Routes>
        </div>

      <footer className={classNames('footer', {
        'footer--easter': month === 3,
      })}>
        <div className="footer__data">
          <a href="./">
            <img className="footer__image" src={cupcake} width="50px" height="50px" alt="cupcake" />
          </a>
          <div className="footer__links">
            <a
              href="tel:+380933638593"
            >
              <img src={phone} width='25px' height='25px' alt="instagram" />
              +380 93 363 85 93
            </a>
            <a
              href="https://www.instagram.com/sv_desserts/"
            >
              <img src={instaLogo} width='25px' height='25px' alt="instagram" />
              &nbsp;@sv_desserts
            </a>
          </div>
        </div>
        <div className="footer__year">&#169; 2022</div>
      </footer>

      </div>
    </div>
  );
}
