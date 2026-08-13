# Search

## Contexto

- **Categoria:** Entrada de dados
- **Objetivo:** Permitir que a pessoa usuária localize informações dentro de uma aplicação.
- **Quando usar:** Busca de informações em diferentes contextos, como busca global, local ou com autocomplete.
- **Quando evitar:** Quando não houver conteúdo suficiente para justificar uma busca ou quando a informação puder ser localizada diretamente por navegação ou filtros.
- **Interrompe o fluxo:** Não
- **Exige ação do usuário:** Sim
- **Componentes relacionados:** Input Text, Dropdown e Filter.

---

## Visão geral

O Search é um campo de entrada utilizado para localizar informações dentro de uma aplicação.

Pode ser aplicado em diferentes contextos, como busca global, busca local ou busca com autocomplete.

A busca deve oferecer uma experiência intuitiva, rápida e acessível.

---

## Comportamento

- Permite digitação de termos para realizar uma busca.
- A busca pode ser executada pela tecla Enter ou pelo botão de busca.
- Pode apresentar sugestões automáticas quando o autocomplete estiver habilitado.
- O campo deve comunicar claramente o propósito da busca.
- Quando houver autocomplete, os resultados devem ser apresentados de forma previsível e navegável.

---

## Boas práticas

- Utilize um placeholder informativo, como "Buscar produtos", evitando textos vagos como "Digite aqui".
- Utilize autocomplete quando houver benefício para localizar informações conhecidas ou recorrentes.
- Evite apresentar sugestões desnecessárias que possam dificultar a localização do resultado.
- Garanta que os resultados apresentados sejam relevantes para o termo pesquisado.
- Mantenha o botão de busca claramente identificável.
- Quando houver uma ação de limpar, disponibilize uma forma clara de remover o conteúdo digitado.

---

## Acessibilidade

- Permita interação por teclado, incluindo a tecla Enter para executar a busca.
- Utilize `aria-label` ou um label associado para comunicar o propósito do campo.
- Garanta foco visível durante a interação.
- Se houver autocomplete, permita navegar pelos resultados utilizando o teclado.
- Garanta que os resultados do autocomplete sejam anunciados adequadamente por tecnologias assistivas.
- Quando houver botão para limpar o campo, forneça um rótulo acessível e descritivo.

---

## Modo de uso

### Busca sem autocomplete

Utilizada quando a pessoa usuária digita um termo e executa a busca.

### Busca com autocomplete

Utilizada quando o sistema pode apresentar sugestões enquanto a pessoa usuária digita.

### Busca com conteúdo preenchido

Utilizada quando já existe um termo inserido no campo e a busca pode ser executada.

---

## Properties

## Properties

| Propriedade | Valores | Descrição |
|-------------|---------|-----------|
| State | `default`, `hover`, `focused` | Define o estado visual do componente. |
| Text State | `text`, `placeholder`, `focused`, `typing` | Define o estado do conteúdo textual do campo. |
| Show Label | `true`, `false` | Define se o label será exibido. |
| Label | texto | Define o texto apresentado no label. |
| Button | texto | Define o texto associado ao botão de busca. |
| Clean | `true`, `false` | Define se a ação de limpar o conteúdo está disponível. |
| Input Text | texto | Define o conteúdo inserido no campo. |
| Placeholder | texto | Define o texto apresentado quando o campo está vazio. |
| Autocomplete | `true`, `false` | Define se o componente apresenta sugestões durante a digitação. |