import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import veroSrc from '../../assets/imgs/vero2.webp';
import julianSrc from '../../assets/imgs/julian-bn.webp';
import triangleSrc from '../../assets/imgs/triangulo-azul.svg';

export default function Bios({ listElementVariants }) {
  return (
    <section className='bios'>
      <div className='bios__container bios__container_bio'>
        <img src={veroSrc} alt='Vero Ramos' className='bios__photo' />
        <div className='bios__container bios__container_name'>
          <h3 className='bios__name'>Verónica</h3>
          <h3 className='bios__name bios__name_accent'>Ramos</h3>
        </div>
        <ul className='bios__list'>
          <li className='bios__element'>
            <motion.img
              src={triangleSrc}
              alt='lista'
              className='bios__list-style'
              variants={listElementVariants}
              initial='initial'
              whileInView='view'
            />
            <p className='bios__text'>
              Productora y gestora con 10 años de trayectoria en proyectos
              culturales y artísticos para instituciones públicas y privadas.
            </p>
          </li>
          <li className='bios__element'>
            <motion.img
              src={triangleSrc}
              alt='lista'
              className='bios__list-style'
              variants={listElementVariants}
              initial='initial'
              whileInView='view'
            />
            <p className='bios__text'>
              Coordinadora de producción del Colectivo Escénico El Arce,
              colectivo con 10 años de trayectoria, beneficiario del programa
              México en Escena (MEGA) entre otros.
            </p>
          </li>
          <li className='bios__element'>
            <motion.img
              src={triangleSrc}
              alt='lista'
              className='bios__list-style'
              variants={listElementVariants}
              initial='initial'
              whileInView='view'
            />
            <p className='bios__text'>
              Coordinadora de producción y productora ejecutiva de proyectos
              financiados por diversos fondos institucionales como EFIARTES.
            </p>
          </li>
        </ul>
      </div>
      <div className='bios__container bios__container_bio'>
        <img
          src={julianSrc}
          alt='Julián Reyes Botello'
          className='bios__photo'
        />
        <div className='bios__container bios__container_name'>
          <h3 className='bios__name'>Julián</h3>
          <h3 className='bios__name bios__name_accent'>Reyes Botello</h3>
        </div>
        <ul className='bios__list'>
          <li className='bios__element'>
            <motion.img
              src={triangleSrc}
              alt='lista'
              className='bios__list-style'
              variants={listElementVariants}
              initial='initial'
              whileInView='view'
            />
            <p className='bios__text'>
              Director escénico, actor, productor y gestor con 9 años de
              experiencia en el medio profesional.
            </p>
          </li>
          <li className='bios__element'>
            <motion.img
              src={triangleSrc}
              alt='lista'
              className='bios__list-style'
              variants={listElementVariants}
              initial='initial'
              whileInView='view'
            />
            <p className='bios__text'>
              Productor ejecutivo de Teatro de Ciertos Habitantes, compañía de
              gran formato con 30 años de trayectoria y presencia en más de 200
              ciudades alrededor del globo.
            </p>
          </li>
          <li className='bios__element'>
            <motion.img
              src={triangleSrc}
              alt='lista'
              className='bios__list-style'
              variants={listElementVariants}
              initial='initial'
              whileInView='view'
            />
            <p className='bios__text'>
              Coordinador de producción y productor ejecutivo de proyectos
              financiados por diversos fondos institucionales como EFIARTES.
            </p>
          </li>
        </ul>
      </div>
      <p className='bios__credito-foto'>Foto: Carlos Alvar</p>
      <div className='bios__overlay' />
    </section>
  );
}

Bios.propTypes = {
  listElementVariants: PropTypes.object,
};
