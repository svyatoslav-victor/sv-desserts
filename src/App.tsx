import React, { useState } from 'react';
import logo from './images/ig-bw.png';
import phone from './images/phone.png';
import './App.scss';
import { Main } from './components/Main/Main';

export const App: React.FC = () => {
  const [numberVisibility, setNumberVisibility] = useState<boolean>(false);

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
              className='phone_icon'
              type='submit'
              onMouseEnter={() => setNumberVisibility(true)}
              onMouseLeave={() => setNumberVisibility(false)}
              onTouchStart={() => setNumberVisibility(true)}
              onTouchEnd={() => setNumberVisibility(false)}
            >
              <img src={phone} width='35px' height='35px' alt="phone" />
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
        <p>LINKS WILL GO HERE</p>
      </nav>
    </div>
  );
}
