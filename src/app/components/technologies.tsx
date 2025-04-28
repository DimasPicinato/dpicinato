'use client';

import {
  LogoJavaScript,
  LogoNodeJS,
  LogoReact,
  LogoSass,
  LogoTypeScript,
} from '@/components/icons/logos';
import Carousel from './carousel';

export default function Technologies() {
  return (
    <div className="flex w-full flex-col gap-2">
      <Carousel
        slides={[
          LogoJavaScript,
          LogoTypeScript,
          LogoNodeJS,
          LogoReact,
          LogoSass,
        ]}
      />
    </div>
  );
}
