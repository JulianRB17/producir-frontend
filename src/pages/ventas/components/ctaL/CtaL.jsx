import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import logoSrc from '../../../../assets/logos/imag-eap.png';

export default function CtaL({ btnVariants }) {
  return (
    <section className='cta-m'>
      <p className='cta-m__text cta-m__text_top'>
        Proyecta tu vida dentro de un año sin cambios ... ¿qué habrás logrado?
      </p>
      <p className='cta-m__text'>
        Ahora pregúntate, ¿qué es lo que verdaderamente deseas alcanzar como
        artista escénico?
      </p>
      <p className='cta-m__text cta-m__text_venta'>
        Por sólo{' '}
        <span className='cta-m__text cta-m__text_venta cta-m__text_accent'>
          (valor real de $10,000)
        </span>{' '}
        $3,500mxn adquiere
      </p>
      <img
        src={logoSrc}
        alt='Logo de El arte de producir'
        className='cta-m__logo'
      />
      <p className='cta-m__text cta-m__text_cta'>Haz click aquí:</p>
      <motion.button
        className='cta-m__btn'
        variants={btnVariants}
        whileHover='hover'
        whileTap='tap'
      >
        Quiero formar parte de este programa
      </motion.button>
      <p className='cta-m__text cta-m__text_hook'>
        Imagina tomar ese sueño y modelarlo hasta convertirlo en un proyecto
        sólido y real. La posibilidad está a tu alcance.
      </p>
      <p className='cta-m__text'>
        Cada sueño que has tenido es una promesa. Ahora es el momento de hacerlo
        realidad.
      </p>
    </section>
  );
}

CtaL.propTypes = {
  btnVariants: PropTypes.object,
};
