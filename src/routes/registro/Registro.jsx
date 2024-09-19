import Host from "./components/host/Host";
import Hero from "./components/hero/Hero";
import Date from "./components/date/Date";
import Quote from "./components/quote/Quote";
import Venta from "./components/venta/Venta";
import Description from "./components/description/Description";
import Bios from "../../components/bios/Bios";
import Form from "./components/form/Form";

import PropTypes from "prop-types";

export default function Registro({
  localDate,
  hour,
  count,
  onSubmit,
  onChange,
  sentUser,
  isValidForm,
  loading,
  msgSuccess,
  setSentUser,
  formValues,
}) {
  return (
    <section className="registro">
      <Hero />
      <Date localDate={localDate} count={count} hour={hour} />
      <Host />
      <Quote quote={"´Una idea no ejecutada es un sueño´ Louis de Rouvroy"} />
      <Venta />
      <Description />
      <Bios />
      <Form
        onSubmit={onSubmit}
        onChange={onChange}
        sentUser={sentUser}
        isValidForm={isValidForm}
        loading={loading}
        msgSuccess={msgSuccess}
        setSentUser={setSentUser}
        formValues={formValues}
      />
    </section>
  );
}

Registro.propTypes = {
  localDate: PropTypes.any,
  hour: PropTypes.string,
  count: PropTypes.number,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  isValidForm: PropTypes.bool,
  loading: PropTypes.bool,
  msgSuccess: PropTypes.bool,
  sentUser: PropTypes.func,
  setSentUser: PropTypes.func,
  formValues: PropTypes.array,
};
