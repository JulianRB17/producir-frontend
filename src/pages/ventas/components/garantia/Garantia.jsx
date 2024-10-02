import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export default function Garantia({ shadowVariants }) {
  return (
    <section className='garantia'>
      <div className='garantia__container'>
        <p className='garantia__title'>
          ¿Aún tienes dudas?
          <motion.span
            className='garantia__title garantia__title_shadow'
            variants={shadowVariants}
            initial='initial'
            whileInView='view'
            animate='loop'
          >
            tienes dudas?
          </motion.span>
        </p>
        <p className='garantia__subtitle'>
          <span className='garantia__subtitle garantia__subtitle_accent'>
            ¡No te preocupes!
          </span>{' '}
          Tenemos una garantía para asegurarnos de que tu experiencia sea la
          mejor posible.
        </p>
        <p className='garantia__text'>
          Estamos constantemente evolucionando para que el contenido de este
          programa sea lo mejor para ti y así darte las mejores herramientas
          porque nos importa mucho que logres materializar tus sueños. Por el
          contrario, si por alguna razón este curso no es lo que esperabas, te
          devolvemos el 100% de tu inversión hasta una semana después de tu
          primera sesión.
        </p>
        <p className='garantia__text'>
          Así es, sólo necesitas enviar un correo y sin ninguna pregunta se te
          devolverá completamente tu dinero.
        </p>{' '}
      </div>
    </section>
  );
}

Garantia.propTypes = {
  shadowVariants: PropTypes.object,
};
