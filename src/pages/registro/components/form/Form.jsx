import { motion } from 'framer-motion';

import logoSrc from '../../../../assets/logos/imag-eap.png';

import PropTypes from 'prop-types';

export default function Form({ shadowVariants, btnVariants, onSubmit }) {
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
        <p className='form__cta'>
          No dejes que tus ideas se queden en el papel:
        </p>
        <div action='submit' className='form__form'>
          {/*   <p className='form__info'>
            Únete al grupo de WhatsApp donde daremos la información necesaria y
            recordatorios de la clase gratuita.
          </p> */}
          <div className='form__element'></div>
          <div className='form__container form__container_btn'>
            <motion.button
              className='form__btn'
              variants={btnVariants}
              whileHover='hover'
              whileTap='tap'
              animate='loop'
              onClick={onSubmit}
            >
              ¡Únete gratis!
            </motion.button>
          </div>
        </div>
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
