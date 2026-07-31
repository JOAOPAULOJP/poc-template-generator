# Admin Sidebar

## Contexto

- **Categoria:** Navegação
- **Objetivo:** Disponibilizar a navegação principal entre os módulos de aplicações administrativas.
- **Quando usar:** Aplicações que utilizam o Pattern Backoffice e possuem múltiplos módulos ou funcionalidades.
- **Quando evitar:** Landing Pages, autenticação, aplicações de página única ou interfaces sem navegação lateral.
- **Interrompe o fluxo:** Não
- **Exige ação do usuário:** Não
- **Componentes relacionados:** Admin UserBar, Navigation Item, Tooltip e Logo.

---

## Visão geral

O Admin Sidebar é o componente responsável pela navegação principal das aplicações administrativas.

Ele organiza os módulos do sistema em uma estrutura lateral persistente, permitindo que o usuário alterne entre funcionalidades mantendo sempre o contexto da aplicação.

O componente suporta estados aberto e fechado, além de variações visuais de tema.

---

## Quando usar

- Sistemas administrativos.
- Painéis de gestão.
- Backoffices com múltiplos módulos.
- Aplicações governamentais com navegação persistente.

---

## Quando não usar

- Landing Pages.
- Fluxos de autenticação.
- Aplicações simples com poucas páginas.
- Navegação temporária ou contextual.

Nestes casos, utilize outro padrão de navegação mais adequado.

---

## Comportamento

O Admin Sidebar deve:

- Permanecer visível durante toda a navegação da aplicação.
- Permitir alternar entre estado expandido e recolhido.
- Destacar visualmente o módulo ativo.
- Manter a navegação consistente entre todas as páginas.
- Adaptar seu comportamento em diferentes resoluções.

Quando recolhido:

- Exibir apenas os ícones de navegação.
- Exibir Tooltip para itens sem label visível.

---

## Anatomia

1. Logo da aplicação
2. Controle de expansão/recolhimento
3. Lista de navegação
4. Item ativo
5. Rodapé institucional (opcional)

---

## Variações

### Estado

- Open
- Closed

### Tema

- Default

---

## Boas práticas

### Fazer

- Priorizar entre 5 e 7 módulos principais.
- Utilizar ícones consistentes.
- Manter labels curtas.
- Destacar claramente o item ativo.
- Organizar itens relacionados próximos.

### Evitar

- Exibir mais de 9 itens principais.
- Utilizar textos longos.
- Alterar a largura do componente.
- Misturar diferentes padrões de navegação lateral.

---

## Acessibilidade

- Permitir navegação completa por teclado.
- Garantir foco visível.
- Utilizar `aria-current` para indicar o item ativo.
- Garantir `aria-label` para ícones quando recolhido.
- Exibir Tooltips acessíveis no estado recolhido.

---

## Modo de uso

### Desktop

- Permitir estados aberto e fechado.
- Manter a navegação sempre disponível.

### Mobile

- Exibir recolhido por padrão.
- Ser controlado através do botão presente no Admin UserBar.

---

## Properties

| Propriedade | Descrição |
|-------------|-----------|
| State | Open ou Closed |
| Theme | Default|
| Navigation Items | Até 9 itens configuráveis |
| Active Item | Define o módulo ativo |

---

## Casos de uso

| Cenário | Utilizar |
|----------|----------|
| Dashboard administrativo | ✅ |
| Gestão de usuários | ✅ |
| Configurações | ✅ |
| Sistema de protocolos | ✅ |
| Landing Page | ❌ |
| Login | ❌ |
| Recuperação de senha | ❌ |

---

## Dependências

O **Admin Sidebar** faz parte da composição oficial do **Pattern Backoffice** e não deve ser utilizado de forma isolada.

Sua utilização pressupõe a presença dos seguintes componentes:

- **Admin UserBar:** responsável por apresentar o contexto da página e as informações do usuário autenticado.
- **Navigation Item:** utilizado para representar os módulos do sistema.
- **Tooltip:** utilizado para exibir o nome dos itens quando o Sidebar estiver recolhido.
- **Logo institucional:** utilizado para identificar a aplicação ou órgão responsável.

Sempre que um agente de IA ou desenvolvedor implementar uma página utilizando o **Pattern Backoffice**, o **Admin Sidebar** deve ser considerado um componente obrigatório da composição da interface.