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

import PropTypes from 'prop-types';

export default function Ventas({
  shadowVariants,
  listElementVariants,
  btnVariants,
  titleVariants,
}) {
  return (
    <section className='ventas'>
      <HeroVentas shadowVariants={shadowVariants} btnVariants={btnVariants} />
      <Situaciones
        shadowVariants={shadowVariants}
        listElementVariants={listElementVariants}
        btnVariants={btnVariants}
      />
      <Quote />
      <About titleVariants={titleVariants} />
      <Bios listElementVariants={listElementVariants} />
      <Presentacion
        shadowVariants={shadowVariants}
        listElementVariants={listElementVariants}
      />
      <CtaS btnVariants={btnVariants} />
      <DescriptionVentas
        titleVariants={titleVariants}
        listElementVariants={listElementVariants}
      />
      <CtaL btnVariants={btnVariants} />
      <Bonos titleVariants={titleVariants} />
      <Garantia shadowVariants={shadowVariants} />
      <CtaS btnVariants={btnVariants} />
      <Faqs titleVariants={titleVariants} />
      <Disclaimer />
      <CtaL btnVariants={btnVariants} />
    </section>
  );
}

Ventas.propTypes = {
  shadowVariants: PropTypes.object,
  btnVariants: PropTypes.object,
  listElementVariants: PropTypes.object,
  titleVariants: PropTypes.object,
};
