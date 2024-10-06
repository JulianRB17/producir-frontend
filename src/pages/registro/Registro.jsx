import PropTypes from 'prop-types';
import { useEffect } from 'react';

import Host from './components/host/Host';
import Hero from './components/hero/Hero';
import Date from '../../components/date/Date';
import Venta from './components/venta/Venta';
import Description from './components/description/Description';
import About from '../../components/about/About';
import Form from './components/form/Form';
import Bios from '../../components/bios/Bios';
import Allies from '../../components/allies/Allies';

export default function Registro({
  localDate,
  hour,
  onSubmit,
  onChange,
  sentUser,
  isValidForm,
  loading,
  msgSuccess,
  setSentUser,
  formValues,
  shadowVariants,
  btnVariants,
  listElementVariants,
  titleVariants,
  countdown,
  timestamp,
  setIsRegistro,
}) {
  useEffect(() => {
    setIsRegistro(true);
  }, [setIsRegistro]);

  return (
    <section className='registro'>
      <Hero shadowVariants={shadowVariants} btnVariants={btnVariants} />
      <Date
        localDate={localDate}
        hour={hour}
        countdown={countdown}
        timestamp={timestamp}
      />
      <Host />
      <Venta
        shadowVariants={shadowVariants}
        listElementVariants={listElementVariants}
      />
      <Description />
      <About titleVariants={titleVariants} />
      <Bios listElementVariants={listElementVariants} />
      <Allies shadowVariants={shadowVariants} />
      <Form
        onSubmit={onSubmit}
        onChange={onChange}
        sentUser={sentUser}
        isValidForm={isValidForm}
        loading={loading}
        msgSuccess={msgSuccess}
        setSentUser={setSentUser}
        formValues={formValues}
        shadowVariants={shadowVariants}
        btnVariants={btnVariants}
      />
    </section>
  );
}

Registro.propTypes = {
  localDate: PropTypes.any,
  hour: PropTypes.string,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  isValidForm: PropTypes.bool,
  loading: PropTypes.bool,
  msgSuccess: PropTypes.bool,
  sentUser: PropTypes.bool,
  setSentUser: PropTypes.func,
  formValues: PropTypes.object,
  shadowVariants: PropTypes.object,
  btnVariants: PropTypes.object,
  listElementVariants: PropTypes.object,
  titleVariants: PropTypes.object,
  countdown: PropTypes.func,
  timestamp: PropTypes.number,
  setIsRegistro: PropTypes.func,
};
