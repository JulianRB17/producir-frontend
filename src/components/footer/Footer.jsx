import { Link } from 'react-router-dom';

import logoSrc from '../../assets/logos/iso-largo-eap.png';
import fbSrc from '../../assets/logos/fb.svg';
import igSrc from '../../assets/logos/ig.svg';

import PropTypes from 'prop-types';

export default function Footer({ urls }) {
  return (
    <footer className='footer'>
      <div className='footer__container footer__container_rrss hidden'>
        <Link to={urls.fbPermaUrl} className='footer__link footer__link_rrss'>
          <img
            src={fbSrc}
            alt='Link a nuestro Facebook'
            className='footer__logo footer__logo_rrss'
          />
        </Link>
        <Link to={urls.igUrl} className='footer__link footer__link_rrss'>
          <img
            src={igSrc}
            alt='Link a nuestro Instagram'
            className='footer__logo footer__logo_rrss'
          />
        </Link>
        <Link to={urls.tiktokUrl} className='footer__link footer__link_rrss'>
          <img
            src={igSrc}
            alt='Link a nuestro Instagram'
            className='footer__logo footer__logo_rrss'
          />
        </Link>
      </div>
      <div className='footer__container footer__container_logo'>
        <a href='/' className='footer__link'>
          <img
            src={logoSrc}
            alt='Logo el Arte de producir'
            className='footer__logo'
          />
        </a>
      </div>
      <div className='footer__container footer__container_avisos'>
        <Link className='footer__aviso' to='/privacidad'>
          Aviso de privacidad
        </Link>
        <p className='footer__aviso'>|</p>
        <Link className='footer__aviso' to='/cookies'>
          Política de cokies
        </Link>
        <p className='footer__aviso'>|</p>
        <Link className='footer__aviso' to='/legal'>
          Aviso legal
        </Link>
      </div>
      <div className='footer__container footer__container_copyright'>
        <p className='footer__text'>© Julián Reyes Botello 2024</p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  urls: PropTypes.object,
};
