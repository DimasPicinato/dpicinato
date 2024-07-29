'use client'

import { useState } from 'react'
import './index.scss'
import { IoIosPaper, IoLogoGithub, IoLogoInstagram, IoLogoLinkedin, IoMdPaper } from 'react-icons/io'
import Image from 'next/image'

export default function Macbook() {
  const [view, setView] = useState(false)

  return (
    <div className="Macbook">
      <Image width={840} height={900} src="/macbook/moldura.png" alt="moldura macbook" />
      {view
        ? <>
          <embed src="/macbook/curriculo.pdf" type="application/pdf" width="100%" height="100%" />
        </>
        : <>
          <div className="content">
            <div className="header">
              <img className='fundo' alt="Imagem de fundo de Dimas Picinato" src="https://media.licdn.com/dms/image/D4D16AQFNZgqnG2YNzQ/profile-displaybackgroundimage-shrink_350_1400/0/1722212371082?e=1727913600&v=beta&t=UBqvKZ_FaV7n2YxAU6KaQoUPeKS_ZV3EzJrNVebgWa4" />
              <img className='perfil' alt="Foto de Dimas Picinato" src="https://media.licdn.com/dms/image/D4D03AQFNBqZd5AuRDQ/profile-displayphoto-shrink_200_200/0/1722202996891?e=1727913600&v=beta&t=goG8JYFbkTCRLM2nvAMyFNWrRSG9Xy1JdNeMiGXTaf0" />
              <div className="container">
                <p>contato@dpicinato.com</p>
                <a href="https://github.com/D-Picinato" target="_blank">
                  <IoLogoGithub />
                </a>
                <a href="https://www.linkedin.com/in/dimas-picinato" target="_blank">
                  <IoLogoLinkedin />
                </a>
                <a href="https://www.instagram.com/dimas_picinato/" target="_blank">
                  <IoLogoInstagram />
                </a>
              </div>
            </div>
            <div className="body">
              <h2>Sobre mim</h2>
              <br />
              <p>
                Sou desenvolvedor front-end com experiência em desenvolvimento web e mobile. Tenho habilidades em HTML, CSS, JavaScript, TypeScript, e frameworks modernos como React, React Native e Next.js, possuo um sólido conhecimento na construção de interfaces responsivas e de alta performance. Utilizo também ferramentas como Git, GitHub, Tailwind e Sass para garantir a eficiência e a qualidade dos projetos. <br />
                <br />
                Atualmente, trabalho remotamente como desenvolvedor front-end na AD Soluções em Tecnologia desde abril de 2024, onde também atuo como instrutor nos cursos de Beginner (HTML, CSS e JavaScript) e JavaScript (React, React Native e Next.js). Além disso, estou em processo de formação no curso de Desenvolvimento de Sistemas na Etec de Lins, com previsão de conclusão em 2025. <br />
                <br />
                Estou em constante busca por novos desafios que me permitam aplicar e expandir minhas habilidades. Tenho interesse em aprofundar meus conhecimentos em back-end e explorar novas áreas de desenvolvimento para oferecer soluções ainda mais completas e integradas.
              </p>
            </div>
          </div>
        </>
      }
      <div className="navBar">
        <button className='no-button' onClick={() => setView(!view)}>
          <IoIosPaper />
        </button>
        <hr />
        <a href="https://github.com/D-Picinato" target="_blank">
          <IoLogoGithub />
        </a>
        <a href="https://www.linkedin.com/in/dimas-picinato" target="_blank">
          <IoLogoLinkedin />
        </a>
        <a href="https://www.instagram.com/dimas_picinato/" target="_blank">
          <IoLogoInstagram />
        </a>
      </div>
    </div>
  )
}