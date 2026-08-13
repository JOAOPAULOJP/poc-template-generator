# Radio Button

## Contexto

- **Categoria:** Seleção
- **Objetivo:** Permitir que a pessoa usuária escolha uma única opção dentro de um conjunto de alternativas.
- **Quando usar:** Quando apenas uma opção puder ser selecionada entre duas ou mais alternativas.
- **Quando evitar:** Quando múltiplas opções puderem ser selecionadas simultaneamente. Nesse caso, utilize Checkbox.
- **Interrompe o fluxo:** Não
- **Exige ação do usuário:** Sim
- **Componentes relacionados:** Checkbox, Dropdown e MultiSelect.

---

## Visão geral

O Radio Button é utilizado para escolher uma opção dentre outras. Apenas um item pode ser selecionado por vez.

Quando uma nova opção é selecionada, a escolha anterior é automaticamente desmarcada.

---

## Comportamento

- Permite selecionar apenas uma opção dentro de um grupo.
- Ao selecionar uma nova opção, a opção anteriormente selecionada é desmarcada.
- Pode ser apresentado em orientação vertical ou horizontal.
- O modo vertical é o padrão e recomendado.
- O modo horizontal deve ser utilizado em situações específicas, principalmente quando houver pouco espaço vertical.

---

## Boas práticas

- Utilize quando houver duas ou mais opções e apenas uma delas puder ser escolhida.
- Utilize labels claras e concisas para cada opção.
- Deixe claro que as opções são mutuamente exclusivas.
- Ordene as opções de forma lógica, como ordem alfabética, numérica ou baseada nos itens mais escolhidos.
- Posicione as labels ao lado direito do componente.
- Prefira o modo vertical para grupos com três ou mais opções.
- Utilize o modo horizontal quando houver apenas duas opções ou quando o espaço vertical for limitado.
- Para opções com labels longas, prefira o modo vertical para facilitar a leitura.

---

## Acessibilidade

- Permita navegação pelo teclado.
- Permita a navegação entre as opções por meio das setas direcionais.
- Preserve o foco visível durante a navegação.
- Garanta que nome, função e valor sejam identificáveis pelas tecnologias assistivas.
- Garanta que a ordem de navegação por teclado corresponda à ordem visual das opções.
- Utilize labels associadas corretamente a cada Radio Button.
- Não utilize apenas cor para indicar qual opção está selecionada.

---

## Modo de uso

### Modo vertical

É o modo recomendado para grupos com três ou mais opções ou quando os labels forem longos.

Facilita a leitura e reduz a possibilidade de erros durante a seleção.

### Modo horizontal

Utilize em casos específicos, principalmente quando houver apenas duas opções ou pouco espaço vertical.

---

## Properties

| Propriedade | Valores | Descrição |
|-------------|---------|-----------|
| Orientation | `vertical`, `horizontal` | Define a disposição das opções no grupo. |
| State | `default`, `selected`, `disabled` | Define o estado da opção. |