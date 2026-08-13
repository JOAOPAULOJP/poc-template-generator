## Contexto

- **Categoria:** Dados e informação
- **Objetivo:** Organizar e apresentar informações estruturadas em linhas e colunas, facilitando a leitura, comparação e identificação de dados.
- **Quando usar:** Quando for necessário apresentar conjuntos de dados relacionados que possam ser organizados em linhas e colunas.
- **Quando evitar:** Quando houver poucas informações ou quando a relação entre os dados não depender de uma estrutura tabular.
- **Interrompe o fluxo:** Não
- **Exige ação do usuário:** Não
- **Componentes relacionados:** Pagination, Filter e Tag

## Visão geral

A Table organiza informações em linhas e colunas, permitindo leitura estruturada e comparação de dados. Ela pode ser utilizada tanto para exibir grandes volumes de informação quanto para apresentar conjuntos menores de dados de forma clara.

## Comportamento

- Organiza informações relacionadas em linhas e colunas;
- Permite configurar a quantidade de colunas e linhas apresentadas;
- Pode apresentar ordenação por coluna quando o recurso estiver habilitado;
- Permite diferentes estilos de apresentação das linhas;
- Pode apresentar diferentes tipos de conteúdo nas células, de acordo com a informação exibida.

## Boas práticas

- Utilize títulos de coluna claros, curtos e fáceis de compreender;
- Evite excesso de colunas e priorize as informações mais relevantes para a tarefa;
- Mantenha uma ordem lógica entre as colunas, considerando a importância das informações;
- Utilize ordenação apenas quando ela ajudar a pessoa usuária a encontrar ou comparar informações;
- Em tabelas extensas, considere combinar o componente com recursos de paginação e filtros;
- Em dispositivos menores, priorize as informações mais relevantes e evite comprometer a leitura da tabela;
- Utilize o estilo de linhas listradas quando ele ajudar a acompanhar visualmente os dados em tabelas com muitas linhas.

## Acessibilidade

- Utilize cabeçalhos de coluna semanticamente associados às respectivas células;
- Garanta que informações importantes não sejam comunicadas apenas por cor;
- Elementos interativos, como ordenação, devem ser acessíveis por teclado;
- Forneça indicação visual clara para estados de foco e interação;
- Mantenha uma ordem de leitura coerente entre cabeçalhos, linhas e células;
- Utilize títulos de coluna que descrevam claramente o conteúdo apresentado.

## Modo de uso

A Table é composta por diferentes elementos que podem ser configurados de acordo com a necessidade da tabela.

### Table

Define a estrutura principal da tabela, incluindo a quantidade de colunas, linhas e o estilo de apresentação.

**Properties**

- `Columns`: 3, 6
- `Lines`: 4, 8
- `Style`: Default, Striped rows

### Datatable-cell

Representa o cabeçalho da tabela e permite configurar o título da coluna e a possibilidade de ordenação.

**Properties**

- `Datatable-cell`: header
- `Título header`: título exibido no cabeçalho
- `Sortable?`: True, False

### Cell

Representa o conteúdo das células da tabela.

**Properties**

- `Type`: Default, status, action, Id
- `Título`: conteúdo exibido na célula

### Datatable

Permite configurar a quantidade de linhas e o estilo de apresentação da tabela.

**Properties**

- `Lines`: 3, 8
- `style`: Default, Striped rows