# Dialog

## Contexto

- **Categoria:** Feedback
- **Objetivo:** Solicitar uma decisão ou confirmação importante interrompendo temporariamente o fluxo do usuário.
- **Quando usar:** Ações críticas que exigem confirmação ou decisão antes de continuar.
- **Quando evitar:** Mensagens informativas, notificações temporárias ou conteúdos que não interrompem o fluxo.
- **Interrompe o fluxo:** Sim
- **Exige ação do usuário:** Sim
- **Componentes relacionados:** Alert, Toast e Message.

---

## Visão geral

O Dialog é uma janela modal utilizada para solicitar uma decisão, confirmação ou apresentar uma informação crítica antes que o usuário continue sua tarefa.

Seu uso deve ser reservado para situações que realmente exigem a atenção do usuário.

---

## Quando usar

- Confirmar ações irreversíveis.
- Solicitar confirmação antes de alterar ou excluir dados.
- Exibir informações críticas que exigem uma decisão.
- Solicitar uma informação necessária para continuar o fluxo.

---

## Quando não usar

- Exibir mensagens informativas.
- Mostrar notificações temporárias.
- Apresentar conteúdos extensos.
- Interromper o usuário sem necessidade.

Nestes casos, prefira **Alert**, **Toast** ou **Message**.

---

## Comportamento

O Dialog deve:

- Ser aberto apenas após uma ação do usuário.
- Bloquear a interação com o restante da interface.
- Receber o foco automaticamente ao abrir.
- Manter o foco dentro do diálogo enquanto estiver aberto.
- Destacar claramente a ação principal.
- Permitir fechamento de forma clara.
- Restaurar o foco ao elemento anterior após o fechamento.

---

## Boas práticas

### Fazer

- Utilizar títulos objetivos.
- Explicar claramente a ação que será realizada.
- Destacar visualmente a ação principal.
- Manter o conteúdo curto e direto.

### Evitar

- Empilhar múltiplos diálogos.
- Solicitar confirmações desnecessárias.
- Utilizar diálogos para conteúdos longos.
- Exibir mais de uma decisão principal no mesmo diálogo.

---

## Acessibilidade

- Receber foco automaticamente ao abrir.
- Manter o foco dentro do diálogo enquanto estiver ativo.
- Permitir navegação por teclado.
- Possuir título acessível.
- Restaurar o foco ao fechar.
- Não depender apenas de cor para comunicar informações.

---

## Modo de uso

### Desktop

- Centralizar o diálogo.
- Priorizar ações primária e secundária.
- Manter largura adequada ao conteúdo.

### Mobile

- Adaptar a largura ao dispositivo.
- Priorizar apenas ações essenciais.
- Garantir áreas de toque adequadas.

---

## Properties

| Propriedade | Descrição |
|-------------|-----------|
| Device | Desktop ou Mobile |
| Display icon | Exibe ou oculta o ícone |
| Show action button | Exibe ou oculta a ação principal |

---

## Casos de uso

| Cenário | Utilizar |
|----------|----------|
| Excluir usuário | ✅ |
| Excluir arquivo | ✅ |
| Confirmar pagamento | ✅ |
| Mensagem de sucesso | ❌ Toast |
| Campo obrigatório | ❌ Message |
| Informação temporária | ❌ Alert |