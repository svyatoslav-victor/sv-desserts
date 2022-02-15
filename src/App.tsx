import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { navbar } from './libs/navigation/navbar';
import { Background } from './components/Background/Background';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Navigation } from './components/Navigation/Navigation';
import { Reviews } from './components/Reviews/Reviews';

import './App.scss';

export const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

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
        <Navigation navigation={navbar} />

        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sv-desserts" element={<Home />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </div>
      </div>

      <footer className="footer"></footer>
    </div>
  );
}
