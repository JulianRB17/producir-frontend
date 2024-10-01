import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import listElementSrc from '../../../../assets/imgs/triangulo-azul.svg';

export default function Presentacion({ listElementVariants, shadowVariants }) {
  return (
    <section className='presentacion'>
      <h2 className='presentacion__title'>
        <motion.span
          className='presentacion__title presentacion__title_shadow'
          variants={shadowVariants}
          initial='initial'
          whileInView='view'
          animate='loop'
        >
          para ti si
        </motion.span>
        Este programa es para ti si
      </h2>
      <ul className='presentacion__list'>
        <li className='presentacion__element'>
          <motion.img
            src={listElementSrc}
            alt='lista'
            className='presentacion__list-vector'
            variants={listElementVariants}
            initial='initial'
            whileInView='view'
          />
          <p className='presentacion__text'>
            Sueñas con desarrollar tus propios{' '}
            <span className='presentacion__text presentacion__text_accent'>
              proyectos escénicos
            </span>{' '}
            (circo, teatro, danza).
          </p>
        </li>
        <div className='presentacion__divition' />
        <li className='presentacion__element'>
          <motion.img
            src={listElementSrc}
            alt='lista'
            className='presentacion__list-vector'
            variants={listElementVariants}
            initial='initial'
            whileInView='view'
          />
          <p className='presentacion__text'>
            Quieres desarrollar proyectos sólidos que te permitan
            <span className='presentacion__text presentacion__text_accent'>
              {' '}
              acceder a financiamientos y subsidios.
            </span>
          </p>
        </li>
        <div className='presentacion__divition' />
        <li className='presentacion__element'>
          <motion.img
            src={listElementSrc}
            alt='lista'
            className='presentacion__list-vector'
            variants={listElementVariants}
            initial='initial'
            whileInView='view'
          />
          <p className='presentacion__text'>
            Quisieras aprender qué existen{' '}
            <span className='presentacion__text presentacion__text_accent'>
              formas de gestión de espacios escénicos
            </span>{' '}
            a parte de las convocatorias.
          </p>
        </li>
        <div className='presentacion__divition' />
        <li className='presentacion__element'>
          <motion.img
            src={listElementSrc}
            alt='lista'
            className='presentacion__list-vector'
            variants={listElementVariants}
            initial='initial'
            whileInView='view'
          />
          <p className='presentacion__text'>
            Deseas generar nuevas estrategias de
            <span className='presentacion__text presentacion__text_accent'>
              {' '}
              difusión para acceder a más públicos.
            </span>
          </p>
        </li>
        <div className='presentacion__divition' />
        <li className='presentacion__element'>
          <motion.img
            src={listElementSrc}
            alt='lista'
            className='presentacion__list-vector'
            variants={listElementVariants}
            initial='initial'
            whileInView='view'
          />
          <p className='presentacion__text'>
            Quieres tener
            <span className='presentacion__text presentacion__text_accent'>
              {' '}
              objetivos y metas
            </span>{' '}
            claros en tu vida profesional artistica.
          </p>
        </li>
        <div className='presentacion__divition' />
        <li className='presentacion__element'>
          <motion.img
            src={listElementSrc}
            alt='lista'
            className='presentacion__list-vector'
            variants={listElementVariants}
            initial='initial'
            whileInView='view'
          />
          <p className='presentacion__text'>
            <span className='presentacion__text presentacion__text_accent'>
              Buscas gestionar y planear eficientemente tu tiempo para
            </span>{' '}
            evitar la procrastinación.
          </p>
        </li>
        <div className='presentacion__divition' />
        <li className='presentacion__element'>
          <motion.img
            src={listElementSrc}
            alt='lista'
            className='presentacion__list-vector'
            variants={listElementVariants}
            initial='initial'
            whileInView='view'
          />
          <p className='presentacion__text'>
            <span className='presentacion__text presentacion__text_accent'>
              Quieres lograr un equilibrio entre tu vida personal y profesional{' '}
            </span>{' '}
            sin tener la preocupación constante de que no se puede vivir del
            arte.
          </p>
        </li>
        <div className='presentacion__divition' />
        <li className='presentacion__element'>
          <motion.img
            src={listElementSrc}
            alt='lista'
            className='presentacion__list-vector'
            variants={listElementVariants}
            initial='initial'
            whileInView='view'
          />
          <p className='presentacion__text'>
            Deseas saber{' '}
            <span className='presentacion__text presentacion__text_accent'>
              hacer carpetas y entender las convocatorias
            </span>{' '}
            para ser lo más eficiente posible, sabiendo que no siempre quedarás
            pero planeando estratégicamente para que{' '}
            <span className='presentacion__text presentacion__text_accent'>
              hacer carpetas y entender las convocatorias
            </span>
            éstas no te absorban tu tiempo y energía.
          </p>
        </li>
        <div className='presentacion__divition' />
        <li className='presentacion__element'>
          <motion.img
            src={listElementSrc}
            alt='lista'
            className='presentacion__list-vector'
            variants={listElementVariants}
            initial='initial'
            whileInView='view'
          />
          <p className='presentacion__text'>
            <span className='presentacion__text presentacion__text_accent'>
              Te gustaría conocer la experiencia de otras personas en el medio
              para aprender de sus errores{' '}
            </span>{' '}
            y mejorar tus dinámicas de trabajo.
          </p>
        </li>
      </ul>
    </section>
  );
}

Presentacion.propTypes = {
  listElementVariants: PropTypes.object,
  shadowVariants: PropTypes.object,
};
