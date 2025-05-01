import { SiGithub } from 'react-icons/si';

import Image from 'next/image';

import Section from './components/section';
import SocialMedia from './components/social-media';
import { LogoInstagram, LogoLinkedIn } from '@/components/icons/logos';
import Separator from '@/components/ui/separator';

export default function HomePage() {
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
    <main className="flex flex-col">
      <Section
        id="sobremim"
        name="Sobre - Mim"
      >
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
    </main>
  );
}
