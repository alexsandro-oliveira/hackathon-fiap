# Configurando autenticação com **Clerk**

[Integrando Clerk no seu projeto Next.Js](https://clerk.com/docs/quickstarts/nextjs)

Antes de começar, você precisa criar uma conta no [painel do Clerk](https://dashboard.clerk.com/).

## Criando aplicação no **Clerk**

1. Acesse o [painel do Clerk](https://dashboard.clerk.com/) e clique no botão **Add Application**.
2. Será exibida uma lista de provedores de autenticação. Selecione o provedor do **Google**.
3. Escolha o nome da sua aplicação e clique no botão **CREATE APPLICATION**.

## Adicionando **Publishable key** e **Secret key** no projeto

Depois de criar sua aplicação no Clerk, você será redirecionado para uma nova página.

Nessa nova página vá na seção **developers** > **API Keys**. Você encontrará dois tipos de chaves: a chave **Publishable key**, que será utilizada na aplicação no arquivo `.env`.

Abra o arquivo `.env` e adicione as variáveis de ambiente **NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY**:
**CLERK_SECRET_KEY**:

```.env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = COLE_AQUI_A_PUBLISHABLE_KEY_DA_SUA_APLICAÇÃO_CLERK

CLERK_SECRET_KEY = COLE_AQUI_A_SECRET_KEY_DA_SUA_APLICAÇÃO_CLERK
```
