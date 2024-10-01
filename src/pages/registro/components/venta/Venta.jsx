import listElementSrc from '../../../../assets/imgs/triangulo-azul.svg';

import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export default function Venta({ shadowVariants, listElementVariants }) {
  return (
    <section className='venta'>
      <h2 className='venta__title'>
        <motion.span
          className='venta__title venta__title_shadow'
          variants={shadowVariants}
          initial='initial'
          whileInView='view'
          animate='loop'
        >
          para ti si
        </motion.span>
        Esta clase es para ti si:
      </h2>
      <ul className='venta__list'>
        <li className='venta__element'>
          <motion.img
            src={listElementSrc}
            alt='lista'
            className='venta__list-vector'
            variants={listElementVariants}
            initial='initial'
            whileInView='view'
          />
          <p className='venta__text'>
            <span className='venta__text venta__text_accent'>
              Quieres desarrollar tus propios proyectos
            </span>{' '}
            de artes escénicas -circo, danza o teatro- y no sabes por dónde
            empezar.
          </p>
        </li>
        <div className='venta__divition' />
        <li className='venta__element'>
          <motion.img
            src={listElementSrc}
            alt='lista'
            className='venta__list-vector'
            variants={listElementVariants}
            initial='initial'
            whileInView='view'
          />
          <p className='venta__text'>
            <span className='venta__text venta__text_accent'>
              No entiendes conceptos
            </span>{' '}
            de las convocatorias como &quot;Desglose de taquilla&quot; o
            &quot;Presupuesto&quot;, mucho menos tienes idea de cómo hacerlo
            <span className='venta__text venta__text_accent'>
              y eso te impide materializar tus ideas.
            </span>
          </p>
        </li>
        <div className='venta__divition' />
        <li className='venta__element'>
          <motion.img
            variants={listElementVariants}
            initial='initial'
            whileInView='view'
            src={listElementSrc}
            alt='lista'
            className='venta__list-vector'
          />
          <p className='venta__text'>
            Planeas y creas con recursos propios pero terminas{' '}
            <span className='venta__text venta__text_accent'>
              perdiendo tiempo, esfuerzo y dinero.
            </span>
          </p>
        </li>
      </ul>
    </section>
  );
}

Venta.propTypes = {
  shadowVariants: PropTypes.object,
  listElementVariants: PropTypes.object,
};
