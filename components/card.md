# Card

## Contexto

- **Categoria:** Estrutura
- **Objetivo:** Agrupar informações relacionadas em um bloco visual, facilitando a leitura, organização e compreensão do conteúdo.
- **Quando usar:** Agrupar conteúdos, destacar informações, apresentar resumos ou organizar ações relacionadas.
- **Quando evitar:** Como substituto de layouts completos ou apenas para adicionar decoração visual.
- **Interrompe o fluxo:** Não
- **Exige ação do usuário:** Não
- **Componentes relacionados:** Button, Typography, Badge, Accordion e List.

---

## Visão geral

O Card é um contêiner utilizado para agrupar informações relacionadas em um bloco visual.

Ele organiza conteúdos de forma clara, permitindo combinar títulos, descrições, indicadores e ações em uma única unidade visual.

Cada Card deve representar uma única informação, entidade ou contexto.

---

## Quando usar

- Exibir resumo de informações.
- Organizar conteúdos relacionados.
- Destacar uma entidade (usuário, serviço, produto, documento etc.).
- Agrupar ações relacionadas ao mesmo conteúdo.
- Compor listas e grades de informações.

---

## Quando não usar

- Como estrutura principal da página.
- Para agrupar conteúdos sem relação entre si.
- Apenas como elemento decorativo.
- Quando uma simples divisão visual for suficiente.

Nestes casos, considere utilizar Containers, Sections ou Grid.

---

## Comportamento

O Card deve:

- Agrupar apenas conteúdos relacionados.
- Possuir hierarquia clara entre título, subtítulo e descrição.
- Manter espaçamentos consistentes.
- Permitir ações apenas quando fizerem parte do contexto apresentado.
- Adaptar sua altura ao conteúdo.

---

## Anatomia

1. Contêiner
2. Título
3. Subtítulo (opcional)
4. Descrição
5. Botão secundário (opcional)
6. Botão primário (opcional)

---

## Boas práticas

### Fazer

- Utilizar títulos objetivos.
- Organizar o conteúdo de forma hierárquica.
- Limitar a quantidade de ações visíveis.
- Manter espaçamentos consistentes.
- Utilizar Cards para representar uma única informação ou contexto.

### Evitar

- Inserir conteúdo excessivamente longo.
- Transformar todo o Card em botão quando houver múltiplas ações.
- Misturar conteúdos sem relação.
- Exibir muitas ações concorrendo entre si.

---

## Acessibilidade

- Garantir contraste adequado entre conteúdo e fundo.
- Manter ordem lógica de navegação.
- Utilizar marcação semântica adequada.
- Garantir foco visível para elementos interativos.
- Não utilizar o Card como único elemento clicável quando existirem múltiplas ações.

---

## Modo de uso

### Desktop

- Organizar Cards em listas ou grades.
- Manter alinhamento e espaçamento consistentes.

### Mobile

- Priorizar leitura vertical.
- Evitar excesso de conteúdo.
- Garantir áreas de toque adequadas para ações.

---

## Properties

| Propriedade | Descrição |
|-------------|-----------|
| Show subtitle | Exibe ou oculta o subtítulo |
| Show action | Exibe ou oculta as ações |

---

## Casos de uso

| Cenário | Utilizar |
|----------|----------|
| Card de serviço | ✅ |
| Card de usuário | ✅ |
| Card de notícia | ✅ |
| Card de produto | ✅ |
| Layout completo da página | ❌ |
| Agrupar conteúdos sem relação | ❌ |
| Apenas decoração visual | ❌ |