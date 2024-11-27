import './index.scss'

import { useCallback, useEffect, useRef, useState } from "react"
import { HiOutlineChevronLeft, HiOutlineChevronRight, HiOutlineDocumentText, HiPause, HiPlay } from "react-icons/hi2"

import Slide, { SlideProps } from './Slide'
import { SiExpress, SiGithub, SiJquery, SiNextdotjs } from 'react-icons/si'
import { Logo_DrawIo, Logo_Figma, Logo_Git, Logo_Instagram, Logo_JavaScript, Logo_Jira, Logo_LinkedIn, Logo_MariaDB, Logo_MySQL, Logo_NodeJS, Logo_React, Logo_Sass, Logo_TypeScript } from '@/assets/icons/Logos'

const slides: SlideProps[] = [
  {
    heading: <>Sou desenvolvedor <span className="text-gradient">Full Stack</span>, e construo ideias no ambiente digital.</>,
    marks: ['Full Stack', 'Web', 'Métodos Ágeis', 'Prototipação UI/UX', 'UML'],
    shortcuts: [
      { name: 'GitHub', icon: <SiGithub />, url: 'https://github.com/D-Picinato' },
      { name: 'LinkedIn', icon: <Logo_LinkedIn />, url: 'https://www.linkedin.com/in/dimas-picinato' },
      { name: 'Instagram', icon: <Logo_Instagram />, url: 'https://www.instagram.com/dimas_picinato/' },
      { name: 'Currículo', icon: <HiOutlineDocumentText /> }
    ],
    description: 'Sou desenvolvedor Front-end profissionalmente desde abril de 2024, atuando na AD Soluções em Tecnologia. Atualmente, estou me especializando em desenvolvimento full stack, ampliando minhas habilidades em gestão, análise e projeto de sistemas, com o objetivo de entregar soluções completas e eficientes.'
  },
  {
    heading: <>Tenho competência em <span className="text-gradient">Gestão, Análise e Projeto de Sistemas</span>.</>,
    marks: ['Scrum', 'Kanban', 'Análise de Requisitos', 'Protótipação', 'UML', 'MER'],
    shortcuts: [
      { name: 'Jira', icon: <Logo_Jira />, url: 'https://www.atlassian.com/software/jira' },
      { name: 'Figma', icon: <Logo_Figma />, url: 'https://www.figma.com' },
      { name: 'Draw.io', icon: <Logo_DrawIo />, url: 'https://app.diagrams.net/' },
      { name: 'Git', icon: <Logo_Git />, url: 'https://github.com' }
    ],
    description: 'Tenho experiência com Scrum e Kanban para gerenciamento ágil de projetos, além de competências em análise de requisitos, criação de artefatos, prototipação, UML e modelo entidade-relacionamento (MER), garantindo soluções eficientes e bem estruturadas.'
  },
  {
    heading: <>Sou profissional na construção de aplicações <span className="text-gradient">Front-end</span> modernas.</>,
    marks: ['Arquitetura MVVM', 'UI/UX', 'Componentização', 'Web'],
    shortcuts: [
      { name: 'JavaScript', icon: <Logo_JavaScript />, url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript' },
      { name: 'TypeScript', icon: <Logo_TypeScript />, url: 'https://www.typescriptlang.org/' },
      { name: 'React', icon: <Logo_React />, url: 'https://reactjs.org/' },
      { name: 'Next.js', icon: <SiNextdotjs />, url: 'https://nextjs.org/' },
      { name: 'Sass/Scss', icon: <Logo_Sass />, url: 'https://sass-lang.com/' },
      { name: 'jQuery', icon: <SiJquery />, url: 'https://jquery.com/' }
    ],
    description: 'Sou um desenvolvedor Front-end com experiência profissional desde abril de 2024, aplicando a arquitetura MVVM em meus projetos para garantir uma separação clara de responsabilidades e facilitar a manutenção do código. Estou sempre buscando aprimorar minhas habilidades e adotar as melhores práticas para construir interfaces interativas, escaláveis e eficientes.'
  },
  {
    heading: <>Estou me aprofundando em desenvolvimento <span className="text-gradient">Back-end</span>.</>,
    marks: ['Arquitetura MVC', 'Microsserviços', 'SOLID', 'API RESTful'],
    shortcuts: [
      { name: 'Node.js', icon: <Logo_NodeJS />, url: 'https://nodejs.org/' },
      { name: 'TypeScript', icon: <Logo_TypeScript />, url: 'https://www.typescriptlang.org/' },
      { name: 'Express', icon: <SiExpress />, url: 'https://expressjs.com/' }
    ],
    description: 'Estou estudando o desenvolvimento de aplicações back-end, criando interfaces para requisições por meio de APIs RESTful. Utilizo arquitetura MVC, orientação a objetos e princípios SOLID para garantir sistemas escaláveis e bem estruturados.'
  },
  {
    heading: <>A caminho de ser <span className="text-gradient">Analista de Banco de Dados</span>.</>,
    marks: ['Modelagem Relacional', 'Normalização', 'MER'],
    shortcuts: [
      { name: 'MySQL', icon: <Logo_MySQL />, url: 'https://www.mysql.com/products/workbench/' },
      { name: 'MariaDB', icon: <Logo_MariaDB />, url: 'https://mariadb.org' }
    ],
    description: 'Estou estudando bancos de dados relacionais, focando em técnicas como normalização e modelagem de dados para criar estruturas eficientes e bem organizadas. Aplico esse conhecimento em pequenos projetos para aprimorar minhas habilidades práticas.'
  }
]

export default function Slider({ slideWidth }: { slideWidth: number }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState<number>(0)
  const [isSliding, setIsSliding] = useState<boolean>(true)

  const toPreview = useCallback(() => {
    setIndex(i => (i <= 0 ? 4 : i - 1))
  }, [])

  const toNext = useCallback(() => {
    setIndex(i => (i >= 4 ? 0 : i + 1))
  }, [])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = slideWidth * index
    }

    if (isSliding) {
      const interval = setInterval(() => {
        toNext()
      }, 8000)

      return () => clearInterval(interval)
    }
  }, [index, isSliding, slideWidth])

  return <div className="Slider">
    <div className="scroll" ref={scrollRef}>
      <div className="slidesContainer">{slides.map((e, i) => <Slide {...e} style={{ width: `${slideWidth}px` }} key={i} />)}</div>
    </div>
    <div className="controll">
      <hr />
      <div className="actions">
        <button onClick={toPreview}><HiOutlineChevronLeft /></button>
        <button onClick={() => setIsSliding(!isSliding)}>{isSliding ? <HiPause /> : <HiPlay />}</button>
        <button onClick={toNext}><HiOutlineChevronRight /></button>
      </div>
    </div>
    <div className="points">
      <button className={index == 0 ? 'active' : ''} onClick={() => setIndex(0)} title='Quem sou'></button>
      <button className={index == 1 ? 'active' : ''} onClick={() => setIndex(1)} title='Análise e Projeto de Sistemas'></button>
      <button className={index == 2 ? 'active' : ''} onClick={() => setIndex(2)} title='Desenvolvimento Front-end'></button>
      <button className={index == 3 ? 'active' : ''} onClick={() => setIndex(3)} title='Desenvolvimento Back-end'></button>
      <button className={index == 4 ? 'active' : ''} onClick={() => setIndex(4)} title='Análise e Projeto de Banco de Dados'></button>
    </div>
  </div>
}