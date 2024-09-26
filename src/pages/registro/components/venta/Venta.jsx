import listElementSrc from '../../../../assets/imgs/triangulo-azul.svg';

export default function Venta() {
  return (
    <section className='venta'>
      <h2 className='venta__title'>
        <span className='venta__title venta__title_shadow'>para ti si</span>
        Esta clase es para ti si:
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
              Quieres desarrollar tus propios proyectos
            </span>{' '}
            de artes escénicas -circo, danza o teatro- y no sabes por dónde
            empezar.
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
            <span className='venta__text venta__text_accent'>
              No entiendes conceptos
            </span>{' '}
            de las convocatorias como &quot;Desglose de taquilla&quot; o
            &quot;Presupuesto&quot;, mucho menos tienes idea de cómo hacerlo
            <span className='venta__text venta__text_accent'>
              y eso te impide materializar tus ideas.
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
            Planeas y creas con recursos propios pero terminas{' '}
            <span className='venta__text venta__text_accent'>
              perdiendo tiempo, esfuerzo y dinero.
            </span>
          </p>
        </li>
      </ul>
    </section>
  );
}
