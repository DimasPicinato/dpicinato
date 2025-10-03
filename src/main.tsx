import './styles/globals.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

import { AppLayout } from './app/layout';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<AppLayout />}
        >
          <Route
            path="projects"
            element={<Outlet />}
          >
            <Route
              index
              element={<h3>Projetos</h3>}
            />
            <Route
              path="studium"
              element={<h3>Studium</h3>}
            />
            <Route
              path="kanbanager"
              element={<h3>Kanbanager</h3>}
            />
            <Route
              path="cvasg"
              element={<h3>Cálculadora de Volume e Área de Sólidos Geométricos</h3>}
            />
            <Route
              path="begginer-project-tmdb"
              element={<h3>Projeto Begginer - TMDB</h3>}
            />
            <Route
              path="todolist"
              element={<h3>To Do List</h3>}
            />
          </Route>

          <Route
            path="experience"
            element={<Outlet />}
          >
            <Route
              index
              element={<h3>Experiência</h3>}
            />
            <Route
              path="adsolucoesemtecnologia"
              element={<h3>AD Soluções em Tecnologia</h3>}
            />
          </Route>

          <Route
            path="education"
            element={<Outlet />}
          >
            <Route
              index
              element={<h3>Formação</h3>}
            />
            <Route
              path="ams-etec-lins"
              element={<h3>Desenvolvimento de Sistemas - Etec de Lins</h3>}
            />
          </Route>

          <Route
            path="technologies"
            element={<Outlet />}
          >
            <Route
              index
              element={<h3>Tecnologias</h3>}
            />
            <Route
              path="stack"
              element={<h3>Stack</h3>}
            />
            <Route
              path="backend"
              element={<h3>Back-end</h3>}
            />
            <Route
              path="frontend"
              element={<h3>Front-end</h3>}
            />
            <Route
              path="databases"
              element={<h3>Bancos de dados</h3>}
            />
            <Route
              path="extras"
              element={<h3>Ferramentas Extras</h3>}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
