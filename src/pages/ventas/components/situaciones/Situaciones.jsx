import listElementSrc from '../../../../assets/imgs/triangulo.svg';

export default function Situaciones() {
  return (
    <section className='situaciones'>
      <h2 className='situaciones__title'>
        <span className='situaciones__title situaciones__title_shadow'>
          pasado qué
        </span>
        ¿Te ha pasado qué?:
      </h2>
      <ul className='situaciones__list'>
        <li className='situaciones__element'>
          <img
            src={listElementSrc}
            alt='lista'
            className='situaciones__list-vector'
          />
          <p className='situaciones__text'>
            <span className='situaciones__text situaciones__text_accent'>
              La idea de tu obra y el resultado final no se parecen en nada
              porque
            </span>{' '}
            te faltó recurso material, humano y/o económico.
          </p>
        </li>
        <div className='situaciones__divition' />
        <li className='situaciones__element'>
          <img
            src={listElementSrc}
            alt='lista'
            className='situaciones__list-vector'
          />
          <p className='situaciones__text'>
            Ya no sabes a quien más de tu familia invitar a tus obras porque
            <span className='situaciones__text situaciones__text_accent'>
              {' '}
              la estrategia de difusión “no funciona”.
            </span>
          </p>
        </li>
        <div className='situaciones__divition' />
        <li className='situaciones__element'>
          <img
            src={listElementSrc}
            alt='lista'
            className='situaciones__list-vector'
          />
          <p className='situaciones__text'>
            Con tal de “hacer arte”{' '}
            <span className='situaciones__text situaciones__text_accent'>
              aceptas condiciones no favorables
            </span>{' '}
            de creación.
          </p>
        </li>
        <div className='situaciones__divition' />
        <li className='situaciones__element'>
          <img
            src={listElementSrc}
            alt='lista'
            className='situaciones__list-vector'
          />
          <p className='situaciones__text'>
            Confías que con lo ganado en taquilla saldrá para
            <span className='situaciones__text situaciones__text_accent'>
              {' '}
              pagarle a tu equipo y saldar deudas.
            </span>
          </p>
        </li>
        <div className='situaciones__divition' />
        <li className='situaciones__element'>
          <img
            src={listElementSrc}
            alt='lista'
            className='situaciones__list-vector'
          />
          <p className='situaciones__text'>
            Consideras que{' '}
            <span className='situaciones__text situaciones__text_accent'>
              {' '}
              en la universidad no te prepararon
            </span>{' '}
            para enfrentarte a temas de producción y gestión y no sientes
            seguridad de
            <span className='situaciones__text situaciones__text_accent'>
              {' '}
              enfrentarte al mundo profesional.
            </span>
          </p>
        </li>
        <div className='situaciones__divition' />
        <li className='situaciones__element'>
          <img
            src={listElementSrc}
            alt='lista'
            className='situaciones__list-vector'
          />
          <p className='situaciones__text'>
            <span className='situaciones__text situaciones__text_accent'>
              Inviertes tus ahorros o pides prestado
            </span>{' '}
            para crear pero nunca lo recuperas.
          </p>
        </li>
        <div className='situaciones__divition' />
        <li className='situaciones__element'>
          <img
            src={listElementSrc}
            alt='lista'
            className='situaciones__list-vector'
          />
          <p className='situaciones__text'>
            Crees que siempre eligen a los mismos para los apoyos
            institucionales, pero
            <span className='situaciones__text situaciones__text_accent'>
              {' '}
              no lo intentas porque no sientes la seguridad para hacerlo.{' '}
            </span>
          </p>
        </li>
      </ul>
      <div className='situaciones__container situaciones__container_cta'>
        <p className='situaciones__hook situaciones__hook_accent'>
          Estás en el lugar correcto,
        </p>
        <p className='situaciones__hook'> tenemos una solución para ti.</p>
        <p className='situaciones__cta'>
          Únete a esta generación para aprender{' '}
          <span className='situaciones__cta situaciones__cta_accent'>
            las herramientas que te permitirán concretar tus ideas
          </span>
        </p>
        <a href='/' className='situaciones__btn'>
          Haz click aquí
        </a>
        <p className='situaciones__cta'>Para formar parte de este grupo.</p>
      </div>
    </section>
  );
}
