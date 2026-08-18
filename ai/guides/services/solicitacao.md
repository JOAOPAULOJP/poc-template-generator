# Boas práticas para serviços de solicitação

## Objetivo

Serviços de solicitação são aqueles em que a pessoa cidadã precisa fornecer informações, preencher dados ou enviar documentos para iniciar ou concluir uma solicitação junto ao governo.

Este guia apresenta boas práticas para estruturar a experiência desses serviços, considerando fluxo, preenchimento de dados, confirmação e padrões de interação.

O objetivo é orientar a construção de interfaces claras, previsíveis e adequadas à complexidade da solicitação.

---

## Quando utilizar

Considere este guia quando o serviço exigir uma ou mais das seguintes ações:

* Preenchimento de dados pela pessoa cidadã.
* Envio de informações ou documentos.
* Validação de dados antes do envio.
* Execução de uma solicitação.
* Acompanhamento ou confirmação após o envio.
* Comunicação de estados durante o processo.

A complexidade do serviço deve orientar a estrutura da interface.

Serviços simples podem ser resolvidos em uma única página. Serviços com maior quantidade de informações ou etapas devem utilizar uma estrutura que facilite a compreensão e permita que a pessoa cidadã avance gradualmente.

---

## Estrutura do serviço

Um serviço de solicitação pode ser organizado considerando quatro momentos principais:

1. Preenchimento das informações.
2. Validação dos dados.
3. Envio da solicitação.
4. Confirmação da conclusão.

A estrutura deve ser adaptada à necessidade do serviço. Nem todo serviço precisa apresentar todas essas etapas separadamente.

---

## Fluxo em múltiplas etapas

### Quando utilizar

Utilize múltiplas etapas quando o serviço apresentar quantidade ou complexidade de informações que torne o preenchimento em uma única página difícil de compreender.

Como referência, serviços com maior complexidade podem ser organizados entre 3 e 5 etapas.

Evite dividir um serviço simples em muitas etapas apenas para criar um fluxo sequencial.

### Boas práticas

* Divida o serviço em etapas que tenham relação lógica entre si.
* Agrupe informações relacionadas dentro da mesma etapa.
* Utilize títulos claros para identificar cada etapa.
* Exiba uma indicação de progresso.
* Permita que a pessoa cidadã compreenda quanto falta para concluir o serviço.
* Permita retornar às etapas anteriores para revisar informações.
* Evite criar etapas com poucas informações apenas para aumentar a quantidade de etapas.

### Indicador de progresso

Quando o serviço utilizar múltiplas etapas, apresente um componente de progresso no cabeçalho ou em posição equivalente.

O indicador deve permitir compreender:

* Em qual etapa a pessoa está.
* Quais etapas já foram concluídas.
* Quais etapas ainda precisam ser realizadas.

O indicador de progresso deve representar o fluxo real do serviço e não apenas a quantidade de telas.

### Benefícios

A divisão adequada em etapas pode:

* Reduzir a sobrecarga de informação.
* Melhorar a compreensão do processo.
* Facilitar a conclusão do preenchimento.
* Permitir revisar informações antes do envio.

---

## Preenchimento de dados

A entrada de dados deve ser organizada de acordo com o tipo e o contexto das informações solicitadas.

Evite apresentar um formulário extenso como um bloco único de campos.

### Organização em seções

Quando houver muitos campos, divida as informações em categorias ou seções temáticas.

Exemplos:

* Dados do comunicante.
* Dados complementares.
* Dados dos envolvidos.

Cada seção deve possuir um título claro que ajude a pessoa cidadã a entender rapidamente o tipo de informação solicitada.

Quando necessário, utilize uma breve descrição para complementar as instruções da seção.

### Agrupamento de informações

Campos relacionados devem permanecer próximos.

A organização deve considerar a relação entre as informações e a sequência natural de preenchimento.

Evite misturar informações de contextos diferentes dentro da mesma seção.

### Dados já conhecidos

Sempre que possível, carregue automaticamente informações que o sistema já possui.

Isso reduz o esforço de preenchimento e diminui a possibilidade de erros.

Quando informações forem preenchidas automaticamente, deixe claro quais dados foram carregados pelo sistema e permita sua alteração quando necessário.

---

## Validação

A validação deve ajudar a pessoa cidadã a identificar e corrigir problemas antes do envio da solicitação.

### Boas práticas

* Utilize validação em tempo real quando ela ajudar a corrigir erros durante o preenchimento.
* Informe o problema próximo ao campo relacionado.
* Identifique claramente campos obrigatórios.
* Diferencie campos obrigatórios de campos opcionais.
* Utilize os estados de erro apropriados dos componentes.
* Evite apresentar mensagens genéricas quando for possível explicar exatamente o problema.

A validação não deve ser utilizada apenas depois que a pessoa tentar enviar o formulário quando o erro puder ser identificado anteriormente.

---

## Conclusão da solicitação

Após o envio, o sistema deve comunicar claramente se a solicitação foi concluída com sucesso ou se ocorreu algum problema.

A confirmação deve responder, de forma objetiva:

* O que aconteceu.
* Se a solicitação foi registrada.
* Qual é o próximo passo.
* Quais ações estão disponíveis.

### Informações importantes

Quando aplicável, apresente:

* Número ou protocolo da solicitação.
* Data ou horário do registro.
* Prazo ou previsão relacionada ao serviço.
* Informações sobre acompanhamento.
* Forma de contato ou comunicação posterior.

Exemplo de mensagem:

> Sua solicitação foi registrada. Você receberá um protocolo por e-mail.

### Ações disponíveis

Após a conclusão, apresente apenas ações relevantes para aquele contexto.

Exemplos:

* Acompanhar solicitação.
* Baixar comprovante.
* Voltar para o início.
* Realizar uma nova solicitação.

As ações devem ter hierarquia clara e não devem competir visualmente com a mensagem de confirmação.

---

## Estados e comunicação

O serviço deve comunicar claramente os estados relevantes durante sua execução.

Considere, quando aplicável:

* Preenchimento.
* Processamento.
* Sucesso.
* Erro.
* Solicitação registrada.
* Solicitação em andamento.
* Solicitação que exige uma nova ação da pessoa cidadã.

A pessoa cidadã não deve precisar interpretar o comportamento da interface para descobrir o que aconteceu.

---

## Padrões de interação

O serviço deve comunicar claramente o estado da interação e quais ações estão disponíveis.

Considere:

* Estados de campos.
* Mensagens de validação.
* Mensagens de erro.
* Estados de processamento.
* Confirmações de sucesso.
* Ações disponíveis após a conclusão.

As mensagens devem ser objetivas e orientadas à ação.

Sempre que houver um problema, explique o que aconteceu e, quando possível, como a pessoa pode resolvê-lo.

---

## Princípios para construção

Ao construir um serviço de solicitação, considere:

### Complexidade

A quantidade e a complexidade das informações devem determinar a estrutura do fluxo.

### Clareza

Cada etapa, seção e ação deve possuir uma finalidade compreensível.

### Progressão

A pessoa deve saber onde está no processo e o que precisa fazer para avançar.

### Redução de esforço

Utilize informações já conhecidas pelo sistema sempre que possível e evite solicitar dados desnecessários.

### Prevenção de erros

Identifique problemas durante o preenchimento sempre que possível, evitando que a pessoa descubra erros somente após o envio.

### Feedback

Toda ação relevante deve possuir uma resposta clara do sistema.

### Conclusão

Após o envio, informe claramente o resultado e apresente os próximos passos.

---

## Relação com o Design System

A implementação do serviço deve utilizar os componentes e padrões oficiais disponíveis no Design System.

Este guia define decisões e boas práticas relacionadas à experiência do serviço. Não substitui a documentação dos componentes ou dos padrões de interface.

Antes de criar uma nova composição:

1. Consulte os componentes disponíveis.
2. Consulte os padrões existentes.
3. Identifique a composição mais adequada ao tipo de serviço.
4. Utilize os componentes oficiais sempre que houver uma solução existente.
5. Crie novas composições somente quando as existentes não atenderem à necessidade do serviço.
vaml