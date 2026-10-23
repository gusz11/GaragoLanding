import { Plus } from 'lucide-react';

const questions = [
  ['O que é o Garago?', 'O Garago é um aplicativo em desenvolvimento para aproximar moradores que têm vagas de estacionamento ou armários disponíveis de quem precisa de espaço no mesmo condomínio. A proposta reúne anúncios, descoberta de espaços e acompanhamento da locação.'],
  ['Quem pode utilizar o aplicativo?', 'A experiência foi pensada para moradores maiores de 18 anos, com cadastro e identificação do condomínio. Neste estágio, o acesso ao aplicativo acontece no ambiente de desenvolvimento e testes do projeto.'],
  ['Quais espaços podem ser anunciados?', 'Vagas de estacionamento e armários. O cadastro solicita as informações aceitas pelo serviço para cada tipo de espaço. A utilização também deve respeitar as regras do condomínio.'],
  ['Como funciona o gerenciamento de vagas e armários?', 'No Inventário, o proprietário pode cadastrar, listar, consultar, editar e excluir seus anúncios pelas integrações disponíveis. Ações como reservar, renovar, entregar ou pausar dependem do suporte do serviço; os fluxos apresentados no modo demonstração são simulados.'],
  ['Já posso fazer uma reserva ou um pagamento real?', 'Ainda não. As experiências de catálogo, reserva e pagamento apresentadas nesta página são demonstrativas, usam dados fictícios e não geram cobranças nem contratações.'],
  ['O Garago já está disponível para download?', 'Ainda não há links oficiais de publicação nas lojas. O aplicativo está em desenvolvimento e é testado com Expo Go. Esta página apresenta o produto; não realiza cadastro, download ou inscrição em lista de espera.'],
];

export function FAQ() {
  return <section id="perguntas" className="section shell faq" aria-labelledby="faq-title"><div><p className="section-label">Perguntas frequentes</p><h2 id="faq-title">Antes de<br />dar o próximo passo.</h2><p className="muted">O que você precisa saber sobre o Garago e o momento atual do projeto.</p></div><div className="faq-list">{questions.map(([question, answer]) => <details key={question} name="garago-faq"><summary>{question}<Plus size={20} aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></section>;
}
