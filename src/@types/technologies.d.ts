import { IconType } from 'react-icons';
import { JSX } from 'react';

export type TechnologyStack = {
  Element: (({ ...props }: { [k: string]: unknown }) => JSX.Element) | IconType;
  name: string;
  color: string;
  about: string;
}[];
