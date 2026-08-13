# Chip

## Contexto

- **Categoria:** Filtro
- **Objetivo:** Representar critérios selecionados de forma compacta e permitir sua remoção individual.
- **Quando usar:** Filtros dinâmicos em que o usuário pode selecionar múltiplos critérios.
- **Quando evitar:** Conteúdos longos, ações principais ou informações que não possam ser removidas.
- **Interrompe o fluxo:** Não
- **Exige ação do usuário:** Não
- **Componentes relacionados:** Button, Tag e Input.

---

## Visão geral

O Chip é um componente compacto utilizado principalmente em contextos de filtro interativo.

Ele exibe um critério selecionado e permite que o usuário o remova através do botão de fechar.

É indicado para representar filtros aplicados, especialmente quando o usuário pode selecionar múltiplos critérios simultaneamente.

---

## Quando usar

- Filtros de pesquisa.
- Filtros dinâmicos.
- Seleção de múltiplos critérios.
- Representação de filtros aplicados.

---

## Quando não usar

- Para ações principais.
- Para apresentar informações extensas.
- Para conteúdos que não podem ser removidos.
- Como substituto de Buttons ou Tags.

Nestes casos, considere utilizar o componente mais adequado à finalidade da interação.

---

## Comportamento

O Chip deve:

- Exibir claramente o critério selecionado.
- Permitir a remoção do critério através do botão de fechar.
- Manter o botão de fechamento sempre visível.
- Permitir interação por mouse, toque e teclado.
- Adaptar-se à quantidade de chips apresentados na interface.

---

## Anatomia

1. Contêiner Chip
2. Label
3. Ícone

---

## Boas práticas

### Fazer

- Utilizar Chips em filtros dinâmicos.
- Utilizar labels curtas e objetivas.
- Manter o botão de fechamento sempre visível.
- Oferecer uma opção para limpar todos os filtros quando houver muitos Chips.

### Evitar

- Exibir uma quantidade excessiva de Chips.
- Utilizar textos longos.
- Ocultar a ação de remoção.
- Utilizar Chips para representar informações que não podem ser removidas.

---

## Acessibilidade

- Fornecer rótulos claros para o botão de fechar.
- Utilizar `aria-label` descritivo para identificar a ação de remoção.
- Permitir navegação e interação por teclado.
- Garantir foco visível no botão de fechamento.
- Em grupos de Chips, preservar uma ordem de navegação coerente com a visualização.

---

## Modo de uso

### Desktop

- Organizar os Chips de forma consistente.
- Permitir remoção individual.
- Manter espaçamento adequado entre os Chips.

### Mobile

- Garantir área de toque adequada.
- Evitar excesso de Chips na mesma linha.
- Permitir que os Chips ocupem múltiplas linhas quando necessário.

---

## Properties

| Propriedade | Descrição |
|-------------|-----------|
| State | Default, Hover, Pressed, Focused ou Disabled |

---

## Casos de uso

| Cenário | Utilizar |
|----------|----------|
| Filtros de pesquisa | ✅ |
| Filtros múltiplos | ✅ |
| Critérios selecionados | ✅ |
| Ação principal | ❌ Button |
| Informação não removível | ❌ Tag |
| Conteúdo extenso | ❌ |