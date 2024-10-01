import { motion } from 'framer-motion';

export default function Quote() {
  return (
    <section className='quote'>
      <motion.p
        className='quote__text'
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        &ldquo;La producción escénica es una danza delicada entre la visión
        creativa y la ejecución práctica.&ldquo; - Anónimo.
      </motion.p>
      <div className='quote__overlay' />
    </section>
  );
}
