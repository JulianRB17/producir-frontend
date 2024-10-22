import { motion } from 'framer-motion';

import logoSrc from '../../../../assets/logos/imag-eap.png';
import Loader from '../loader/Loader';

import PropTypes from 'prop-types';

export default function Form({
  onSubmit,
  onChange,
  shadowVariants,
  btnVariants,
  sentUser,
  isValidForm,
  loading,
  msgSuccess,
  setSentUser,
  formValues,
}) {
  const SendBtn = function () {
    if (!sentUser) {
      return (
        <motion.button
          type='submit'
          variants={btnVariants}
          className={`form__btn ${isValidForm || 'form__btn_inactive'}`}
          disabled={!isValidForm}
          whileHover={isValidForm && 'hover'}
          whileTap={isValidForm && 'tap'}
          animate={isValidForm && 'loop'}
        >
          {loading ? <Loader /> : '¡Regístrate ahora!'}
        </motion.button>
      );
    }
    if (sentUser && !msgSuccess) {
      window.setTimeout(() => {
        setSentUser(false);
      }, 3000);

      return (
        <p className='form__msg form__msg_failed'>
          Algo salió mal, vuelve a intentarlo más tarde
        </p>
      );
    }
    if (sentUser && msgSuccess) {
      window.setTimeout(() => {
        setSentUser(false);
      }, 3000);

      return <p className='form__msg'>Usuario registrado</p>;
    }
  };

  return (
    <section className='form' id='form'>
      <motion.img
        initial={{ rotate: 0 }}
        animate={{ rotate: '360deg' }}
        transition={{ duration: 20 }}
        src={logoSrc}
        alt='Logo del Arte de producir'
        className='form__logo'
      />
      <div className='form__container form__container_general'>
        <div className='form__container form__container_hook'>
          <motion.p
            className='form__hook form__hook_accent form__hook_shadow'
            variants={shadowVariants}
            initial='initial'
            whileInView='view'
            animate='loop'
          >
            siguiente paso
          </motion.p>
          <p className='form__hook form__hook_accent'> Da el siguiente paso </p>
          <p className='form__hook'>
            para poder materializar tus ideas, tus sueños.
          </p>
        </div>
        <p className='form__cta'>Regístrate a esa clase gratuita</p>
        <form
          action='submit'
          className='form__form'
          onSubmit={onSubmit}
          onChange={onChange}
        >
          <div className='form__container form__container_inputs'>
            <div className='form__element'>
              <div className='form__container form__container_input'>
                <p className='form__label'>Primer nombre:</p>
                <input
                  type='text'
                  className='form__input'
                  id='firstName'
                  onChange={onChange}
                  maxLength={30}
                  required
                  value={formValues.firstName}
                  placeholder='Escribe aquí tu primer nombre...'
                />
              </div>
            </div>
            <div className='form__element'>
              <div className='form__container form__container_input'>
                <p className='form__label'>Email:</p>
                <input
                  type='email'
                  className='form__input'
                  placeholder='Escribe aquí tu email para mandarte la info.'
                  onChange={onChange}
                  autoComplete='on'
                  required
                  value={formValues.email}
                  id='email'
                />
              </div>
            </div>
          </div>
          <div className='form__element'>
            <div className='form__container form__container_inputs form__container_checkbox'>
              <input
                type='checkbox'
                onChange={onChange}
                className='form__input_checkbox'
                id='privacidad'
                required
              />
              <label
                htmlFor='accept'
                className='form__label form__label_checkbox'
              >
                Acepto la{' '}
                <a
                  href='/privacidad'
                  className='form__label form__label_checkbox form__link'
                >
                  Política de privacidad
                </a>
              </label>
            </div>
          </div>
          <div className='form__container form__container_btn'>{SendBtn()}</div>
        </form>
      </div>
      <p className='form__credito-foto'>Foto: Carlos Alvar</p>
      <div className='form__overlay' />
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
  shadowVariants: PropTypes.object,
  btnVariants: PropTypes.object,
};
