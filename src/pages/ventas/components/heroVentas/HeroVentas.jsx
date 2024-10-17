import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import logoSrc from '../../../../assets/logos/imag-eap.png';
import logoDisclaimerSrc from '../../../../assets/logos/iso-largo-eap.png';
import flechaSrc from '../../../../assets/imgs/flecha.svg';

export default function HeroVentas({
  shadowVariants,
  btnVariants,
  handleBuyClick,
}) {
  const handleScrollClick = (e) => {
    e.preventDefault();
    document
      .getElementById('situaciones')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className='hero-ventas'>
      <motion.div
        className='hero-ventas__container hero-ventas__container_grid'
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <div className='hero-ventas__container hero-ventas__container_title'>
          <div className='hero-ventas__container hero-ventas__container_title'>
            <h1 className='hero-ventas__title hero-ventas__title_accent'>
              <motion.span
                className='hero-ventas__title_accent hero-ventas__title_shadow'
                variants={shadowVariants}
                initial='initial'
                whileInView='view'
                animate='loop'
              >
                Aprende
              </motion.span>
              Aprende el método
            </h1>
            <h1 className='hero-ventas__title'>
              para que tus ideas se transformen en el proyecto escénico{' '}
              <span className='hero-ventas__title hero-ventas__title_accent-sm'>
                -danza, circo o teatro-
              </span>{' '}
              que siempre soñaste sin perder dinero.
            </h1>
          </div>
        </div>
        <div className='hero-ventas__container hero-ventas__container_logo'>
          <img
            src={logoSrc}
            alt='logo-el-arte-de-producir'
            className='hero-ventas__logo'
          />
        </div>
        <div className='hero-ventas__container hero-ventas__container_btn'>
          <motion.button
            className='hero-ventas_btn hero-ventas__btn_cta'
            variants={btnVariants}
            whileHover='hover'
            whileTap='tap'
            onClick={handleBuyClick}
          >
            Haz click aquí para unirte
          </motion.button>
        </div>
        <div className='hero-ventas__container hero-ventas__container_disclaimer'>
          <img
            src={logoDisclaimerSrc}
            alt='logo-del-arte-de-producir'
            className='hero-ventas__logo hero-ventas__logo_disclaimer'
          />
          <p className='hero-ventas__disclaimer'>
            Tu información está segura y no será compartida con nadie.
          </p>
        </div>
        <div className='hero-ventas__container hero-ventas__container_arrow'>
          <motion.button
            variants={btnVariants}
            whileHover='hover'
            whileTap='tap'
            animate='loop'
            className='hero-ventas_btn hero-ventas__btn_arrow'
          >
            <img
              src={flechaSrc}
              alt='flecha'
              className='hero-ventas__arrow'
              onClick={handleScrollClick}
            />
          </motion.button>
        </div>
      </motion.div>
      <div className='hero-ventas__overlay' />
    </section>
  );
}

HeroVentas.propTypes = {
  shadowVariants: PropTypes.object,
  btnVariants: PropTypes.object,
  handleBuyClick: PropTypes.func,
};
