import listElementSrc from '../../../../assets/imgs/triangulo.svg';

export default function Description() {
  return (
    <section className='description'>
      <div className='description__container description__container_general'>
        <div className='description__container description__container_title'>
          <p className='description__title'>Te compartimos un poco</p>
          <p className='description__title description__title_accent'>
            de lo que veremos en esta clase:
          </p>
        </div>
        <ul className='description__list'>
          <li className='description__element'>
            <img
              src={listElementSrc}
              alt='lista'
              className='description__list-element'
            />
            <p className='description__text'>
              Aprende cómo{' '}
              <span className='description__text description__text_accent'>
                optimizar los recursos y conseguir mejores resultados{' '}
              </span>
              para tus proyectos escénicos.
            </p>
          </li>
          <div className='description__division' />
          <li className='description__element'>
            <img
              src={listElementSrc}
              alt='lista'
              className='description__list-element'
            />
            <p className='description__text'>
              <span className='description__text description__text_accent'>
                Conoce técnicas para sobreponerte
              </span>{' '}
              a la procrastinación y autosabotaje siendo artista
            </p>
          </li>
          <div className='description__division' />
          <li className='description__element'>
            <img
              src={listElementSrc}
              alt='lista'
              className='description__list-element'
            />
            <p className='description__text'>
              Descubre cómo{' '}
              <span className='description__text description__text_accent'>
                la producción
              </span>{' '}
              también{' '}
              <span className='description__text description__text_accent'>
                es un acto creativo.
              </span>
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
