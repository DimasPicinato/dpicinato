import Image from 'next/image';
import Section from './components/section';
import SocialMedia from './components/social-media';
import { LogoInstagram, LogoLinkedIn } from '@/components/icons/logos';
import { SiGithub } from 'react-icons/si';
import StackSection from './components/stack-section';
import {
  backTechnologies,
  dbStack,
  frontTechnologies,
  techLanguages,
} from '@/constants/technologies';

export default function Home() {
  return (
    <main className="flex flex-col pt-8">
      <hr />

      <Section name="Sobre - Mim">
        <div className="flex flex-col gap-8">
          <div className="flex w-full max-w-[1024px] items-center justify-center gap-16">
            <div className="flex w-min flex-col gap-2">
              <h1 className="lg:w-max">Desenvolvedor Full Stack</h1>
              <p>
                Sou desenvolvedor <b>Full Stack</b> com experiência profissional
                em aplicações <b>Front-end</b> e sólida expertise no
                desenvolvimento de sistemas <b>Back-end</b>.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="border-foreground row-span-2 flex size-32 items-center justify-center overflow-hidden rounded-full border-4">
                <Image
                  width={256}
                  height={256}
                  objectFit="cover"
                  src="/img/dimas_picinato.jpg"
                  alt="Foto de Dimas Picinato"
                  className="size-full object-cover"
                />
              </div>
              <h2>Dimas Picinato</h2>
            </div>
          </div>
          <hr />
          <div className="flex justify-between gap-2">
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
        </div>
      </Section>

      <hr />

      <Section
        autoSize
        name="Linguagens"
      >
        <StackSection
          title="Linguagens"
          technologyStack={techLanguages}
        />
      </Section>

      <hr />

      <Section
        autoSize
        name="Front-end"
      >
        <StackSection
          title="Stack Front-end"
          technologyStack={frontTechnologies}
        />
      </Section>

      <hr />

      <Section
        autoSize
        name="Back-end"
      >
        <StackSection
          title="Stack Back-end"
          technologyStack={backTechnologies}
        />
      </Section>

      <hr />

      <Section
        autoSize
        name="Banco - de - Dados"
      >
        <StackSection
          title="Bancos de Dados"
          technologyStack={dbStack}
        />
      </Section>
    </main>
  );
}
