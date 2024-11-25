import "../scss/globals.scss"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-br">
    <head>
      <title>D_Picinato</title>
      <meta name="description" content="Sou desenvolvedor full stack com foco em web, atuando remotamente desde abril de 2024 na AD Soluções em Tecnologia, onde desenvolvo sistemas web e atuo como mentor em cursos na área. Estou cursando Desenvolvimento de Sistemas na Etec de Lins, com conclusão prevista para 2025. Tenho experiência no desenvolvimento de aplicações back-end e estou me especializando em análise de requisitos e gerenciamento de projetos utilizando metodologias ágeis." />
    </head>
    <body>
      {children}
    </body>
  </html>
}