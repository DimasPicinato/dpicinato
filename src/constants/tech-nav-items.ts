import { Stacks } from '@/@types/stacks';

export const techNavItems: {
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
