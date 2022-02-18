import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { navbar } from './libs/navigation/navbar';
import { Background } from './components/Background/Background';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Navigation } from './components/Navigation/Navigation';
import { Content } from './components/Content/Content';
import cupcake from './images/cake_bandw.png';

import './App.scss';

export const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [link, setLink] = useState<string>('');

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

  // const handleClick = () => {
  //   return (
  //     <img src={navbar[0].link} alt="" />
  //   )
  // };

  return (
    <div className="wrapper">
      <Background />

      <div className="content">
        <div className="scrollToTop">
          <button
            className="scrollToTop__button"
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

        <Header />
        <Navigation navigation={navbar} pickLink={changeLink} />

        <div className="main">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/sv-desserts" element={<Main />} />
            <Route path={`/${link}`} element={<Content linkName={link} />} />
          </Routes>
        </div>

      <footer className="footer">
        <div className="footer__data">
          <a href="./">
            <img className="footer__image" src={cupcake} width="50px" height="50px" alt="cupcake" />
          </a>
          <div className="footer__links">
            <a href="tel:+380933638593">+380 93 363 85 93</a>
            <a href="https://www.instagram.com/1vasilkova/">Sofia Vasilkova</a>
            <a href="https://www.instagram.com/sv_desserts/">sv_desserts</a>
          </div>
        </div>
        <div className="footer__year">&#169; 2022</div>
      </footer>

      </div>
    </div>
  );
}
