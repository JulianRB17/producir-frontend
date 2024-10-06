import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import logoSrc from '../../../../assets/logos/imag-eap.png';
import logoDisclaimerSrc from '../../../../assets/logos/iso-largo-eap.png';
import flechaSrc from '../../../../assets/imgs/flecha.svg';

export default function Hero({ shadowVariants, btnVariants }) {
  const handleScrollToDateClick = (e) => {
    e.preventDefault();
    document.getElementById('date')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToFormClick = (e) => {
    e.preventDefault();
    document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className='hero'>
      <motion.div
        className='hero__container hero__container_grid'
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <div className='hero__container hero__container_title'>
          <div className='hero__container hero__container_title'>
            <h1 className='hero__title hero__title_accent'>
              <motion.span
                className='hero__title_accent hero__title_shadow'
                variants={shadowVariants}
                initial='initial'
                whileInView='view'
                animate='loop'
              >
                Aprende
              </motion.span>
              Aprende las 3 claves
            </h1>
            <h1 className='hero__title'>
              para desarrollar tus proyectos y profesionalizar tu carrera
              artística.
            </h1>
          </div>
        </div>
        <div className='hero__container hero__container_logo'>
          <img
            src={logoSrc}
            alt='logo-el-arte-de-producir'
            className='hero__logo'
          />
        </div>
        <div className='hero__container hero__container_btn'>
          <motion.button
            className='hero_btn hero__btn_registro'
            href='#form'
            variants={btnVariants}
            whileHover='hover'
            whileTap='tap'
            onClick={handleScrollToFormClick}
          >
            Regístrate gratis
          </motion.button>
        </div>
        <div className='hero__container hero__container_disclaimer'>
          <img
            src={logoDisclaimerSrc}
            alt='logo-del-arte-de-producir'
            className='hero__logo hero__logo_disclaimer'
          />
          <p className='hero__disclaimer'>
            Tu información está segura y no será compartida con nadie.
          </p>
        </div>
        <div className='hero__container hero__container_arrow'>
          <motion.button
            variants={btnVariants}
            animate='loop'
            whileHover='hover'
            whileTap='tap'
            className='hero_btn hero__btn_arrow'
            onClick={handleScrollToDateClick}
          >
            <img src={flechaSrc} alt='flecha' className='hero__arrow' />
          </motion.button>
        </div>
      </motion.div>
      <div className='hero__overlay' />
    </section>
  );
}

Hero.propTypes = {
  shadowVariants: PropTypes.object,
  btnVariants: PropTypes.object,
};
