import { HiOutlineMailOpen } from 'react-icons/hi';
import { HiOutlinePhone } from 'react-icons/hi2';
import { SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center gap-8 border-t-2 bg-black p-8 text-white">
      <div className="flex w-min flex-wrap justify-center gap-16 sm:w-fit">
        <section className="flex w-full flex-col gap-4 sm:w-fit">
          <h4>Links</h4>
          <ul>
            <li>
              <Link href="/#sobremim">Sobre Mim</Link>
            </li>
          </ul>
        </section>
        <section className="flex w-full flex-col gap-4 sm:w-fit">
          <h4>Contato</h4>
          <div className="grid grid-cols-[auto_auto] gap-2">
            <span className="flex items-center gap-1">
              <HiOutlineMailOpen />
              E-mail:
            </span>
            <span className="w-max">contato@dpicinato.com</span>

            <span className="flex items-center gap-1">
              <HiOutlinePhone />
              Telefone:
            </span>
            <span className="w-max">14 99838-8371</span>
          </div>
        </section>
        <section className="flex w-full flex-col gap-4 sm:w-fit">
          <h4>Redes Sociais</h4>
          <div className="grid grid-cols-[auto_auto] gap-2">
            <span className="flex items-center gap-1">
              <SiInstagram />
              Instagram:
            </span>
            <a
              href="https://www.instagram.com/dimas_picinato/"
              target="_blank"
              className="w-max"
            >
              dimas_picinato
            </a>

            <span className="flex items-center gap-1">
              <SiLinkedin />
              LinkedIn:
            </span>
            <a
              href="https://www.linkedin.com/in/dimas-picinato"
              target="_blank"
              className="w-max"
            >
              dimas-picinato
            </a>

            <span className="flex items-center gap-1">
              <SiGithub />
              GitHub:
            </span>
            <a
              href="https://github.com/D-Picinato"
              target="_blank"
              className="w-max"
            >
              D-Picinato
            </a>
          </div>
        </section>
        <section className="flex w-full flex-col gap-4 sm:w-fit">
          <h4>Projetos</h4>
          <div className="grid grid-cols-[auto_auto] gap-2">
            <span className="flex items-center gap-1">Studium:</span>
            <a
              href="https://beta-studium.dpicinato.com"
              target="_blank"
              className="w-max"
            >
              beta-studium.dpicinato.com
            </a>

            <span className="flex items-center gap-1">Kanbanager:</span>
            <a
              href="https://kanbanager.dpicinato.com"
              target="_blank"
              className="w-max"
            >
              kanbanager.dpicinato.com
            </a>
          </div>
        </section>
      </div>
      <p className="text-sm text-white/40">
        &copy; {2025 != currentYear ? `2025 - ${currentYear}` : 2025} Dimas
        Picinato. Todos os direitos reservados.
      </p>
    </footer>
  );
}
