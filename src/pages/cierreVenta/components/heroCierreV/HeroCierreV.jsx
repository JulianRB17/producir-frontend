import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import logoSrc from '../../../../assets/logos/imag-eap.png';

export default function HeroCierreV({ shadowVariants, urls }) {
  return (
    <section className='hero-cierre-v'>
      <div className='hero-cierre-v__container hero-cierre-v__container_top'>
        <div className='hero-cierre-v__container hero-cierre-v__container_title'>
          <p className='hero-cierre-v__title hero-cierre-v__title_accent'>
            Ya eres parte de la comunidad de
          </p>
          <p className='hero-cierre-v__title'>El arte de producir</p>
          <motion.p
            className='hero-cierre-v__title hero-cierre-v__title_shadow'
            variants={shadowVariants}
            initial='initial'
            whileInView='view'
            animate='loop'
          >
            comunidad
          </motion.p>
        </div>
        <div className='hero-cierre-v__container hero-cierre-v__container_logo'>
          <img
            src={logoSrc}
            alt='Logo de El arte de producir'
            className='hero-cierre-v__logo'
          />
        </div>
      </div>
      <div className='hero-cierre-v__container hero-cierre-v__container_video'>
        <p className='hero-cierre-v__text'>
          Mira el siguiente vídeo para conocer los pasos que siguen.
        </p>
        <iframe
          className='hero-cierre-v__video'
          src={urls.graciasVentaUrl}
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

HeroCierreV.propTypes = {
  shadowVariants: PropTypes.object,
  urls: PropTypes.object,
};
