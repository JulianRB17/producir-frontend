import HeroVentas from './components/heroVentas/HeroVentas';
import Situaciones from './components/situaciones/Situaciones';
import Cta from './components/cta/Cta';
import About from '../../components/about/About';
import Bios from '../../components/bios/Bios';
import Presentacion from './components/presentacion/Presentacion';
import DescriptionVentas from './components/descriptionVentas/DescriptionVentas';
import CtaLargo from './components/ctaLargo/CtaLargo';
import Bonos from './components/bonos/Bonos';
import Garantia from './components/garantia/Garantia';
import Faqs from './components/faqs/Faqs';
import Disclaimer from './components/disclaimer/Disclaimer';

export default function Ventas() {
  return (
    <section className='ventas'>
      <HeroVentas />
      <Situaciones />
      <Cta />
      <About />
      <Bios />
      <Presentacion />
      <Cta />
      <DescriptionVentas />
      <CtaLargo />
      <Bonos />
      <Garantia />
      <Cta />
      <Faqs />
      <Disclaimer />
      <CtaLargo />
    </section>
  );
}
