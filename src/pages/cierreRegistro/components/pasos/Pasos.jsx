import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import bookmarkSrc from '../../../../assets/imgs/bookmark.svg';
import checkboxSrc from '../../../../assets/imgs/checkbox.svg';
import mailSrc from '../../../../assets/imgs/mail.svg';

export default function Pasos({ titleVariants, btnVariants, urls }) {
  return (
    <section className='pasos'>
      <motion.div
        className='pasos__container pasos__container_title'
        variants={titleVariants}
        initial='initialContainer'
        whileInView='viewContainer'
      >
        <motion.p
          className='pasos__title'
          variants={titleVariants}
          initial='initial'
          whileInView='view'
        >
          ¿Qué sigue?
        </motion.p>
      </motion.div>

      <div className='pasos__container pasos__container_elements'>
        <div className='pasos__element'>
          <img src={mailSrc} alt='Ícono de email' className='pasos__img' />
          <h3 className='pasos__label'>Paso #1:</h3>
          <h3 className='pasos__element-title'>Revisa tu email</h3>
          <p className='pasos__text'>
            Te pido que revises tu email, tanto{' '}
            <span className='pasos__text_accent'>
              la bandeja de entrada como la de spam
            </span>{' '}
            te hemos mandado ahí la invitación a esta clase gratuita con la liga
            donde sucederá.
          </p>
        </div>
        <div className='pasos__element pasos__element_amarillo'>
          <img
            src={checkboxSrc}
            alt='Ícono de encuesta'
            className='pasos__img'
          />
          <h3 className='pasos__label'>Paso #2:</h3>
          <h3 className='pasos__element-title pasos__element-title_azul'>
            Contesta esta encuesta
          </h3>
          <p className='pasos__text'>
            Queremos darte la información más útil que podamos en esta clase.
            Para ello, te pido que nos ayudes contestando esta encuesta que{' '}
            <span className='pasos__text_accent'>
              te tomará menos de 5 minutos
            </span>{' '}
            , así podemos mejorar cada vez más en el contenido que te podemos
            ofrecer.
          </p>
          <motion.button
            className='pasos__btn'
            variants={btnVariants}
            whileHover='hover'
            whileTap='tap'
          >
            <Link
              className='pasos__text pasos__text_link pasos__text_link_azul'
              to={urls.encuestaWebinarUrl}
            >
              Haz click aquí
            </Link>
          </motion.button>
        </div>
        <div className='pasos__element hidden'>
          <img
            src={bookmarkSrc}
            alt='Ícono de guardado'
            className='pasos__img'
          />
          <h3 className='pasos__label'>Paso #3:</h3>
          <h3 className='pasos__element-title'>Síguenos en redes</h3>
          <p className='pasos__text'>
            Estamos empezando a levantar nuestras redes, aquí estaremos
            compartiendo información gratuita{' '}
            <span className='pasos__text_accent'>
              si necesitas una ayuda extra para poder levantar tus proyectos:
            </span>
          </p>
          <motion.button
            className='pasos__btn'
            variants={btnVariants}
            whileHover='hover'
            whileTap='tap'
          >
            <Link className='pasos__text pasos__text_link'>Instagram</Link>
          </motion.button>
          <motion.button
            className='pasos__btn'
            variants={btnVariants}
            whileHover='hover'
            whileTap='tap'
          >
            <Link
              className='pasos__text pasos__text_link'
              to={urls.tiktokUrl}
              variants={btnVariants}
              whileHover='hover'
              whileTap='tap'
            >
              Tiktok
            </Link>
          </motion.button>
          <motion.button
            className='pasos__btn'
            variants={btnVariants}
            whileHover='hover'
            whileTap='tap'
          >
            <Link
              className='pasos__text pasos__text_link'
              to={urls.fbPermaUrl}
              variants={btnVariants}
              whileHover='hover'
              whileTap='tap'
            >
              Facebook
            </Link>
          </motion.button>
        </div>
      </div>
    </section>
  );
}

Pasos.propTypes = {
  titleVariants: PropTypes.object,
  btnVariants: PropTypes.object,
  urls: PropTypes.object,
};
