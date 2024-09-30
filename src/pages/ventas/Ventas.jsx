import HeroVentas from './components/heroVentas/HeroVentas';
import Situaciones from './components/situaciones/Situaciones';
import Quote from './components/quote/Quote';
import Cta from './components/ctaS/CtaS';
import About from '../../components/about/About';
import Bios from '../../components/bios/Bios';
import Presentacion from './components/presentacion/Presentacion';
import DescriptionVentas from './components/descriptionVentas/DescriptionVentas';
import CtaLargo from './components/ctaLargo/CtaLargo';
import Bonos from './components/bonos/Bonos';
import Garantia from './components/garantia/Garantia';
import Faqs from './components/faqs/Faqs';
import Disclaimer from './components/disclaimer/Disclaimer';
import CtaM from './components/ctaM/CtaM';

export default function Ventas() {
  return (
    <section className='ventas'>
      <HeroVentas />
      <Situaciones />
      <Quote />
      <About />
      <Bios />
      <Presentacion />
      <Cta />
      <DescriptionVentas />
      <CtaM />
      <Bonos />
      <Garantia />
      <Cta />
      <Faqs />
      <Disclaimer />
      <CtaLargo />
    </section>
  );
}
