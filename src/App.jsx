import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

import Ventas from './pages/ventas/Ventas';
import CierreRegistro from './pages/cierreRegistro/CierreRegistro';
import CierreVenta from './pages/cierreVenta/CierreVenta';
import Registro from './pages/registro/Registro';
import Repeticion from './pages/repeticion/Repeticion';
import { countdown } from './utils/countdown.js';
import NotFound from './pages/notFound/NotFound';
import Footer from './components/footer/Footer.jsx';
import ProgressBar from './components/progressBar/ProgressBar.jsx';
import api from './utils/api.js';
import Header from './components/header/Header.jsx';
import textData from './utils/textData.js';
import { Pixel } from './utils/metaPixel';
import TextChunk from './components/textChunk/TextChunk.jsx';
import CookiesNotice from './components/cookiesNotice/CookiesNotice.jsx';
import { dates, urls, precios } from './utils/data.js';
import Redirect from './components/redirect/Redirect.jsx';

function App() {
  const [formValues, setFormValues] = useState({
    firstName: '',
    number: '',
  });
  const [loading, setLoading] = useState(false);
  const [isValidForm, setValidForm] = useState(false);
  const [msgSuccess, setMsgSuccess] = useState(true);
  const [sentUser, setSentUser] = useState(false);
  const [localDate, setLocalDate] = useState('');
  const [hour, setHour] = useState('');
  const [timestamp, setTimestamp] = useState(0);
  const [privData, setPrivData] = useState({});
  const [isRegistro, setIsRegistro] = useState(false);
  const [isVentas, setIsVentas] = useState(false);
  const [showCookiesBanner, setShowCookiesBanner] = useState(false);
  const [cookiesEnabled, setCookiesEnabled] = useState(false);
  const [isPrivacidad, setIsPrivacidad] = useState(false);

  //const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    (async () => {
      const data = await api.getData();
      if (data.pixelId) setPrivData(data);
      return;
    })();
  }, []);

  useEffect(() => {
    setTimestamp(new Date(dates.webinarDate).getTime());
    const webinarHour = new Date(dates.webinarDate).getHours();
    const webinarMinutes = new Date(dates.webinarDate).getSeconds();
    setLocalDate(new Date(dates.webinarDate).toLocaleDateString('es-ES'));
    setHour(`${webinarHour}:${webinarMinutes ? 0 : '00'}`);
  }, []);

  const handleChange = (e) => {
    const { target } = e;
    const { id, value } = target;

    setFormValues({
      ...formValues,
      [id]: value,
    });
    setValidForm(target.form.checkValidity());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (typeof fbq === 'function') {
      fbq('track', 'Lead');
    }

    try {
      const contactData = await api.postContact(formValues);
      // if (contactData.contactList) {
      if (contactData) {
        setMsgSuccess(true);
        setSentUser(true);
        window.location.href = urls.whatsappGroupUrl;
        //navigate('/cierre-r');
      } else {
        setMsgSuccess(false);
      }
      setFormValues({
        firstName: '',
        number: '',
      });
      setLoading(false);
      return;
    } catch (error) {
      setLoading(false);
      console.error(error);
      setFormValues({
        firstName: '',
        number: '',
      });
      alert('Ahh, algo salió malo, por favor vuelve a intentarlo.');
    }
  };

  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === '/privacidad') {
      setIsPrivacidad(true);
      setIsRegistro(false);
      setIsVentas(false);
      return;
    }
    if (currentPath === '/registro') {
      setIsPrivacidad(false);
      setIsRegistro(true);
      setIsVentas(false);
      return;
    }
    if (currentPath === '/') {
      setIsPrivacidad(false);
      setIsRegistro(false);
      setIsVentas(true);
      return;
    } else {
      setIsPrivacidad(false);
      setIsRegistro(false);
      setIsVentas(false);
      return;
    }
  }, [location.pathname]);

  useEffect(() => {
    const consent = Cookies.get('cookie_consent_eap');
    if (!consent) {
      setShowCookiesBanner(true);
      setCookiesEnabled(false);
    }
    if (consent === 'reject') {
      setCookiesEnabled(false);
      setShowCookiesBanner(false);
    }
    if (consent === 'accepted') {
      setCookiesEnabled(true);
      setShowCookiesBanner(false);
    }
  }, [setCookiesEnabled, setShowCookiesBanner]);

  const handleBuyClick = (e) => {
    e.preventDefault();
    if (typeof fbq === 'function') {
      fbq('track', 'InitiateCheckout', {
        vale: 3478,
        currency: 'MXN',
        content_name: 'El arte de producir',
      });
    }
    window.location.href = urls.buyoutUrl;
  };

  const removePixelCookies = () => {
    Cookies.remove('_fbp');
    Cookies.remove('_fbc');
  };

  const handleCookiesAccept = (e) => {
    e.preventDefault();
    setShowCookiesBanner(false);
    setCookiesEnabled(true);
    Cookies.set('cookie_consent_eap', 'accepted', { expires: 365 });
  };

  const handleCookiesReject = (e) => {
    e.preventDefault();
    setShowCookiesBanner(false);
    setCookiesEnabled(false);
    removePixelCookies();
    Cookies.set('cookie_consent_eap', 'reject', { expires: 1 });
  };

  const shadowVariants = {
    initial: { opacity: 0, y: -10, scale: 1 },
    view: {
      opacity: 1,
      y: 0,
      transition: { duration: 4, ease: 'easeInOut', type: 'spring' },
    },
    loop: {
      scale: [0.95, 1, 0.95],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 15,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    },
  };

  const btnVariants = {
    hover: {
      scale: 1.2,
      transition: { duration: 1, ease: 'easeInOut', type: 'spring' },
    },
    tap: {
      scale: 0.8,
      transition: { duration: 1, ease: 'easeInOut', type: 'spring' },
    },
    loop: {
      scale: [0.95, 1, 0.95],
      transition: {
        duration: 2,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    },
  };

  const listElementVariants = {
    initial: { opacity: 0.5, rotate: '-30deg' },
    view: {
      opacity: 1,
      rotate: 0,
      transition: { duration: 2, ease: 'easeInOut', type: 'spring' },
    },
  };

  const titleVariants = {
    initialContainer: { opacity: 0 },
    viewContainer: {
      opacity: 1,
      transition: { duration: 2, ease: 'easeInOut', type: 'spring' },
    },
    initial: { x: -50, opacity: 0 },
    view: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
        type: 'spring',
        delay: 0.5,
      },
    },
  };

  return (
    <div className='app'>
      <Pixel
        pixelId={privData.pixelId}
        cookiesEnabled={cookiesEnabled}
        pathname={location.pathname}
      />
      <Header isRegistro={isRegistro} isVentas={isVentas} />
      <ProgressBar />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <CookiesNotice
                showCookiesBanner={showCookiesBanner}
                onCookiesAccept={handleCookiesAccept}
                onCookiesReject={handleCookiesReject}
                btnVariants={btnVariants}
              />
              <Ventas
                urls={urls}
                dates={dates}
                shadowVariants={shadowVariants}
                btnVariants={btnVariants}
                listElementVariants={listElementVariants}
                titleVariants={titleVariants}
                handleBuyClick={handleBuyClick}
                precios={precios}
              />
            </>
          }
        />
        <Route
          path='/cierre-r'
          element={
            <CierreRegistro
              localDate={localDate}
              hour={hour}
              urls={urls}
              shadowVariants={shadowVariants}
              btnVariants={btnVariants}
              titleVariants={titleVariants}
              countdown={countdown}
              timestamp={timestamp}
            />
          }
        />
        <Route
          path='/cierre-v'
          element={
            <CierreVenta
              urls={urls}
              shadowVariants={shadowVariants}
              btnVariants={btnVariants}
              titleVariants={titleVariants}
              dates={dates}
            />
          }
        />
        <Route
          path='/registro'
          element={
            <>
              <CookiesNotice
                showCookiesBanner={showCookiesBanner}
                onCookiesAccept={handleCookiesAccept}
                onCookiesReject={handleCookiesReject}
                btnVariants={btnVariants}
              />
              <Registro
                localDate={localDate}
                hour={hour}
                onSubmit={handleSubmit}
                onChange={handleChange}
                sentUser={sentUser}
                isValidForm={isValidForm}
                loading={loading}
                msgSuccess={msgSuccess}
                setSentUser={setSentUser}
                formValues={formValues}
                shadowVariants={shadowVariants}
                btnVariants={btnVariants}
                listElementVariants={listElementVariants}
                titleVariants={titleVariants}
                countdown={countdown}
                timestamp={timestamp}
              />
            </>
          }
        />
        {urls.repetitionUrl ? (
          <Route
            path='/repeticion'
            element={
              <Repeticion
                urls={urls}
                shadowVariants={shadowVariants}
                btnVariants={btnVariants}
                titleVariants={titleVariants}
                dates={dates}
              />
            }
          />
        ) : (
          ''
        )}
        <Route
          path='/privacidad'
          element={
            <TextChunk
              text={textData.privacidad}
              title='Aviso de privacidad'
              isPrivacidad={isPrivacidad}
              handleCookiesAccept={handleCookiesAccept}
              handleCookiesReject={handleCookiesReject}
              cookiesEnabled={cookiesEnabled}
              btnVariants={btnVariants}
            />
          }
        />
        <Route
          path='/condiciones'
          element={
            <TextChunk
              text={textData.condiciones}
              title={'Términos y condiciones'}
              handleCookiesAccept={handleCookiesAccept}
              handleCookiesReject={handleCookiesReject}
              cookiesEnabled={cookiesEnabled}
              btnVariants={btnVariants}
            />
          }
        />
        {/* <Route
          path='/legal'
          element={<TextChunk text={textData.legal} title='Aviso legal' handleCookiesAccept={handleCookiesAccept}
              handleCookiesReject={handleCookiesReject}
              cookiesEnabled={cookiesEnabled}/>}
        /> */}
        <Route path='/live' element={<Redirect url={urls.live} />} />
        <Route path='/form' element={<Redirect url={urls.checkout} />} />
        <Route path='*' element={<NotFound />} setIsRegistro={setIsRegistro} />
      </Routes>
      <Footer urls={urls} />
    </div>
  );
}

export default App;
