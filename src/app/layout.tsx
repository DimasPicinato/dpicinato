import {
  ChevronRight,
  CodeXml,
  Cpu,
  Database,
  Dumbbell,
  FolderGit2,
  GraduationCap,
  Mail,
  Monitor,
  MonitorSmartphone,
  Moon,
  Phone,
  PhoneOutgoing,
  Server,
  Sun,
  Wrench,
} from 'lucide-react';
import { SiLinkedin } from 'react-icons/si';
import { Link, Outlet } from 'react-router-dom';

import IcoAMSDSEtecDeLins from '@/assets/icos/education/ams-ds-etec-de-lins.ico';
import IcoADSolucoesEmTecnologia from '@/assets/icos/experience/adsolucoesemtecnologia.png';
import IcoKanbanager from '@/assets/icos/projects/kanbanager.ico';
import IcoStudium from '@/assets/icos/projects/studium.ico';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import { useTheme } from '@/hooks/theme.hook';

export function AppLayout() {
  const { themeMode, setThemeMode } = useTheme();

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header className="z-50 flex items-center justify-between gap-4 border-b p-4">
        <div className="flex items-center gap-4">
          <Link to="/">
            <h2>Dimas Picinato</h2>
          </Link>

          <ChevronRight className="size-4" />

          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Link
                    to="/projects"
                    className="flex items-center gap-2"
                  >
                    <FolderGit2 className="size-4" />
                    Projetos
                  </Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink asChild>
                    <Link to="/projects/studium">
                      <div className="flex w-max items-center gap-2">
                        <img
                          src={IcoStudium}
                          alt="Logo do Studium"
                          className="size-4"
                        />
                        Studium
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/projects/kanbanager">
                      <div className="flex w-max items-center gap-2">
                        <img
                          src={IcoKanbanager}
                          alt="Logo do Kanbanager"
                          className="size-4"
                        />
                        Kanbanager
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  {/* <NavigationMenuLink asChild>
                    <Link to="/projects/cvasg">
                      <div className="flex w-max items-center gap-2">
                        <img
                          src="https://cvasg.dpicinato.com/favicon.ico"
                          alt="Logo da Cálculadora de Volume e Área de Sólidos Geométricos"
                          className="size-4"
                        />
                        CVASG
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/projects/begginer-project-tmdb">
                      <div className="flex w-max items-center gap-2">
                        <img
                          src="https://begginer-project-tmdb.dpicinato.com/favicon.ico"
                          alt="Logo do Projeto Begginer Begginer"
                          className="size-4"
                        />
                        Projeto Begginer - TMDB
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/projects/todolist">
                      <div className="flex w-max items-center gap-2">
                        <img
                          src="https://todolist.dpicinato.com/favicon.ico"
                          alt="Logo do Kanbanager"
                          className="size-4"
                        />
                        To Do List
                      </div>
                    </Link>
                  </NavigationMenuLink> */}
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Link
                    to="/technologies"
                    className="flex w-full min-w-max items-center gap-2"
                  >
                    <Cpu className="size-4" />
                    Tecnologias
                  </Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>
                    <Link
                      to="/technologies/stack"
                      className="flex w-full min-w-max items-center gap-2"
                    >
                      <CodeXml />
                      Stack
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink>
                    <Link
                      to="/technologies/frontend"
                      className="flex w-full min-w-max items-center gap-2"
                    >
                      <MonitorSmartphone />
                      Front-end
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink>
                    <Link
                      to="/technologies/backend"
                      className="flex w-full min-w-max items-center gap-2"
                    >
                      <Server />
                      Back-end
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink>
                    <Link
                      to="/technologies/databases"
                      className="flex w-full min-w-max items-center gap-2"
                    >
                      <Database />
                      Bancos de Dados
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink>
                    <Link
                      to="/technologies/extras"
                      className="flex w-full min-w-max items-center gap-2"
                    >
                      <Wrench />
                      Ferramentas Extras
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Link
                    to="/experience"
                    className="flex w-max items-center gap-2"
                  >
                    <Dumbbell className="size-4" />
                    Experiência
                  </Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink asChild>
                    <Link to="/experience/adsolucoesemtecnologia">
                      <div className="flex w-max items-center gap-2">
                        <img
                          src={IcoADSolucoesEmTecnologia}
                          alt="Logo da AD Soluções em Tecnologia"
                          className="size-4 dark:brightness-[100]"
                        />
                        AD Soluções em Tecnologia
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Link
                    to="/education"
                    className="flex w-max items-center gap-2"
                  >
                    <GraduationCap className="size-4" />
                    Formação
                  </Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink asChild>
                    <Link to="/education/ams-etec-lins">
                      <div className="flex w-max items-center gap-2">
                        <img
                          src={IcoAMSDSEtecDeLins}
                          alt="Logo do Centro Paula Souza"
                          className="size-4"
                        />
                        AMS - Análise e Desenvolvimento de Sistemas - Etec de Lins
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <div className="flex w-max items-center gap-2">
                    <PhoneOutgoing className="size-4" />
                    Contato
                  </div>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>
                    <div className="flex w-max items-center gap-2">
                      <Phone />
                      14 989838-8371
                    </div>
                  </NavigationMenuLink>
                  <NavigationMenuLink>
                    <a
                      target="_blank"
                      className="flex w-max items-center gap-2"
                      href="mailto:contato@dpicinato.com"
                    >
                      <Mail />
                      contato@dpicinato.com
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink>
                    <a
                      target="_blank"
                      className="flex w-max items-center gap-2"
                      href="https://www.linkedin.com/in/dimas-picinato"
                    >
                      <SiLinkedin />
                      Dimas Picinato
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center">
          <Select
            value={themeMode}
            onValueChange={setThemeMode}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="system">
                <Monitor />
                Sistema
              </SelectItem>
              <SelectItem value="light">
                <Sun />
                Claro
              </SelectItem>
              <SelectItem value="dark">
                <Moon />
                Escuro
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer></footer>
    </div>
  );
}
