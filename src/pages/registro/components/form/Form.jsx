import PropTypes from 'prop-types';

export default function Form({
  onSubmit,
  onChange,
  // sentUser,
  // isValidForm,
  // loading,
  // msgSuccess,
  // setSentUser,
  // formValues,
}) {
  return (
    <section className='form' id='form'>
      <p className='form__hook'>
        Da el siguiente paso para poder materializar tus ideas, tus sueños.
      </p>
      <form
        action='submit'
        className='form__form'
        onSubmit={onSubmit}
        onChange={onChange}
      >
        <p className='form__text'>Regístrate a esa clase gratuita</p>
        <div className='form__element'>
          <p className='form__label'>Primer nombre:</p>
          <input type='text' className='form__intput' />
        </div>
        <div className='form__element'>
          <p className='form__label'>Email:</p>
          <input type='email' className='form__intput' />
        </div>
        <button className='form__btn'>¡Registrate ahora!</button>
      </form>
    </section>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  isValidForm: PropTypes.bool,
  loading: PropTypes.bool,
  msgSuccess: PropTypes.bool,
  sentUser: PropTypes.bool,
  setSentUser: PropTypes.func,
  formValues: PropTypes.object,
};
