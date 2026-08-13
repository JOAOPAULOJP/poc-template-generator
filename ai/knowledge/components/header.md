# Header

## Contexto

- **Categoria:** Navegação
- **Objetivo:** Apresentar a identidade da aplicação e disponibilizar a navegação principal e ações de acesso.
- **Quando usar:** No topo de páginas institucionais, programas ou serviços que possuam navegação própria.
- **Quando evitar:** Em aplicações que utilizam exclusivamente uma estrutura de navegação administrativa, como o Pattern Backoffice.
- **Interrompe o fluxo:** Não
- **Exige ação do usuário:** Não
- **Componentes relacionados:** GovBar, Footer, Menu e Button.

---

## Visão geral

O Header é o elemento localizado no topo da interface responsável por apresentar a identidade da aplicação e organizar sua navegação principal.

Ele combina elementos essenciais como identificação institucional ou do serviço, links de navegação e, quando necessário, ações como acesso.

O Header deve ser utilizado abaixo do GovBar, mantendo a separação entre a identidade institucional do Governo de Pernambuco e a identidade e navegação específica da aplicação.

---

## Comportamento

- Deve permanecer visível no topo da página.
- A navegação deve permitir acesso às principais áreas da aplicação.
- Links e ações importantes devem permanecer facilmente identificáveis.
- Em dispositivos móveis, a navegação deve ser adaptada para um menu.
- O menu mobile deve permitir abrir e fechar a navegação.
- O CTA deve ser apresentado quando existir uma ação principal relacionada à aplicação.
- Evite esconder opções importantes em menus quando isso aumentar desnecessariamente o tempo de execução da tarefa.

---

## Boas práticas

- Mantenha o logo ou a identificação da aplicação sempre clicável quando representar a página inicial.
- Ícones de ação devem possuir uma descrição clara.
- Priorize os itens de navegação mais importantes.
- Em dispositivos móveis, mantenha visíveis as ações prioritárias e organize os demais itens no menu.
- Utilize labels claras e objetivas para os links.
- Não utilize o Header para substituir funcionalidades que pertencem ao GovBar.
- Mantenha a identidade visual da aplicação separada da identidade institucional apresentada pelo GovBar.

---

## Acessibilidade

- O menu deve ser navegável por teclado.
- Utilize `role="navigation"` para identificar a área de navegação quando necessário.
- Links e botões devem possuir nomes acessíveis e descritivos.
- O botão de abertura do menu mobile deve comunicar seu estado por meio de `aria-expanded`.
- O botão de abertura e fechamento do menu deve possuir um rótulo acessível.
- O foco deve permanecer visível durante a navegação por teclado.
- A ordem de foco deve seguir a ordem lógica dos elementos da interface.
- O menu mobile deve poder ser operado integralmente pelo teclado.

---

## Modo de uso

### Secretaria ou órgão

Utilizado quando a aplicação representa uma secretaria ou órgão do Governo de Pernambuco.

Pode apresentar:

- Identificação da secretaria ou órgão.
- Logo institucional.
- Navegação principal.
- CTA, quando aplicável.

### Programa ou serviço

Utilizado quando a aplicação representa um programa, serviço ou produto digital específico.

Pode apresentar:

- Nome do programa ou serviço.
- Nome da secretaria responsável.
- Navegação principal.
- CTA, quando aplicável.

### Mobile

Em dispositivos móveis, o Header reorganiza seus elementos para preservar a identificação da aplicação e disponibilizar a navegação por meio de menu.

---

## Properties

| Propriedade | Valores | Descrição |
|-------------|---------|-----------|
| Device | `desktop`, `mobile` | Define a variação do componente de acordo com o dispositivo. |
| Type | `secretaria/órgãos`, `programa/serviço` | Define o tipo de identificação apresentada pelo Header. |
| CTA | `true`, `false` | Define se o Header apresenta uma ação principal. |
| Menu state | `close`, `open` | Define o estado do menu em dispositivos móveis. |