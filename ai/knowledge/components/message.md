# Message

## Contexto

- **Categoria:** Feedback
- **Objetivo:** Informar a pessoa usuária sobre o resultado de uma ação ou processo realizado pelo sistema.
- **Quando usar:** Para confirmações, avisos informativos, sucessos e erros que não precisam interromper a navegação.
- **Quando evitar:** Quando a mensagem exigir uma decisão ou interação imediata da pessoa usuária.
- **Interrompe o fluxo:** Não
- **Exige ação do usuário:** Não
- **Componentes relacionados:** Toast, Dialog e Alert.

---

## Visão geral

O Message é um componente de feedback informativo utilizado para comunicar à pessoa usuária que uma ação foi concluída ou que o sistema realizou um processo em segundo plano.

Ele é exibido de forma clara na interface, mas não bloqueia a navegação nem exige interação para ser fechado.

---

## Comportamento

- Fica visível após a ação correspondente, reforçando que o processo foi concluído.
- Não impede que a pessoa usuária avance para a próxima etapa.
- Pode desaparecer automaticamente após alguns segundos ou permanecer visível até que a pessoa usuária siga o fluxo.
- Deve comunicar claramente o tipo de feedback apresentado.

---

## Boas práticas

- **Com título:** Use quando a mensagem precisar de hierarquia, como em casos críticos, erros, falhas de autenticação, avisos de segurança ou quando a descrição for mais longa.
- **Sem título:** Ideal para mensagens rápidas e objetivas, como confirmações de sucesso ou lembretes simples.
- **Evite redundância:** Se a mensagem for curta e clara, o título pode ser desnecessário.
- **Consistência:** Mantenha um padrão de uso para que a pessoa usuária saiba o que esperar.

---

## Acessibilidade

- O componente deve ser anunciado por leitores de tela assim que aparecer.
- As mensagens precisam ter contraste adequado entre texto e fundo.
- Não dependa apenas de cor para transmitir o tipo de feedback. Utilize também ícone ou rótulo.
- Se desaparecer automaticamente, garanta tempo suficiente para leitura.
- A pessoa usuária deve poder continuar a interação normalmente, sem bloqueio.

---

## Modo de uso

### Informativo

Utilizado para comunicar uma informação sobre o sistema ou sobre uma ação realizada.

### Sucesso

Utilizado para confirmar que uma ação foi concluída com sucesso.

### Aviso

Utilizado para chamar atenção para uma situação que merece atenção, mas que não impede a continuidade do fluxo.

### Erro

Utilizado para informar que uma ação não foi concluída ou que ocorreu um problema durante o processo.

---

## Properties

| Propriedade | Valores | Descrição |
|-------------|---------|-----------|
| Type | `info`, `success`, `warning`, `error` | Define o tipo de feedback apresentado. |
| Show title | `true`, `false` | Define se a mensagem apresenta um título. |