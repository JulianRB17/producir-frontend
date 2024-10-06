import { useEffect } from 'react';
import PropTypes from 'prop-types';

import HeroCierreV from './components/heroCierreV/HeroCierreV';
import PasosV from './components/pasosV/PasosV';

export default function CierreVenta({
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
      <HeroCierreV shadokwVariants={shadowVariants} urls={urls} />
      <PasosV
        urls={urls}
        titleVariants={titleVariants}
        btnVariants={btnVariants}
        dates={dates}
      />
    </section>
  );
}

CierreVenta.propTypes = {
  shadowVariants: PropTypes.object,
  titleVariants: PropTypes.object,
  btnVariants: PropTypes.object,
  urls: PropTypes.object,
  dates: PropTypes.object,
  setIsRegistro: PropTypes.func,
};
