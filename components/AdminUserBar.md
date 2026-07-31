# Admin UserBar

## Contexto

- **Categoria:** Navegação
- **Objetivo:** Exibir o contexto da página atual e as informações do usuário autenticado em aplicações administrativas.
- **Quando usar:** Em páginas do padrão Backoffice, compondo o cabeçalho da aplicação.
- **Quando evitar:** Landing Pages, páginas públicas, autenticação ou aplicações que não possuam área administrativa.
- **Interrompe o fluxo:** Não
- **Exige ação do usuário:** Não
- **Componentes relacionados:** Admin Sidebar, Breadcrumb, Dropdown e Avatar.

---

## Visão geral

O Admin UserBar é o componente responsável por apresentar o contexto de navegação e a identificação do usuário autenticado em aplicações administrativas.

Ele reúne dois elementos principais:

- **Breadcrumb**, utilizado para indicar a localização atual do usuário dentro da aplicação.
- **Menu do usuário**, contendo identificação, nível de acesso e ações relacionadas à conta.

O componente deve estar presente em todas as páginas que utilizam o padrão Backoffice.

---

## Quando usar

- Aplicações administrativas.
- Painéis de gestão.
- Sistemas internos.
- Backoffices com múltiplos módulos.

---

## Quando não usar

- Landing Pages.
- Portais públicos.
- Fluxos de autenticação.
- Aplicações de página única sem navegação hierárquica.

Nestes casos, utilize um Header mais simples ou outro padrão de navegação.

---

## Comportamento

O Admin UserBar deve:

- Exibir o breadcrumb da página atual.
- Exibir nome e nível de acesso do usuário autenticado.
- Permitir acesso ao menu do usuário através de um dropdown.
- Manter posicionamento fixo no topo da área de conteúdo.
- Adaptar-se ao layout responsivo da aplicação.

No dispositivo móvel:

- Trabalhar em conjunto com o botão de abertura da Admin Sidebar.
- Manter apenas as informações essenciais.

---

## Anatomia

1. Breadcrumb
2. Avatar do usuário
3. Nome do usuário
4. Nível de acesso
5. Dropdown de ações

---

## Boas práticas

### Fazer

- Exibir sempre o contexto da navegação.
- Manter o nome do usuário visível.
- Organizar as ações do usuário dentro do dropdown.
- Utilizar o breadcrumb para facilitar a navegação.

### Evitar

- Esconder o contexto da página.
- Exibir informações excessivas do usuário.
- Adicionar ações que não estejam relacionadas à conta.
- Utilizar o componente fora do padrão Backoffice.

---

## Acessibilidade

- Permitir navegação completa por teclado.
- Informar corretamente o estado aberto ou fechado do dropdown utilizando `aria-expanded`.
- Utilizar `role="menu"` e `role="menuitem"` quando aplicável.
- Garantir foco visível em todos os elementos interativos.
- Identificar o breadcrumb utilizando navegação semântica.

---

## Modo de uso

### Desktop

- Exibir breadcrumb à esquerda.
- Exibir informações do usuário à direita.
- Agrupar ações da conta em um dropdown.

### Mobile

- Exibir botão para abertura da Admin Sidebar.
- Simplificar o breadcrumb quando necessário.
- Manter acesso ao menu do usuário.

---

## Properties

| Propriedade | Descrição |
|-------------|-----------|
| Device | Desktop ou Mobile |
| Userbar dropdown | Open ou Closed |
| Show breadcrumb | Exibe ou oculta o breadcrumb |
| Show avatar | Exibe ou oculta o avatar |
| Show access level | Exibe ou oculta o nível de acesso |

---

## Casos de uso

| Cenário | Utilizar |
|----------|----------|
| Dashboard administrativo | ✅ |
| Gestão de usuários | ✅ |
| Cadastro de serviços | ✅ |
| Configurações do sistema | ✅ |
| Landing Page | ❌ |
| Login | ❌ |
| Recuperação de senha | ❌ |

---

## Dependências

O **Admin UserBar** faz parte da composição oficial do **Pattern Backoffice** e não deve ser utilizado de forma isolada.

Sua utilização pressupõe a presença dos seguintes componentes:

- **Admin Sidebar:** responsável pela navegação principal entre os módulos administrativos.
- **Breadcrumb:** responsável por indicar a localização atual do usuário na aplicação.
- **Dropdown:** responsável pelas ações relacionadas ao usuário autenticado.
- **Avatar:** utilizado para identificar visualmente o usuário.

Sempre que um agente de IA ou desenvolvedor implementar uma página utilizando o **Pattern Backoffice**, o **Admin UserBar** deve ser considerado um componente obrigatório da composição da interface.