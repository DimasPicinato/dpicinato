import { JSX } from 'react';

export default function Carousel({
  slides,
}: {
  slides: (({ ...props }: React.HTMLAttributes<HTMLElement>) => JSX.Element)[];
}) {
  return (
    <div className="flex w-full items-center justify-center overflow-hidden">
      <div className="flex w-full gap-2">
        {slides.map((Slide, i) => (
          <div
            className="flex aspect-video shrink-0 basis-1/5 items-center justify-center rounded-sm border-2 text-6xl"
            key={i}
          >
            <Slide />
          </div>
        ))}
      </div>
    </div>
  );
}
