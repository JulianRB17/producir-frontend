import PropTypes from "prop-types";

export default function Quote({ quote }) {
  return (
    <section className="quote">
      <p className="quote__text">{quote}</p>
    </section>
  );
}

Quote.propTypes = {
  quote: PropTypes.string,
};
