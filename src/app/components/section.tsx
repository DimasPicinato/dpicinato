import { cn } from '@/lib/utils';

import Separator from '@/components/ui/separator';

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
        'grid w-full grid-cols-[auto_1fr] items-center pl-8',
        !autoSize && 'h-screen',
      )}
    >
      <div className="flex h-full w-8 flex-col items-center gap-2 *:shrink">
        {name && (
          <>
            <Separator className={cn(autoSize && 'min-h-10')} />
            <h6 className="w-min text-center font-mono break-all">{name}</h6>
          </>
        )}
        <Separator className={cn(autoSize && 'min-h-10')} />
      </div>
      <div className="flex h-full justify-center p-8">{children}</div>
    </section>
  );
}
