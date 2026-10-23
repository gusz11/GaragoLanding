'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Archive, CalendarDays, CarFront, LayoutList, Plus, Search, Star, UserRound } from 'lucide-react';
import { Phone, type ScreenName } from './phone';

const screens = [
  { id: 'inventory', title: 'Inventário', icon: LayoutList, status: 'Gerenciamento integrado', heading: 'Seus espaços, em um só lugar.', description: 'Cadastre, consulte, edite e exclua anúncios de vagas e armários. O Inventário conecta essas operações ao serviço real do Garago.', note: 'A captura utiliza dados de demonstração, incluindo o acompanhamento de uma reserva.' },
  { id: 'catalog', title: 'Catálogo', icon: Search, status: 'Experiência demonstrativa', heading: 'Uma busca que começa por perto.', description: 'Explore a proposta de catálogo, alterne entre vagas e armários e veja como encontrar um espaço no condomínio.', note: 'Os anúncios apresentados são fictícios. A descoberta de ofertas reais ainda depende da integração do serviço.' },
  { id: 'parking', title: 'Detalhes de vaga', icon: CarFront, status: 'Experiência demonstrativa', heading: 'Conheça o espaço antes de escolher.', description: 'Cobertura, altura e outras características ganham lugar na apresentação da vaga, junto à localização e ao valor.', note: 'Esta captura mostra o detalhamento no catálogo demonstrativo. Não constitui uma oferta de locação.' },
  { id: 'locker', title: 'Detalhes de armário', icon: Archive, status: 'Experiência demonstrativa', heading: 'Um lugar para o que precisa ficar.', description: 'Consulte a apresentação de um armário, com dimensões, localização e informações para avaliar o espaço.', note: 'Esta é uma tela demonstrativa. No Inventário real, o app utiliza apenas as informações fornecidas pelo serviço.' },
  { id: 'reservations', title: 'Reservas', icon: CalendarDays, status: 'Experiência demonstrativa', heading: 'Cada período, mais fácil de acompanhar.', description: 'Veja a experiência prevista para acompanhar datas, progresso e etapas de uma locação de vaga ou armário.', note: 'Reservas, renovações, entregas e pagamentos são simulados. Não há cobrança nem contratação real neste modo.' },
  { id: 'create-space', title: 'Adicionar espaço', icon: Plus, status: 'Cadastro no Inventário', heading: 'Seu anúncio começa pelos detalhes.', description: 'Conheça o formulário para informar o valor do aluguel e as características do espaço que deseja anunciar.', note: 'Esta captura registra uma etapa anterior do formulário. As opções disponíveis acompanham a evolução do serviço.' },
  { id: 'reviews', title: 'Avaliações', icon: Star, status: 'Experiência demonstrativa', heading: 'Mais contexto para a sua escolha.', description: 'Veja como contato, política de cancelamento e avaliações são apresentados nos detalhes de uma vaga.', note: 'As notas e avaliações desta captura são fictícias. A política de cancelamento e as condições reais dependem do serviço.' },
  { id: 'profile', title: 'Perfil', icon: UserRound, status: 'Informações do morador', heading: 'Suas informações, organizadas.', description: 'Uma área para consultar informações cadastrais e de contato do morador, mantendo a identidade visual do aplicativo.', note: 'Algumas informações do perfil podem não estar disponíveis, conforme os dados fornecidos pelo serviço.' },
] as const;

export function AppShowcase() {
  const [selected, setSelected] = useState<ScreenName>('inventory');
  const screen = screens.find((item) => item.id === selected)!;
  const reduced = useReducedMotion();
  return <section id="aplicativo" className="showcase section" aria-labelledby="showcase-title">
    <div className="shell">
      <div className="section-heading"><div><p className="section-label">O aplicativo</p><h2 id="showcase-title">Um olhar por dentro<br />do Garago.</h2></div><p>Conheça as telas do produto.<br />Selecione uma experiência para explorar.</p></div>
      <div className="showcase-layout">
        <div className="screen-options" role="group" aria-label="Escolher tela do aplicativo">{screens.map(({ id, title, icon: Icon }) => <button key={id} className={`screen-option ${selected === id ? 'is-active' : ''}`} aria-pressed={selected === id} aria-controls="screen-description" onClick={() => setSelected(id)}><Icon size={21} aria-hidden="true" /><span>{title}</span><span className="selection-mark" aria-hidden="true" /></button>)}</div>
        <div className="showcase-stage"><span className="stage-orbit orbit-one" aria-hidden="true" /><span className="stage-orbit orbit-two" aria-hidden="true" /><AnimatePresence mode="wait" initial={false}><motion.div key={selected} initial={{ opacity: reduced ? 1 : .5, x: reduced ? 0 : 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: reduced ? 1 : .5 }} transition={{ duration: reduced ? 0 : .18 }}><Phone screen={selected} /></motion.div></AnimatePresence></div>
        <div className="showcase-description" id="screen-description" aria-live="polite" aria-atomic="true"><span className={`status ${selected === 'inventory' ? 'status-live' : ''}`}>{screen.status}</span><h3>{screen.heading}</h3><p>{screen.description}</p><p className="screen-note">{screen.note}</p><span className="screen-count">{screens.findIndex((item) => item.id === selected) + 1} / {screens.length}</span></div>
      </div>
      <p className="showcase-footnote">Capturas reais do aplicativo em diferentes etapas de desenvolvimento. Os anúncios e períodos de demonstração não representam ofertas atuais.</p>
    </div>
  </section>;
}

