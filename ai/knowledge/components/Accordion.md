# Accordion

## Contexto

- **Categoria:** Exibição de conteúdo
- **Objetivo:** Organizar conteúdos em seções expansíveis, permitindo que o usuário visualize apenas as informações necessárias.
- **Quando usar:** Conteúdos secundários, FAQs, filtros, configurações ou informações complementares.
- **Quando evitar:** Conteúdo essencial para a conclusão da tarefa, formulários longos ou informações que precisam estar sempre visíveis.
- **Interrompe o fluxo:** Não
- **Exige ação do usuário:** Não
- **Componentes relacionados:** Card, Tabs e Navigation.

---

## Visão geral

O Accordion organiza informações em blocos expansíveis, ajudando a reduzir rolagem e manter a interface mais enxuta.

Cada seção pode ser aberta ou fechada pelo usuário conforme a necessidade, tornando o componente útil para FAQs, filtros, configurações ou áreas com conteúdo complementar.

Seu uso é recomendado quando o usuário não precisa visualizar todas as informações simultaneamente, mas deseja explorar apenas o conteúdo de interesse.

---

## Quando usar

- FAQs.
- Filtros avançados.
- Configurações.
- Conteúdos complementares.
- Informações secundárias que podem permanecer recolhidas inicialmente.

---

## Quando não usar

- Conteúdo essencial para completar uma tarefa.
- Fluxos com formulários extensos.
- Informações que precisam estar sempre visíveis.
- Comparação entre informações que precisam ser vistas simultaneamente.

Nestes casos, considere utilizar Tabs, Cards ou exibição direta do conteúdo.

---

## Comportamento

O Accordion deve:

- Permitir expandir e recolher cada seção de forma independente.
- Indicar claramente o estado expandido ou recolhido.
- Manter o estado da seção durante a interação, quando fizer sentido para o fluxo.
- Permitir interação em todo o cabeçalho.
- Exibir apenas o conteúdo relacionado ao item expandido.

---

## Anatomia

1. Contêiner
2. Título
3. Botão expandir
4. Conteúdo

---

## Boas práticas

### Fazer

- Utilizar títulos claros e objetivos.
- Tornar todo o cabeçalho clicável.
- Agrupar conteúdos relacionados.
- Manter espaçamento consistente.
- Utilizar para reduzir a complexidade visual da interface.

### Evitar

- Accordion dentro de Accordion.
- Títulos genéricos.
- Esconder informações essenciais.
- Criar conteúdos muito extensos dentro de uma única seção.

---

## Acessibilidade

- O cabeçalho deve ser um botão.
- Informar o estado utilizando `aria-expanded`.
- Relacionar botão e conteúdo através de `aria-controls`.
- Permitir navegação por teclado.
- Permitir abrir e fechar utilizando Enter ou Espaço.
- Comunicar visualmente o estado expandido e recolhido.

---

## Modo de uso

### Desktop

- Utilizar quando houver espaço suficiente para organizar conteúdos em blocos.
- Manter largura consistente entre os itens.

### Mobile

- Priorizar títulos curtos.
- Garantir área de toque adequada.
- Evitar conteúdos excessivamente longos.

---

## Properties

| Propriedade | Descrição |
|-------------|-----------|
| State | `open` ou `closed` |

---

## Casos de uso

| Cenário | Utilizar |
|----------|----------|
| FAQ | ✅ |
| Filtros avançados | ✅ |
| Configurações | ✅ |
| Informações complementares | ✅ |
| Formulário principal | ❌ |
| Conteúdo obrigatório da página | ❌ |
| Comparação entre informações | ❌ |