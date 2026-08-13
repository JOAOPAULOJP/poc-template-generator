## Contexto

- **Categoria:** Entrada de dados
- **Objetivo:** Permitir que a pessoa usuária alterne entre dois estados mutuamente exclusivos, como ligado e desligado.
- **Quando usar:** Para configurações ou ações que tenham efeito imediato após a mudança de estado.
- **Quando evitar:** Quando a escolha representar apenas uma seleção ou resposta entre opções. Nesses casos, prefira Checkbox ou Radio Button.
- **Interrompe o fluxo:** Não
- **Exige ação do usuário:** Sim
- **Componentes relacionados:** Checkbox

## Visão geral

O Switch, também chamado de Toggle, é um controle binário que permite alternar entre dois estados mutuamente exclusivos. A mudança de estado acontece imediatamente após a interação, oferecendo controle e feedback instantâneo para a pessoa usuária.

## Comportamento

- Funciona como um interruptor, alternando entre os estados ligado e desligado com uma única interação;
- A mudança de estado tem efeito imediato, sem exigir confirmação por meio de outro botão, como "Salvar";
- Quando houver label, a área clicável deve incluir também o texto;
- O estado selecionado deve representar claramente que a configuração está ativa.

## Boas práticas

- Use o Switch quando a mudança de estado tiver efeito imediato no sistema;
- No desktop, posicione preferencialmente o label à direita do Switch. No mobile, o label pode ficar à esquerda;
- Evite termos redundantes como "ativo/inativo" ou "ligado/desligado" no label, pois o próprio componente já indica o estado;
- Não utilize Switch apenas para representar uma escolha de sim ou não sem efeito imediato. Nesse caso, prefira Checkbox;
- Mantenha o comportamento consistente entre desktop e mobile.

## Acessibilidade

- O Switch deve possuir nome, papel e estado acessíveis para tecnologias assistivas;
- Deve permitir interação por teclado, geralmente utilizando a tecla Espaço;
- O foco deve ser sempre visualmente identificável;
- A diferença entre os estados ligado e desligado não deve depender apenas de cor;
- Quando houver label, associe-o corretamente ao controle;
- Garanta área de interação suficiente para facilitar o uso por diferentes dispositivos.

## Modo de uso

O Switch possui os estados `Default`, `Selected`, `Disabled Default` e `Disabled Selected`.

O componente também permite controlar a exibição e o conteúdo do label.

**Properties**

- `State`: Default, Selected, Disabled Default, Disabled Selected
- `Label`: texto do label
- `Show label`: True