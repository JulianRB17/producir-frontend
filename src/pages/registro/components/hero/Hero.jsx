// import { motion } from "framer-motion";
// import picSrc from "../../../../assets/overlay-blue-s.webp";
// import logoSrc from "../../../../assets/logo-oscuro-transparente.png";
// import Form from './../../../../components/form/Form';

export default function Hero() {
  //     {
  //   // onSubmit,
  //   // onChange,
  //   // sentUser,
  //   // isValidForm,
  //   // loading,
  //   // msgSuccess,
  //   // setSentUser,
  //   // formValues,
  // })
  return (
    <section className="hero">
      <header className="hero__header">
        ¡Atención, artista escénico! ¿Quieres aprender a consolidar tus
        proyectos escénicos y materializar tus ideas? Esto es para tí…
      </header>
      <div className="hero__container">
        <h1 className="hero__title">
          Aprende las 3 claves para desarrollar tus proyectos y profesionalizar
          tu carrera artística.
        </h1>
        <p className="hero__img">(Aquí puede ir una imagen)</p>
      </div>
      <button className="hero__btn">Regístrate gratis</button>
      <p className="hero__disclaimer">
        Tu información está segura y no será compartida con nadie.
      </p>
    </section>
  );
}
