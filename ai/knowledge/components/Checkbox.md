# Checkbox

## Contexto

- **Categoria:** Seleção
- **Objetivo:** Permitir que o usuário selecione ou desmarque uma ou mais opções de forma independente.
- **Quando usar:** Seleção múltipla de opções, filtros, preferências ou confirmações.
- **Quando evitar:** Quando apenas uma opção puder ser selecionada.
- **Interrompe o fluxo:** Não
- **Exige ação do usuário:** Sim
- **Componentes relacionados:** Radio Button, Switch e Select.

---

## Visão geral

O Checkbox é um componente de seleção que permite ao usuário marcar ou desmarcar opções de forma independente.

Ele é indicado para situações em que múltiplas opções podem ser selecionadas simultaneamente dentro de um grupo.

Diferente do Radio Button, que permite apenas uma opção por grupo, o Checkbox permite que o usuário selecione uma ou várias opções conforme a necessidade.

Pode ser utilizado sozinho, como em confirmações e termos de uso, ou em grupos, como filtros e listas de opções.

---

## Quando usar

- Seleção de múltiplas opções.
- Filtros com mais de uma possibilidade de escolha.
- Preferências do usuário.
- Termos e condições.
- Listas de opções independentes.
- Seleção parcial de itens quando aplicável.

---

## Quando não usar

- Quando apenas uma opção puder ser selecionada.
- Para alternar estados de uma funcionalidade de forma imediata.

Nestes casos, considere utilizar Radio Button ou Switch.

---

## Comportamento

O Checkbox deve:

- Permitir marcar e desmarcar uma opção.
- Permitir múltiplas opções selecionadas simultaneamente.
- Indicar claramente o estado selecionado.
- Permitir interação por mouse, toque e teclado.
- Manter o estado selecionado durante a interação.
- Permitir estado desabilitado quando a opção não estiver disponível para interação.

---

## Anatomia

1. Border
2. Background
3. Label
4. Ícone

---

## Boas práticas

### Fazer

- Utilizar labels claros e objetivos.
- Manter a label próxima ao Checkbox.
- Utilizar grupos quando houver várias opções relacionadas.
- Alinhar os Checkboxes verticalmente sempre que possível.
- Utilizar uma descrição ou legenda quando o contexto da seleção não for evidente.

### Evitar

- Utilizar Checkbox quando apenas uma opção for possível.
- Utilizar labels muito extensas.
- Exibir grupos muito grandes sem organização.
- Posicionar opções lado a lado quando isso prejudicar a leitura.
- Utilizar Checkbox sem uma label ou contexto explicativo.

---

## Acessibilidade

- Cada Checkbox deve possuir uma label associada.
- Utilizar o atributo `aria-checked` quando aplicável.
- Permitir navegação e interação por teclado.
- Utilizar Tab para navegação entre os controles.
- Utilizar Espaço para marcar ou desmarcar a opção.
- Garantir foco visível.
- Para grupos de Checkboxes, utilizar uma legenda ou descrição que forneça contexto semântico.

---

## Modo de uso

### Desktop

- Organizar as opções verticalmente quando houver múltiplas escolhas.
- Manter espaçamento consistente entre as opções.
- Garantir que a área de interação seja adequada.

### Mobile

- Priorizar organização vertical.
- Utilizar labels curtas.
- Garantir área de toque adequada.
- Evitar grupos extensos sem divisão ou organização.

---

## Properties

| Propriedade | Descrição |
|-------------|-----------|
| State | Default, Selected, Disabled Selected ou Disabled Default |

---

## Casos de uso

| Cenário | Utilizar |
|----------|----------|
| Seleção de múltiplos filtros | ✅ |
| Seleção de preferências | ✅ |
| Aceite de termos de uso | ✅ |
| Seleção de itens de uma lista | ✅ |
| Seleção de apenas uma opção | ❌ Radio Button |
| Alternar uma funcionalidade | ❌ Switch |