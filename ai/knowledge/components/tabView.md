## Contexto

- **Categoria:** Navegação
- **Objetivo:** Organizar conteúdos relacionados em seções distintas dentro de uma mesma interface, permitindo alternar entre diferentes visões sem sair da página.
- **Quando usar:** Quando conteúdos relacionados precisam ser organizados em diferentes seções e apenas uma delas deve ser visualizada por vez.
- **Quando evitar:** Para tarefas sequenciais ou fluxos que exigem uma ordem definida. Nesses casos, prefira Stepper.
- **Interrompe o fluxo:** Não
- **Exige ação do usuário:** Sim
- **Componentes relacionados:** Stepper

## Visão geral

O TabView organiza conteúdos relacionados em seções distintas dentro de uma mesma interface. Ele permite que a pessoa usuária navegue entre diferentes visões sem sair da página, mantendo o contexto e reduzindo a sobrecarga cognitiva.

## Boas práticas

- Utilize no máximo de 5 a 7 abas visíveis. No mobile até 5 e no desktop no máximo 7 abas, para manter a clareza e evitar que o controle vire um carrossel oculto;
- Quando houver necessidade de ter mais de 7 abas, considere usar uma aba chamada "Mais" para agrupar opções secundárias, ou adotar uma navegação vertical ou sidebar;
- Nunca empilhe abas em duas ou mais linhas, pois isso compromete a memorização e confunde a pessoa usuária;
- Os labels das abas devem ser curtos, claros e previsíveis, evitando termos ambíguos e difíceis de identificar mentalmente;
- Apenas uma aba deve estar ativa por vez;
- Evite usar apenas ícone na aba;
- Não utilize TabView para tarefas sequenciais. Para esses casos, utilize Stepper.

## Acessibilidade

- Permita navegação pelo teclado;
- Todas as abas devem possuir estado de foco visível;
- A aba ativa deve ser destacada visualmente para facilitar sua identificação;
- Utilize funções ARIA adequadas para indicar a relação entre as abas e seus respectivos conteúdos;
- Garanta que a ordem de navegação por teclado siga a ordem visual das abas.

## Modo de uso

O TabView permite configurar a quantidade de abas visíveis. Cada aba é representada por um `Tab-item`, que pode ser configurado individualmente.

### Properties

**TabView**

- `VisibleTabs`: quantidade de abas visíveis

**Tab-item**

- `State`: default, hover, pressed, focus, inactive
- `Active`: Yes, No
- `Label`: texto exibido na aba
- `Icon display`: True, False