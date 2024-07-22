import './global.scss'

export const metadata = {
  title: "D_Picinato",
  description: "Sou Dimas Picinato, mentor e desenvolvedor front-end web e mobile, com expertise em React, React Native, Next.js e Sass. Meu trabalho é transformar desafios complexos em soluções digitais inovadoras e impactantes. Explore meu portfólio para conhecer meus projetos e entre em contato para parcerias.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">{children}</html>
  )
}