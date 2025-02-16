import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import logoSrc from '../../../../assets/imgs/whatsapp.svg';

export default function Contacto({ btnVariants, urls }) {
  return (
    <div className='contacto' id='contacto'>
      <motion.a
        href={urls.whatsappUrl}
        className='contacto__link'
        variants={btnVariants}
        whileHover='hover'
        whileTap='tap'
        animate='loop'
      >
        <img src={logoSrc} alt='' className='contacto__logo' />
      </motion.a>
      <p className='contacto__text'>
        Si tienes alguna duda nos puedes escribir directamente
      </p>
    </div>
  );
}

Contacto.propTypes = {
  btnVariants: PropTypes.object,
  urls: PropTypes.object,
};
