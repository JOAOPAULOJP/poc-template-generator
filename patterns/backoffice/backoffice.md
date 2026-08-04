# Backoffice

## Objetivo

O Backoffice é o template oficial para aplicações administrativas do Design System do Governo de Pernambuco.

Este template define a estrutura base da aplicação, organizando os principais componentes responsáveis pela navegação, identidade visual e área de conteúdo.

Sempre que uma aplicação possuir uma área administrativa, este template deve ser utilizado antes da implementação de qualquer funcionalidade.

---

# Quando utilizar

Utilize este template para:

- Sistemas administrativos
- Painéis internos
- Backoffice
- Área autenticada
- Gestão de conteúdo
- Cadastro de informações
- Administração de usuários
- Configurações do sistema
- Aplicações internas

---

# Quando não utilizar

Não utilize este template para:

- Landing Pages
- Portais públicos
- Páginas institucionais
- Fluxos de autenticação
- Formulários independentes

Nestes casos utilize o template correspondente.

---

# Objetivo do template

Este template possui quatro responsabilidades principais:

- Definir a estrutura global da aplicação.
- Configurar o contexto de layout através do LayoutProvider.
- Organizar as áreas fixas da interface.
- Disponibilizar uma área para renderização das páginas.

O GovBar faz parte da estrutura obrigatória do Pattern Backoffice.

Além de representar a identidade institucional do Governo de Pernambuco, o GovBar centraliza funcionalidades globais da aplicação, como recursos de acessibilidade e preferências de interface.

O AdminUserBar complementa o GovBar, apresentando o contexto da página e as informações do usuário autenticado.

Esses componentes possuem responsabilidades distintas e complementares, não devendo ser removidos, substituídos ou utilizados de forma isolada.

Este template não define o conteúdo das páginas.

As páginas devem ser implementadas utilizando os patterns específicos definidos pelo Design System.

---

# Estrutura da aplicação

Toda aplicação deve seguir a seguinte hierarquia.

```text
RootLayout

└── LayoutProvider
    │
    └── UiProvider
        │
        └── AppLayout
            │
            ├── GovBar
            │
            └── MainLayout
                │
                ├── AdminSideBar
                │
                └── ContentSection
                    │
                    ├── AdminUserBar
                    │
                    └── MainContent
                        │
                        ├── BreadCrumbSection
                        │
                        └── PageContent
```

Todo conteúdo da aplicação deve ser renderizado dentro de `PageContent`.

---

# Composição da interface

O Pattern Backoffice possui uma estrutura visual fixa, responsável por organizar a navegação e o conteúdo da aplicação.

```text
┌────────────────────────────────────────────┐
│ GovBar                                     │
├───────────────┬────────────────────────────┤
│               │ Admin UserBar              │
│               ├────────────────────────────┤
│ AdminSidebar  │                            │
│               │       PageContent          │
│               │                            │
└───────────────┴────────────────────────────┘
```

Cada área possui uma responsabilidade específica:

- **GovBar:** apresenta a identidade institucional da aplicação.
- **AdminSidebar:** disponibiliza a navegação principal entre os módulos do sistema.
- **AdminUserBar:** apresenta o contexto da página e as informações do usuário autenticado.
- **PageContent:** recebe o conteúdo específico de cada funcionalidade.

A estrutura do Pattern Backoffice deve permanecer inalterada durante toda a aplicação.

Apenas o conteúdo renderizado em **PageContent** deve variar de acordo com a funcionalidade implementada.

---

# Componentes obrigatórios

A estrutura do Backoffice é composta pelos seguintes componentes.

| Componente | Obrigatório |
|------------|-------------|
| LayoutProvider | ✅ |
| UiProvider | ✅ |
| AppLayout | ✅ |
| GovBar | ✅ |
| AdminSideBar | ✅ |
| AdminUserBar | ✅ |
| MainContent | ✅ |
| PageContent | ✅ |

---

# Configuração obrigatória

O LayoutProvider deve envolver toda a aplicação.

```tsx
<LayoutProvider
    breakpoint={900}
    template="backoffice"
>
    <UiProvider>
        {children}
    </UiProvider>
</LayoutProvider>
```

O atributo `template="backoffice"` é obrigatório para aplicações administrativas.

---

# Fluxo de implementação

Sempre implemente um Backoffice seguindo esta sequência.

1. Configurar o RootLayout.
2. Adicionar o LayoutProvider.
3. Definir o template como `backoffice`.
4. Adicionar o UiProvider.
5. Criar o AppLayout.
6. Inserir o GovBar.
7. Inserir o AdminSideBar.
8. Inserir o AdminUserBar.
9. Criar a área de conteúdo.
10. Renderizar as páginas dentro de `PageContent`.

---

# Regras

Sempre:

- Utilizar LayoutProvider.
- Utilizar `template="backoffice"`.
- Utilizar UiProvider.
- Utilizar AppLayout.
- Utilizar GovBar.
- Utilizar AdminSideBar.
- Utilizar AdminUserBar.
- Preservar a estrutura do Pattern Backoffice.
- Renderizar as páginas exclusivamente em `PageContent`.

Nunca:

- Criar páginas administrativas fora do AppLayout.
- Inserir conteúdo diretamente no MainLayout.
- Remover GovBar.
- Remover AdminSideBar.
- Remover AdminUserBar.
- Alterar a estrutura base do Pattern Backoffice.
- Criar estruturas paralelas ao Backoffice.

---

# Fluxo esperado da IA

Ao receber solicitações como:

- Crie um CRUD.
- Crie um painel administrativo.
- Crie um sistema interno.

A IA deve executar o seguinte fluxo.

```text
Solicitação

↓

Identificar que a aplicação utiliza o Pattern Backoffice

↓

Criar RootLayout

↓

Configurar LayoutProvider

↓

Configurar template="backoffice"

↓

Criar AppLayout

↓

Adicionar GovBar

↓

Adicionar AdminSideBar

↓

Adicionar AdminUserBar

↓

Criar PageContent

↓

Preservar a estrutura do Pattern Backoffice

↓

Implementar a funcionalidade somente em PageContent
```

---

# Próximos patterns

Este documento define apenas a estrutura base da aplicação.

Os padrões abaixo complementam o Backoffice e devem ser utilizados para implementar páginas específicas:

- CRUD
- Formulário
- Listagem
- Detalhes
- Wizard