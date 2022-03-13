import sonyaLogo from '../../images/icons/sv-desserts_logo.png';
import instaLogo from '../../images/ig-bw.png';
import phone from '../../images/phone.png';
import classNames from 'classnames';

import './Header.scss';

type Props = {
  month: number,
};

export const Header: React.FC<Props> = ({ month }) => {
  return (
    <header className={classNames('header', {
      'header--easter': month === 3,
    })}>
      <div className='header__logo'>
        <a className='linkToHome' href="./">
          <img className='sonyaLogo' src={sonyaLogo} alt="logo_img" />
        </a>
        <p className="name">sv_desserts</p>
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
            <img
              className='insta__logo'
              src={instaLogo}
              alt="instagram" />
          </a>
        </div>
      </div>
    </header>
  );
};
