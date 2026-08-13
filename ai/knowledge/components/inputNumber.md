# Input Number

## Contexto

- **Categoria:** Entrada de dados
- **Objetivo:** Permitir a entrada e o ajuste de valores numéricos por meio de digitação manual ou controles incrementais.
- **Quando usar:** Quando o dado esperado for estritamente numérico, como quantidade, valor monetário, porcentagem ou medidas.
- **Quando evitar:** Quando o usuário puder inserir outros formatos além de números, como CPF, telefone ou códigos, ou quando a entrada manual de números for pouco prática.
- **Interrompe o fluxo:** Não
- **Exige ação do usuário:** Sim
- **Componentes relacionados:** Input, Input Text e Date Picker.

---

## Visão geral

O Input Number é um campo de entrada específico para valores numéricos.

Ele permite que o usuário digite manualmente um número ou ajuste o valor utilizando controles incrementais.

O componente é indicado para cenários em que se espera uma quantidade, valor monetário, porcentagem ou outra medida numérica.

---

## Boas práticas

- Use quando o dado esperado for estritamente numérico.
- Defina limites mínimos e máximos (`min`, `max`) quando aplicável, para evitar valores inválidos.
- Configure o incremento (`step`) de acordo com o contexto. Por exemplo, `0.01` para valores monetários e `1` para contagem de itens.
- Quando o usuário puder inserir outros formatos além de números, como CPF, telefone ou códigos, utilize Input Text.
- Evite utilizar o Input Number para dados em que o teclado numérico não seja prático, como identificadores longos.

---

## Acessibilidade

- Associe sempre um rótulo descritivo ao campo, indicando claramente qual número deve ser inserido.
- Informe limites mínimos e máximos ao leitor de tela, utilizando atributos como `aria-valuemin` e `aria-valuemax`.
- Garanta que os controles de incremento e decremento sejam acessíveis via teclado.
- Para valores monetários ou percentuais, adicione o contexto no label ou utilize `aria-label`, como `Valor em reais`.
- Garanta que mensagens de erro sejam associadas ao campo e comunicadas adequadamente.

---

## Modo de uso

### Estado padrão

Utilizado para entrada de valores numéricos, permitindo digitação manual e ajuste por meio dos controles de incremento e decremento.

### Estado de erro

Utilizado quando o valor informado é inválido ou não atende às regras definidas para o campo.

---

## Properties

| Propriedade | Valores | Descrição |
|-------------|---------|-----------|
| State | `default`, `Error` | Define o estado visual do campo. |
| Text | `placeholder`, `number` | Define o tipo de conteúdo apresentado no campo. |
| Show support text | `true`, `false` | Define se o texto de suporte é apresentado. |