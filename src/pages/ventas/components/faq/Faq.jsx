import arrowSrc from '../../../../assets/imgs/flecha-oscura.svg';

import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Faq({ pregunta, respuesta }) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className='faq__element'>
      <div className='faq__container'>
        <p className='faq__pregunta'>{pregunta}</p>
        <button className='faq__btn' onClick={handleClick}>
          <img
            src={arrowSrc}
            alt='flecha'
            className={
              !active ? 'faq__arrow' : 'faq__arrow faq__arrow_inactive'
            }
          />
        </button>
      </div>
      <p className={active ? 'faq__respuesta' : 'faq__respuesta_inactive'}>
        {respuesta}
      </p>
      <div className='faq__division' />
    </div>
  );
}

Faq.propTypes = {
  pregunta: PropTypes.string,
  respuesta: PropTypes.string,
};
