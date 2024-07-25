'use client'

import { useState } from 'react'
import './index.scss'

export default function Macbook() {
  const [view, setView] = useState(false)

  return (
    <div className="Macbook">
      <img src="/macbook/moldura.png" alt="moldura macbook" />
      {view
        ? <>
          <embed src="/macbook/curriculo.pdf" type="application/pdf" width="100%" height="100%" />
          <button></button>
        </>
        : <>
          <div className="content">
            <h2>Sobre mim</h2>
            <hr />
            <p>
              Sou um desenvolvedor front-end com experiência em desenvolvimento web e mobile. Com habilidades em HTML, CSS, JavaScript, TypeScript, e frameworks modernos como React, React Native e Next.js, possuo um sólido conhecimento na construção de interfaces responsivas e de alta performance. Utilizo também ferramentas como Git, GitHub, Bootstrap, Tailwind e Sass para garantir a eficiência e a qualidade dos projetos. <br />
              <br />
              Atualmente, trabalho remotamente como desenvolvedor front-end na AD Soluções em Tecnologia desde abril de 2024, onde também atuo como mentor nos cursos de Beginner (HTML, CSS e JavaScript) e JavaScript (React, React Native e Next.js). Além disso, estou em processo de formação no curso de Desenvolvimento de Sistemas na Etec de Lins, com previsão de conclusão em 2025. <br />
              <br />
              Estou em constante busca por novos desafios que me permitam aplicar e expandir minhas habilidades. Tenho interesse em aprofundar meus conhecimentos em back-end e explorar novas áreas de desenvolvimento para oferecer soluções ainda mais completas e integradas.
            </p>
          </div>
          <button></button>
        </>
      }
    </div>
  )
}