import { useEffect } from 'react';
import PropTypes from 'prop-types';

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
  dates,
  handleBuyClick,
}) {
  useEffect(() => {
    if (typeof fbq === 'function') {
      console.log(fbq);
      fbq('track', 'ViewContent', {
        vale: 3870,
        currency: 'MXN',
        content_name: 'El arte de producir',
      });
    }
  }, []);

  return (
    <section className='ventas'>
      <HeroVentas
        shadokwVariants={shadowVariants}
        btnVariants={btnVariants}
        handleBuyClick={handleBuyClick}
      />
      <Situaciones
        shadowVariants={shadowVariants}
        listElementVariants={listElementVariants}
        btnVariants={btnVariants}
        handleBuyClick={handleBuyClick}
      />
      <Quote />
      <About titleVariants={titleVariants} />
      <Bios listElementVariants={listElementVariants} />
      <Presentacion
        shadowVariants={shadowVariants}
        listElementVariants={listElementVariants}
      />
      <CtaS btnVariants={btnVariants} handleBuyClick={handleBuyClick} />
      <DescriptionVentas
        dates={dates}
        titleVariants={titleVariants}
        listElementVariants={listElementVariants}
      />
      <CtaL btnVariants={btnVariants} handleBuyClick={handleBuyClick} />
      <Bonos titleVariants={titleVariants} />
      <Garantia
        shadowVakriants={shadowVariants}
        btnVariants={btnVariants}
        handleBuyClick={handleBuyClick}
      />
      <Faqs titleVariants={titleVariants} />
      <Disclaimer />
      <CtaL btnVariants={btnVariants} handleBuyClick={handleBuyClick} />
    </section>
  );
}

Ventas.propTypes = {
  shadowVariants: PropTypes.object,
  btnVariants: PropTypes.object,
  listElementVariants: PropTypes.object,
  titleVariants: PropTypes.object,
  dates: PropTypes.object,
  handleBuyClick: PropTypes.func,
};
