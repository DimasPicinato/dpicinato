import { JSX } from 'react';
import { IconType } from 'react-icons';

export type TechnologyStack = {
  Element: (({ ...props }: { [k: string]: unknown }) => JSX.Element) | IconType;
  name: string;
  color: string;
  about: string;
}[];
