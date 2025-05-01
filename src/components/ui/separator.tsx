import { cn } from '@/lib/utils';

interface SeparatorProps extends React.HTMLAttributes<HTMLElement> {
  isHorizontalOnMobile?: boolean;
}

export default function Separator({
  className,
  isHorizontalOnMobile = false,
}: SeparatorProps) {
  return (
    <div
      className={cn(
        'border',
        isHorizontalOnMobile ? 'h-0 w-full sm:h-full sm:w-0' : 'h-full w-0',
        className,
      )}
    />
  );
}
