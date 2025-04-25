# Studium Front-end

Este é o repositório do front-end do Studium, uma plataforma para estudantes que auxilia na gestão e organização dos estudos.

## 📦 Tecnologias Utilizadas

O projeto utiliza as seguintes tecnologias e ferramentas no front-end, seguindo o padrão de arquitetura MVVM:

- **[TypeScript](https://www.typescriptlang.org/)** - Superset do JavaScript para tipagem estática.
- **[Next.js](https://nextjs.org/)** - Framework React para desenvolvimento web moderno.
- **[TanStack Query](https://tanstack.com/query/latest)** - Gerenciamento de estado assíncrono e caching de dados.
- **[Zustand](https://zustand-demo.pmnd.rs/)** - Gerenciamento de estado global minimalista.
- **[Zod](https://zod.dev/)** - Validação de esquemas e parsing de dados.
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS para estilização eficiente.
- **[ShadCN](https://ui.shadcn.com/)** - Componentes acessíveis e estilizados para UI.
- **[React Icons](https://react-icons.github.io/react-icons/)** - Biblioteca de ícones para React.

## 🚀 Instalação e Configuração

### 🔧 Pré-requisitos

Certifique-se de ter instalado:

- **[Node.js](https://nodejs.org/)** (versão recomendada: LTS)
- **[pnpm](https://pnpm.io/)** (gerenciador de pacotes utilizado no projeto)

### 📥 Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/dimas-picinato/studium-frontend.git
   ```
2. Acesse o diretório do projeto:
   ```sh
   cd studium-frontend
   ```
3. Instale as dependências:
   ```sh
   pnpm install
   ```

### 🌎 Configuração de Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto e configure as variáveis de ambiente:

```env
NEXT_PUBLIC_API_URL=""
NEXT_PUBLIC_ENVIRONMENT="development" # Opções: development, staging, beta, production
```

> ⚠️ **Importante**: Nunca compartilhe suas credenciais em repositórios públicos.

## ▶️ Execução

### 🔥 Desenvolvimento

Para rodar o ambiente de desenvolvimento, utilize:

```sh
pnpm dev
```

O servidor será iniciado em `http://localhost:{PORT}` com a porta configurada nas variáveis de ambiente.

### 📦 Build para Produção

Para gerar a versão otimizada para produção, execute:

```sh
pnpm build
```

Para iniciar o servidor após o build:

```sh
pnpm start
```

---

Desenvolvido por [Dimas Picinato](https://github.com/D-Picinato). Todos os direitos reservados.
