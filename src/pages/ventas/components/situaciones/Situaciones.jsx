import listElementSrc from '../../../../assets/imgs/triangulo.svg';

export default function Situaciones() {
  return (
    <section className='venta'>
      <h2 className='venta__title'>
        <span className='venta__title venta__title_shadow'>pasado qué</span>
        ¿Te ha pasado qué?:
      </h2>
      <ul className='venta__list'>
        <li className='venta__element'>
          <img
            src={listElementSrc}
            alt='lista'
            className='venta__list-vector'
          />
          <p className='venta__text'>
            <span className='venta__text venta__text_accent'>
              La idea de tu obra y el resultado final no se parecen en nada
              porque
            </span>{' '}
            te faltó recurso material, humano y/o económico.
          </p>
        </li>
        <div className='venta__divition' />
        <li className='venta__element'>
          <img
            src={listElementSrc}
            alt='lista'
            className='venta__list-vector'
          />
          <p className='venta__text'>
            Ya no sabes a quien más de tu familia invitar a tus obras porque
            <span className='venta__text venta__text_accent'>
              {' '}
              la estrategia de difusión “no funciona”.
            </span>
          </p>
        </li>
        <div className='venta__divition' />
        <li className='venta__element'>
          <img
            src={listElementSrc}
            alt='lista'
            className='venta__list-vector'
          />
          <p className='venta__text'>
            Con tal de “hacer arte” aceptas{' '}
            <span className='venta__text venta__text_accent'>
              condiciones no favorables
            </span>{' '}
            de creación.
          </p>
        </li>
        <div className='venta__divition' />
        <li className='venta__element'>
          <img
            src={listElementSrc}
            alt='lista'
            className='venta__list-vector'
          />
          <p className='venta__text'>
            Confías que con lo ganado en taquilla saldrá para pagarle a tu
            equipo y saldar deudas.
            <span className='venta__text venta__text_accent'> </span>
          </p>
        </li>
        <div className='venta__divition' />
        <li className='venta__element'>
          <img
            src={listElementSrc}
            alt='lista'
            className='venta__list-vector'
          />
          <p className='venta__text'>
            Consideras que en la universidad no te prepararon para enfrentarte a
            temas de producción y gestión y no sientes seguridad de enfrentarte
            al mundo profesional.
            <span className='venta__text venta__text_accent'> </span>
          </p>
        </li>
        <div className='venta__divition' />
        <li className='venta__element'>
          <img
            src={listElementSrc}
            alt='lista'
            className='venta__list-vector'
          />
          <p className='venta__text'>
            Inviertes tus ahorros o pides prestado para crear pero nunca lo
            recuperas.
            <span className='venta__text venta__text_accent'>
              {' '}
              Crees que siempre eligen a los mismos para los apoyos
              institucionales, pero no lo intentas porque no sientes la
              seguridad para hacerlo.
            </span>
          </p>
        </li>
        <div className='venta__divition' />
        <li className='venta__element'>
          <img
            src={listElementSrc}
            alt='lista'
            className='venta__list-vector'
          />
          <p className='venta__text'>
            Estás en el lugar correcto, tenemos una solución para ti.
            <span className='venta__text venta__text_accent'> </span>
          </p>
        </li>
      </ul>
    </section>
  );
}
