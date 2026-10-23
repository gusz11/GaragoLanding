'use client';

import { motion, useReducedMotion } from 'motion/react';
import { ArrowDown, Archive, CarFront } from 'lucide-react';
import { Phone } from './phone';

export function Hero() {
  const reduced = useReducedMotion();
  return <section className="hero shell" aria-labelledby="hero-title">
    <motion.div className="hero-copy" initial={false} animate={{ opacity: [0.5, 1], y: reduced ? 0 : [12, 0] }} transition={{ duration: reduced ? 0 : .65 }}>
      <p className="product-context"><span aria-hidden="true" />Vagas e armários no seu condomínio</p>
      <h1 id="hero-title">Seu espaço vale mais.<br />Seu condomínio pode mais.</h1>
      <p className="hero-description">Um lugar para anunciar o que está livre e encontrar o espaço que faz falta. Tudo começa no seu condomínio.</p>
      <div className="hero-actions"><a className="button" href="#aplicativo">Conhecer o aplicativo</a><a className="text-link" href="#como-funciona">Como funciona <ArrowDown size={17} aria-hidden="true" /></a></div>
      <p className="hero-stage">Em desenvolvimento. Conheça o produto e suas experiências demonstrativas.</p>
    </motion.div>
    <motion.div className="hero-art" initial={false} animate={{ opacity: [.4, 1], y: reduced ? 0 : [24, 0] }} transition={{ duration: reduced ? 0 : .9, delay: reduced ? 0 : .12 }}>
      <div className="parking-lines" aria-hidden="true"><i /><i /><i /></div>
      <div className="hero-label label-parking"><CarFront size={18} aria-hidden="true" /> Espaço para chegar.</div>
      <Phone screen="catalog" className="hero-phone-back" priority />
      <Phone screen="inventory" className="hero-phone-front" priority />
      <div className="hero-label label-locker"><Archive size={18} aria-hidden="true" /> Espaço para guardar.</div>
      <p className="hero-caption">Telas reais do app com dados de demonstração.</p>
    </motion.div>
    <div className="hero-foot"><span>Mais perto do que você imagina.</span><span>Dentro do seu condomínio <ArrowDown size={16} aria-hidden="true" /></span></div>
  </section>;
}
