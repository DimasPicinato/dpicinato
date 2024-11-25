'use client'

import './page.scss'

import { IoCodeSlashOutline } from 'react-icons/io5'
import { useEffect, useRef, useState } from 'react'

import Slider from '@/components/Slider'
import { SiGithub, SiInstagram } from 'react-icons/si'
import { HiOutlineMail } from 'react-icons/hi'
import { HiOutlinePhone } from 'react-icons/hi2'
import { FaLinkedinIn } from 'react-icons/fa6'
import { Logo_DP } from '@/assets/icons/Logos'

export default function Home() {
  const headerRef = useRef<HTMLElement>(null)
  const [slideWidth, setSlideWidth] = useState<number>(0)

  useEffect(() => {
    const updateSlideWidth = () => {
      if (headerRef.current) {
        setSlideWidth(headerRef.current.offsetWidth)
      }
    }

    const headerToggle = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if (headerRef.current && scrollTop > 0) {
        headerRef.current?.classList.add('minor')
      } else {
        headerRef.current?.classList.remove('minor')
      }
    }

    headerToggle()
    updateSlideWidth()
    window.addEventListener('resize', updateSlideWidth)
    window.addEventListener('scroll', headerToggle)

    return () => {
      window.removeEventListener('resize', updateSlideWidth)
      window.removeEventListener('scroll', headerToggle)
    }
  }, [])

  return <div className='HomePage'>
    <header ref={headerRef}>
      <div className="title">
        <IoCodeSlashOutline />
        <h3>Dimas Picinato</h3>
      </div>
      <nav>
        <a draggable={false} href="#conhecame">Conheça-me</a>
        <a draggable={false} href="#meusprojetos">Meus projetos</a>
        <a draggable={false} href="#meublog">Meu Blog</a>
        <a draggable={false} href="#contato">Contato</a>
      </nav>
    </header>
    <main>
      <section id="conhecame" style={{ paddingTop: `${headerRef.current?.offsetHeight}px` }}>
        {slideWidth > 0 && <Slider slideWidth={slideWidth} />}
      </section>
      <h1>Página em Construção!</h1>
    </main>
    <footer id='contato'>
      <div className="sections">
        <section>
          <h3>Contato</h3>
          <div className="item">
            <HiOutlineMail />
            <span>contato@dpicinato.com</span>
          </div>
          <div className="item">
            <HiOutlinePhone />
            <span>14 99838-8371</span>
          </div>
        </section>
        <section>
          <h3>Redes Sociais</h3>
          <a href="https://www.instagram.com/dimas_picinato/" className="item">
            <SiInstagram />
            <span>Instagram</span>
          </a>
          <a href="https://www.linkedin.com/in/dimas-picinato" className="item">
            <FaLinkedinIn />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/D-Picinato" className="item">
            <SiGithub />
            <span>GitHub</span>
          </a>
        </section>
      </div>
      <div className="item">
        <span>&copy;</span>
        <Logo_DP />
        <p>Dimas Picinato - Todos os direitos reservados</p>
      </div>
    </footer>
  </div>
}