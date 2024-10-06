import PropTypes from 'prop-types';
import { useEffect } from 'react';

import HeroCierreV from './components/heroR/HeroR';

export default function Repeticion({
  shadowVariants,
  titleVariants,
  btnVariants,
  urls,
  dates,
  setIsRegistro,
}) {
  useEffect(() => {
    setIsRegistro(false);
  }, [setIsRegistro]);

  return (
    <section className='cierre-r'>
      <HeroCierreV
        shadokwVariants={shadowVariants}
        urls={urls}
        titleVariants={titleVariants}
        shadowVariants={shadowVariants}
        btnVariants={btnVariants}
        dates={dates}
      />
    </section>
  );
}

Repeticion.propTypes = {
  shadowVariants: PropTypes.object,
  titleVariants: PropTypes.object,
  btnVariants: PropTypes.object,
  urls: PropTypes.object,
  dates: PropTypes.object,
  setIsRegistro: PropTypes.func,
};
