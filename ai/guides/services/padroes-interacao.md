# Padrões de interação

O serviço deve comunicar claramente o estado da interação, garantindo que a pessoa usuária saiba o que ocorreu e quais ações tomar.

## Validação

A validação orienta o preenchimento correto e evita erros antes do envio.

### Boas práticas

* Utilize validação em tempo real, informando erros à medida que o usuário preenche os campos.
* Campos obrigatórios devem ser claramente identificados.
* Quando existirem mais campos obrigatórios que opcionais, sinalize os campos opcionais.
* Utilize os estados de componentes adequados para indicar erros de preenchimento.

## Mensagem de erro

As mensagens de erro devem orientar a correção de forma clara e objetiva.

A mensagem deve ajudar a pessoa usuária a compreender o que aconteceu e como corrigir o problema.

## Confirmação de conclusão

Após uma ação, o sistema deve deixar claro o resultado e os próximos passos.

### Boas práticas

* Informar se a ação foi concluída com sucesso ou não.

* Explicar o que acontecerá em seguida.

  Exemplo: "Sua solicitação foi registrada. Você receberá um protocolo por e-mail."

* Apresentar ações disponíveis, como acompanhar andamento, baixar comprovante ou retornar ao início.

## Aplicação

Os padrões de interação devem ser considerados durante a construção dos serviços para garantir que os estados da interface sejam comunicados de forma clara e que a pessoa usuária saiba o que ocorreu e quais ações pode tomar.
