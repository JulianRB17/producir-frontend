import logoSrc from '../../../../assets/logos/iso-eap.png';

export default function Header() {
  return (
    <header className='header'>
      <img
        src={logoSrc}
        alt='logo-el-arte-de-producir'
        className='header__logo'
      />
      <p className='header__text'>
        <span className='header__text header__text_accent'>
          ¡Atención, artista escénico!
        </span>{' '}
        ¿Quieres aprender a consolidar tus proyectos escénicos y materializar
        tus ideas?{' '}
        <span className='header__text_accent'>Esto es para tí...</span>
      </p>
    </header>
  );
}
