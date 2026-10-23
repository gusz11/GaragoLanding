import { Archive, ArrowUpRight, Building2, CarFront, Check, Layers3, MapPin, ScanLine } from 'lucide-react';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { AppShowcase } from '@/components/showcase';
import { FAQ } from '@/components/faq';
import { Brand } from '@/components/brand';

export default function Home() {
  return <div id="inicio">
    <Header />
    <main id="conteudo" tabIndex={-1}>
      <Hero />
      <section className="section shell opportunity" aria-labelledby="opportunity-title">
        <div className="opportunity-heading"><p className="section-label">Um novo uso para o que já existe</p><h2 id="opportunity-title">De um lado,<br />espaço sobrando.<br />Do outro, alguém<br />precisando.</h2></div>
        <div className="opportunity-story"><p className="lead">A oportunidade pode estar a poucos andares de distância.</p><p>Uma vaga sem uso. Um armário disponível. Um vizinho que precisa de mais espaço. O Garago nasce para aproximar essas possibilidades com mais organização.</p><div className="space-connection" aria-label="Vagas e armários conectados ao condomínio"><span><CarFront aria-hidden="true" />Vagas</span><i aria-hidden="true" /><span className="connection-home"><Building2 aria-hidden="true" />Seu condomínio</span><i aria-hidden="true" /><span><Archive aria-hidden="true" />Armários</span></div><p className="muted">Menos informações espalhadas em conversas. Mais clareza para anunciar e encontrar espaços.</p></div>
      </section>
      <section id="como-funciona" className="section shell how" aria-labelledby="how-title">
        <div className="section-heading"><div><p className="section-label">Como funciona</p><h2 id="how-title">Do espaço disponível<br />à próxima possibilidade.</h2></div><p>Uma experiência pensada para os dois lados:<br />quem anuncia e quem procura.</p></div>
        <ol className="steps">
          <li><span className="step-number">01</span><h3>Anuncie seu espaço</h3><p>Cadastre uma vaga ou armário e mantenha as informações do anúncio organizadas no Inventário.</p><span className="status status-live">Inventário integrado</span></li>
          <li><span className="step-number">02</span><h3>Encontre o espaço ideal</h3><p>Explore a proposta de busca por vagas e armários e consulte as características de cada espaço.</p><span className="status">Catálogo demonstrativo</span></li>
          <li><span className="step-number">03</span><h3>Gerencie em um só lugar</h3><p>Cuide dos seus anúncios e conheça os fluxos previstos para acompanhar os períodos de locação.</p><span className="status">Reservas demonstrativas</span></li>
        </ol>
      </section>
      <section id="funcionalidades" className="features-section section" aria-labelledby="features-title"><div className="shell features-layout">
        <div className="features-intro"><p className="section-label">Funcionalidades</p><h2 id="features-title">Cada espaço<br />com o seu lugar.</h2><p>Da organização dos seus anúncios aos detalhes que ajudam na escolha, o Garago reúne a experiência em um aplicativo.</p><a className="text-link" href="#aplicativo">Ver as telas do produto <ArrowUpRight size={18} aria-hidden="true" /></a><div className="feature-symbols" aria-hidden="true"><CarFront /><Archive /></div></div>
        <div className="feature-list">
          <article><Layers3 aria-hidden="true" /><div><h3>Seu Inventário, organizado</h3><p>Vagas e armários com cadastro, consulta, edição e exclusão conectados ao serviço real.</p></div><span className="feature-availability">Integrado</span></article>
          <article><MapPin aria-hidden="true" /><div><h3>O condomínio como ponto de partida</h3><p>Uma proposta de Catálogo que aproxima os espaços de quem já está por perto.</p></div><span className="feature-availability">Demo</span></article>
          <article><ScanLine aria-hidden="true" /><div><h3>Detalhes que fazem diferença</h3><p>Localização, valor e características para conhecer a vaga ou o armário antes de decidir.</p></div><span className="feature-availability">Demo</span></article>
          <article><Check aria-hidden="true" /><div><h3>Acompanhamento da locação</h3><p>Uma prévia dos períodos, renovações e etapas de entrega, com dados fictícios e sem cobrança.</p></div><span className="feature-availability">Demo</span></article>
        </div>
      </div></section>
      <AppShowcase />
      <section className="section shell benefits" aria-labelledby="benefits-title"><div><p className="section-label">Pensado para a vida em condomínio</p><h2 id="benefits-title">Mais útil para você.<br />Mais sentido para<br />o seu condomínio.</h2></div><ul>{['Melhor aproveitamento dos espaços disponíveis.', 'Mais praticidade para encontrar espaço por perto.', 'Anúncios organizados e fáceis de consultar.', 'Gestão centralizada de vagas e armários.', 'Uma experiência pensada entre moradores.'].map((benefit) => <li key={benefit}><Check size={18} aria-hidden="true" /><span>{benefit}</span></li>)}</ul></section>
      <section className="final-cta shell" aria-labelledby="cta-title"><div className="cta-line" aria-hidden="true" /><p>O próximo espaço pode estar mais perto.</p><h2 id="cta-title">Mais possibilidades<br />para cada espaço.</h2><a className="button button-light" href="#aplicativo">Explore o Garago <ArrowUpRight size={19} aria-hidden="true" /></a><span>Conheça as telas e o estágio atual do aplicativo.</span></section>
      <FAQ />
    </main>
    <footer className="site-footer shell"><div className="footer-top"><div><a href="#inicio" className="brand-link" aria-label="Garago, voltar ao início"><Brand /></a><p>Novas possibilidades para vagas<br />e armários no seu condomínio.</p></div><nav aria-label="Navegação do rodapé"><a href="#como-funciona">Como funciona</a><a href="#funcionalidades">Funcionalidades</a><a href="#aplicativo">O aplicativo</a><a href="#perguntas">Perguntas frequentes</a></nav><div className="footer-project"><span>Um projeto em construção.</span><a href="https://github.com/GaragoOrganization/Garago_Front" target="_blank" rel="noopener noreferrer">Conheça o projeto no GitHub <ArrowUpRight size={15} aria-hidden="true" /><span className="sr-only"> (abre em nova aba)</span></a></div></div><div className="footer-bottom"><span>Garago · Projeto de software em desenvolvimento.</span><span>Feito para aproveitar melhor o que está perto.</span></div></footer>
  </div>;
}
