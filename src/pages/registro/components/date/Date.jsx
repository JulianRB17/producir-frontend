import PropTypes from 'prop-types';

export default function Date({ localDate, hour, count }) {
  return (
    <section className='date' id='date'>
      <div className='date__element'>
        <h2 className='date__title'>¿Cuándo?</h2>
        <p className='date__date'>{localDate}</p>
        <p className='date__date'>{hour} hrs</p>
        <p className='date__counter'>{count ? count : '¡Ya iniciamos!'}</p>
      </div>
    </section>
  );
}

Date.propTypes = {
  localDate: PropTypes.any,
  hour: PropTypes.string,
  count: PropTypes.any,
};
