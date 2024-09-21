import HeroVentas from "./components/heroVentas/HeroVentas";
import Situaciones from "./components/situaciones/Situaciones";
import Cta from "./components/cta/Cta";
import Bios from "../../components/bios/Bios";
import Presentacion from "./components/presentacion/Presentacion";
import Descripcion from "./components/descripcion/Descripcion";
import CtaLargo from "./components/ctaLargo/CtaLargo";
import Bonos from "./components/bonos/Bonos";
import Garantia from "./components/garantia/Garantia";
import Faqs from "./components/faqs/Faqs";
import Disclaimer from "./components/disclaimer/Disclaimer";

export default function Ventas() {
  return (
    <section className="ventas">
      <HeroVentas />
      <Situaciones />
      <Cta />
      <Bios />
      <Presentacion />
      <Cta />
      <Descripcion />
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
