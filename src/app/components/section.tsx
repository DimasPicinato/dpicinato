import { cn } from '@/lib/utils';

export default function Section({
  name,
  children,
  autoSize,
}: {
  name?: string;
  children?: React.ReactNode;
  autoSize?: boolean;
}) {
  return (
    <section
      id={name}
      className={cn(
        'grid w-full grid-cols-[auto_1fr] items-center gap-8 px-8',
        !autoSize && 'h-screen',
      )}
    >
      <div className="flex h-full w-8 flex-col items-center gap-8 *:shrink">
        {name && (
          <>
            <div
              className={cn('h-full w-0 border-l-2', autoSize && 'min-h-10')}
            />
            <h6 className="w-1 text-center font-mono break-all">{name}</h6>
          </>
        )}
        <div className={cn('h-full w-0 border-l-2', autoSize && 'min-h-10')} />
      </div>
      <div className="flex justify-center">{children}</div>
    </section>
  );
}
