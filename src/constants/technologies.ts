import { DiMysql, DiSass } from 'react-icons/di';
import {
  SiCss3,
  SiExpress,
  SiFastify,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

import { Stacks } from '@/@types/stacks';
import { TechnologyStack } from '@/@types/technologies';

export const stacks: Record<Stacks, TechnologyStack> = {
  languages: [
    {
      Element: SiJavascript,
      name: 'JavaScript',
      color: '#f0db4f',
      about:
        'Linguagem de programação essencial para o desenvolvimento web, permitindo a criação de interfaces dinâmicas e interativas no navegador.',
    },
    {
      Element: SiTypescript,
      name: 'TypeScript',
      color: '#3178c6',
      about:
        'Superset do JavaScript que adiciona tipagem estática e recursos avançados, melhorando a escalabilidade e a manutenção do código.',
    },
  ],
  frontend: [
    {
      Element: SiReact,
      name: 'React',
      color: '#00d8ff',
      about:
        'Biblioteca JavaScript para construção de interfaces de usuário, baseada em componentes reutilizáveis e reatividade.',
    },
    {
      Element: SiNextdotjs,
      name: 'Next.js',
      color: 'var(--foreground)',
      about:
        'Framework para aplicações React que oferece renderização híbrida (SSR e SSG), roteamento automático e otimizações avançadas.',
    },
    {
      Element: DiSass,
      name: 'Sass',
      color: '#cd6799',
      about:
        'Pré-processador CSS que adiciona funcionalidades como variáveis, mixins e nesting, facilitando a organização e reutilização de estilos.',
    },
    {
      Element: SiTailwindcss,
      name: 'Tailwind CSS',
      color: '#00bcff',
      about:
        'Framework utilitário para CSS que permite criar layouts responsivos e modernos com classes diretamente no HTML.',
    },
    {
      Element: SiHtml5,
      name: 'HTML',
      color: '#f54a00',
      about:
        'Linguagem de marcação fundamental para estruturar páginas web e definir seus elementos visuais e semânticos.',
    },
    {
      Element: SiCss3,
      name: 'CSS',
      color: '#3178c6',
      about:
        'Linguagem de estilo que define a aparência visual de páginas web, incluindo cores, layouts, animações e responsividade.',
    },
  ],
  backend: [
    {
      Element: SiNodedotjs,
      name: 'Node.js',
      color: '#83cd29',
      about:
        'Ambiente de execução para JavaScript no servidor, baseado no motor V8, ideal para aplicações escaláveis e orientadas a eventos.',
    },
    {
      Element: SiPrisma,
      name: 'Prisma ORM',
      color: 'var(--foreground)',
      about:
        'ORM moderno para TypeScript e Node.js que facilita o acesso a bancos de dados com tipagem forte e migrações automatizadas.',
    },
    {
      Element: SiExpress,
      name: 'Express',
      color: 'var(--foreground)',
      about:
        'Framework web minimalista para Node.js, conhecido por sua simplicidade e flexibilidade na criação de APIs RESTful e aplicações web.',
    },
    {
      Element: SiFastify,
      name: 'Fastify',
      color: 'var(--foreground)',
      about:
        'Framework web focado em performance para Node.js, com arquitetura leve e suporte nativo a JSON Schema e validação automática.',
    },
    {
      Element: SiNestjs,
      name: 'NestJS',
      color: '#ff2056',
      about:
        'Framework para Node.js baseado em TypeScript e arquitetura modular, inspirado no Angular, ideal para aplicações escaláveis e organizadas.',
    },
  ],
  db: [
    {
      Element: DiMysql,
      name: 'MySQL',
      color: '#0069a8',
      about:
        'Sistema de gerenciamento de banco de dados relacional amplamente utilizado, conhecido por sua estabilidade, performance e ampla adoção.',
    },
    {
      Element: SiPostgresql,
      name: 'PostgreSQL',
      color: '#007595',
      about:
        'Banco de dados relacional avançado e open-source, reconhecido por sua conformidade com padrões SQL, extensibilidade e robustez.',
    },
    {
      Element: SiRedis,
      name: 'Redis',
      color: '#fb2c36',
      about:
        'Banco de dados em memória baseado em chave-valor, utilizado para caching, filas, sessões e aplicações em tempo real de alta performance.',
    },
    {
      Element: SiMongodb,
      name: 'MongoDB',
      color: '#00a63e',
      about:
        'Banco de dados NoSQL orientado a documentos, ideal para aplicações flexíveis que lidam com dados semi-estruturados e de rápida iteração.',
    },
  ],
};
