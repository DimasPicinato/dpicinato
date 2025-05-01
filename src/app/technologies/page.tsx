import { stacks } from '@/constants/technologies';

import Section from '../components/section';
import StackSection from '../components/stack-section';
import Separator from '@/components/ui/separator';

export default function TechnologyPage() {
  return (
    <div className="flex flex-col">
      <Section
        autoSize
        id="languages"
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
        id="frontend"
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
        id="backend"
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
        id="databases"
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
    </div>
  );
}
