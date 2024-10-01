import veroSrc from '../../../../assets/imgs/vero.webp';
import julianSrc from '../../../../assets/imgs/julian.webp';

import { motion } from 'framer-motion';

export default function Host() {
  return (
    <section className='host'>
      <div className='host__container host__container_hosts'>
        <div className='host__container host__container_title'>
          <p className='host__title'>¿Quiénes</p>
          <p className='host__title host__title_accent'> impartirán?</p>
        </div>
        <div className='host__container host__container_people'>
          <div className='host__person-element'>
            <img src={veroSrc} alt='Vero Ramos' className='host__photo' />
            <div className='host__container host__container_name'>
              <p className='host__name'>Verónica</p>
              <p className='host__name host__name_accent'>Ramos</p>
            </div>
          </div>
          <div className='host__person-element'>
            <img
              src={julianSrc}
              alt='Julián Reyes Botello'
              className='host__photo'
            />
            <div className='host__container host__container_name'>
              <p className='host__name'>Julián</p>
              <p className='host__name host__name_accent'>Reyes Botello</p>
            </div>
          </div>
        </div>
      </div>
      <div className='host__container host__container_quote'>
        <motion.p
          className='host__quote'
          initial={{ x: -30, y: -30, opacit: 0.5 }}
          transition={{
            duration: 3,
            type: 'spring',
            stiffness: 60,
            ease: 'easeInOut',
          }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
        >
          &quot;Una idea no ejecutada es un sueño&quot;
        </motion.p>
        <motion.p
          className='host__quote host__quote_author'
          initial={{ y: 30, opacit: 0.5 }}
          transition={{
            duration: 3,
            type: 'spring',
            stiffness: 60,
            ease: 'easeInOut',
          }}
          whileInView={{ y: 0, opacity: 1 }}
        >
          Louis de Rouvroy
        </motion.p>
      </div>
      <div className='host__overlay' />
    </section>
  );
}
