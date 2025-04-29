import { cn } from '@/lib/utils';

export default function Separator({
  className,
}: React.HTMLAttributes<HTMLElement>) {
  return <div className={cn('h-full w-0 border-l-2', className)} />;
}
