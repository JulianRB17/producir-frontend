import clockSrc from '../../../../assets/imgs/reloj.svg';
import PropTypes from 'prop-types';

export default function Date({ localDate, hour, count }) {
  return (
    <section className='date' id='date'>
      <h2 className='date__title'>¿Cuándo?</h2>
      <p className='date__date'>
        {localDate} {hour} hrs
      </p>
      <div className='date__container date__container_counter'>
        <div className='date__element'>
          <div className='date__container date__container_gradient'>
            <p className='date__number'>88</p>
            <div className='date__gradient' />
            <div className='date__gradient' />
          </div>
          <p className='date__label'>Días</p>
        </div>
        <div className='date__element'>
          <div className='date__container date__container_gradient'>
            <p className='date__number'>01</p>
            <div className='date__gradient' />
            <div className='date__gradient' />
          </div>
          <p className='date__label'>Horas</p>
        </div>
        <div className='date__element'>
          <div className='date__container date__container_gradient'>
            <p className='date__number'>01</p>
            <div className='date__gradient' />
            <div className='date__gradient' />
          </div>
          <p className='date__label'>Minutos</p>
        </div>
        <div className='date__element'>
          <div className='date__container date__container_gradient'>
            <p className='date__number'>10</p>
            <div className='date__gradient' />
            <div className='date__gradient' />
          </div>
          <p className='date__label'>Segundos</p>
        </div>
      </div>
      <p className='date__counter'>{count ? count : '¡Ya iniciamos!'}</p>
      <img src={clockSrc} alt='reloj' className='date__vector' />
    </section>
  );
}

Date.propTypes = {
  localDate: PropTypes.any,
  hour: PropTypes.string,
  count: PropTypes.any,
};
