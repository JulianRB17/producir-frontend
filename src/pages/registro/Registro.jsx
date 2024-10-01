import Host from './components/host/Host';
import Hero from './components/hero/Hero';
import Date from './components/date/Date';
import Venta from './components/venta/Venta';
import Description from './components/description/Description';
import About from '../../components/about/About';
import Form from './components/form/Form';
import Header from './components/header/Header';
import Bios from '../../components/bios/Bios';
import Allies from '../../components/allies/Allies';

import PropTypes from 'prop-types';

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
  shadowVariants,
  btnVariants,
  listElementVariants,
  titleVariants,
}) {
  return (
    <section className='registro'>
      <Header />
      <Hero shadowVariants={shadowVariants} btnVariants={btnVariants} />
      <Date localDate={localDate} count={count} hour={hour} />
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
  count: PropTypes.any,
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
};
