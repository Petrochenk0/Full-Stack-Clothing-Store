import React from 'react';

import './Footer.css';

import FooterLogo from '../../assets/logo_big.png';
import Instagram from '../../assets/instagram_icon.png';
import Whatsapp from '../../assets/whatsapp_icon.png';
import Pienterest from '../../assets/pintester_icon.png';

export default function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={FooterLogo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>Contacts</li>
        <li>About</li>
      </ul>
      <div className="footer-social-icons">
        <div className="icons">
          <img src={Instagram} alt="" />
        </div>
        <div className="icons">
          <img src={Whatsapp} alt="" />
        </div>
        <div className="icons">
          <img src={Pienterest} alt="" />
        </div>
      </div>
      <div className="copyright">
        <hr />
        <p>Copyright @ {currentYear} - All right reserved</p>
      </div>
    </div>
  );
}
