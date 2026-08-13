# Paginator

## Contexto

- **Categoria:** Navegação
- **Objetivo:** Permitir a navegação entre páginas de um conjunto de conteúdo dividido em múltiplas páginas.
- **Quando usar:** Listagens, tabelas e outros conteúdos com grande volume de informações.
- **Quando evitar:** Quando todo o conteúdo puder ser apresentado em uma única página sem comprometer a experiência.
- **Interrompe o fluxo:** Não
- **Exige ação do usuário:** Sim
- **Componentes relacionados:** Dropdown e Button.

---

## Visão geral

O Paginator é utilizado para dividir grandes volumes de conteúdo em blocos menores e navegáveis, permitindo que a pessoa usuária avance ou retorne entre páginas de forma organizada.

---

## Comportamento

- Permite navegar entre as páginas disponíveis.
- Apresenta a página atual com destaque visual.
- Pode apresentar navegação numérica entre as páginas.
- Pode oferecer controles de próxima e página anterior.
- Pode oferecer controles para primeira e última página.
- Pode permitir a definição da quantidade de itens exibidos por página.
- A composição pode variar de acordo com o dispositivo e a configuração utilizada.

---

## Boas práticas

- Exiba uma quantidade adequada de páginas visíveis, em geral até 7 itens, para não sobrecarregar a pessoa usuária.
- Ofereça controles de Próxima e Anterior além da navegação numérica quando aplicável.
- Destaque visualmente a página ativa para indicar onde a pessoa usuária está.
- Utilize a opção de itens por página quando a pessoa usuária precisar controlar a quantidade de conteúdo exibido.
- Mantenha a navegação consistente entre desktop e mobile.

---

## Acessibilidade

- Utilize a marcação semântica correta para a navegação de páginas, como `<nav aria-label="Paginação">`.
- Cada botão deve possuir um rótulo descritivo.
- A página ativa deve ser identificada com `aria-current="page"`.
- Garanta navegação por teclado utilizando Tab e Enter/Espaço.
- O foco deve permanecer visualmente perceptível durante a navegação.

---

## Modo de uso

### Paginação com itens por página

Utilizada quando a pessoa usuária pode definir quantos itens deseja visualizar por página.

### Paginação numérica

Utilizada quando a navegação entre páginas é suficiente e não é necessário permitir a alteração da quantidade de itens.

### Desktop

A paginação pode apresentar os controles de navegação e a seleção de itens por página na mesma linha.

### Mobile

A composição deve se adaptar ao espaço disponível, podendo organizar os controles em mais de uma linha.

---

## Properties

| Propriedade | Valores | Descrição |
|-------------|---------|-----------|
| Device | `desktop`, `mobile` | Define o dispositivo de apresentação. |
| Item by page | `true`, `false` | Define se a seleção de itens por página está disponível. |
| Number of page | `true` | Define a exibição da navegação numérica entre páginas. |