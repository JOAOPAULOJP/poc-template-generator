# Toast

## Visão geral

O Toast é um componente de notificação breve, exibido de forma sobreposta à interface. Ele serve para informar o usuário sobre o resultado de uma ação, como salvar, excluir ou atualizar um item, sem interromper seu fluxo de trabalho.

## Comportamento

- Normalmente aparece no canto da tela e desaparece automaticamente após alguns segundos.

## Boas práticas

- Com título: use quando a mensagem precisa de hierarquia, por exemplo, em casos críticos, como erros, falhas de autenticação ou avisos de segurança, ou quando a descrição é mais longa;
- Sem título: ideal para mensagens rápidas e objetivas, como confirmações de sucesso ou lembretes simples;
- Evite redundância: se a mensagem for curta e clara, o título pode ser desnecessário;
- Consistência: mantenha um padrão de uso para que o usuário saiba o que esperar, por exemplo, erros sempre com título e sucessos sem título.

## Acessibilidade

- Mensagens com título devem anunciar título + descrição para leitores de tela;
- Mensagens sem título devem garantir clareza apenas com o corpo do texto.

## Modo de uso

O Toast pode ser utilizado nos seguintes tipos:

- `info`
- `success`
- `warning`
- `error`

O título pode ser exibido ou ocultado de acordo com o contexto da mensagem.

**Properties**

- `Type`: Info, Success, Warning, Error
- `Show Title`: True, False
- `Title`: Texto do título
- `Text`: Texto da mensagem