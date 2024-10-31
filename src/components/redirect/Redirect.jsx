import { useEffect } from 'react';
import PropTypes from 'prop-types';

import logoSrc from '../../assets/logos/iso-largo-eap.png';

export default function Redirect({ url }) {
  useEffect(() => {
    window.location.href = url;
  }, [url]);
  return (
    <section className='redirect'>
      <img src={logoSrc} alt='' className='redirect__logo' />
    </section>
  );
}

Redirect.propTypes = {
  url: PropTypes.string,
};
