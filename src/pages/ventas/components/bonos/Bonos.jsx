import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import logoSrc from '../../../../assets/logos/imag-eap-negativo.png';

export default function Bonos({ titleVariants }) {
  return (
    <section className='bonos'>
      <div className='bonos__container bonos__container_grid'>
        <div className='bonos__container bonos__container_text'>
          <motion.div
            className='bonos__container bonos__container_title'
            variants={titleVariants}
            initial='initialContainer'
            whileInView='viewContainer'
          >
            <motion.p
              className='bonos__title'
              variants={titleVariants}
              initial='initial'
              whileInView='view'
            >
              ¡Además el programa incluye
            </motion.p>
            <motion.p
              className='bonos__title bonos__title_accent'
              variants={titleVariants}
              initial='initial'
              whileInView='view'
            >
              los siguientes elementos exclusivos para la comunidad!
            </motion.p>
          </motion.div>
        </div>
        <img
          src={logoSrc}
          alt='Logo de El arte de producir'
          className='bonos__logo'
        />
      </div>
      <p className='bonos__subtitle'>Estos son totalmente GRATUITOS:</p>

      <div className='bonos__container bonos__container_bonos'>
        <div className='bonos__element'>
          <h3 className='bonos__element-title'>Excel para dummies</h3>
          <p className='bonos__text bonos__text_element'>
            <span className='bonos__text_element-accent'>
              ¿Le tienes miedo a Excel?{' '}
            </span>
            Descubre cómo automatizar con fórmulas de manera sencilla. Ofrecemos
            una clase básica de Excel diseñada para el medio escénico, donde
            <span className='bonos__text_element-accent'>
              aprenderás a manejar presupuestos, desgloses de taquilla,
              cronogramas y más
            </span>
            , sin necesidad de conocimientos previos. ¡Aprenderás herramientas
            útiles y fáciles de aplicar!
          </p>
        </div>

        <div className='bonos__element bonos__element_azul'>
          <h3 className='bonos__element-title bonos__element-title_amarillo'>
            Plantillas de presupuesto, checklist, cronograma y más.
          </h3>
          <p className='bonos__text bonos__text_element bonos__text_blanco'>
            <span className='bonos__text_element-accent'>
              No comiences desde cero
            </span>
            , tenemos para ti unas plantillas con fórmulas de excel o datos
            prellenados que te permitirán
            <span className='bonos__text_element-accent'>
              tener más estructura en temas administrativos y contables
            </span>
            , sólo necesitas rellenarlas con tu información. ¡Optimiza tus
            tiempos de creación!
          </p>
        </div>

        <div className='bonos__element'>
          <h3 className='bonos__element-title'>Diseño gráfico para dummies.</h3>
          <p className='bonos__text bonos__text_element'>
            En el ámbito escénico, ser emprendedores significa aprender diversas
            habilidades. Por eso,
            <span className='bonos__text_element-accent'>
              un diseñador gráfico nos compartirá su experiencia y ofrecerá una
              clase especializada
            </span>
            donde aprenderás conceptos esenciales del tema para que puedas
            aplicarlos en tus carpetas y dossiers.
          </p>
        </div>

        <div className='bonos__element bonos__element_azul'>
          <h3 className='bonos__element-title bonos__element-title_amarillo'>
            Tips útiles para la producción desde el gozo
          </h3>
          <p className='bonos__text bonos__text_element bonos__text_blanco'>
            Queremos que tu camino por la producción y gestión sea
            satisfactorio, por eso,
            <span className='bonos__text_element-accent'>
              {' '}
              recibe una serie infografías con consejos útiles y prácticos para
              que puedas consultarlas de manera eficiente y rápida
            </span>
            . ¡Te ayudarán a ahorrar tiempo y esfuerzo al encontrar soluciones
            rápidas que eficienticen tu labor!
          </p>
        </div>

        <div className='bonos__container bonos__container_modules'>
          <div className='bonos__element'>
            <h3 className='bonos__element-title'>Redacción que triunfa</h3>
            <p className='bonos__text bonos__text_element'>
              Crear una carpeta clara y efectiva es crucial para tu proyecto.
              <span className='bonos__text_element-accent'>
                {' '}
                Te daremos consejos prácticos para redactar con claridad,
                responder preguntas clave y comunicar tus ideas con precisión.
              </span>
              También te mostraremos ejemplos de
              <span className='bonos__text_element-accent'>
                {' '}
                proyectos seleccionados en EFIARTES
              </span>
              , una convocatoria destacada en México, para que encuentres
              inspiración y concretes tus ideas.
            </p>
          </div>
        </div>

        <div className='bonos__element bonos__element_azul'>
          <h3 className='bonos__element-title bonos__element-title_amarillo'>
            Acompañamiento
          </h3>
          <p className='bonos__text bonos__text_element bonos__text_blanco'>
            Imagínate que
            <span className='bonos__text_element-accent'>
              {' '}
              no tienes que realizar en soledad tu proyecto{' '}
            </span>
            y puedes tener un intercambio de ideas, dudas e inquietudes de
            manera personalizada.
            <span className='bonos__text_element-accent'>
              {' '}
              El diálogo con la comunidad permitirá que tus dudas puedan ser
              resueltas desde muchos puntos de vista
            </span>
            , lo que permitirá que conozcas a otras personas que les interesa
            desarrollar sus proyectos escénicos y así enriquecerte del semillero
            de ideas que se construirá.
          </p>
        </div>
      </div>
      <p className='bonos__text'>
        El valor total de este programa es de $10,000mxn
      </p>
      <p className='bonos__text bonos__text_accent'>
        sin embargo puedes adquirirlo ahora por sólo $3,500mxn.
      </p>
    </section>
  );
}

Bonos.propTypes = { titleVariants: PropTypes.object };
