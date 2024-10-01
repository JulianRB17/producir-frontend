import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Ventas from './pages/ventas/Ventas';
import CierreRegistro from './pages/cierreRegistro/CierreRegistro';
import CierreVenta from './pages/cierreVenta/CierreVenta';
import Registro from './pages/registro/Registro';
import Repeticion from './pages/repeticion/Repeticion';
import { countdown } from './utils/countdown.js';
import NotFound from './pages/notFound/NotFound';
import Footer from './components/footer/Footer.jsx';
import ProgressBar from './components/progressBar/ProgressBar.jsx';
import api from './utils/api';
// import { Pixel } from "./utils/metaPixel";
// import Privacidad from "./routes/privacidad/Privacidad";
// import CookiesNotice from "./components/cookiesNotice/CookiesNotice";

function App() {
  const [formValues, setFormValues] = useState({
    firstName: '',
    email: '',
  });
  const [loading, setLoading] = useState(false);
  const [isValidForm, setValidForm] = useState(false);
  const [msgSuccess, setMsgSuccess] = useState(true);
  const [sentUser, setSentUser] = useState(false);
  const [count, setCount] = useState(0);
  const [localDate, setLocalDate] = useState('');
  const [hour, setHour] = useState('');
  const [timestamp, setTimestamp] = useState('');
  const [urls, setUrls] = useState({});
  const [dates, setDates] = useState({});
  // const [cookiesEstablished, setCookiesEstablished] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await api.getData();
      setDates(data.dates);
      setUrls(data.urls);
      return;
    })();
  }, []);

  useEffect(() => {
    setTimestamp(new Date(dates.webinarDate).getTime());
    const webinarHour = new Date(dates.webinarDate).getHours();
    const webinarMinutes = new Date(dates.webinarDate).getSeconds();
    setLocalDate(new Date(dates.webinarDate).toLocaleDateString('es-ES'));
    setHour(`${webinarHour}:${webinarMinutes ? 0 : '00'}`);
    countdown(timestamp, setCount);
    return;
  }, [hour, timestamp, dates.webinarDate]);

  const navigate = useNavigate();

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

    try {
      const contactData = await api.postContact(formValues);
      if (contactData.contactList) {
        setMsgSuccess(true);
        setSentUser(true);
        navigate('/cierre-r');
      } else {
        setMsgSuccess(false);
      }
      setFormValues({
        firstName: '',
        email: '',
      });
      setLoading(false);
      return;
    } catch (error) {
      setLoading(false);
      console.error(error);
      setFormValues({
        firstName: '',
        email: '',
      });
      alert('Ahh, algo salió malo, por favor vuelve a intentarlo.');
    }
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

  // const handleCookiesAccept = (e) => {
  //   e.preventDefault();
  //   // Pixel.grantConsent();
  //   setCookiesEstablished(true);
  // };

  // const handleCookiesReject = (e) => {
  //   e.preventDefault();
  //   // Pixel.revokeConsent();
  //   setCookiesEstablished(true);
  // };

  return (
    <div className='app'>
      <ProgressBar />
      <Routes>
        <Route
          path='/'
          element={
            <>
              {/* <Pixel /> */}
              {/* <CookiesNotice
                cookiesEstablished={cookiesEstablished}
                onCookiesAccept={handleCookiesAccept}
                onCookiesReject={handleCookiesReject}
              /> */}
              <Ventas
                urls={urls}
                dates={dates}
                shadowVariants={shadowVariants}
                btnVariants={btnVariants}
                listElementVariants={listElementVariants}
                titleVariants={titleVariants}
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
              count={count}
              urls={urls}
            />
          }
        />
        <Route
          path='/cierre-v'
          element={
            <CierreVenta
              cursoDate={dates.programaDate}
              fbPermaUrl={urls.fbPermaUrl}
            />
          }
        />
        <Route
          path='/registro'
          element={
            <>
              {/* <CookiesNotice
                cookiesEstablished={cookiesEstablished}
                onCookiesAccept={handleCookiesAccept}
                onCookiesReject={handleCookiesReject}
              /> */}
              <Registro
                localDate={localDate}
                hour={hour}
                count={count}
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
              />
            </>
          }
        />
        <Route path='/repeticion' element={<Repeticion urls={urls} />} />
        {/* <Route path="/privacidad" element={<Privacidad />} /> */}
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer urls={urls} />
    </div>
  );
}

export default App;
