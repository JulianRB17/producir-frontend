import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

export const Pixel = ({
  pixelId,
  cookiesEnabled,
  pathname,
  parametrosFbEvent,
}) => {
  useEffect(() => {
    if (cookiesEnabled && pixelId) {
      (function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(
        window,
        document,
        'script',
        'https://connect.facebook.net/en_US/fbevents.js'
      );
      fbq('set', 'autoConfig', 'false', pixelId);
      fbq(
        'init',
        pixelId,
        {},
        { autoConfig: false, debug: false, manualMode: true }
      );
      fbq('track', 'PageView', { page_name: pathname });
    }
  }, [cookiesEnabled, pixelId, pathname, parametrosFbEvent]);

  return cookiesEnabled ? (
    <Helmet>
      <noscript>{`
        <img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1"
        />
      `}</noscript>
    </Helmet>
  ) : null;
};

Pixel.propTypes = {
  pixelId: PropTypes.string,
  cookiesEnabled: PropTypes.bool,
  pathname: PropTypes.string,
  parametrosFbEvent: PropTypes.object,
};
