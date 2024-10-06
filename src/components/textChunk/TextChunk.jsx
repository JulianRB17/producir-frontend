import PropTypes from 'prop-types';

export default function TextChunk({ text, title }) {
  return (
    <section className='text-chunk'>
      <h1 className='text-chunk__title'>{title}</h1>
      <p className='text-chunk__text'>{text}</p>
    </section>
  );
}

TextChunk.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
};
