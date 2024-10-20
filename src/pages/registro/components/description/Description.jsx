import { motion } from 'framer-motion';
import listElementSrc from '../../../../assets/imgs/triangulo.svg';

export default function Description() {
  return (
    <section className='description'>
      <div className='description__container description__container_general'>
        <div className='description__container description__container_title'>
          <p className='description__title'>Te compartimos un poco</p>
          <p className='description__title description__title_accent'>
            de lo que veremos en esta clase:
          </p>
        </div>
        <ul className='description__list'>
          <li className='description__element'>
            <motion.img
              initial={{ opacity: 0.5, rotate: '-30deg' }}
              whileInView={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 2, ease: 'easeInOut', type: 'spring' }}
              src={listElementSrc}
              alt='lista'
              className='description__list-element'
            />
            <p className='description__text'>
              Aprende cómo{' '}
              <span className='description__text description__text_accent'>
                optimizar los recursos y conseguir mejores resultados{' '}
              </span>
              para tus proyectos escénicos.
            </p>
          </li>
          <div className='description__division' />
          <li className='description__element'>
            <motion.img
              initial={{ opacity: 0.5, rotate: '-30deg' }}
              whileInView={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 2, ease: 'easeInOut', type: 'spring' }}
              src={listElementSrc}
              alt='lista'
              className='description__list-element'
            />
            <p className='description__text'>
              Conoce herramientas para
              <span className='description__text description__text_accent'>
                {' '}
                que dejen de rechazarte en las convocatorias
              </span>{' '}
              a las que postulas.
            </p>
          </li>
          <div className='description__division' />
          <li className='description__element'>
            <motion.img
              initial={{ opacity: 0.5, rotate: '-30deg' }}
              whileInView={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 2, ease: 'easeInOut', type: 'spring' }}
              src={listElementSrc}
              alt='lista'
              className='description__list-element'
            />
            <p className='description__text'>
              Descubre cómo la &quot;fama&quot; no es lo que necesitas para
              <span className='description__text description__text_accent'>
                {' '}
                materializar tus ideas dignamente
              </span>
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
