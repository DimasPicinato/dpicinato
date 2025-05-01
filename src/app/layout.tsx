import '@/styles/globals.css';
import type { Metadata } from 'next';

import Footer from './components/footer';

export const metadata: Metadata = {
  title: 'Dimas Picinato',
  description:
    'Portfólio de Dimas Picinato, desenvolvedor full stack com experiência em desenvolvimento de aplicações web.',
  applicationName: 'Dimas Picinato',
  authors: [{ name: 'Dimas Picinato', url: 'https://dpicinato.com' }],
  keywords: [
    'Dimas Picinato',
    'portfólio',
    'programador',
    'desenvolvedor',
    'developer',
    'full stack',
    'front',
    'back',
    'Node.js',
    'JavaScript',
    'TypeScript',
    'Express',
    'NestJS',
    'Vite',
    'React',
    'Next.js',
    'projetos pessoais',
    'sistemas',
    'aplicações',
    'web',
    'prototipação',
    'UI/UX',
  ],
  openGraph: {
    type: 'website',
    title: 'Dimas Picinato',
    siteName: 'Dimas Picinato',
    description:
      'Portfólio de Dimas Picinato, desenvolvedor full stack com experiência em desenvolvimento de aplicações web.',
  },
  twitter: {
    card: 'summary',
    title: 'Dimas Picinato',
    site: '@Dimas Picinato',
    description:
      'Portfólio de Dimas Picinato, desenvolvedor full stack com experiência em desenvolvimento de aplicações web.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-br"
      className="dark"
    >
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
