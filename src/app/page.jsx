import Macbook from '@/components/Macbook'
import './page.scss'
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io"

export default function HomePage() {
  return <body className='HomePage'>
    <main>
      <section>
        <div className="header">
          <h1>
            Olá, sou <span className='text-gradient'>Dimas Picinato</span>, <br />
            Desenvolvedor <span className='text-gradient'>Front-end</span>
          </h1>
        </div>
        <Macbook />
        <div className="container">
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
      </section>
    </main>
  </body>
}