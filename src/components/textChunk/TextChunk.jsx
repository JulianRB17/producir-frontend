import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

export default function TextChunk({
  text,
  title,
  cookiesEnabled,
  handleCookiesAccept,
  handleCookiesReject,
  btnVariants,
}) {
  const textRenderer = (text) => {
    return (
      <div className='text-chunk__segment' key={text.title}>
        <h2 className='text-chunk__subtitle'>{text.title}</h2>{' '}
        {text.body.map((textElement, i) => (
          <p className='text-chunk__text' key={i}>
            {textElement}
          </p>
        ))}
      </div>
    );
  };

  const btnRenderer = () => {
    return (
      <div className='text-chunk__container'>
        <motion.button
          className='text-chunk__btn'
          onClick={cookiesEnabled ? handleCookiesReject : handleCookiesAccept}
          variants={btnVariants}
          whileHover='hover'
          whileTap='tap'
        >
          {cookiesEnabled ? 'Rechazar' : 'Aceptar'}
        </motion.button>
      </div>
    );
  };

  return (
    <section className='text-chunk'>
      <h1 className='text-chunk__title'>{title}</h1>
      {text.map((text) => textRenderer(text))}
      {btnRenderer()}
    </section>
  );
}

TextChunk.propTypes = {
  text: PropTypes.array,
  title: PropTypes.string,
  cookiesEnabled: PropTypes.bool,
  handleCookiesAccept: PropTypes.func,
  handleCookiesReject: PropTypes.func,
  btnVariants: PropTypes.object,
};
