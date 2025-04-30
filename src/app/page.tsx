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
import Separator from '@/components/ui/separator';

export default function Home() {
  return (
    <main className="flex flex-col pt-8">
      <hr />

      <Section name="Sobre - Mim">
        <div className="flex flex-col justify-center">
          <div className="flex w-full max-w-[1024px] items-center justify-center">
            <div className="flex w-min flex-col gap-2 p-8">
              <h1 className="lg:w-max">Desenvolvedor Full Stack</h1>
              <p>
                Sou desenvolvedor <b>Full Stack</b> com experiência profissional
                em aplicações <b>Front-end</b> e sólida expertise no
                desenvolvimento de sistemas <b>Back-end</b>.
              </p>
            </div>
            <Separator />
            <div className="flex flex-col items-center gap-4 p-8">
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
          </div>
          <hr />
          <div className="flex justify-between gap-2 p-4">
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
        <div className="grid h-full grid-cols-[1fr_auto_1fr] items-center gap-8">
          <div className="flex flex-col">
            <h2>Linguagens</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              quaerat dignissimos id quidem animi distinctio perferendis labore
              atque officia iusto? Illum vel facere in vitae optio dignissimos
              molestias, corrupti voluptates.
            </p>
          </div>
          <Separator />
          <StackSection technologyStack={techLanguages} />
        </div>
      </Section>

      <hr />

      <Section
        autoSize
        name="Front-end"
      >
        <div className="grid h-full grid-cols-[1fr_auto_1fr] items-center gap-8">
          <div className="flex flex-col">
            <h2>Stack Front-end</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              quaerat dignissimos id quidem animi distinctio perferendis labore
              atque officia iusto? Illum vel facere in vitae optio dignissimos
              molestias, corrupti voluptates.
            </p>
          </div>
          <Separator />
          <StackSection technologyStack={frontTechnologies} />
        </div>
      </Section>

      <hr />

      <Section
        autoSize
        name="Back-end"
      >
        <div className="grid h-full grid-cols-[1fr_auto_1fr] items-center gap-8">
          <div className="flex flex-col">
            <h2>Stack Back-end</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              quaerat dignissimos id quidem animi distinctio perferendis labore
              atque officia iusto? Illum vel facere in vitae optio dignissimos
              molestias, corrupti voluptates.
            </p>
          </div>
          <Separator />
          <StackSection technologyStack={backTechnologies} />
        </div>
      </Section>

      <hr />

      <Section
        autoSize
        name="Banco - de - Dados"
      >
        <div className="grid h-full grid-cols-[1fr_auto_1fr] items-center gap-8">
          <div className="flex flex-col">
            <h2>Banco de Dados</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              quaerat dignissimos id quidem animi distinctio perferendis labore
              atque officia iusto? Illum vel facere in vitae optio dignissimos
              molestias, corrupti voluptates.
            </p>
          </div>
          <Separator />
          <StackSection technologyStack={dbStack} />
        </div>
      </Section>
    </main>
  );
}
