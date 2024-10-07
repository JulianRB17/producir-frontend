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
          <p className='bios__name'>Verónica</p>
          <p className='bios__name bios__name_accent'>Ramos</p>
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
              Productora y gestora con 9 años de trayectoria en proyectos
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
              Coordinadora de producción del Colectivo Escénico El Arce
              beneficiario del programa México en Escena del Sistema de Apoyos a
              la Creación de Proyectos Culturales (MEGA).
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
              Productora ejecutiva de Los obscenos de Silere/Vórtex proyecto
              beneficiario de EFIARTES.
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
          <p className='bios__name'>Julián</p>
          <p className='bios__name bios__name_accent'>Reyes Botello</p>
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
              Teatrero: director escénico, actor, productor y gestor con 8 años
              de experiencia en el medio profesional.
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
              Con un diplomado en Creación/Investigación por la UBA (Argentina)
              y la UNAM y otro en Perfeccionamiento en Dirección Escénica por la
              Secretaría de Cultura
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
              Formó parte del equipo de producción de Los obscenos de
              Silere/Vórtex proyecto beneficiario de EFIARTES.
            </p>
          </li>
        </ul>
      </div>
      <div className='bios__overlay' />
    </section>
  );
}

Bios.propTypes = {
  listElementVariants: PropTypes.object,
};
