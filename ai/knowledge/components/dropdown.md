# Dropdown

## Contexto

- **Categoria:** Entrada de dados
- **Objetivo:** Permitir a seleção de uma única opção entre um conjunto de opções predefinidas.
- **Quando usar:** Seleção única em listas de opções, especialmente quando existem opções suficientes para justificar o uso de uma lista suspensa.
- **Quando evitar:** Quando houver poucas opções, especialmente até 3, ou quando o usuário precisar selecionar múltiplas opções.
- **Interrompe o fluxo:** Não
- **Exige ação do usuário:** Sim
- **Componentes relacionados:** Input, Radio Button e Checkbox.

---

## Visão geral

O Dropdown é um componente de seleção única que apresenta uma lista suspensa de opções pré-definidas.

No Design System, ele é baseado no componente do PrimeReact e foi adaptado para sempre incluir uma label, garantindo clareza no uso e consistência na interface.

Em outros Design Systems, esse componente pode ser chamado de Select.

No Design System, adotamos o nome Dropdown para manter alinhamento com o PrimeReact.

---

## Quando usar

Utilize o Dropdown quando:

- O usuário precisa selecionar apenas uma opção.
- Existe um conjunto de opções predefinidas.
- A quantidade de opções torna inadequado apresentar todas diretamente na interface.
- É necessário manter a interface mais compacta.
- A seleção pode ser feita a partir de uma lista de opções.

---

## Quando não usar

Evite utilizar Dropdown quando:

- O usuário puder selecionar mais de uma opção.
- Existirem poucas opções, especialmente até 3. Nesse caso, prefira Radio Button.
- As opções forem muito extensas ou difíceis de compreender em uma lista suspensa.

---

## Comportamento

- Ao clicar no campo, a lista de opções é exibida.
- O usuário pode selecionar apenas uma opção por vez.
- Caso nenhuma opção esteja selecionada, o placeholder pode indicar o propósito do campo.
- Opções desabilitadas aparecem na lista, mas não podem ser selecionadas.
- Quando a propriedade de busca estiver habilitada, o componente apresenta um campo para pesquisar entre as opções disponíveis.
- O campo pode permanecer fechado ou aberto, conforme a interação do usuário.

---

## Boas práticas

- Use sempre uma label clara e objetiva. Não dependa apenas do placeholder.
- Prefira opções curtas e diretas para facilitar a leitura.
- Pré-selecione uma opção quando isso fizer sentido para o contexto.
- Evite usar Dropdown quando houver poucas opções. Para até 3 opções, prefira Radio Button.
- Não repita palavras desnecessárias nas opções.
- Utilize a busca quando houver muitas opções e isso facilitar a localização de um item.

---

## Acessibilidade

- O Dropdown utiliza o papel de `combobox`.
- Utilize `aria-haspopup` e `aria-expanded` para comunicar o estado do componente.
- A relação entre a label e o campo deve estar corretamente estabelecida.
- Cada opção deve utilizar o papel de `option`.
- A opção selecionada deve ser identificada por `aria-selected`.
- Opções desabilitadas devem utilizar `aria-disabled`.
- A ordem de foco deve ser previsível, começando no primeiro item quando não houver seleção anterior.
- O componente deve possuir destaque visual de foco ativo.
- Todas as interações devem ser acessíveis por teclado.

---

## Modo de uso

### Estado fechado

O Dropdown apresenta apenas o campo de seleção, sem exibir a lista de opções.

### Estado aberto

Ao abrir o componente, a lista de opções é apresentada para que o usuário realize a seleção.

### Estado aberto com busca

Quando a propriedade `Search` está habilitada, o componente apresenta um campo de pesquisa dentro da lista de opções.

---

## Properties

| Propriedade | Valores | Descrição |
|-------------|---------|-----------|
| State | `close`, `active` | Define o estado de abertura do Dropdown. |
| Search | `false`, `true` | Define se a busca entre as opções está disponível. |

---

## Casos de uso

O Dropdown pode ser utilizado para situações como:

- Seleção de uma opção em formulários.
- Seleção de categorias.
- Seleção de status.
- Seleção de serviços.
- Seleção de outras opções predefinidas.

Quando houver até 3 opções, prefira Radio Button.