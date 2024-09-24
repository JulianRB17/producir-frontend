import luminariasSrc from '../../assets/imgs/luminarias.svg';
import mascarasSrc from '../../assets/imgs/mascaras.svg';

export default function About() {
  return (
    <section className='about'>
      <div className='about__container about__container_top'>
        <div className='about__container about__container_text'>
          <div className='about__container about__container_title'>
            <p className='about__title'>¿Quiénes somos</p>
            <p className='about__title about__title_accent'>
              para enseñar esto?
            </p>
          </div>
          <p className='about__text'>
            <span className='about__text about__text_accent'>
              ¡Hola! Somos Verónica Ramos y Julián Reyes Botello
            </span>
            , egresamos del Colegio de Literatura Dramática y Teatro de la UNAM.
            Al salir de la carrera, nos enfrentamos a la incertidumbre del
            desempleo, preguntándonos si podríamos ejercer nuestra pasión y si
            realmente era
            <span className='about__text about__text_accent'>
              {' '}
              posible vivir del teatro.
            </span>
          </p>
          <p className='about__text'>
            Recordamos nuestros primeros proyectos profesionales llenos de
            entusiasmo, pero también de inseguridad ya que teníamos muchas dudas
            sobre temas de producción y eso nos generaba mucha duda sobre
            nuestras capacidades. La necesidad de autoemplearnos y no depender
            de que alguien más nos llamara para trabajar nos llevó a invertir
            mucho tiempo, dinero y esfuerzo en proyectos que muchas veces no
            alcanzaban los objetivos que deseábamos. Fue entonces cuando
            comprendimos que era crucial
            <span className='about__text about__text_accent'>
              {' '}
              aprender más sobre los caminos para consolidar nuestros propios
              proyectos y empezar a invertir en nuestro conocimiento.
            </span>
          </p>
        </div>
        <div className='about__container about__container_svg'>
          <img
            src={luminariasSrc}
            alt='luminarias teatrales'
            className='about__svg about__svg_top'
          />
        </div>
      </div>

      <div className='about__container about__container_bottom'>
        <div className='about__container about__container_svg'>
          <img
            src={mascarasSrc}
            alt=''
            className='about__svg about__svg_bottom'
          />
        </div>
        <div className='about__container about__container_text about__container_dark-text'>
          <p className='about__text about__text_dark'>
            Decidimos enfrentar nuestros miedos y desafíos, dedicándonos a
            mejorar nuestras habilidades y entendiendo que la seguridad y el
            éxito vendrían con el tiempo y la experiencia. Esta decisión nos
            transformó. Poco a poco, la inversión en nuestro aprendizaje nos
            brindó la{' '}
            <span className='about__text about__text_dark about__text_accent'>
              confianza necesaria para postularnos en proyectos que parecían
              inalcanzables{' '}
            </span>
            pero que se consolidaron e incluso nos permitieron colaborar con
            profesionales de importante trayectoria. Cada paso que dimos nos
            permitió crecer, no solo como artistas, sino como personas capaces
            de enfrentar y superar la adversidad.
          </p>
          <p className='about__text about__text_dark'>
            Por eso hoy, queremos compartir contigo todos estos conocimientos y
            experiencia adquiridos a lo largo de nuestra carrera artística para
            hacer de tu tránsito por la consolidación de tus proyectos, un
            camino mucho más llevadero y sientas compañía en esos momentos donde
            la incertidumbre y el miedo al fracaso son normales, pero no deben
            detenerte.
            <span className='about__text about__text_dark about__text_accent'>
              {' '}
              El teatro es más que una profesión, es una pasión que se nutre de
              perseverancia, creatividad y, sobre todo, de la voluntad de nunca
              rendirse.
            </span>
          </p>
        </div>
      </div>

      <div className='about__container about__container_quote'>
        <p className='about__quote'>
          Invierte en ti mismo, en tu conocimiento y en tus habilidades
        </p>

        <p className='about__quote about__quote_accent'>
          para que no esperes que las oportunidades lleguen a ti,
        </p>
        <p className='about__quote about__quote_right-align'>
          crea tus propias oportunidades.
        </p>
      </div>
    </section>
  );
}
