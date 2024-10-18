import logoSrc from '../../assets/logos/imag-eap.png';

export default function NotFound() {
  return (
    <section className='not-found'>
      <div className='not-found__container'>
        <p className='not-found__text'>
          No encontramos la página que buscas,{' '}
          <span className='not-found__text not-found__text_accent'>
            prueba regresar a:
          </span>
        </p>

        <a href='/' className='not-found__link'>
          <img
            src={logoSrc}
            alt='Logotipo del Arte de producir'
            className='not-found__logo'
          />
        </a>
      </div>
    </section>
  );
}
