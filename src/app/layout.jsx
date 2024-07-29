import { ThemeProvider } from '../Theme'
import './global.scss'

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="pt-br">
        <head>
          <title>D_Picinato</title>
          <meta name="description" content="Sou Dimas Picinato, mentor e desenvolvedor front-end web e mobile, com expertise em React, React Native, Next.js e Sass. Meu trabalho é transformar desafios complexos em soluções digitais inovadoras e impactantes. Explore meu portfólio para conhecer meus projetos e entre em contato para parcerias." />
          <meta property="og:title" content="D_Picinato" />
          <meta property="og:description" content="Sou Dimas Picinato, mentor e desenvolvedor front-end web e mobile, com expertise em React, React Native, Next.js e Sass. Meu trabalho é transformar desafios complexos em soluções digitais inovadoras e impactantes. Explore meu portfólio para conhecer meus projetos e entre em contato para parcerias." />
          <meta property="og:image" content="https://media.licdn.com/dms/image/D4D16AQFNZgqnG2YNzQ/profile-displaybackgroundimage-shrink_350_1400/0/1722212371082?e=1727913600&v=beta&t=UBqvKZ_FaV7n2YxAU6KaQoUPeKS_ZV3EzJrNVebgWa4" />
          <meta property="og:url" content="https://dpicinato.com" />
          <meta property="og:type" content="website" />
        </head>
        {children}
      </html>
    </ThemeProvider>
  )
}