import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import logoSrc from '../../assets/logos/iso-eap.png';

const navLinks = [
  { key: 'situaciones', tag: '¿Te ha pasado?' },
  { key: 'about', tag: 'Quiénes somos' },
  { key: 'presentacion', tag: '¿Es para mí?' },
  { key: 'description-ventas', tag: 'Descripción' },
  { key: 'bonos', tag: 'Bonos' },
  { key: 'garantia', tag: 'Garantía' },
  { key: 'faqs', tag: 'Preguntas frecuentes' },
];

const Logo = () => (
  <motion.img
    initial={{ x: '-100px', opacity: 0.1 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 1 }}
    src={logoSrc}
    alt='Logotipo de El Arte de Producir'
    className='header__logo'
  />
);

const handleScrollClick = (id) => {
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.warn(`Element with id "${id}" not found.`);
  }
};

const HeaderNavBar = () => (
  <div className='header__container'>
    <Logo />
    <ul className='header__navbar'>
      {navLinks.map(({ key, tag }) => (
        <motion.li
          className='header__navlink'
          key={key}
          onClick={() => handleScrollClick(key)}
          whileHover={{ scale: 1.2, color: '#E1F102' }}
          whileTap={{ scale: 0.8 }}
        >
          {tag}
        </motion.li>
      ))}
    </ul>
  </div>
);

const HeaderRegistro = () => (
  <div className='header__container header__container_registro'>
    <Logo />
    <motion.p
      className='header__text'
      initial={{ opacity: 0.1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <span className='header__text header__text_accent'>
        ¡Atención, artista escénico!
      </span>{' '}
      ¿Quieres aprender a consolidar tus proyectos escénicos y materializar tus
      ideas? <span className='header__text_accent'>Esto es para tí...</span>
    </motion.p>
  </div>
);

const HeaderStandard = () => (
  <div className='header__container'>
    <Logo />
  </div>
);

export default function Header({ isRegistro, isVentas }) {
  const renderHeaderContent = () =>
    isRegistro ? (
      <HeaderRegistro />
    ) : isVentas ? (
      <HeaderNavBar />
    ) : (
      <HeaderStandard />
    );

  return <header className='header'>{renderHeaderContent()}</header>;
}

Header.propTypes = {
  isRegistro: PropTypes.bool,
  isVentas: PropTypes.bool,
};
