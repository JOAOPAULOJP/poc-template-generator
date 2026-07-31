# Tooltip

## Contexto

- **Categoria:** Apoio
- **Objetivo:** Fornecer informações complementares sobre um elemento da interface sem ocupar espaço permanente na tela.
- **Quando usar:** Explicar ícones, ações, abreviações ou informações que precisam de contexto adicional.
- **Quando evitar:** Exibir informações críticas, conteúdos longos ou instruções indispensáveis para concluir uma tarefa.
- **Interrompe o fluxo:** Não
- **Exige ação do usuário:** Não
- **Componentes relacionados:** Popover, Dialog e Alert.

---

## Visão geral

O Tooltip apresenta uma informação complementar associada a um elemento da interface.

Seu objetivo é esclarecer o significado de ícones, ações ou termos sem adicionar conteúdo permanente à interface.

O Tooltip deve ser utilizado apenas como apoio. A informação apresentada nunca deve ser indispensável para a execução da tarefa.

---

## Quando usar

- Explicar o significado de um ícone.
- Complementar uma ação representada por um botão.
- Esclarecer abreviações ou termos técnicos.
- Exibir pequenas dicas de uso.

---

## Quando não usar

- Conteúdo extenso.
- Mensagens críticas.
- Confirmações de ações.
- Instruções obrigatórias para concluir um fluxo.

Nestes casos, considere utilizar Popover, Dialog ou Alert.

---

## Comportamento

O Tooltip deve:

- Ser exibido ao passar o cursor, receber foco pelo teclado ou tocar no elemento (quando aplicável).
- Permanecer visível apenas enquanto houver interação.
- Posicionar-se próximo ao elemento de origem sem ocultá-lo.
- Adaptar sua posição quando houver pouco espaço disponível.
- Desaparecer automaticamente ao perder o foco ou encerrar a interação.

---

## Boas práticas

### Fazer

- Utilizar textos curtos e objetivos.
- Complementar informações já existentes.
- Utilizar linguagem clara.
- Exibir apenas uma informação por Tooltip.

### Evitar

- Utilizar Tooltips para textos longos.
- Depender exclusivamente do Tooltip para transmitir informações importantes.
- Exibir Tooltips automaticamente sem interação.
- Utilizar vários Tooltips próximos entre si.

---

## Acessibilidade

- Permitir acesso via teclado.
- Associar o Tooltip ao elemento utilizando `aria-describedby`.
- Garantir tempo suficiente para leitura em dispositivos móveis.
- Não depender exclusivamente do hover para exibição.
- Garantir contraste adequado entre texto e fundo.

---

## Modo de uso

### Desktop

- Exibir ao passar o cursor ou receber foco.
- Posicionar próximo ao elemento acionador.

### Mobile

- Exibir ao toque.
- Garantir tempo suficiente para leitura.
- Permitir fechamento de forma intuitiva.

---

## Properties

| Propriedade | Descrição |
|-------------|-----------|
| Style | Default ou Bright |
| Show title | Exibe ou oculta o título |

---

## Casos de uso

| Cenário | Utilizar |
|----------|----------|
| Explicar um ícone | ✅ |
| Explicar uma abreviação | ✅ |
| Informar o significado de uma ação | ✅ |
| Confirmar exclusão | ❌ Dialog |
| Exibir instruções longas | ❌ Popover |
| Exibir erro de validação | ❌ Alert |