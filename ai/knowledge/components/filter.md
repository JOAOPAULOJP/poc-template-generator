# Filter

## Contexto

- **Categoria:** Entrada de dados
- **Objetivo:** Permitir que o usuário refine uma lista ou conjunto de dados a partir da seleção de critérios.
- **Quando usar:** Filtragem de listas, tabelas e conjuntos de informações que possuem múltiplos critérios de seleção.
- **Quando evitar:** Quando não houver necessidade de refinar os resultados apresentados ou quando houver poucos dados para justificar a filtragem.
- **Interrompe o fluxo:** Não
- **Exige ação do usuário:** Sim
- **Componentes relacionados:** Checkbox, Dropdown e Button.

---

## Visão geral

O Filter é um componente utilizado para permitir que o usuário selecione critérios de filtragem e refine os resultados apresentados em uma interface.

Pode ser utilizado em diferentes contextos de consulta, como tabelas e listas, reunindo um ou mais critérios em um único ponto de interação.

O componente pode apresentar filtros diretamente em seu painel ou utilizar componentes de seleção, como Checkbox e Dropdown, de acordo com a necessidade da aplicação.

---

## Comportamento

- O filtro inicia fechado.
- Ao acionar o botão, o painel de filtros é exibido.
- O usuário pode selecionar um ou mais critérios disponíveis.
- O botão **Limpar** remove os critérios selecionados.
- O botão **Aplicar** confirma os critérios escolhidos e atualiza os resultados.
- O painel pode conter diferentes componentes de entrada, de acordo com os critérios disponíveis.
- Quando houver múltiplos critérios, eles devem ser organizados de forma clara dentro do painel.

---

## Boas práticas

- Utilize o Filter quando houver necessidade de refinar resultados por múltiplos critérios.
- Organize os critérios de forma lógica e relacionada ao conteúdo que será filtrado.
- Utilize labels claras para identificar cada filtro.
- Mantenha as ações **Limpar** e **Aplicar** claramente identificadas.
- Evite utilizar filtros desnecessários que não contribuam para a consulta.
- Quando houver muitos critérios, organize-os de forma que o painel continue fácil de compreender e utilizar.

---

## Acessibilidade

- O botão que abre o filtro deve possuir nome acessível.
- O estado aberto ou fechado do painel deve ser comunicado ao usuário.
- Todos os campos e controles dentro do filtro devem possuir labels associadas.
- Todos os controles devem ser acessíveis por teclado.
- O foco deve seguir uma ordem lógica ao navegar pelo painel.
- Os estados de foco devem possuir destaque visual.
- As ações **Limpar** e **Aplicar** devem possuir nomes acessíveis e claros.

---

## Modo de uso

### Filtro simples

Utilizado quando os critérios podem ser apresentados diretamente em uma lista de opções.

### Filtro com múltiplos critérios

Utilizado quando a consulta depende de diferentes tipos de informação, podendo combinar Checkbox, Dropdown e outros componentes de entrada.

---

## Properties

| Propriedade | Descrição |
|-------------|-----------|
| State | Define o estado do filtro, fechado ou aberto. |

---

## Casos de uso

- Filtragem de tabelas.
- Filtragem de listas.
- Consulta de registros.
- Seleção de múltiplos critérios.
- Refinamento de resultados.