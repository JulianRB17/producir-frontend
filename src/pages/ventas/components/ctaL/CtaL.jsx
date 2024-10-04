import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import logoSrc from '../../../../assets/logos/imag-eap.png';

export default function CtaL({ btnVariants, urls }) {
  return (
    <section className='cta-l'>
      <div className='cta-l__container cta-l__container_title'>
        <p className='cta-l__title cta-l__title_accent'>
          Proyecta tu vida dentro de un año sin cambios ... ¿qué habrás logrado?
        </p>
        <p className='cta-l__title'>
          Ahora pregúntate, ¿qué es lo que verdaderamente deseas alcanzar como
          artista escénico?
        </p>
      </div>
      <img
        src={logoSrc}
        alt='Logo de El arte de producir'
        className='cta-l__logo'
      />
      <div className='cta-l__container cta-l__container_cta'>
        <p className='cta-l__text cta-l__text_venta'>
          Por sólo{' '}
          <span className='cta-l__text cta-l__text_venta cta-l__text_accent'>
            (valor real de $10,000)
          </span>{' '}
          $3,500mxn adquiere:
        </p>
        <motion.div
          className='cta-l__btn'
          variants={btnVariants}
          whileHover='hover'
          whileTap='tap'
          animate='loop'
        >
          <Link className='cta-l__link' to={urls.buyoutUrl}>
            Quiero formar parte de este programa
          </Link>
        </motion.div>
      </div>
      <div className='cta-l__container cta-l__container_text'>
        <p className='cta-l__text cta-l__text_hook'>
          Imagina tomar ese sueño y modelarlo hasta convertirlo en un proyecto
          sólido y real. La posibilidad está a tu alcance.
        </p>
        <p className='cta-l__text'>
          Cada sueño que has tenido es una promesa. Ahora es el momento de
          hacerlo realidad.
        </p>
      </div>
      <div className='cta-l__overlay' />
    </section>
  );
}

CtaL.propTypes = {
  btnVariants: PropTypes.object,
  urls: PropTypes.object,
};
