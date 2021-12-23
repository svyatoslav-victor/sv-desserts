import React, { useState } from 'react';
import logo from './images/ig-bw.png';
import phone from './images/phone.png';
import './App.scss';
import { Main } from './components/Main/Main';
import { Navigation } from './components/Navigation/Navigation';

export const App: React.FC = () => {
  const [numberVisibility, setNumberVisibility] = useState<boolean>(false);
  const navbar = [
    { link: require('./images/nav_bar/reviews.jpg'), name: 'REVIEWS' },
    { link: require('./images/nav_bar/easter.jpg'), name: 'EASTER' },
    { link: require('./images/nav_bar/prices.jpg'), name: 'PRICES' },
    { link: require('./images/nav_bar/cakes.jpg'), name: 'CAKES' },
    { link: require('./images/nav_bar/process.jpg'), name: 'PROCESS' },
    { link: require('./images/nav_bar/marshmellow.jpg'), name: 'MARSHMELLOW' },
    { link: require('./images/nav_bar/schtollen.jpg'), name: 'SCHTOLLEN' }
  ];

  const handleClick = () => {
    return (
      <img src={navbar[0].link} alt="" />
    )
  };

  return (
    <div className="App_Wrapper">
      <header className="App_Header">
        <div className='App_Header__logo'>
          SV DESSERTS
        </div>
        <div className='App_Header__contacts'>
          <a
            href="tel:380633638593"
          >
            <div
              className='phone_number'
              hidden={!numberVisibility}
            >
              +38 093 363 85 93
            </div>
            <button
              className='phone_button'
              type='submit'
              onMouseEnter={() => setNumberVisibility(true)}
              onMouseLeave={() => setNumberVisibility(false)}
              onTouchStart={() => setNumberVisibility(true)}
              onTouchEnd={() => setNumberVisibility(false)}
            >
              <img
                className='phone_icon'
                src={phone}
                alt="phone" />
            </button>
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
    </div>
  );
}
