import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import logoSrc from '../../../../assets/logos/imag-eap.png';
import trianguloAzulSrc from '../../../../assets/imgs/triangulo-azul.svg';
import trianguloAmarilloSrc from '../../../../assets/imgs/triangulo-amarillo.svg';

export default function DescriptionVentas({
  listElementVariants,
  titleVariants,
  // urls,
}) {
  return (
    <section className='description-ventas'>
      <div className='description-ventas__container description-ventas__container_grid'>
        <div className='description-ventas__container description-ventas__container_text'>
          <motion.div
            className='description-ventas__container description-ventas__container_title'
            variants={titleVariants}
            initial='initialContainer'
            whileInView='viewContainer'
          >
            <motion.p
              className='description-ventas__title'
              variants={titleVariants}
              initial='initial'
              whileInView='view'
            >
              ¿Qué se verá
            </motion.p>
            <motion.p
              className='description-ventas__title description-ventas__title_accent'
              variants={titleVariants}
              initial='initial'
              whileInView='view'
            >
              dentro del programa?
            </motion.p>
          </motion.div>
        </div>
        <img
          src={logoSrc}
          alt='Logo de El arte de producir'
          className='description-ventas__logo'
        />
      </div>
      <div className='description-ventas__container description-ventas__container_text'>
        <p className='description-ventas__text'>
          <span className='description-ventas__text description-ventas__text_accent'>
            Éste es un curso online sobre producción de artes escénicas{' '}
          </span>
          en el que se trabajará para poder materializar proyectos y darles vida
          a tus ideas y sueños.
        </p>
        <p className='description-ventas__text'>
          Estos son los módulos que trabajaremos en este programa, éste será en
          línea y nos veremos los DÍA de HORA INICIO a HORA FINAL.
        </p>
        <p className='description-ventas__text'>
          Además,{' '}
          <span className='description-ventas__text description-ventas__text_accent'>
            las sesiones serán grabadas por lo que podrás tomarlas y repetirlas
            cuando quieras.
          </span>{' '}
          Sin embargo, te invitamos a que en la medida de lo posible,{' '}
          <span className='description-ventas__text description-ventas__text_accent'>
            asistas a las sesiones en vivo{' '}
          </span>
          para que no te pierdas el diálogo y las rondas de
          preguntas/respuestas.
        </p>
      </div>
      <div className='description-ventas__container description-ventas__container_modules'>
        <div className='description-ventas__element'>
          <h3 className='description-ventas__label'>Módulo 1:</h3>
          <h3 className='description-ventas__element-title'>ProduSer</h3>
          <p className='description-ventas__element-title'>
            (ÉTICA Y PRODUCCIÓN)
          </p>
          <ul className='description-ventas__list'>
            <li className='description-ventas__list-element'>
              <motion.img
                src={trianguloAmarilloSrc}
                alt='Vector de lista'
                className='description-ventas__list-style'
                variants={listElementVariants}
                initial='initial'
                whileInView='view'
              />
              <p className='description-ventas__list-text'>
                ¿Qué es y para qué sirve la producción?
              </p>
            </li>
            <li className='description-ventas__list-element'>
              <motion.img
                src={trianguloAmarilloSrc}
                alt='Vector de lista'
                className='description-ventas__list-style'
                variants={listElementVariants}
                initial='initial'
                whileInView='view'
              />
              <p className='description-ventas__list-text'>
                La producción como acto creativo.
              </p>
            </li>
            <li className='description-ventas__list-element'>
              <motion.img
                src={trianguloAmarilloSrc}
                alt='Vector de lista'
                className='description-ventas__list-style'
                variants={listElementVariants}
                initial='initial'
                whileInView='view'
              />
              <p className='description-ventas__list-text'>
                Una mirada ética de la producción.
              </p>
            </li>
          </ul>
        </div>
        <div className='description-ventas__element description-ventas__element_amarillo'>
          <h3 className='description-ventas__label'>Módulo 2:</h3>
          <h3 className='description-ventas__element-title description-ventas__element-title_azul'>
            Elige tu rumbo
          </h3>
          <p className='description-ventas__element-title description-ventas__element-title_azul'>
            (PRODUCCIÓN)
          </p>
          <ul className='description-ventas__list'>
            <li className='description-ventas__list-element'>
              <motion.img
                src={trianguloAzulSrc}
                alt='Vector de lista'
                className='description-ventas__list-style'
                variants={listElementVariants}
                initial='initial'
                whileInView='view'
              />
              <p className='description-ventas__list-text'>
                {' '}
                Modelos de producción.
              </p>
            </li>
            <li className='description-ventas__list-element'>
              <motion.img
                src={trianguloAzulSrc}
                alt='Vector de lista'
                className='description-ventas__list-style'
                variants={listElementVariants}
                initial='initial'
                whileInView='view'
              />
              <p className='description-ventas__list-text'>
                Planeación de proyectos.
              </p>
            </li>
            <li className='description-ventas__list-element'>
              <motion.img
                src={trianguloAzulSrc}
                alt='Vector de lista'
                className='description-ventas__list-style'
                variants={listElementVariants}
                initial='initial'
                whileInView='view'
              />
              <p className='description-ventas__list-text'>
                La materialización: pre, pro y post producción.
              </p>
            </li>
            <li className='description-ventas__list-element'>
              <motion.img
                src={trianguloAzulSrc}
                alt='Vector de lista'
                className='description-ventas__list-style'
                variants={listElementVariants}
                initial='initial'
                whileInView='view'
              />
              <p className='description-ventas__list-text'>
                La vida después del estreno.
              </p>
            </li>
          </ul>
        </div>
        <div className='description-ventas__element'>
          <h3 className='description-ventas__label'>Módulo 3:</h3>
          <h3 className='description-ventas__element-title'>
            Descubre posibilidades
          </h3>
          <p className='description-ventas__element-title'>(GESTIÓN)</p>
          <ul className='description-ventas__list'>
            <li className='description-ventas__list-element'>
              <motion.img
                src={trianguloAmarilloSrc}
                alt='Vector de lista'
                className='description-ventas__list-style'
                variants={listElementVariants}
                initial='initial'
                whileInView='view'
              />
              <p className='description-ventas__list-text'>
                Valores de mi proyecto.
              </p>
            </li>
            <li className='description-ventas__list-element'>
              <motion.img
                src={trianguloAmarilloSrc}
                alt='Vector de lista'
                className='description-ventas__list-style'
                variants={listElementVariants}
                initial='initial'
                whileInView='view'
              />
              <p className='description-ventas__list-text'>
                Proyectos culturales vs Proyectos artísticos.
              </p>
            </li>
            <li className='description-ventas__list-element'>
              <motion.img
                src={trianguloAmarilloSrc}
                alt='Vector de lista'
                className='description-ventas__list-style'
                variants={listElementVariants}
                initial='initial'
                whileInView='view'
              />
              <p className='description-ventas__list-text'>
                Convocatorias: mitos y realidades.
              </p>
            </li>
            <li className='description-ventas__list-element'>
              <motion.img
                src={trianguloAmarilloSrc}
                alt='Vector de lista'
                className='description-ventas__list-style'
                variants={listElementVariants}
                initial='initial'
                whileInView='view'
              />
              <p className='description-ventas__list-text'>Financiamientos.</p>
            </li>
            <li className='description-ventas__list-element'>
              <motion.img
                src={trianguloAmarilloSrc}
                alt='Vector de lista'
                className='description-ventas__list-style'
                variants={listElementVariants}
                initial='initial'
                whileInView='view'
              />
              <p className='description-ventas__list-text'>Alianzas</p>
            </li>
          </ul>
        </div>
        <div className='description-ventas__element description-ventas__element_amarillo'>
          <h3 className='description-ventas__label'>Módulo 4:</h3>
          <h3 className='description-ventas__element-title description-ventas__element-title_azul'>
            Date a conocer
          </h3>
          <p className='description-ventas__element-title description-ventas__element-title_azul'>
            (DIFUSIÓN)
          </p>
          <ul className='description-ventas__list'>
            <li className='description-ventas__list-element'>
              <motion.img
                src={trianguloAzulSrc}
                alt='Vector de lista'
                className='description-ventas__list-style'
                variants={listElementVariants}
                initial='initial'
                whileInView='view'
              />
              <p className='description-ventas__list-text'>
                ¿Quién es mi público?
              </p>
            </li>
            <li className='description-ventas__list-element'>
              <motion.img
                src={trianguloAzulSrc}
                alt='Vector de lista'
                className='description-ventas__list-style'
                variants={listElementVariants}
                initial='initial'
                whileInView='view'
              />
              <p className='description-ventas__list-text'>
                Creación de públicos.
              </p>
            </li>
            <li className='description-ventas__list-element'>
              <motion.img
                src={trianguloAzulSrc}
                alt='Vector de lista'
                className='description-ventas__list-style'
                variants={listElementVariants}
                initial='initial'
                whileInView='view'
              />
              <p className='description-ventas__list-text'>
                Difusión vs publicidad.
              </p>
            </li>
            <li className='description-ventas__list-element'>
              <motion.img
                src={trianguloAzulSrc}
                alt='Vector de lista'
                className='description-ventas__list-style'
                variants={listElementVariants}
                initial='initial'
                whileInView='view'
              />
              <p className='description-ventas__list-text'>
                Cómo hacer publicidad sin vaciar mi cuenta.
              </p>
            </li>
          </ul>
        </div>
        <div className='description-ventas__element'>
          <h3 className='description-ventas__label'>Módulo 5:</h3>
          <h3 className='description-ventas__element-title'>
            Aterriza tu proyecto
          </h3>
          <p className='description-ventas__element-title'>
            (CONSOLIDAR EL PROYECTO)
          </p>
          <ul className='description-ventas__list'>
            <li className='description-ventas__list-element'>
              <motion.img
                src={trianguloAmarilloSrc}
                alt='Vector de lista'
                className='description-ventas__list-style'
                variants={listElementVariants}
                initial='initial'
                whileInView='view'
              />
              <p className='description-ventas__list-text'>
                Clarifica tus ideas.
              </p>
            </li>
            <li className='description-ventas__list-element'>
              <motion.img
                src={trianguloAmarilloSrc}
                alt='Vector de lista'
                className='description-ventas__list-style'
                variants={listElementVariants}
                initial='initial'
                whileInView='view'
              />
              <p className='description-ventas__list-text'>
                Define tus objetivos.
              </p>
            </li>
            <li className='description-ventas__list-element'>
              <motion.img
                src={trianguloAmarilloSrc}
                alt='Vector de lista'
                className='description-ventas__list-style'
                variants={listElementVariants}
                initial='initial'
                whileInView='view'
              />
              <p className='description-ventas__list-text'>
                Arma tu carpeta paso a paso.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

DescriptionVentas.propTypes = {
  listElementVariants: PropTypes.object,
  titleVariants: PropTypes.object,
  urls: PropTypes.object,
};
