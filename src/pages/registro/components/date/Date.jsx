import { useEffect } from 'react';
import { motion } from 'framer-motion';

import clockSrc from '../../../../assets/imgs/reloj.svg';
import PropTypes from 'prop-types';

export default function Date({
  localDate,
  hour,
  count,
  countdown,
  timestamp,
  setCount,
}) {
  useEffect(() => {
    countdown(timestamp, setCount);
  }, [timestamp, countdown, setCount]);

  const renderCounter = (count) => {
    if (count) {
      return (
        <div className='date__container date__container_counter'>
          <div className='date__element'>
            <div className='date__container date__container_gradient'>
              <p className='date__number'>{count.days}</p>
              <div className='date__gradient' />
              <div className='date__gradient' />
            </div>
            <p className='date__label'>Días</p>
          </div>
          <div className='date__element'>
            <div className='date__container date__container_gradient'>
              <p className='date__number'>{count.hours}</p>
              <div className='date__gradient' />
              <div className='date__gradient' />
            </div>
            <p className='date__label'>Horas</p>
          </div>
          <div className='date__element'>
            <div className='date__container date__container_gradient'>
              <p className='date__number'>{count.minutes}</p>
              <div className='date__gradient' />
              <div className='date__gradient' />
            </div>
            <p className='date__label'>Minutos</p>
          </div>
          <div className='date__element'>
            <div className='date__container date__container_gradient'>
              <p className='date__number'>{count.seconds}</p>
              <div className='date__gradient' />
              <div className='date__gradient' />
            </div>
            <p className='date__label'>Segundos</p>
          </div>
        </div>
      );
    }
    if (!count) {
      return (
        <div className='date__counter'>
          <p className='date__text'>¡Ya iniciamos!</p>
        </div>
      );
    }
  };
  return (
    <section className='date' id='date'>
      <h2 className='date__title'>¿Cuándo?</h2>
      <p className='date__date'>
        {localDate} {hour} hrs
      </p>
      {renderCounter(count)}

      <motion.img
        src={clockSrc}
        alt='reloj'
        className='date__vector'
        initial={{ rotate: 0 }}
        animate={{ rotate: '10deg' }}
        transition={{
          duration: 0.2,
          delay: 3,
          type: 'spring',
          stiffness: 100,
          repeat: Infinity,
        }}
      />
    </section>
  );
}
Date.propTypes = {
  localDate: PropTypes.any,
  hour: PropTypes.string,
  count: PropTypes.any,
  countdown: PropTypes.func,
  timestamp: PropTypes.number,
  setCount: PropTypes.func,
};
