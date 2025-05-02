import { cn } from '@/lib/utils';

import Separator from '@/components/ui/separator';

export default function Section({
  id,
  name,
  children,
  autoSize,
}: {
  id: string;
  name?: string;
  children?: React.ReactNode;
  autoSize?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        'grid w-full grid-cols-[auto_1fr] items-center sm:pl-8',
        !autoSize && 'h-screen',
      )}
    >
      <div className="hidden h-full w-4 flex-col items-center gap-2 *:shrink sm:flex sm:w-8">
        {name && (
          <>
            <Separator className={cn(autoSize && 'min-h-10')} />
            <h6 className="w-min text-center font-mono break-all">{name}</h6>
          </>
        )}
        <Separator className={cn(autoSize && 'min-h-10')} />
      </div>
      <div className="flex h-full justify-center p-4 sm:p-8">{children}</div>
    </section>
  );
}
