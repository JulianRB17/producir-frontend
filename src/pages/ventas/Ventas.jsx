import PropTypes from 'prop-types';
import { useEffect } from 'react';

import HeroVentas from './components/heroVentas/HeroVentas';
import Situaciones from './components/situaciones/Situaciones';
import Quote from './components/quote/Quote';
import CtaS from './components/ctaS/CtaS';
import About from '../../components/about/About';
import Bios from '../../components/bios/Bios';
import Presentacion from './components/presentacion/Presentacion';
import DescriptionVentas from './components/descriptionVentas/DescriptionVentas';
import Bonos from './components/bonos/Bonos';
import Garantia from './components/garantia/Garantia';
import Faqs from './components/faqs/Faqs';
import Disclaimer from './components/disclaimer/Disclaimer';
import CtaL from './components/ctaL/CtaL';

export default function Ventas({
  shadowVariants,
  listElementVariants,
  btnVariants,
  titleVariants,
  urls,
  setIsRegistro,
}) {
  useEffect(() => {
    setIsRegistro(false);
  }, [setIsRegistro]);

  return (
    <section className='ventas'>
      <HeroVentas
        shadokwVariants={shadowVariants}
        btnVariants={btnVariants}
        urls={urls}
      />
      <Situaciones
        shadowVariants={shadowVariants}
        listElementVariants={listElementVariants}
        btnVariants={btnVariants}
        urls={urls}
      />
      <Quote />
      <About titleVariants={titleVariants} />
      <Bios listElementVariants={listElementVariants} />
      <Presentacion
        shadowVariants={shadowVariants}
        listElementVariants={listElementVariants}
      />
      <CtaS btnVariants={btnVariants} urls={urls} />
      <DescriptionVentas
        urls={urls}
        titleVariants={titleVariants}
        listElementVariants={listElementVariants}
      />
      <CtaL btnVariants={btnVariants} urls={urls} />
      <Bonos titleVariants={titleVariants} />
      <Garantia
        shadowVakriants={shadowVariants}
        btnVariants={btnVariants}
        urls={urls}
      />
      <Faqs titleVariants={titleVariants} />
      <Disclaimer />
      <CtaL btnVariants={btnVariants} urls={urls} />
    </section>
  );
}

Ventas.propTypes = {
  shadowVariants: PropTypes.object,
  btnVariants: PropTypes.object,
  listElementVariants: PropTypes.object,
  titleVariants: PropTypes.object,
  urls: PropTypes.object,
  setIsRegistro: PropTypes.func,
};
