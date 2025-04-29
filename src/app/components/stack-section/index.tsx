import { TechnologyStack } from '@/@types/technologies';
import { cn } from '@/lib/utils';
import styles from './styles.module.css';

export default function StackSection({
  title,
  technologyStack,
}: {
  title: string;
  technologyStack: TechnologyStack;
}) {
  const { TechContainer } = styles;

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <h2>{title}</h2>
      <div className="flex w-full flex-wrap justify-center gap-2 px-16">
        {technologyStack.map(({ Element, color }, i) => (
          <div
            className={cn(
              'relative flex shrink-0 basis-1/6 xl:w-[160px] xl:basis-auto',
              TechContainer,
            )}
            key={i}
          >
            <div
              className="flex aspect-video w-full items-center justify-center rounded-sm border-2"
              style={{ borderColor: color }}
            >
              <Element
                style={{ color }}
                className="size-[70%]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
