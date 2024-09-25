import efiSrc from '../../assets/logos/aliados/efi.png';
import culturaSrc from '../../assets/logos/aliados/cultura.png';
import inbalSrc from '../../assets/logos/aliados/inbal.png';
import cntSrc from '../../assets/logos/aliados/cnt.png';
import ccbSrc from '../../assets/logos/aliados/ccb.png';
import foncaSrc from '../../assets/logos/aliados/fonca.png';
import sacpcSrc from '../../assets/logos/aliados/sacpc.png';
import helenicoSrc from '../../assets/logos/aliados/helenico.png';
import teatrosSrc from '../../assets/logos/aliados/teatros.png';
import chapultepecSrc from '../../assets/logos/aliados/chapultepec.png';
import recioSrc from '../../assets/logos/aliados/recio.png';
import tramaSrc from '../../assets/logos/aliados/trama.png';
import arceSrc from '../../assets/logos/aliados/arce.png';
import mosSrc from '../../assets/logos/aliados/mos.png';
import apagaSrc from '../../assets/logos/aliados/apaga.png';

export default function Allies() {
  return (
    <section className='allies'>
      <div className='allies__container allies__container_title'>
        <p className='allies__title allies__title_shadow'>Aliados</p>
        <p className='allies__title'>Aliados</p>
      </div>
      <div className='allies__grid-container'>
        <div className='allies__grid-element'>
          <img src={efiSrc} alt='logo efiartes' className='allies__logo' />
        </div>
        <div className='allies__grid-element'>
          <img src={culturaSrc} alt='logo ' className='allies__logo' />
        </div>
        <div className='allies__grid-element'>
          <img src={inbalSrc} alt='logo INBAL' className='allies__logo' />
        </div>
        <div className='allies__grid-element'>
          <img
            src={cntSrc}
            alt='logo Coordinación Nacional de Teatro'
            className='allies__logo'
          />
        </div>
        <div className='allies__grid-element'>
          <img src={ccbSrc} alt='logo CCB' className='allies__logo' />
        </div>
        <div className='allies__grid-element'>
          <img src={sacpcSrc} alt='logo SACPC' className='allies__logo' />
        </div>
        <div className='allies__grid-element'>
          <img src={helenicoSrc} alt='logo Helénico' className='allies__logo' />
        </div>
        <div className='allies__grid-element'>
          <img
            src={teatrosSrc}
            alt='logo Sistema de Teatros'
            className='allies__logo'
          />
        </div>
        <div className='allies__grid-element'>
          <img
            src={chapultepecSrc}
            alt='logo Chapultepec'
            className='allies__logo'
          />
        </div>
        <div className='allies__grid-element'>
          <img src={recioSrc} alt='logo Recio' className='allies__logo' />
        </div>
        <div className='allies__grid-element'>
          <img src={foncaSrc} alt='logo FONCA' className='allies__logo' />
        </div>
        <div className='allies__grid-element'>
          <img
            src={tramaSrc}
            alt='logo Trama y Drama'
            className='allies__logo'
          />
        </div>
        <div className='allies__grid-element'>
          <img
            src={arceSrc}
            alt='logo Colectivo el Arce'
            className='allies__logo'
          />
        </div>
        <div className='allies__grid-element'>
          <img src={mosSrc} alt='logo MoS' className='allies__logo' />
        </div>
        <div className='allies__grid-element'>
          <img
            src={apagaSrc}
            alt='logo Apaga la Luz'
            className='allies__logo'
          />
        </div>
      </div>
    </section>
  );
}
