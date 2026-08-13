# Input Text

## Contexto

- **Categoria:** Entrada de dados
- **Objetivo:** Permitir a entrada de dados em formato textual por meio de um campo de formulário.
- **Quando usar:** Inserção de informações textuais, como nome completo, endereço de e-mail e outros dados em formulários.
- **Quando evitar:** Quando o dado esperado possuir um formato específico que exija outro tipo de componente.
- **Interrompe o fluxo:** Não
- **Exige ação do usuário:** Sim
- **Componentes relacionados:** Input Password e Input Number.

---

## Visão geral

O Input Text é o campo de formulário mais básico, utilizado para a entrada de dados em formato textual. Ele pode ser aplicado em diferentes contextos, como formulários de contato.

---

## Boas práticas

- Use labels claras e descritivas, como `Nome completo` e `Endereço de e-mail`.
- Utilize o placeholder apenas como exemplo de formato, nunca como substituto do label.
- Valide e forneça feedback imediato em casos de erro, como e-mail inválido.
- Ajuste o tamanho do campo de acordo com o tipo de dado esperado, como um campo de CEP menor que um campo de endereço.
- Evite o uso excessivo de inputs em um único fluxo, priorizando clareza e agrupamento lógico.

---

## Acessibilidade

- O campo deve estar sempre vinculado a um label.
- Forneça mensagens de erro legíveis por leitores de tela, utilizando `aria-describedby` quando aplicável.
- Preserve o foco visível e a navegação por teclado.
- Garanta que estados de erro não dependam apenas de diferenciação por cor.

---

## Modo de uso

### Estado padrão

Utilizado quando o campo está disponível para preenchimento e não apresenta erro.

### Estado de digitação

Representa o campo enquanto o usuário está inserindo ou editando uma informação.

### Estado focado

Indica que o campo está atualmente selecionado e pronto para receber a entrada do usuário.

### Estado de erro

Utilizado quando o valor informado é inválido ou quando existe uma informação obrigatória que não foi preenchida. A mensagem de suporte deve explicar o problema de forma clara.

---

## Properties

| Propriedade | Valores | Descrição |
|-------------|---------|-----------|
| State | `default`, `error` | Define o estado visual do campo. |
| Text state | `text`, `typing`, `focused` | Define o estado relacionado à interação com o campo. |
| Show support text | `true`, `false` | Define se o texto de suporte ou erro é apresentado. |
| Show label | `true`, `false` | Define se o label do campo é apresentado. |