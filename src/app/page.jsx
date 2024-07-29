import Macbook from '../components/Macbook'
import './page.scss'

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
        <h1>Site em <span className='text-gradient'>construção</span>!</h1>
      </section>
    </main>
  </body>
}