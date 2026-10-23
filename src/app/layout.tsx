import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const poppins = localFont({
  src: [
    { path: './fonts/Poppins_400Regular.ttf', weight: '400', style: 'normal' },
    { path: './fonts/Poppins_600SemiBold.ttf', weight: '600', style: 'normal' },
  ],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || 'http://localhost:3000'),
  title: 'Garago — Mais possibilidades para cada espaço',
  description: 'Conheça o Garago: um aplicativo em desenvolvimento para anunciar, encontrar e gerenciar vagas de estacionamento e armários dentro do seu condomínio.',
  applicationName: 'Garago',
  openGraph: {
    title: 'Garago — Mais possibilidades para cada espaço',
    description: 'Vagas e armários. Novas possibilidades dentro do seu condomínio. Conheça o aplicativo e acompanhe o projeto.',
    locale: 'pt_BR', type: 'website', siteName: 'Garago',
  },
  twitter: { card: 'summary_large_image' },
  icons: { icon: '/brand/garago.png', apple: '/brand/garago.png' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR" className={poppins.variable}><body>{children}</body></html>;
}
