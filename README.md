# CONEXÃO Escola

<img src="https://i.ibb.co/PvXtQRPy/logo.png" width="264px">
 
Uma plataforma para fazer o match entre professores de escolas públicas e pessoas querendo ajudar a enriquecer a experiência educacional dos alunos.
Este projeto Hackathon é um MVP para conclusão da Pós Gradução em Full Stack Development pela FIAP.

## Visão Geral do Projeto

O Conexão Escola é uma plataforma online que oferece uma solução inovadora para conectar profissionais voluntários ao ambiente escolar público brasileiro, criando uma ponte entre aqueles que desejam compartilhar conhecimentos e habilidades com estudantes que podem se beneficiar dessas experiências.

A plataforma serve como um hub digital onde profissionais de diversas áreas podem cadastrar ofertas de serviços voluntários e as escolas públicas podem facilmente descobrir e acessar essas oportunidades em sua região. Podem ser oferecidos projetos como aulas de meditação, treinamentos esportivos, cursos profissionalizantes, eventos comemorativos, terapias, oficinas artísticas, etc.

O objetivo é democratizar o acesso a experiências educacionais enriquecedoras, complementando o currículo escolar tradicional com atividades diferentes e conhecimentos práticos.

O impacto esperado é a transformação significativa da experiência educacional dos alunos da rede pública, proporcionando oportunidades que normalmente seriam inacessíveis, além de criar uma rede de compartilhamento de conhecimento que beneficia toda a comunidade escolar.

## Problema

Existe uma desconexão no sistema educacional público brasileiro que afeta dois grupos principais: as escolas, que necessitam de recursos e oportunidades para enriquecer a experiência educacional dos alunos, e os profissionais dispostos a contribuir voluntariamente para isso.
Essa desconexão acontece por causa de algumas barreiras:

- Do lado das escolas

  - Recursos financeiros limitados para contratar profissionais especializados em atividades extracurriculares
  - Dificuldade dos professores e gestores em identificar e conectar-se com profissionais dispostos a realizar trabalho voluntário
  - Tempo alto gasto na busca por parcerias e oportunidades, às vezes sem resultado
  - Desigualdade constante no acesso a experiências educacionais enriquecedoras em comparação com escolas privadas

- Do lado dos fornecedores/voluntários
  - Falta de um canal direto para que possam oferecer seus serviços às escolas
  - Frustração ao tentar estabelecer contato com escolas que podem não ter interesse específico em suas propostas
  - Desistência de projetos valiosos por conta da dificuldade de encontrar escolas interessadas
  - Desperdício de potenciais colaborações por não conseguirem identificar as escolas que mais se beneficiariam de seus projetos

Resultando em um cenário onde recursos valiosos existem (conhecimento, experiência e disposição para ajudar), mas não chegam onde são mais necessários. A ausência de uma plataforma centralizada que facilite estas conexões impede que colaborações muito promissoras se realizem, prejudicando tanto as escolas quanto os profissionais que desejam contribuir com a educação pública.

## Solução

O Conexão Escola é plataforma digital que funciona como uma ponte inovadora entre escolas públicas e profissionais voluntários, ajudando da seguinte maneira:

- Para as Escolas
  - Acesso a um catálogo grande e diverso de projetos
  - Filtros de busca por região, área de interesse e tipo de atividade
  - Possibilidade de explorar todas as ofertas disponíveis ou buscar projetos específicos
  - Facilidade para entrar em contato com os voluntários
- Para os Voluntários
  - Cadastro simples na plataforma onde podem detalhar suas ofertas e suas qualificações
  - Especificação clara da área de atuação, disponibilidade e região geográfica
  - Exposição para as escolas que podem ter interesse em suas propostas

A plataforma elimina as barreiras de comunicação entre escolas e voluntários; otimiza o tempo de busca por parcerias para ambas as partes; aumenta o alcance das iniciativas voluntárias, permitindo que mais escolas tenham acesso aos projetos; cria um ambiente centralizado onde todas as ofertas podem ser encontradas; facilita o match entre as necessidades específicas das escolas e os projetos dos voluntários; além é claro de democratizar o acesso a experiências educacionais enriquecedoras sem custo algum para as escolas.

Essa plataforma transforma o processo atual, que é ineficiente, em um sistema organizado e acessível, maximizando o potencial de colaboração entre escolas públicas e voluntários.

## Processo de desenvolvimento

Nossa equipe estruturou o trabalho para que o processo fosse ágil e centrado nos usuários. Algumas das etapas pelas quais passamos foram as seguintes:

- Design Thinking e Brainstorm

Fizemos pesquisas de ferramentas e processos que pudessem ajudar a resolver o problema. Como não identificamos nenhuma ferramenta para gerar a CONEXÃO entre escola e voluntários, chegamos à ideia de criar uma plataforma online simples e de fácil acesso para ambos. Então identificamos duas personas principais:

- Maria, 42 anos, professora de história que busca enriquecer suas aulas com experiências práticas
- João, 35 anos, profissional de tecnologia que quer contribuir com escolas públicas, mas não sabe como

A partir disso começamos a pensar em como essas duas pessoas teriam a melhor experiência possível com o Conexão Escola.

### Desenvolvimento

Optamos por um sistema web baseado em Next.js e PostgreSQL. O desenvolvimento foi executado por todos os membros da equipe com o foco em entregar algo rápido e funcional para implantação imediata da solução.
Priorizamos a construção de um MVP com as funcionalidades essenciais, que são:

- Sistema de cadastro para voluntários
- Listagem de todos os projetos
- Mecanismo de busca e filtros
- Painel de controle para fornecedores/voluntários

## Escopo do Projeto

### 1. **Frontend (Interface do Usuário/Professor e Dashboard do voluntário/fornecedor)**

- **Tecnologia**: Next.js com Tailwind CSS e biblioteca Shadcn/ui
- **Funcionalidades**:

  - Rota Professor:

    - Nesta rota não haverá autenticação neste momento (próximos passos)
    - Interface de usuário para professores, onde eles poderão acessar todos os projetos.
    - Página de detalhe do projeto com informações de contato do fornecedor, e adicionar nota de avaliação (para uma próxima entrega)

  - Rota Voluntário/Fornecedor:
    - Tela de cadastro e Login do fornecedor. (autenticação via google)
    - Tela com a lista dos projetos do fornecedor logado e criação de projetos.
    - Tela com detalhes do projeto com opção para edição e exclusão.
    - Todas as telas de fornecedor exigem autenticação.

### 2. **Backend (integrado pelo Next.js com "server side")**

### 3. **Banco de Dados**

- **Tecnologia**: PostgreSQL com Prisma e Docker
- **Descrição**:
  - Estruturar um banco de dados para armazenar informações de usuários, projetos e avaliação(feedback).
  - Armazenamento via Docker
  - Design de tabelas para gerenciar as associações entre usuários, projetos e avaliações.
    <img src="https://i.ibb.co/RprjmdZF/diagram-export-03-02-2025-23-46-37.png" width="264px">
- **Funcionalidades**:
  - Tabelas para projetos e feedback.
  - A tabela de usuários é gerenciado pelo Clerk, responsável pela autenticação deste projeto.

### Entregáveis da Versão v1.0.0

- Acesso do fornecedor por uma rota com autenticação via google.
  - Acesso dos fornecedores a tela de consulta de seus projetos
  - Acesso a tela de criação, edição e deleção.
  - Todas as rotas de fornecedores exigem autenticação.
  - Acesso ao perfil do fornecedor logado (google) disponibilizado pelo Clerk.
- Acesso do Professor a uma rota sem autenticação
  - Acesso a tela de listagem com todos os projetos
  - Acesso a uma tela com detalhes dos projetos e fornecedor.

## Instalação

Instale com npm install

```bash
  # Clone este repositório
  $ git@github.com:alexsandro-oliveira/hackathon-fiap.git

  # Acesse a pasta do projeto no terminal/cmd
  $ cd hackathon-fiap

  # Instale as dependências
  $ npm install

  # Copiar o arquivo com os dados de conexão e demais variáveis ambiente
  $ .env.example .env

  # Para obter as variáveis de integração com o Clerk, basta seguir os passos do arquivo da pasta `docs`.
  $ getting-started-with-clerk.md

  # Subir o serviço do PostgreSQL via docker (caso não tenha instalado o PostgreSQL em seu computador)
  $ docker-compose up -d

  # Rodar as migrations do prisma
  $ npx prisma migrate dev

  # Execute a aplicação em modo de desenvolvimento
  $ npm run dev

  # O servidor inciará na porta:3000 por padrão - acesse http://localhost:3000

```

## Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

**Básicos:** **[Typescript](https://www.typescriptlang.org/)**
**Framework:** **[NextJS](https://nextjs.org/)**
**Estilização:** **[Tailwind](https://tailwindcss.com/)**
**Banco de Dados:** **[PostgreSQL](https://www.postgresql.org/)**
**ORM:** **[Prisma](https://www.prisma.io/)**
**Componetização:** **[Shadcn/ui](https://ui.shadcn.com/)**

**Outros:**

- **[Clerk](https://clerk.com/)**
- **[Sooner](https://sonner.emilkowal.ski/)**
- **[DotEnv](https://www.npmjs.com/package/dotenv)**
- **[Eslint](https://eslint.org/)**
- **[Prettier](https://prettier.io/)**
- **[Zod](https://zod.dev/)**

Todas as suas versões se encontram no documento package.json na raiz do projeto.
Instalação de dependências
Como utilizamos o React com o NextJs por padrão ele utiliza o gerenciador de dependências NPM.
Para instalar as dependências é só utilizar o comando npm i no terminal de sua escolha.

## Aprendizados e Desafios

A equipe descobriu que é possível desenvolver um sistema funcional, do zero, mesmo com pouco tempo e recursos. A liberdade para desenvolver ideias próprias, sem ficar limitado pela falta de recursos, foi uma grande descoberta. Ficou claro que é possível fazer a transição de uma ideia para um sistema funcional de forma rápida e eficiente.

Esse projeto nos deu oportunidade de aplicar e aperfeiçoar os conhecimentos adquiridos durante o curso e explorar para além deles. E nos ajudou a desenvolver habilidades práticas no uso das tecnologias que escolhemos.

### Próximos passos

Para o futuro, teremos as seguintes implementações:

- autenticação de todas as rotas por roles
- inclusão do sistema de reviews/feedback,
- opção para o fornecedor adicionar imagens de seus projetos que pode ser armazenado na S3 da AWS
- desenvolvimento de funcionalidades para análise de dados
- inclusão de novas funcionalidades que enriqueçam o sistema para todos os usuários e revolucionem a relação entre escolas e voluntários.

## Autores

- [@alexsandro-oliveira](https://github.com/alexsandro-oliveira)
- [@guilherme-fernandes](https://github.com/guifealves)
- [@vitor-hugo](https://github.com/D3Vitt1n)
