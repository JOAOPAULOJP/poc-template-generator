# Button

## Contexto

- **Categoria:** Ação
- **Objetivo:** Permitir que o usuário execute uma ação de forma clara e previsível.
- **Quando usar:** Enviar dados, confirmar ações, iniciar fluxos, navegar ou executar comandos.
- **Quando evitar:** Navegação entre seções da página, agrupamento de informações ou ações que não exigem interação direta.
- **Interrompe o fluxo:** Não
- **Exige ação do usuário:** Sim
- **Componentes relacionados:** Icon Button, Text Link e Dialog.

---

## Visão geral

O Button representa uma ação que pode ser executada pelo usuário.

É um dos principais componentes de interação da interface e deve comunicar claramente o resultado esperado após sua seleção.

A hierarquia visual entre os botões orienta o usuário sobre qual ação deve receber maior prioridade.

---

## Quando usar

- Enviar formulários.
- Confirmar uma ação.
- Salvar ou atualizar informações.
- Iniciar um fluxo.
- Executar comandos.
- Navegar quando a ação representar um destino importante.

---

## Quando não usar

- Navegação entre páginas de conteúdo.
- Links em textos.
- Ações indisponíveis apenas para manter o layout.
- Múltiplas ações primárias competindo pela atenção.

Nestes casos, considere utilizar Text Link, Navigation ou outro componente mais adequado.

---

## Comportamento

O Button deve:

- Comunicar claramente a ação que será executada.
- Apresentar estados visuais consistentes.
- Permitir interação por mouse, toque e teclado.
- Fornecer feedback visual durante a interação.
- Permanecer desabilitado apenas quando a ação realmente não puder ser executada.

---

## Anatomia

1. Contêiner
2. Ícone esquerdo (opcional)
3. Label
4. Ícone direito (opcional)

---

## Variações

- Primary
- Secondary
- Link
- Danger
- Icon Button

Cada variação possui uma finalidade específica e deve respeitar a hierarquia visual do sistema.

---

## Estados

- Default
- Hover
- Pressed
- Focused
- Disabled

---

## Boas práticas

### Fazer

- Utilizar apenas um botão primário por contexto.
- Escrever labels objetivas iniciando por verbos.
- Utilizar ícones apenas quando reforçarem o significado da ação.
- Posicionar ações primárias e secundárias de forma consistente.

### Evitar

- Utilizar múltiplos botões primários no mesmo contexto.
- Escrever labels genéricas como "OK" quando a ação puder ser mais específica.
- Utilizar apenas ícones quando o significado não for universal.
- Posicionar ícones acima do texto.

---

## Acessibilidade

- Utilizar o elemento `<button>` sempre que possível.
- Garantir navegação por teclado.
- Tornar o estado de foco claramente visível.
- Possuir texto visível ou `aria-label`.
- Comunicar corretamente estados como desabilitado ou pressionado.

---

## Modo de uso

### Desktop

- Priorizar agrupamento de ações.
- Destacar apenas a ação principal.

### Mobile

- Garantir área mínima de toque.
- Priorizar labels curtas.
- Evitar excesso de ações na mesma região.

---

## Properties

| Propriedade | Descrição |
|-------------|-----------|
| Variant | Primary, Secondary, Link, Danger ou Icon |
| State | Default, Hover, Pressed, Focused ou Disabled |
| Left Icon | Exibe ícone à esquerda |
| Right Icon | Exibe ícone à direita |
| Disabled | Desabilita a interação |

---

## Casos de uso

| Cenário | Variante recomendada |
|----------|----------------------|
| Salvar formulário | Primary |
| Cancelar operação | Secondary |
| Excluir registro | Danger |
| Abrir detalhes | Link |
| Ação compacta | Icon Button |