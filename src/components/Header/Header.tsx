import sonyaLogo from '../../images/sv_desserts_logo.jpg';
import logo from '../../images/ig-bw.png';
import phone from '../../images/phone.png';

import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className='header__logo'>
        <a className='linkToHome' href="./">
          <img className='sonyaLogo' src={sonyaLogo} alt="logo_img" />
        </a>
        sv_desserts
      </div>

      <div className='header__contacts'>
        <a
          href="tel:380933638593"
        >
        <img
          className='phone_icon'
          src={phone}
          alt="phone"
        />
          <div
            className='phone_number'
          >
            +38 093 363 85 93
          </div>
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
  );
};
