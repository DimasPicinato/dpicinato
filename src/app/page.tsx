import { SiGithub } from 'react-icons/si';

import Image from 'next/image';

import { stacks } from '@/constants/technologies';

import Section from './components/section';
import SocialMedia from './components/social-media';
import StackSection from './components/stack-section';
import { LogoInstagram, LogoLinkedIn } from '@/components/icons/logos';
import Separator from '@/components/ui/separator';

export default function Home() {
  const SocialMedias = () => (
    <div className="flex flex-col justify-between gap-2 p-4 sm:flex-row">
      <SocialMedia
        name="D-Picinato"
        logo={SiGithub}
        url="https://github.com/D-Picinato"
      />
      <SocialMedia
        name="dimas-picinato"
        logo={LogoLinkedIn}
        url="https://www.linkedin.com/in/dimas-picinato"
      />
      <SocialMedia
        name="dimas_picinato"
        logo={LogoInstagram}
        url="https://www.instagram.com/dimas_picinato/"
      />
    </div>
  );

  return (
    <main className="flex flex-col sm:pt-8">
      <hr className="hidden sm:block" />

      <Section name="Sobre - Mim">
        <div className="flex flex-col justify-center gap-8 sm:gap-0">
          <div className="flex w-full flex-col items-center justify-center gap-8 sm:flex-row sm:gap-0">
            <div className="flex flex-col gap-2 sm:w-min sm:p-8">
              <h1 className="lg:w-max">Desenvolvedor Full Stack</h1>
              <p>
                Sou desenvolvedor <b>Full Stack</b> com experiência profissional
                em aplicações <b>Front-end</b> e sólida expertise no
                desenvolvimento de sistemas <b>Back-end</b>.
              </p>
            </div>
            <Separator isHorizontalOnMobile />
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center gap-4 sm:p-8">
                <div className="border-foreground row-span-2 flex size-32 items-center justify-center overflow-hidden rounded-full border-4">
                  <Image
                    width={256}
                    height={256}
                    src="/img/dimas_picinato.jpg"
                    alt="Foto de Dimas Picinato"
                    className="size-full object-cover"
                  />
                </div>
                <h2>Dimas Picinato</h2>
              </div>
              <div className="contens flex h-full sm:hidden">
                <Separator />
                <SocialMedias />
              </div>
            </div>
          </div>
          <div className="hidden sm:contents">
            <hr />
            <SocialMedias />
          </div>
        </div>
      </Section>

      <hr />

      <Section
        autoSize
        name="Linguagens"
      >
        <div className="grid h-full grid-cols-1 items-center gap-8 sm:grid-cols-[1fr_auto_1fr]">
          <div className="flex flex-col">
            <h2>Linguagens</h2>
            <p>
              Tenho domínio das principais linguagens utilizadas no
              desenvolvimento web, com foco em <b>JavaScript</b> e{' '}
              <b>TypeScript</b>. JavaScript é essencial para aplicações
              interativas no navegador, enquanto TypeScript oferece tipagem
              estática e melhora a escalabilidade dos projetos.
            </p>
          </div>
          <Separator isHorizontalOnMobile />
          <StackSection technologyStack={stacks.languages} />
        </div>
      </Section>

      <hr />

      <Section
        autoSize
        name="Front-end"
      >
        <div className="grid h-full grid-cols-1 items-center gap-8 sm:grid-cols-[1fr_auto_1fr]">
          <div className="flex flex-col">
            <h2>Stack Front-end</h2>
            <p>
              Atuo no desenvolvimento <b>Front-end</b> com foco em performance,
              usabilidade e responsividade. Utilizo tecnologias modernas como{' '}
              <b>React</b>, <b>TypeScript</b> e <b>Tailwind CSS</b> para criar
              interfaces elegantes, funcionais e acessíveis, sempre alinhadas a
              um bom design system.
            </p>
          </div>
          <Separator isHorizontalOnMobile />
          <StackSection technologyStack={stacks.frontend} />
        </div>
      </Section>

      <hr />

      <Section
        autoSize
        name="Back-end"
      >
        <div className="grid h-full grid-cols-1 items-center gap-8 sm:grid-cols-[1fr_auto_1fr]">
          <div className="flex flex-col">
            <h2>Stack Back-end</h2>
            <p>
              Possuo sólida experiência no desenvolvimento de sistemas{' '}
              <b>Back-end</b>, com foco em desempenho, escalabilidade e
              organização do código. Utilizo frameworks modernos e arquiteturas
              bem definidas para criar APIs eficientes, seguras e de fácil
              manutenção.
            </p>
          </div>
          <Separator isHorizontalOnMobile />
          <StackSection technologyStack={stacks.backend} />
        </div>
      </Section>

      <hr />

      <Section
        autoSize
        name="Banco - de - Dados"
      >
        <div className="grid h-full grid-cols-1 items-center gap-8 sm:grid-cols-[1fr_auto_1fr]">
          <div className="flex flex-col">
            <h2>Banco de Dados</h2>
            <p>
              Tenho domínio em bancos de dados <b>relacionais</b> e{' '}
              <b>não relacionais</b>, aplicando modelagem adequada conforme a
              necessidade de cada projeto. Priorizo o uso de boas práticas como
              normalização, uso de índices e otimização de consultas para
              garantir performance e integridade dos dados.
            </p>
          </div>
          <Separator isHorizontalOnMobile />
          <StackSection technologyStack={stacks.db} />
        </div>
      </Section>
    </main>
  );
}
