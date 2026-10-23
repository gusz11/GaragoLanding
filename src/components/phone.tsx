import Image, { type StaticImageData } from 'next/image';
import inventory from '../../public/images/WhatsApp Image 2026-10-19 at 22.23.51.jpeg';
import catalog from '../../public/images/WhatsApp Image 2026-10-19 at 22.23.51 (1).jpeg';
import reservations from '../../public/images/WhatsApp Image 2026-10-19 at 22.23.51 (2).jpeg';
import parking from '../../public/images/WhatsApp Image 2026-10-19 at 22.23.51 (3).jpeg';
import createSpace from '../../public/images/WhatsApp Image 2026-10-19 at 22.23.52 (1).jpeg';
import reviews from '../../public/images/WhatsApp Image 2026-10-19 at 22.23.52 (2).jpeg';
import profile from '../../public/images/WhatsApp Image 2026-10-19 at 22.23.52.jpeg';
import locker from '../../public/screens/locker.png';

export type ScreenName = 'inventory' | 'catalog' | 'parking' | 'locker' | 'reservations' | 'create-space' | 'reviews' | 'profile';
const screenshots = {
  inventory: { image: inventory, alt: 'Inventário do Garago com uma vaga em uso e um armário disponível; dados fictícios.' },
  catalog: { image: catalog, alt: 'Catálogo do Garago com filtros e anúncios de vagas e armários; demonstração.' },
  parking: { image: parking, alt: 'Detalhes de uma vaga no Garago com cobertura, altura e valor; demonstração.' },
  locker: { image: locker, alt: 'Detalhes de um armário no Garago com iluminação, área e valor; demonstração.' },
  reservations: { image: reservations, alt: 'Reservas do Garago com datas, progresso e opções de acompanhamento; demonstração.' },
  'create-space': { image: createSpace, alt: 'Formulário do Garago para adicionar um espaço ao Inventário, com valor e características da vaga.' },
  reviews: { image: reviews, alt: 'Tela do Garago com contato do proprietário, política de cancelamento e avaliações fictícias da vaga.' },
  profile: { image: profile, alt: 'Perfil de morador no Garago com informações cadastrais e de contato.' },
} satisfies Record<ScreenName, { image: StaticImageData; alt: string }>;

export function Phone({ screen, priority = false, className = '' }: { screen: ScreenName; priority?: boolean; className?: string }) {
  const screenshot = screenshots[screen];
  return <div className={'phone ' + className}><div className="phone-camera" aria-hidden="true" /><Image className="phone-screen" src={screenshot.image} alt={screenshot.alt} sizes="(max-width: 640px) 68vw, (max-width: 1024px) 35vw, 310px" priority={priority} /><div className="phone-home" aria-hidden="true" /></div>;
}
