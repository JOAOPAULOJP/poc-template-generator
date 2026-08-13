# Input Password

## Contexto

- **Categoria:** Entrada de dados
- **Objetivo:** Permitir a inserção de senhas ou informações sensíveis com os caracteres ocultos por padrão.
- **Quando usar:** Senhas, PINs e credenciais de acesso.
- **Quando evitar:** Quando o usuário precisar visualizar ou inserir informações que não sejam sensíveis.
- **Interrompe o fluxo:** Não
- **Exige ação do usuário:** Sim
- **Componentes relacionados:** Input Text e Input Number.

---

## Visão geral

O Input Password é um campo de formulário utilizado para inserção de senhas ou informações sensíveis.

Diferente de um campo de texto comum, os caracteres digitados ficam ocultos por padrão, aumentando a privacidade do usuário.

---

## Boas práticas

- Utilize para senhas, PINs ou credenciais.
- Inclua a opção de mostrar e ocultar a senha para reduzir erros de digitação.
- Adicione mensagens claras em caso de erro, indicando o problema encontrado.
- Quando houver requisitos específicos para a senha, apresente essas informações de forma clara.

---

## Acessibilidade

- Associe o campo a um label descritivo, como `Senha` ou `Crie sua senha`.
- Indique os requisitos da senha de forma clara e textual, não apenas por cores.
- Garanta que o botão de mostrar e ocultar senha possua um `aria-label` apropriado, como `Mostrar senha` ou `Ocultar senha`.
- Informe ao leitor de tela quando os caracteres estiverem ocultos ou visíveis.
- Mantenha o foco visível no campo e nos controles auxiliares.
- Garanta que mensagens de erro sejam associadas ao campo e comunicadas adequadamente.

---

## Modo de uso

### Senha oculta

Estado padrão do componente. Os caracteres digitados permanecem ocultos para preservar a privacidade do usuário.

### Senha visível

Permite que o usuário visualize temporariamente os caracteres digitados para conferir o valor informado.

### Estado de erro

Utilizado quando a senha informada é inválida ou não atende às regras definidas para o campo. A mensagem de erro deve explicar o problema de forma clara.

---

## Properties

| Propriedade | Valores | Descrição |
|-------------|---------|-----------|
| State | `default`, `error` | Define o estado visual do campo. |
| Password | `hidden`, `visible` | Define se os caracteres da senha ficam ocultos ou visíveis. |
| Show support text | `true`, `false` | Define se o texto de suporte ou erro é apresentado. |