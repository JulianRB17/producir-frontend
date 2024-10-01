export default function CtaS() {
  return (
    <section className='cta-s'>
      <div className='cta-s__container cta-s__container_top'>
        <div className='cta-s__container cta-s__container_quote'>
          <p className='cta-s__quote'>
            &quot;Una idea no ejecutada es un sueño&quot;
          </p>
          <p className='cta-s__quote cta-s__quote_author'>Louis de Rouvroy</p>
        </div>
        <p className='cta-s__hook'>
          Únete a esta generación para aprender las herramientas que te
          permitirán darle forma a tus ideas.
        </p>
      </div>
      <div className='cta-s__container cta-s__container_btn'>
        <button className='cta-s__btn'>
          Quiero formar parte de este grupo
        </button>
      </div>
      <div className='cta-s__overlay' />
    </section>
  );
}