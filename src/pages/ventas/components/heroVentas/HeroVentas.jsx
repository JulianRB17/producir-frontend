import logoSrc from '../../../../assets/logos/imag-eap.png';
import logoDisclaimerSrc from '../../../../assets/logos/iso-largo-eap.png';
import flechaSrc from '../../../../assets/imgs/flecha.svg';

import { motion } from 'framer-motion';

export default function heroVentas() {
  return (
    <section className='heroVentas'>
      <div className='heroVentas__container heroVentas__container_grid'>
        <div className='heroVentas__container heroVentas__container_title'>
          <div className='heroVentas__container heroVentas__container_title'>
            <h1 className='heroVentas__title heroVentas__title_accent'>
              <span className='heroVentas__title_accent heroVentas__title_shadow'>
                Aprende
              </span>
              Aprende el método
            </h1>
            <h1 className='heroVentas__title'>
              para que tus ideas se transformen en el proyecto escénico{' '}
              <span className='heroVentas__title heroVentas__title_accent-sm'>
                -danza, circo o teatro-
              </span>{' '}
              que siempre soñaste sin perder dinero.
            </h1>
          </div>
        </div>
        <div className='heroVentas__container heroVentas__container_logo'>
          <img
            src={logoSrc}
            alt='logo-el-arte-de-producir'
            className='heroVentas__logo'
          />
        </div>
        <motion.div
          className='heroVentas__container heroVentas__container_btn'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 1, ease: 'easeInOut', type: 'spring' }}
        >
          <a className='heroVentas_btn heroVentas__btn_cta' href='#form'>
            Haz click aquí para unirte
          </a>
        </motion.div>
        <div className='heroVentas__container heroVentas__container_disclaimer'>
          <img
            src={logoDisclaimerSrc}
            alt='logo-del-arte-de-producir'
            className='heroVentas__logo heroVentas__logo_disclaimer'
          />
          <p className='heroVentas__disclaimer'>
            Tu información está segura y no será compartida con nadie.
          </p>
        </div>
        <div className='heroVentas__container heroVentas__container_arrow'>
          <a href='#date' className='heroVentas_btn heroVentas__btn_arrow'>
            <img src={flechaSrc} alt='flecha' className='heroVentas__arrow' />
          </a>
        </div>
      </div>
      <div className='heroVentas__overlay' />
    </section>
  );
}
