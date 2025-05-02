import '@/styles/globals.css';

import type { Metadata, Viewport } from 'next';

import Footer from './components/footer';
import Header from './components/header';

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

export const viewport: Viewport = { colorScheme: 'dark' };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-br"
      className="dark"
    >
      <body className="grid h-screen grid-rows-[auto_1fr] overflow-hidden">
        <Header />
        <div
          aria-label="page-content"
          className="overflow-auto"
        >
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
