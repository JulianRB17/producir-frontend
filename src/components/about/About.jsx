import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import luminariasSrc from '../../assets/imgs/luminarias.svg';
import mascarasSrc from '../../assets/imgs/mascaras.svg';

export default function About({ titleVariants }) {
  return (
    <section className='about' id='about'>
      <motion.div className='about__container about__container_grid'>
        <div className='about__container about__container_text'>
          <motion.div
            className='about__container about__container_title'
            variants={titleVariants}
            initial='initialContainer'
            whileInView='viewContainer'
          >
            <motion.p
              className='about__title'
              variants={titleVariants}
              initial='initial'
              whileInView='view'
            >
              ¿Quiénes somos
            </motion.p>
            <motion.p
              className='about__title about__title_accent'
              variants={titleVariants}
              initial='initial'
              whileInView='view'
            >
              para enseñar esto?
            </motion.p>
          </motion.div>
          <p className='about__text'>
            <span className='about__text about__text_accent'>
              ¡Hola! Somos Verónica Ramos y Julián Reyes Botello
            </span>
            , egresamos del CLDyT de la UNAM. Al salir de la carrera, nos
            enfrentamos a la incertidumbre del desempleo y a dudas de si es
            <span className='about__text about__text_accent'>
              {' '}
              posible vivir del teatro.
            </span>
          </p>
          <p className='about__text'>
            Nuestros primeros proyectos, llenos de entusiasmo y también de
            inseguridades en producción nos hicieron dudar de nuestra capacidad
            creadora. La necesidad de no depender de que alguien más nos llamara
            para trabajar nos llevó a invertir mucho tiempo, dinero y esfuerzo
            en proyectos que no alcanzaban los objetivos que deseábamos.
            Comprendimos que era crucial
            <span className='about__text about__text_accent'>
              {' '}
              aprender más sobre los caminos para consolidar nuestros propios
              proyectos y empezar a invertir en nuestro conocimiento.
            </span>
          </p>
        </div>
        <div className='about__container about__container_svg'>
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
              type: 'spring',
            }}
            src={luminariasSrc}
            alt='luminarias teatrales'
            className='about__svg about__svg_top'
          />
        </div>
      </motion.div>

      <div className='about__container about__container_grid'>
        <div className='about__container about__container_svg'>
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
              type: 'spring',
            }}
            src={mascarasSrc}
            alt=''
            className='about__svg about__svg_bottom'
          />
        </div>
        <div className='about__container about__container_text about__container_dark-text'>
          <p className='about__text about__text_dark'>
            Con el tiempo, la experiencia y este nuevo conocimiento logramos
            adquirir la
            <span className='about__text about__text_dark about__text_accent'>
              {' '}
              confianza necesaria para postularnos en proyectos que parecían
              inalcanzables{' '}
            </span>
            pero que logramos consolidar como sólo lo habíamos soñado.
          </p>
          <p className='about__text about__text_dark'>
            Hoy queremos compartir este conocimientos y experiencia para que,
            sin importar los obstáculos, puedas consolidar tus proyectos
            escénicos.
            <span className='about__text about__text_dark about__text_accent'>
              {' '}
              El teatro es más que una profesión, es una pasión que se nutre de
              perseverancia, creatividad y, sobre todo, de la voluntad de nunca
              rendirse.
            </span>
          </p>
        </div>
      </div>

      <motion.div
        className='about__container about__container_quote'
        initial={{ y: -20, opacity: 0.7 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 5,
          ease: 'easeInOut',
          type: 'spring',
          delay: 1,
        }}
      >
        <div className='about__container about__container_svg about__container_quote-svg'>
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
              type: 'spring',
            }}
            src={mascarasSrc}
            alt='Vector de máscaras'
            className='about__svg about__svg_quote'
          />
        </div>
        <div className='about__container about__container_quote-text'>
          <p className='about__quote'>
            Invierte en ti mismo, en tu conocimiento y en tus habilidades
          </p>

          <p className='about__quote about__quote_accent'>
            para que no esperes que las oportunidades lleguen a ti,
          </p>
          <p className='about__quote about__quote_right-align'>
            crea tus propias oportunidades.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

About.propTypes = {
  titleVariants: PropTypes.object,
};
