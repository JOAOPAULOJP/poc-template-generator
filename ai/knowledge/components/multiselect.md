# MultiSelect

## Contexto

- **Categoria:** Seleção
- **Objetivo:** Permitir que a pessoa usuária selecione múltiplos itens de uma lista.
- **Quando usar:** Filtros, categorização ou situações em que várias opções podem ser selecionadas simultaneamente.
- **Quando evitar:** Quando apenas uma opção puder ser selecionada. Nesse caso, utilize Radio Button ou Select.
- **Interrompe o fluxo:** Não
- **Exige ação do usuário:** Sim
- **Componentes relacionados:** Checkbox, Dropdown e Filter.

---

## Visão geral

O MultiSelect é um componente de seleção que permite à pessoa usuária escolher múltiplos itens de uma lista.

É especialmente útil em cenários onde existe a necessidade de filtrar, categorizar ou selecionar várias opções simultaneamente.

---

## Comportamento

- Permite selecionar mais de uma opção.
- Apresenta as opções dentro de uma lista suspensa.
- As opções podem ser selecionadas individualmente.
- Pode utilizar Checkbox para indicar visualmente as opções selecionadas.
- Pode oferecer busca quando a quantidade de opções for grande.
- O estado fechado apresenta o campo de seleção sem a lista de opções.
- O estado aberto apresenta as opções disponíveis para seleção.

---

## Boas práticas

- Evite sobrecarregar a pessoa usuária com listas muito extensas sem oferecer campo de busca.
- Exiba visualmente os itens selecionados para facilitar o reconhecimento.
- Utilize padrões consistentes de interação, como Checkbox dentro da lista.
- Não utilize o MultiSelect quando a pessoa usuária puder selecionar apenas uma opção. Para esse caso, utilize Radio Button ou Select.
- Quando houver muitas opções, disponibilize busca para facilitar a localização dos itens.

---

## Acessibilidade

- Forneça um `aria-label` ou `aria-labelledby` claro para o campo.
- Garanta que o campo e suas opções sejam acessíveis por teclado.
- As opções devem comunicar corretamente seu estado de seleção.
- O foco deve permanecer visível durante a interação.
- A seleção não deve depender exclusivamente de cor para comunicar seu estado.

---

## Modo de uso

### Fechado

Estado inicial do componente, sem a lista de opções aberta.

### Aberto

Apresenta a lista de opções disponíveis para seleção.

### Aberto com busca

Utilizado quando existe uma quantidade maior de opções e a pessoa usuária precisa localizar um item específico.

---

## Properties

| Propriedade | Valores | Descrição |
|-------------|---------|-----------|
| State | `close`, `open` | Define se a lista de opções está fechada ou aberta. |
| multiselect-options | `checkbox`, `search+checkbox` | Define o tipo de interação disponível na lista de opções. |