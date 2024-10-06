import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import logoSrc from '../../assets/logos/iso-eap.png';

export default function Header({ isRegistro }) {
  const headerRegistroRender = () => {
    return (
      <div className='header__container header__container_registro'>
        <motion.img
          initial={{ x: '-100px', opacity: 0.1 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          src={logoSrc}
          alt='logo-el-arte-de-producir'
          className='header__logo'
        />
        <motion.p
          className='header__text'
          initial={{ opacity: 0.1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <span className='header__text header__text_accent'>
            ¡Atención, artista escénico!
          </span>{' '}
          ¿Quieres aprender a consolidar tus proyectos escénicos y materializar
          tus ideas?{' '}
          <span className='header__text_accent'>Esto es para tí...</span>
        </motion.p>
      </div>
    );
  };

  const headerRender = () => {
    return (
      <div className='header__container'>
        <motion.img
          initial={{ x: '-100px', opacity: 0.1 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          src={logoSrc}
          alt='logo-el-arte-de-producir'
          className='header__logo'
        />
      </div>
    );
  };

  return (
    <header className='header'>
      {isRegistro ? headerRegistroRender() : headerRender()}
    </header>
  );
}

Header.propTypes = {
  isRegistro: PropTypes.bool,
};
