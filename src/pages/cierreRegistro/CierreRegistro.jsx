import PropTypes from 'prop-types';

import Date from '../../components/date/Date';
import HeroCierreR from './components/heroCierreR/HeroCierreR';
import Pasos from './components/pasos/Pasos';

export default function CierreRegistro({
  shadowVariants,
  titleVariants,
  btnVariants,
  urls,
  localDate,
  hour,
  countdown,
  timestamp,
}) {
  return (
    <section className='cierre-r'>
      <HeroCierreR shadokwVariants={shadowVariants} urls={urls} />
      <Pasos
        urls={urls}
        titleVariants={titleVariants}
        btnVariants={btnVariants}
      />
      <Date
        localDate={localDate}
        hour={hour}
        countdown={countdown}
        timestamp={timestamp}
      />
    </section>
  );
}

CierreRegistro.propTypes = {
  shadowVariants: PropTypes.object,
  titleVariants: PropTypes.object,
  btnVariants: PropTypes.object,
  urls: PropTypes.object,
  localDate: PropTypes.any,
  hour: PropTypes.string,
  countdown: PropTypes.func,
  timestamp: PropTypes.number,
};
