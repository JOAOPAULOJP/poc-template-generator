## Modo de uso

### Estado padrão

Utilizado quando o campo está disponível para preenchimento e não apresenta nenhuma interação ou erro.

### Estado focado

Indica que o campo está atualmente selecionado e pronto para receber a entrada do usuário.

### Estado de erro

Utilizado quando o campo contém um valor inválido ou quando uma informação obrigatória não foi preenchida. A mensagem de suporte deve explicar o problema de forma clara.

### Estado desabilitado

Utilizado quando o campo não está disponível para interação. O usuário não pode inserir ou alterar seu conteúdo enquanto estiver nesse estado.

---

## Properties

| Propriedade | Valores | Descrição |
|-------------|---------|-----------|
| State | `default`, `focused`, `error`, `disabled` | Define o estado visual e de interação do campo. |
| Type | `text input` | Define o tipo de entrada do componente. |
| Show support text | `true`, `false` | Define se o texto de suporte ou erro é apresentado. |