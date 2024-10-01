import { motion } from 'framer-motion';

import logoSrc from '../../../../assets/logos/imag-eap.png';

import PropTypes from 'prop-types';

export default function Form({
  onSubmit,
  onChange,
  shadowVariants,
  btnVariants,
  // sentUser,
  // isValidForm,
  // loading,
  // msgSuccess,
  // setSentUser,
  // formValues,
}) {
  return (
    <section className='form' id='form'>
      <motion.img
        initial={{ rotate: 0 }}
        animate={{ rotate: '360deg' }}
        transition={{ duration: 20, repeat: Infinity }}
        src={logoSrc}
        alt='Logo del Arte de producir'
        className='form__logo'
      />
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
              />
            </div>
          </div>
        </div>
        <div className='form__container form__container_btn'>
          <motion.button
            className='form__btn'
            variants={btnVariants}
            whileHover='hover'
            whileTap='tap'
          >
            ¡Registrate ahora!
          </motion.button>
        </div>
      </form>
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
