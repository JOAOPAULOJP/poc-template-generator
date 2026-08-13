## Contexto

- **Categoria:** Dados e informação
- **Objetivo:** Identificar, categorizar ou rotular informações dentro de uma interface.
- **Quando usar:** Para indicar status, atributos, categorias ou destacar informações relevantes.
- **Quando evitar:** Quando a informação exigir uma ação do usuário. Nesse caso, utilize um componente de ação apropriado.
- **Interrompe o fluxo:** Não
- **Exige ação do usuário:** Não
- **Componentes relacionados:** Table

## Visão geral

A Tag é um componente usado para identificar, categorizar ou rotular informações em uma interface. Pode indicar status, atributos, categorias ou servir como marcador visual para facilitar a leitura de dados.

## Comportamento

- Apresenta uma informação curta por meio de um marcador visual;
- Pode utilizar diferentes tipos para representar contextos distintos;
- Pode apresentar um ícone junto ao label;
- Pode ser utilizada em diferentes tamanhos, de acordo com o contexto da interface.

## Boas práticas

- Use tags para palavras-chave ou estados, preferencialmente com no máximo 2 a 3 palavras;
- Evite utilizar frases longas. Quando o conteúdo for extenso, prefira truncamento com tooltip;
- Utilize tipos diferentes de Tag de acordo com o significado da informação;
- Não use Tag como substituto de botões ou outros componentes de ação;
- Em tabelas, utilize Tags para destacar informações como status sem depender apenas da cor.

## Acessibilidade

- O conteúdo da Tag deve ser compreensível sem depender exclusivamente da cor;
- Quando o ícone transmitir informação relevante, garanta que seu significado também esteja disponível em texto;
- Mantenha labels curtos e descritivos para facilitar a leitura por tecnologias assistivas;
- Garanta contraste adequado entre texto, ícone e fundo.

## Modo de uso

A Tag permite configurar o tipo, o tamanho, o conteúdo e a exibição do ícone.

**Properties**

- `Type`: Success, Warning, Error, Info, Neutral
- `Size`: Medium, Small
- `Label`: texto exibido na Tag
- `Icon`: ícone utilizado
- `Show Icon`: True, False