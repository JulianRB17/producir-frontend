import logoSrc from '../../assets/logos/iso-largo-eap.png';
import fbSrc from '../../assets/logos/fb.svg';
import igSrc from '../../assets/logos/ig.svg';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container footer__container_copy'>
        <p className='footer__text'>© Julián Reyes Botello 2024</p>
      </div>
      <div className='footer__container'>
        <a href='/' className='footer__link'>
          <img
            src={logoSrc}
            alt='Logo el Arte de producir'
            className='footer__logo'
          />
        </a>
      </div>
      <div className='footer__container footer__container_rrss'>
        <a href='facebook.com' className='footer__link footer__link_rrss'>
          <img
            src={fbSrc}
            alt='Link a nuestro Facebook'
            className='footer__logo footer__logo_rrss'
          />
        </a>
        <a href='instagram.com' className='footer__link footer__link_rrss'>
          <img
            src={igSrc}
            alt='Link a nuestro Instagram'
            className='footer__logo footer__logo_rrss'
          />
        </a>
      </div>
    </footer>
  );
}
