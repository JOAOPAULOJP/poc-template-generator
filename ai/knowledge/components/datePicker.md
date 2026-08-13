# Date Picker

## Contexto

- **Categoria:** Entrada de dados
- **Objetivo:** Permitir a seleção de data e hora por meio de entrada manual ou calendário interativo.
- **Quando usar:** Seleção de datas, horários, meses, anos ou combinações de data e hora.
- **Quando evitar:** Quando o usuário não precisar selecionar uma informação temporal.
- **Interrompe o fluxo:** Não
- **Exige ação do usuário:** Sim
- **Componentes relacionados:** Input, Calendar e Time Picker.

---

## Visão geral

O Date Picker permite selecionar data e hora, seja digitando diretamente ou utilizando o calendário interativo.

O componente pode ser utilizado para seleção de uma data, mês, ano, horário ou combinação de data e hora.

A seleção pode ser realizada diretamente no campo ou através das opções apresentadas pelo componente.

---

## Quando usar

- Seleção de uma data específica.
- Seleção de data e horário.
- Seleção de mês.
- Seleção de ano.
- Seleção de horário.
- Agendamento de eventos.
- Definição de períodos ou datas de referência.

---

## Quando não usar

- Quando a informação temporal não for necessária para a tarefa.
- Quando uma opção fixa puder ser apresentada diretamente ao usuário.
- Quando a seleção exigir um período complexo que não seja suportado pelo componente.

Nestes casos, considere utilizar outro componente de entrada adequado ao contexto.

---

## Comportamento

O Date Picker deve:

- Permitir digitação manual da data ou horário.
- Permitir seleção através do calendário interativo.
- Permitir navegação entre meses e anos quando aplicável.
- Diferenciar visualmente o valor selecionado.
- Informar estados inválidos quando a data ou horário informado não for válido.
- Permitir a seleção de diferentes visualizações conforme o contexto.

O componente pode apresentar as seguintes visualizações:

- Date and time
- Date
- Month
- Year
- Hours

---

## Boas práticas

### Fazer

- Permitir a digitação manual da data e hora.
- Utilizar controles claros para navegação entre meses e anos.
- Desabilitar datas indisponíveis quando necessário.
- Diferenciar visualmente a data ou período selecionado.
- Utilizar o formato de data esperado pelo contexto da aplicação.
- Fornecer feedback quando o valor informado for inválido.

### Evitar

- Impedir a digitação manual quando ela for necessária para o fluxo.
- Permitir seleção de datas indisponíveis.
- Utilizar formatos de data inconsistentes na mesma aplicação.
- Ocultar informações necessárias para compreender o período selecionado.
- Exigir o uso exclusivo do calendário para informar uma data.

---

## Acessibilidade

- Todas as funções do Date Picker devem ser acessíveis por teclado.
- Permitir navegação entre meses, anos e datas utilizando o teclado.
- Utilizar elementos acessíveis para os controles de navegação.
- Informar corretamente a data ou período selecionado.
- Garantir foco visível durante a navegação.
- Fornecer feedback adequado quando o valor informado for inválido.
- Manter consistência na leitura e apresentação das datas.

---

## Modo de uso

### Data e hora

Permite selecionar uma data e um horário.

### Data

Permite selecionar somente uma data.

### Mês

Permite selecionar um mês dentro de um determinado ano.

### Ano

Permite selecionar um ano dentro do intervalo disponível.

### Hora

Permite selecionar somente um horário.

---

## Properties

| Propriedade | Descrição |
|-------------|-----------|
| State | Close ou Open |
| Visualization | Date and time, Date, Months, Years ou Hours |

---

## Casos de uso

| Cenário | Utilizar |
|----------|----------|
| Data de renovação | ✅ |
| Data de matrícula | ✅ |
| Mês de início | ✅ |
| Ano de nascimento | ✅ |
| Horário de entrada | ✅ |
| Seleção de data e hora | ✅ |