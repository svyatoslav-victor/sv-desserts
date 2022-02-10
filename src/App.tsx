import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Background } from './components/Background/Background';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Main } from './components/Main/Main';
import { Navigation } from './components/Navigation/Navigation';

import './App.scss';

export const App: React.FC = () => {
  const navbar = [
    { link: './images/nav_bar/reviews.jpg', name: 'REVIEWS' },
    { link: './images/nav_bar/easter.jpg', name: 'EASTER' },
    { link: './images/nav_bar/prices.jpg', name: 'PRICES' },
    { link: './images/nav_bar/cakes.jpg', name: 'CAKES' },
    { link: './images/nav_bar/process.jpg', name: 'PROCESS' },
    { link: './images/nav_bar/marshmellow.jpg', name: 'MARSHMELLOW' },
    { link: './images/nav_bar/schtollen.jpg', name: 'SCHTOLLEN' }
  ];

  const [isVisible, setIsVisible] = useState(false);

  const trackScroll = () => {
    let heightToShowButton = 250;
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
            <span>&#x276F;&#x276F;&#x276F;</span>
          </button>
        </div>

        <Header />
        <div className="navigation">

        </div>

        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sv-desserts" element={<Home />} />
          </Routes>
        </div>
      </div>

      <footer className="footer"></footer>
    </div>
  );
}

{/* <div className="App_Wrapper">
<header className="App_Header">
  <div className='App_Header__logo'>
    <a className='linkToHome' href="./">
      <img className='sonyaLogo' src={sonyaLogo} alt="logo_img" />
    </a>
    sv_desserts
  </div>
  <div className='App_Header__contacts'>
    <a
      href="tel:380933638593"
      onMouseEnter={() => setNumberVisibility(true)}
      onMouseLeave={() => setNumberVisibility(false)}
    >
      <div
        className='phone_number'
        hidden={!numberVisibility}
      >
        +38 093 363 85 93
      </div>
      <img
        className='phone_icon'
        src={phone}
        alt="phone"
      />
    </a>
    <div className='insta'>
      <a
        className='insta__link'
        href="https://www.instagram.com/sv_desserts/"
      >
        <img src={logo} width='35px' height='35px' alt="instagram" />
      </a>
    </div>
  </div>
</header>
<main className='App_Main'>
  <Main />
</main>
<nav className='App_Navigation'>
  <Navigation nav={navbar} onClick={handleClick}/>
</nav>
</div> */}