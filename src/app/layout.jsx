import Head from 'next/head'
import './global.scss'

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <Head>
        <title>D_Picinato</title>
        <meta name="description" content="Sou Dimas Picinato, mentor e desenvolvedor front-end web e mobile, com expertise em React, React Native, Next.js e Sass. Meu trabalho é transformar desafios complexos em soluções digitais inovadoras e impactantes. Explore meu portfólio para conhecer meus projetos e entre em contato para parcerias." />
        <meta property="og:title" content="D_Picinato" />
        <meta property="og:description" content="Sou Dimas Picinato, mentor e desenvolvedor front-end web e mobile, com expertise em React, React Native, Next.js e Sass. Meu trabalho é transformar desafios complexos em soluções digitais inovadoras e impactantes. Explore meu portfólio para conhecer meus projetos e entre em contato para parcerias." />
        <meta property="og:image" content="https://media.licdn.com/dms/image/D4D03AQFNBqZd5AuRDQ/profile-displayphoto-shrink_800_800/0/1722202996890?e=1727913600&v=beta&t=X63zhfM-ee6fLUbT0bAZoTDEJNzq0jrpBjId1TF10cs" />
        <meta property="og:url" content="https://dpicinato.com" />
        <meta property="og:type" content="website" />
      </Head>
      {children}
    </html>
  )
}