import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export default function CookiesNotice({
  onCookiesAccept,
  onCookiesReject,
  showCookiesBanner,
  btnVariants,
}) {
  return (
    <section className={showCookiesBanner ? 'cookies-notice' : 'hidden'}>
      <div className='cookies-notice__container cookies-notice__container_title'>
        <h2 className='cookies-notice__title'>Sobre el uso de cookies</h2>
      </div>
      <div className='cookies-notice__container cookies-notice__container_text'>
        <p className='cookies-notice__text'>
          Las cookies son pequeños fragmentos de texto que los sitios web que
          visitas envían al navegador. Permiten que los sitios web recuerden
          información sobre tu visita, lo que puede hacer que sea más fácil
          volver a visitar los sitios y hacer que estos te resulten más útiles.
          Las tecnologías similares, como los identificadores únicos que se usan
          para identificar una aplicación o dispositivo, las etiquetas de píxel
          y el almacenamiento local, pueden realizar la misma función. Las
          cookies y tecnologías similares que se describen en esta página pueden
          usarse para los fines indicados más abajo.
        </p>
        <p className='cookies-notice__text'>
          Las cookies y tecnologías similares que se usan con fines de
          funcionalidad te permiten acceder a funciones esenciales de un
          servicio. Se consideran esenciales, por ejemplo, recordar las
          elecciones y las preferencias (como el idioma que has elegido);
          almacenar la información relacionada con la sesión (como el contenido
          de un carrito de la compra); habilitar funciones o realizar tareas que
          solicites; y las optimizaciones de los productos que ayudan a mantener
          y mejorar ese servicio.
        </p>
        <p className='cookies-notice__text'>
          El arte de producir utiliza cookies con fines publicitarios, como
          publicar y renderizar anuncios, personalizar anuncios, limitar el
          número de veces que se muestra un anuncio a un usuario y medir la
          eficacia de los anuncios. Todo a través de la tecnoología de Meta.
        </p>
        <p className='cookies-notice__text'>
          Sabiendo la importancia de la información y el uso que ésta puede
          tener, nos es necesario anunciarte esto y también que tu información
          es usada únicamenta bajo estas líneas a traves de terceros: Meta.
        </p>
      </div>
      <div className='cookies-notice__container cookies-notice__container_btns'>
        <motion.button
          className='cookies-notice__btn'
          onClick={onCookiesAccept}
          variants={btnVariants}
          whileHover='hover'
          whileTap='tap'
          animate='loop'
        >
          Aceptar
        </motion.button>
        <motion.button
          className='cookies-notice__btn cookies-notice__btn_link'
          onClick={onCookiesReject}
          variants={btnVariants}
          whileHover='hover'
          whileTap='tap'
        >
          Rechazar
        </motion.button>
        <motion.a
          className='cookies-notice__btn cookies-notice__btn_link'
          href='/privacidad'
          variants={btnVariants}
          whileHover='hover'
          whileTap='tap'
        >
          Aviso de privacidad
        </motion.a>
      </div>
    </section>
  );
}

CookiesNotice.propTypes = {
  onCookiesAccept: PropTypes.func,
  onCookiesReject: PropTypes.func,
  showCookiesBanner: PropTypes.bool,
  btnVariants: PropTypes.object,
};
