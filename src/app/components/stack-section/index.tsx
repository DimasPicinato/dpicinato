import { TechnologyStack } from '@/@types/technologies';

import { cn } from '@/lib/utils';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import styles from './styles.module.css';

const { TechCardContainer } = styles;

export default function StackSection({
  technologyStack,
}: {
  technologyStack: TechnologyStack;
}) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <div className="flex w-full flex-wrap justify-center gap-2">
        {technologyStack.map(({ Element, color, name, about }, i) => (
          <Popover key={i}>
            <PopoverTrigger className="flex w-[48%] shrink-0 lg:w-36 xl:w-36">
              <div
                className={cn(
                  'flex w-full cursor-pointer flex-col gap-2 rounded-sm border-2 p-2 transition-all duration-75',
                  TechCardContainer,
                )}
                style={{ color }}
              >
                <div
                  className="flex aspect-video w-full items-center justify-center rounded-sm border-2"
                  style={{ borderColor: color }}
                >
                  <Element className="size-[70%]" />
                </div>
                <h5 className="text-foreground">{name}</h5>
              </div>
            </PopoverTrigger>
            <PopoverContent className="flex flex-col gap-2">
              <div
                className="flex items-center gap-2"
                style={{ color }}
              >
                <Element className="size-8" />
                <h4>{name}</h4>
              </div>
              <p className="text-left">{about}</p>
            </PopoverContent>
          </Popover>
        ))}
      </div>
    </div>
  );
}
