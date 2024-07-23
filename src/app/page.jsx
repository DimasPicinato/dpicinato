import './page.scss'

export default function HomePage() {
  return <body className='HomePage'>
    <main>
      <section>
        <div className="header">
          <h1>
            Olá, sou <span className='text-gradient'>Dimas Picinato</span> <br />
            Desenvolvedor <span className='text-gradient'>Front-end</span>
          </h1>
          <div className="description">
          </div>
        </div>
        <div className="siteExemplo">
          <img src="./macbook-molde.png" alt="moldura macbook" />
          <div className="content">
            <p>
            </p>
          </div>
        </div>
      </section>
    </main>
  </body>
}