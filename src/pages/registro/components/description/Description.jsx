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
              src00={listElementSrc}
              alt='lista'
              className='description__list-element'
            />
            <p className='description__text'>
              La razón{' '}
              <span className='description__text description__text_accent'>
                que ha evitado{' '}
              </span>
              que materialices tus proyectos escénicos a pesar de{' '}
              <span className='description__text description__text_accent'>
                haberlo intentado todo.
              </span>
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
              Reconoce tus virtudes como artista y aprende cómo
              <span className='description__text description__text_accent'>
                {' '}
                eso puede ayudarte a fortalecer tu proyecto escénico.
              </span>
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
              El paso a paso para que{' '}
              <span className='description__text description__text_accent'>
                la materialización de tu proyecto{' '}
              </span>
              no sea un desperdicio de tiempo y dinero.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
