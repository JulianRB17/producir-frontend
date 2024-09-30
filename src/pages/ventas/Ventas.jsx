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

export default function Ventas() {
  return (
    <section className='ventas'>
      <HeroVentas />
      <Situaciones />
      <Quote />
      <About />
      <Bios />
      <Presentacion />
      <CtaS />
      <DescriptionVentas />
      <CtaL />
      <Bonos />
      <Garantia />
      <CtaS />
      <Faqs />
      <Disclaimer />
      <CtaL />
    </section>
  );
}
