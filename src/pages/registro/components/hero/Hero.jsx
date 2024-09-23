// import { motion } from "framer-motion";
import logoSrc from '../../../../assets/logos/imag-eap.png';
import logoDisclaimerSrc from '../../../../assets/logos/iso-largo-eap.png';
import flechaSrc from '../../../../assets/imgs/flecha.svg';

export default function Hero() {
  return (
    <section className='hero'>
      <div className='hero__container hero__container_general'>
        <div className='hero__container hero__container_title-shadow'>
          <span className='hero__title_accent hero__title_shadow'>Aprende</span>
          <div className='hero__container hero__container_title'>
            <h1 className='hero__title hero__title_accent'>
              Aprende las 3 claves
            </h1>
            <h1 className='hero__title'>
              para desarrollar tus proyectos y profesionalizar tu carrera
              artística.
            </h1>
          </div>
        </div>
        <div className='hero__container hero__container_logo'>
          <img
            src={logoSrc}
            alt='logo-el-arte-de-producir'
            className='hero__logo'
          />
        </div>
      </div>
      <div className='hero__container'>
        <a className='hero_btn hero__btn_registro' href='#form'>
          Regístrate gratis
        </a>
      </div>
      <div className='hero__container hero__container_disclaimer'>
        <img
          src={logoDisclaimerSrc}
          alt='logo-del-arte-de-producir'
          className='hero__logo hero__logo_disclaimer'
        />
        <p className='hero__disclaimer'>
          Tu información está segura y no será compartida con nadie.
        </p>
      </div>
      <div className='hero__container hero__container_arrow'>
        <a href='#date' className='hero_btn hero__btn_arrow'>
          <img src={flechaSrc} alt='flecha' className='hero__arrow' />
        </a>
      </div>
      <div className='hero__overlay' />
    </section>
  );
}
