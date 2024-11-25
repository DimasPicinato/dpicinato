import './index.scss'

import { useEffect, useRef, useState } from "react"
import { HiOutlineChevronLeft, HiOutlineChevronRight, HiOutlineDocumentText, HiPause, HiPlay } from "react-icons/hi2"

import { SiExpress, SiGithub, SiJquery, SiNextdotjs } from 'react-icons/si'
import Slide from './Slide'
import { Logo_DrawIo, Logo_Figma, Logo_Git, Logo_Instagram, Logo_JavaScript, Logo_Jira, Logo_LinkedIn, Logo_MariaDB, Logo_MongoDB, Logo_MySQL, Logo_NodeJS, Logo_PostgreSQL, Logo_React, Logo_Sass, Logo_TypeScript } from '@/assets/icons/Logos'

export default function Slider({ slideWidth }: { slideWidth: number }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState<number>(0)
  const [isSliding, setIsSliding] = useState<boolean>(true)

  const toPreview = () => {
    if (index <= 0) {
      setIndex(4)
      return
    }
    setIndex(index - 1)
  }

  const toNext = () => {
    if (index >= 4) {
      setIndex(0)
      return
    }
    setIndex(index + 1)
  }

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
  }, [index, isSliding])

  return <div className="Slider">
    <div className="scroll" ref={scrollRef}>
      <div className="slidesContainer">

        {/* Slide `Quem Sou` */}
        <Slide
          width={slideWidth}
          heading={<>Sou desenvolvedor <span className="text-gradient">Full Stack</span>, e construo ideias no ambiente digital.</>}
          marks={['Full Stack', 'Web', 'Prototipação UI/UX', 'Métodos Ágeis']}
          shortcuts={[
            { name: 'GitHub', icon: <SiGithub />, url: 'https://github.com/D-Picinato' },
            { name: 'LinkedIn', icon: <Logo_LinkedIn />, url: 'https://www.linkedin.com/in/dimas-picinato' },
            { name: 'Instagram', icon: <Logo_Instagram />, url: 'https://www.instagram.com/dimas_picinato/' },
            { name: 'Currículo', icon: <HiOutlineDocumentText /> }
          ]}
          description='Sou desenvolvedor full stack com foco em web, atuando remotamente desde abril de 2024 na AD Soluções em Tecnologia, onde desenvolvo sistemas web e atuo como mentor em cursos na área. Estou cursando Desenvolvimento de Sistemas na Etec de Lins, com conclusão prevista para 2025. Tenho experiência no desenvolvimento de aplicações back-end e estou me especializando em análise de requisitos e gerenciamento de projetos usando metodologias ágeis.'
        />

        {/* Slide `Como Desenvolvo` */}
        <Slide
          width={slideWidth}
          heading={<>Tenho expertise em <span className='text-gradient'>Análise e Projeto de Sistemas</span>.</>}
          marks={['Scrum', 'Kanban', 'Análise de Requisitos', 'Protótipação', 'UML', 'MER']}
          shortcuts={[
            { name: 'Jira', icon: <Logo_Jira />, url: 'https://www.atlassian.com/software/jira' },
            { name: 'Figma', icon: <Logo_Figma />, url: 'https://www.figma.com' },
            { name: 'Draw.io', icon: <Logo_DrawIo />, url: 'https://app.diagrams.net/' },
            { name: 'Git', icon: <Logo_Git />, url: 'https://github.com' }
          ]}
          description='Sigo um processo estruturado para desenvolver sistemas eficientes e bem planejados. Utilizo metodologias ágeis como Scrum e Kanban, realizo análise de requisitos, prototipação e modelagem técnica. Ferramentas como Jira, Figma, Draw.io, Git e GitHub são fundamentais para gerenciar o fluxo de trabalho, criar protótipos e garantir o versionamento. Também aplico técnicas como UML e Modelagem de Entidade-Relacionamento (MER) para oferecer soluções sólidas e funcionais.'
        />

        {/* Slide `Front-end` */}
        <Slide
          width={slideWidth}
          heading={<>Sou profissional na construção de aplicações <span className='text-gradient'>Front-end</span> modernas.</>}
          marks={['Arquitetura MVVM', 'UI/UX', 'Componentização', 'Web']}
          shortcuts={[
            { name: 'JavaScript', icon: <Logo_JavaScript />, url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript' },
            { name: 'TypeScript', icon: <Logo_TypeScript />, url: 'https://www.typescriptlang.org/' },
            { name: 'React', icon: <Logo_React />, url: 'https://reactjs.org/' },
            { name: 'Next.js', icon: <SiNextdotjs />, url: 'https://nextjs.org/' },
            { name: 'Sass/Scss', icon: <Logo_Sass />, url: 'https://sass-lang.com/' },
            { name: 'jQuery', icon: <SiJquery />, url: 'https://jquery.com/' }
          ]}
          description='Uso React e Next.js em minhas aplicações criar interfaces dinâmicas e de alto desempenho. Para estilização, aplico Sass/Scss, proporcionando soluções modernas e escaláveis. Com foco em UI/UX, crio interfaces intuitivas e acessíveis. A componentização e a arquitetura MVVM asseguram a manutenibilidade e escalabilidade do código.'
        />

        {/* Slide `Back-end` */}
        <Slide
          width={slideWidth}
          heading={<>Estou me aprofundando em desenvolvimento <span className='text-gradient'>Back-end</span>.</>}
          marks={['Arquitetura MVC', 'Microsserviços', 'SOLID', 'API RESTful']}
          shortcuts={[
            { name: 'Node.js', icon: <Logo_NodeJS />, url: 'https://nodejs.org/' },
            { name: 'TypeScript', icon: <Logo_TypeScript />, url: 'https://www.typescriptlang.org/' },
            { name: 'Express', icon: <SiExpress />, url: 'https://expressjs.com/' }
          ]}
          description='Estou me aprofundando em Node.js para construir aplicações back-end eficientes, utilizando a arquitetura MVC, microsserviços e princípios SOLID. Além disso, crio APIs RESTful escaláveis e performáticas. Para o desenvolvimento, faço uso de tecnologias como Express.js e TypeScript, que são essenciais para garantir código limpo e de fácil manutenção.'
        />

        {/* Slide `Database` */}
        <Slide
          width={slideWidth}
          heading={<>A caminho de ser <span className='text-gradient'>Analista de Banco de Dados</span>.</>}
          marks={['Modelagem Relacional', 'Normalização', 'MER']}
          shortcuts={[
            { name: 'MySQL', icon: <Logo_MySQL />, url: 'https://www.mysql.com' },
            { name: 'MariaDB', icon: <Logo_MariaDB />, url: 'https://mariadb.org' },
            // { name: 'PostgreSQL', icon: <Logo_PostgreSQL />, url: 'https://www.postgresql.org' },
            // { name: 'MongoDB', icon: <Logo_MongoDB />, url: 'https://www.mongodb.com' }
          ]}
          description='Sou capaz de projetar bancos de dados relacionais eficientes, utilizando técnicas como normalização e modelagem relacional. Com o MySQL, construo bancos de dados escaláveis e performáticos para suportar as necessidades das aplicações que desenvolvo, aplicando boas práticas de design e consulta SQL.'
        />

      </div>
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