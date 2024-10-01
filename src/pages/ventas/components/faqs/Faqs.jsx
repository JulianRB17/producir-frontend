import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import Faq from '../faq/Faq';

import logoSrc from '../../../../assets/logos/imag-eap.png';

export default function Faqs({ titleVariants }) {
  const faqsData = [
    {
      index: 1,
      pregunta: '¿Tienen opción de pagos?',
      respuesta:
        '¡Por supuesto! No queremos que eso te detenga, en la plataforma Hotmart están las múltiples opciones de pago: meses sin intereses, tarjeta decrédito y/o débito, entre otras…',
    },
    {
      index: 2,
      pregunta: '¿Necesito tener alguna experiencia en producción?',
      respuesta:
        'Este curso está diseñado para que des el primer paso y adquieras las herramientas que te permitan profundizar en los múltiples temas.¡Sólo necesitas voluntad y disposición para hacer tus sueños realidad!',
    },
    {
      index: 3,
      pregunta: '¿Qué resultados se esperan tras completar el curso?',
      respuesta:
        'Aprenderás de manera teórica y práctica diferentes herramientas para materializar proyectos escénicos. Al finalizar, contarás con una carpeta de trabajo bien estructurada que te será útil para distintas convocatorias.',
    },
    {
      index: 4,
      pregunta:
        '¿El curso lo puedo tomar a la hora que sea o tiene un horario, específico?',
      respuesta:
        'El curso es en vivo, la gran ventaja de esto es que podremos resolver dudas e inquietudes al momento. Sin embargo las sesiones quedarán grabadas y podrás volver a acceder a éstas cuando quieras.',
    },
    {
      index: 5,
      pregunta: '¿El curso es presencial?',
      respuesta:
        'No, es un curso virtual, pero en vivo. Pero no te preocupes si los tiempos no se acomodan, las sesiones quedarán grabadas y podrás volver a acceder a éstas cuando quieras.',
    },
    {
      index: 6,
      pregunta: 'Después de realizar el pago, ¿cómo accedo al curso?',
      respuesta:
        'Te llegará un correo a tu cuenta con toda la información. Además, dentro de la plataforma puedes acceder a una zona de miembros donde encontrarás la liga y tendrás acceso a un grupo de Facebook donde se reunirá la comunidad.',
    },
    {
      index: 7,
      pregunta: '¿A través de qué plataforma se da el curso?',
      respuesta: 'Este curso se dará a través de la plataforma Zoom.',
    },
    {
      index: 8,
      pregunta: '¿Recibiré retroalimentación personalizada?',
      respuesta:
        '¡Sí! La ventaja de que el curso sea en vivo es que podremos brindarte un acompañamiento personalizado.',
    },
    {
      index: 9,
      pregunta: '¿Qué tipos de actividades se trabajarán?',
      respuesta:
        'El curso incluye una revisión teórica de conceptos para familiarizarte con la producción y ejercicios prácticos que te ayudarán a aplicar lo aprendido en tu proyecto escénico y ganar confianza para trabajar de manera independiente. Al finalizar el curso, tendrás una carpeta bien estructurada que te servirá de base para aplicar a diferentes convocatorias.',
    },
    {
      index: 10,
      pregunta:
        '¿Cuál es el nivel de compromiso requerido para beneficiarme de este, curso?',
      respuesta:
        'Los resultados de este curso dependerán del compromiso que tengas. Todos los participantes obtendrán material sumamente valioso, pero aquellos que decidan no solo aprender sino también poner en práctica lo aprendido, obtendrán un beneficio aún mayor. El objetivo es que la carpeta con la que termines el curso sea el primer paso para dar forma y continuidad a tu proyecto.',
    },
    {
      index: 11,
      pregunta:
        '¿Y si me considero una persona pésima en matemáticas y no sé usar, excel?',
      respuesta:
        ' No te preocupes, las cosas son mucho más sencillas de lo que aparentan, lo importante es quitarse el miedo a hacerlo. Aún así, aunque te enseñaremos a hacerlo de forma práctica para cuando llegues a necesitarlo, como parte de los bonos tendrás plantillas de presupuesto, desglose de taquilla, cronograma, entre otros, con las fórmulas hechas para que no empieces desde cero.',
    },
    {
      index: 12,
      pregunta:
        'Y si al finalizar el curso aún tengo dudas, ¿puedo seguir recibiendo, acompañamiento y retroalimentación?',
      respuesta:
        '¡Sí! La ventaja de la virtualidad es que nos permitirá tener una comunidad privada y segura donde, si queremos, podremos seguir generando material y recibiendo retroalimentación verdaderamente crítica y respetuosa de la comunidad.',
    },
    {
      index: 13,
      pregunta: '¿Es seguro pagar en línea?',
      respuesta:
        '¡Sí! Todos los pagos que procesamos a nivel nacional e internacional suceden a través de la plataforma de Hotmart donde tus datos y transacciones están totalmente seguras. Hotmart es una plataforma que desde hace bastante tiempo trabaja con miles de cursos online, así que puedes confiar en su proceso de pago.',
    },
    {
      index: 14,
      pregunta: '¿Este curso es adecuado para todas las artes?',
      respuesta:
        'Actualmente está dirigido a las artes escénicas: circo, danza y teatro, porque sus similitudes a nivel de producción permiten que las herramientas brindadas sirvan para cualquiera de ellas.',
    },
  ];

  return (
    <section className='faqs'>
      <div className='faqs__container faqs__container_grid'>
        <div className='faqs__container faqs__container_text'>
          <motion.div
            className='faqs__container faqs__container_title'
            variants={titleVariants}
            initial='initialContainer'
            whileInView='viewContainer'
          >
            <motion.p
              className='faqs__title'
              variants={titleVariants}
              initial='initial'
              whileInView='view'
            >
              Aquí tenemos las preguntas
            </motion.p>
            <motion.p
              className='faqs__title faqs__title_accent'
              variants={titleVariants}
              initial='initial'
              whileInView='view'
            >
              más comunes sobre
            </motion.p>
          </motion.div>
        </div>
        <img
          src={logoSrc}
          alt='Logo de El arte de producir'
          className='faqs__logo'
        />
      </div>
      <div className='faqs__container faqs__container_faqs'>
        {faqsData.map(({ pregunta, respuesta, index }) => (
          <Faq key={index} pregunta={pregunta} respuesta={respuesta} />
        ))}
      </div>
    </section>
  );
}

Faqs.propTypes = {
  titleVariants: PropTypes.object,
};
