import { HiOutlineArrowTopRightOnSquare } from 'react-icons/hi2';

import Link from 'next/link';

import { Stacks } from '@/@types/stacks';

import { stacks } from '@/constants/technologies';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const techNavItems: {
  id: string;
  title: string;
  description: string;
  stack: Stacks;
}[] = [
  {
    id: 'language',
    title: 'Linguagens',
    description:
      'Tenho domínio das principais linguagens utilizadas no desenvolvimento web, com foco em JavaScript e TypeScript. JavaScript é essencial para aplicações interativas no navegador, enquanto TypeScript oferece tipagem estática e melhora a escalabilidade dos projetos.',
    stack: 'languages',
  },
  {
    id: 'frontend',
    title: 'Front-end',
    description:
      'Atuo no desenvolvimento Front-end com foco em performance, usabilidade e responsividade. Utilizo tecnologias modernas como React, TypeScript e Tailwind CSS para criar interfaces elegantes, funcionais e acessíveis, sempre alinhadas a um bom design system.',
    stack: 'frontend',
  },
  {
    id: 'backend',
    title: 'Back-end',
    description:
      'Possuo sólida experiência no desenvolvimento de sistemas Back-end, com foco em desempenho, escalabilidade e organização do código. Utilizo frameworks modernos e arquiteturas bem definidas para criar APIs eficientes, seguras e de fácil manutenção.',
    stack: 'backend',
  },
  {
    id: 'database',
    title: 'Banco de Dados',
    description:
      'Tenho domínio em bancos de dados relacionais e não relacionais, aplicando modelagem adequada conforme a necessidade de cada projeto. Priorizo o uso de boas práticas como normalização, uso de índices e otimização de consultas para garantir performance e integridade dos dados.',
    stack: 'db',
  },
];

const styles: Record<string, string> = {
  content:
    'flex w-[calc(100vw-3rem)] flex-col gap-8 sm:grid sm:w-[38rem] sm:grid-cols-2',
  titleContent: 'flex items-center justify-between gap-2',
};

export default function Header() {
  return (
    <header
      className="bg-background/80 fixed top-0 left-0 h-16 w-full border-b-2 px-4 backdrop-blur-sm"
      style={{ zIndex: 9999999 }}
    >
      <NavigationMenu className="flex h-full items-center">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Navegação</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className={styles.content}>
                <NavigationMenuLink
                  asChild
                  className="contents"
                >
                  <Link
                    href="/#sobremim"
                    className="flex w-full flex-col gap-2"
                  >
                    <div className={styles.titleContent}>
                      <h4>Sobre Mim</h4>
                      <HiOutlineArrowTopRightOnSquare />
                    </div>
                    <p className="w-full truncate text-sm">
                      Sou desenvolvedor <b>Full Stack</b> com experiência
                      profissional em aplicações <b>Front-end</b> e sólida
                      expertise no desenvolvimento de sistemas <b>Back-end</b>
                    </p>
                  </Link>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Tecnologias</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className={styles.content}>
                {techNavItems.map(({ id, title, description, stack }, i) => (
                  <NavigationMenuLink
                    key={i}
                    asChild
                    className="contents"
                  >
                    <Link
                      href={`/technologies#${id}`}
                      className="flex flex-col gap-2"
                    >
                      <div className={styles.titleContent}>
                        <h4>{title}</h4>
                        <HiOutlineArrowTopRightOnSquare />
                      </div>
                      <p className="w-full truncate text-sm">{description}</p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {stacks[stack].map(({ Element, color }, i) => (
                          <Element
                            key={i}
                            style={{ color }}
                            className="size-6"
                          />
                        ))}
                      </div>
                    </Link>
                  </NavigationMenuLink>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
