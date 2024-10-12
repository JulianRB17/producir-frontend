import PropTypes from 'prop-types';

export default function TextChunk({ text, title }) {
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

  return (
    <section className='text-chunk'>
      <h1 className='text-chunk__title'>{title}</h1>
      {text.map((text) => textRenderer(text))}
    </section>
  );
}

TextChunk.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
};
