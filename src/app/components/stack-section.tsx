import { TechnologyStack } from '@/@types/technologies';

export default function StackSection({
  technologyStack,
}: {
  technologyStack: TechnologyStack;
}) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <div className="flex w-full flex-wrap justify-center gap-2 px-16">
        {technologyStack.map(({ Element, color }, i) => (
          <div
            className="relative flex w-36 shrink-0 xl:w-40 xl:basis-auto"
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
