import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import logoSrc from '../../../../assets/logos/imag-eap.png';
import logoLSrc from '../../../../assets/logos/iso-largo-eap.png';

export default function HeroR({
  shadowVariants,
  titleVariants,
  btnVariants,
  urls,
}) {
  return (
    <section className='hero-r'>
      <div className='hero-r__container hero-r__container_top'>
        <div className='hero-r__container hero-r__container_title'>
          <motion.p
            className='hero-r__title hero-r__title_accent'
            variants={titleVariants}
            initial='initial'
            whileInView='view'
          >
            Aquí está la repetición de la clase gratuita
          </motion.p>
          <motion.p
            className='hero-r__title'
            variants={titleVariants}
            initial='initial'
            whileInView='view'
          >
            Aprende las 3 claves para desarrollar tus proyectos y
            profesionalizar tu carrera artística.
          </motion.p>
          <motion.p
            className='hero-r__title hero-r__title_shadow'
            variants={shadowVariants}
            initial='initial'
            whileInView='view'
            animate='loop'
          >
            repetición
          </motion.p>
        </div>
        <div className='hero-r__container hero-r__container_logo'>
          <img
            src={logoSrc}
            alt='Logo de El arte de producir'
            className='hero-r__logo'
          />
        </div>
      </div>
      <div className='hero-r__container hero-r__container_video'>
        <iframe
          className='hero-r__video'
          src={urls.repetitionUrl}
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
        ></iframe>
      </div>
      <div className='hero-r__container hero-r__container_cta'>
        <p className='hero-r__text'>
          Si quisieras profundizar en la información y tener un acompañamiento
          paso a paso para lograr levantar tu proyecto escénico, te dejamos un
          link a nuestro curso online,{' '}
          <span className='hero-r__text hero-r__text_accent'>
            El arte de producir:
          </span>
        </p>
        <div className='hero-r__container hero-r__container_logo hero-r__container_btn'>
          <motion.button
            className='hero-r__btn'
            variants={btnVariants}
            whileHover='hover'
            whileTap='tap'
            animate='loop'
          >
            <Link className='hero-r__link' to='/'>
              <img
                src={logoLSrc}
                alt='Logo de El arte de producir'
                className='hero-r__logo hero-r__logo_link'
              />
            </Link>
          </motion.button>
        </div>
      </div>
      <div className='hero-r__overlay' />
    </section>
  );
}

HeroR.propTypes = {
  shadowVariants: PropTypes.object,
  titleVariants: PropTypes.object,
  btnVariants: PropTypes.object,
  urls: PropTypes.object,
};
