import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import bookmarkSrc from '../../../../assets/imgs/bookmark.svg';
import fbMonoSrc from '../../../../assets/imgs/fb-mono.svg';
import checkboxAzulSrc from '../../../../assets/imgs/checkbox-azul.svg';
import mailSrc from '../../../../assets/imgs/mail.svg';

export default function PasosV({ titleVariants, btnVariants, urls, dates }) {
  return (
    <section className='pasos-v'>
      <motion.div
        className='pasos-v__container pasos-v__container_title'
        variants={titleVariants}
        initial='initialContainer'
        whileInView='viewContainer'
      >
        <motion.p
          className='pasos-v__title'
          variants={titleVariants}
          initial='initial'
          whileInView='view'
        >
          Te recordamos que el curso será del
        </motion.p>
        <motion.p
          className='pasos-v__title pasos-v__title_accent'
          variants={titleVariants}
          initial='initial'
          whileInView='view'
        >
          {dates.modulesDate}
        </motion.p>
      </motion.div>
      <p className='pasos-v__text pasos-v__text_instructions'>
        El programa será dado los{' '}
        <span className='pasos-v__text_accent'>
          {dates.diaSemanaDate} de {dates.programaHoraDate}
        </span>{' '}
        por la plataforma Zoom.
      </p>
      <div className='pasos-v__container pasos-v__container_elements'>
        <div className='pasos-v__element'>
          <img src={mailSrc} alt='Ícono de email' className='pasos-v__img' />
          <h3 className='pasos-v__label'>Paso #1:</h3>
          <h3 className='pasos-v__element-title'>Revisa tu email</h3>
          <p className='pasos-v__text'>
            Te pido que revises tu email, tanto{' '}
            <span className='pasos-v__text_accent'>
              la bandeja de entrada como la de spam
            </span>{' '}
            se te ha mandado un mail de parte de Hotmart donde estarán los datos
            para crear tu contraseña y poder acceder al{' '}
            <span className='pasos-v__text_accent'>área de miembros </span>
            aquí es donde encontrarás todo el contenido que iremos subiendo para
            la comunidad de El arte de producir. Ahora puedes encontrar un
            cronograma donde está la liga de la plataforma Zoom por la que
            daremos las sesiones en vivo.
          </p>
          <p className='pasos-v__text'>
            <span className='pasos-v__text_accent'>¡Nos vemos muy pronto!</span>
          </p>
          <p className='pasos-v__text'>
            Te dejamos el link a la página de la comunidad:
          </p>
          <motion.button
            className='pasos-v__btn'
            variants={btnVariants}
            whileHover='hover'
            whileTap='tap'
          >
            <Link
              className='pasos-v__text pasos-v__text_link'
              to={urls.communityUrl}
            >
              Haz click aquí
            </Link>
          </motion.button>
        </div>

        <div className='pasos-v__element pasos-v__element_amarillo'>
          <img
            src={checkboxAzulSrc}
            alt='Ícono de encuesta'
            className='pasos-v__img'
          />
          <h3 className='pasos-v__label'>Paso #2:</h3>
          <h3 className='pasos-v__element-title pasos-v__element-title_azul'>
            Contesta esta encuesta
          </h3>
          <p className='pasos-v__text'>
            Queremos darte la información más útil que podamos en esta clase.
            Para ello, te pido que nos ayudes contestando esta encuesta que{' '}
            <span className='pasos-v__text_accent'>
              te tomará menos de 5 minutos
            </span>{' '}
            , así podemos mejorar cada vez más en el contenido que te podemos
            ofrecer.
          </p>
          <motion.button
            className='pasos-v__btn'
            variants={btnVariants}
            whileHover='hover'
            whileTap='tap'
          >
            {' '}
            <Link
              className='pasos-v__text pasos-v__text_link pasos-v__text_link_azul'
              to={urls.encuestaUrl}
            >
              Haz click aquí
            </Link>
          </motion.button>
        </div>

        <div className='pasos-v__element'>
          <img
            src={fbMonoSrc}
            alt='Ícono de facebook'
            className='pasos-v__img'
          />
          <h3 className='pasos-v__label'>Paso #3:</h3>
          <h3 className='pasos-v__element-title'>
            Únete a la comunidad de Facebook
          </h3>
          <p className='pasos-v__text'>
            Te pido entres a este grupo privado,{' '}
            <span className='pasos-v__text_accent'>
              es muy importante que escribas el mail con el que compraste el
              programa,
            </span>{' '}
            en esta comunidad podrás externar las dudas que tengas y te iremos
            contestando lo antes posible.
            <span className='pasos-v__text_accent'> </span>
          </p>
          <p className='pasos-v__text'>
            {' '}
            También podrás tú contestar dudas o dar retro de proyectos de otras
            personas, y, habiendo terminado el curso, será un lugar donde podrás
            continuar en contacto con ésta y futuras generaciones.
          </p>
          <motion.button
            className='pasos-v__btn'
            variants={btnVariants}
            whileHover='hover'
            whileTap='tap'
          >
            <Link
              className='pasos-v__text pasos-v__text_link'
              to={urls.fbGroupUrl}
            >
              Haz click aquí
            </Link>
          </motion.button>
        </div>

        <div className='pasos-v__element hidden'>
          <img
            src={bookmarkSrc}
            alt='Ícono de guardado'
            className='pasos-v__img'
          />
          <h3 className='pasos-v__label'>Paso #3:</h3>
          <h3 className='pasos-v__element-title'>Síguenos en redes</h3>
          <p className='pasos-v__text'>
            Estamos empezando a levantar nuestras redes, aquí estaremos
            compartiendo información gratuita{' '}
            <span className='pasos-v__text_accent'>
              si necesitas una ayuda extra para poder levantar tus proyectos:
            </span>
          </p>
          <motion.button
            className='pasos-v__btn'
            variants={btnVariants}
            whileHover='hover'
            whileTap='tap'
          >
            {' '}
            <Link className='pasos-v__text pasos-v__text_link' to={urls.igUrl}>
              Instagram
            </Link>
          </motion.button>
          <motion.button
            className='pasos-v__btn'
            variants={btnVariants}
            whileHover='hover'
            whileTap='tap'
          >
            {' '}
            <Link
              className='pasos-v__text pasos-v__text_link'
              to={urls.tiktokUrl}
            >
              Tiktok
            </Link>
          </motion.button>
          <motion.button
            className='pasos-v__btn'
            variants={btnVariants}
            whileHover='hover'
            whileTap='tap'
          >
            <Link
              className='pasos-v__text pasos-v__text_link'
              to={urls.fbPermaUrl}
            >
              Facebook
            </Link>
          </motion.button>
        </div>
      </div>
    </section>
  );
}

PasosV.propTypes = {
  titleVariants: PropTypes.object,
  btnVariants: PropTypes.object,
  urls: PropTypes.object,
  dates: PropTypes.object,
};
