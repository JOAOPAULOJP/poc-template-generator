# Menu

## Contexto

- **Categoria:** Navegação
- **Objetivo:** Viabilizar a navegação e orientar a pessoa usuária dentro de uma interface.
- **Quando usar:** Para organizar links e opções de navegação entre páginas ou seções de uma aplicação.
- **Uso principal:** Componente de navegação utilizado principalmente em conjunto com o Header.
- **Quando evitar:** Quando houver poucas opções que possam ser apresentadas diretamente na interface sem a necessidade de um menu.
- **Interrompe o fluxo:** Não
- **Exige ação do usuário:** Sim
- **Componentes relacionados:** Header, AdminSidebar e Breadcrumb.

---

## Visão geral

O Menu é um componente de navegação utilizado principalmente em conjunto com o Header, organizando as principais opções de navegação da aplicação.

Ele permite que a pessoa usuária acesse diferentes páginas ou seções e compreenda sua localização dentro da estrutura de navegação.

---

## Comportamento

- Em desktops, prefira menus visíveis, como no Header, pois facilitam a descoberta e o acesso rápido.
- Evite esconder opções importantes em menus "hambúrguer", exceto quando necessário na versão mobile.
- Menus com subitens devem indicar visualmente quando estão abertos ou fechados.
- A opção correspondente à localização atual deve possuir destaque visual.
- Quando utilizado com o Header, o Menu deve integrar-se à estrutura de navegação principal da aplicação.

---

## Boas práticas

### Fazer

- Use links claros, específicos, curtos e objetivos para os itens de menu.
- Escreva os rótulos dos itens com a primeira palavra em maiúscula.
- Indique a localização atual da pessoa usuária com destaque visual.
- Limite o menu a até 5 opções quando possível.
- Priorize as opções de navegação mais importantes e relevantes para a tarefa.

### Evitar

- Não escreva as opções com todas as letras maiúsculas.
- Não construa menus com mais de 2 níveis de profundidade.
- Evite esconder opções importantes em menus quando elas puderem permanecer visíveis.
- Não utilize o Menu como substituto de componentes específicos de navegação, como Header ou AdminSidebar.

---

## Acessibilidade

- Suporte navegação por teclado, incluindo Tab, Enter e setas, com foco claramente visível.
- Use elementos semânticos adequados para os itens de navegação.
- Utilize roles e atributos ARIA somente quando necessários.
- Garanta que menus expansíveis comuniquem seu estado aberto ou fechado.
- Garanta que o item ativo seja identificado de forma perceptível, não apenas por cor.

---

## Modo de uso

### Menu em conjunto com Header

É o uso principal do componente. O Menu organiza as principais opções de navegação dentro do Header, permitindo acesso direto às páginas ou seções mais importantes da aplicação.

### Menu em desktop

Apresenta os itens de navegação diretamente na interface, permitindo acesso rápido às principais páginas ou seções.

### Menu com submenu

Utilizado quando uma opção possui itens relacionados. O estado aberto deve ser claramente identificado e os itens devem permanecer organizados em até dois níveis de profundidade.

---

## Properties

| Propriedade | Valores | Descrição |
|-------------|---------|-----------|
| Device | `desktop` | Define o contexto de dispositivo apresentado no exemplo. |
| CTA | `true`, `false` | Define se o menu apresenta uma ação principal. |
| Menu item | `active` | Define o estado do item de menu atualmente selecionado. |