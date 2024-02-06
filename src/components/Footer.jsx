

import React from 'react';
import '../styles/_footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__text">© 2024 <span>Edu<span>Cav</span>ity</span>. All rights reserved.</p>
        <ul className="footer__links">
          <li className="footer__link"><a href="#">Home</a></li>
          <li className="footer__link"><a href="#about">About Us</a></li>
          <li className="footer__link"><a href="#services">Services</a></li>
          <li className="footer__link"><a href="#team">Team</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
