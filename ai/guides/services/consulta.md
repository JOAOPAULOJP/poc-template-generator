# Boas práticas para serviços de consulta

Serviços em que a pessoa usuária acessa informações já existentes, com pouca ou nenhuma necessidade de preenchimento.

## Visualização

### Foco em visualização

Serviços de consulta priorizam a apresentação clara de informações, com mínima interação de entrada.

O foco está na busca, visualização e compreensão.

### Exemplos de serviços

* Consulta CPF.
* Baixar ou visualizar nota fiscal.
* Verificar situação de processo.

A estrutura da interface deve priorizar o acesso e a compreensão das informações, evitando interações de entrada desnecessárias.

## Estados da consulta

Durante a consulta, o sistema deve comunicar claramente o estado da consulta e dos resultados.

* Indicar quando a consulta está em processamento.
* Informar quando resultados são encontrados.
* Exibir mensagens claras quando não houver resultados.
* Informar falhas na consulta de forma objetiva.

A comunicação dos estados deve permitir que a pessoa usuária compreenda o que está acontecendo e qual é o resultado da consulta.

## Ações disponíveis

As ações disponíveis devem estar relacionadas ao resultado da consulta.

* Baixar ou imprimir.
* Salvar ou compartilhar.
* Realizar nova consulta.
* Voltar ao início.

Envie o protocolo por e-mail para que o cidadão tenha um registro permanente.

## Padrões de interação

Serviços de consulta devem utilizar os padrões de interação definidos em `padroes-interacao.md` para comunicar claramente o estado da interação e orientar a pessoa usuária sobre o que aconteceu e quais ações tomar.

Considere especialmente os padrões relacionados a:

- Validação, quando houver entrada de dados.
- Mensagem de erro, quando a consulta não puder ser realizada.
- Confirmação de conclusão, quando houver uma ação que exija confirmação ou comunicação de resultado.