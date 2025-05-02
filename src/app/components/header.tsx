import { HiOutlineArrowTopRightOnSquare } from 'react-icons/hi2';

import Link from 'next/link';

import { techNavItems } from '@/constants/tech-nav-items';
import { stacks } from '@/constants/technologies';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const styles: Record<string, string> = {
  content:
    'flex w-[calc(100vw-3rem)] flex-col gap-8 sm:grid sm:w-[38rem] sm:grid-cols-2',
  titleContent: 'flex items-center justify-between gap-2',
};

export default function Header() {
  return (
    <header
      className="bg-background w-full border-b-2 p-4"
      style={{ zIndex: 9999999 }}
    >
      <NavigationMenu className="flex h-full items-center">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Início</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className={styles.content}>
                <NavigationMenuLink
                  asChild
                  className="contents"
                >
                  <Link
                    href="/#sobremim"
                    className="flex w-full flex-col gap-2"
                  >
                    <div className={styles.titleContent}>
                      <h4>Sobre Mim</h4>
                      <HiOutlineArrowTopRightOnSquare />
                    </div>
                    <p className="w-full truncate text-sm">
                      Sou desenvolvedor <b>Full Stack</b> com experiência
                      profissional em aplicações <b>Front-end</b> e sólida
                      expertise no desenvolvimento de sistemas <b>Back-end</b>
                    </p>
                  </Link>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Tecnologias</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className={styles.content}>
                {techNavItems.map(({ id, title, description, stack }, i) => (
                  <NavigationMenuLink
                    key={i}
                    asChild
                    className="contents"
                  >
                    <Link
                      href={`/technologies#${id}`}
                      className="flex flex-col gap-2"
                    >
                      <div className={styles.titleContent}>
                        <h4>{title}</h4>
                        <HiOutlineArrowTopRightOnSquare />
                      </div>
                      <p className="w-full truncate text-sm">{description}</p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {stacks[stack].map(({ Element, color }, i) => (
                          <Element
                            key={i}
                            style={{ color }}
                            className="size-6"
                          />
                        ))}
                      </div>
                    </Link>
                  </NavigationMenuLink>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
