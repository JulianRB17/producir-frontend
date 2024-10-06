import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import logoSrc from '../../../../assets/logos/imag-eap.png';

export default function HeroCierreR({ shadowVariants, urls }) {
  return (
    <section className='hero-cierre-r'>
      <div className='hero-cierre-r__container hero-cierre-r__container_top'>
        <div className='hero-cierre-r__container hero-cierre-r__container_title'>
          <p className='hero-cierre-r__title hero-cierre-r__title_accent'>
            Tu registro ya está casi completado
          </p>
          <motion.p
            className='hero-cierre-r__title hero-cierre-r__title_shadow'
            variants={shadowVariants}
            initial='initial'
            whileInView='view'
            animate='loop'
          >
            completado
          </motion.p>
          <p className='hero-cierre-r__title'>
            Presta atención al siguiente{' '}
            <span className='hero-cierre-r__title_accent-sm '>video </span> y a
            las indicaciones para terminar de confirmar tu registro.
          </p>
        </div>
        <div className='hero-cierre-r__container hero-cierre-r__container_logo'>
          <img
            src={logoSrc}
            alt='Logo de El arte de producir'
            className='hero-cierre-r__logo'
          />
        </div>
      </div>
      <div className='hero-cierre-r__container hero-cierre-r__container_video'>
        <iframe
          className='hero-cierre-r__video'
          src={urls.graciasRegistroUrl}
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
        ></iframe>
      </div>
      <div className='hero-cierre-r__overlay' />
    </section>
  );
}

HeroCierreR.propTypes = {
  shadowVariants: PropTypes.object,
  urls: PropTypes.object,
};
