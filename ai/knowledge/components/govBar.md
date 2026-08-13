# GovBar

## Contexto

- **Categoria:** Navegação e identidade institucional
- **Objetivo:** Identificar as soluções como parte do ecossistema do Governo de Pernambuco e disponibilizar funcionalidades globais de acessibilidade.
- **Quando usar:** Em todas as páginas e aplicações do Governo de Pernambuco, incluindo aplicações administrativas e sistemas internos.
- **Quando evitar:** Não deve ser evitado em aplicações que fazem parte do ecossistema do Governo de Pernambuco.
- **Interrompe o fluxo:** Não
- **Exige ação do usuário:** Não
- **Componentes relacionados:** AdminUserBar, AdminSideBar.

---

## Visão geral

A GovBar é um elemento padrão que identifica as soluções como parte do ecossistema do Governo de Pernambuco.

Por padrão, apresenta a identificação do Governo de Pernambuco e disponibiliza funcionalidades de acessibilidade para tornar as experiências digitais mais inclusivas.

O componente deve estar sempre posicionado no topo da página, sendo o primeiro elemento da interface a ser carregado.

---

## Boas práticas

- **Presença obrigatória:** o GovBar deve ser incluído em todas as páginas, sem exceção.
- **Posição fixa:** deve permanecer no topo da página, antes de qualquer outro conteúdo ou menu de navegação.
- **Responsividade:** deve funcionar corretamente em dispositivos móveis e desktops.
- Não substituir o GovBar por elementos próprios de identificação institucional.
- Preservar os controles de acessibilidade disponibilizados pelo componente.

---

## Acessibilidade

- Os elementos do GovBar devem ser os primeiros componentes acessíveis pela navegação via teclado.
- Quando aplicável, disponibilize teclas de atalho para facilitar o acesso às opções de acessibilidade.
- Os controles devem possuir rótulos acessíveis e descritivos.
- O logotipo e os elementos informativos devem ser interpretados corretamente por leitores de tela.
- Todos os controles devem possuir foco visível e ser operáveis por teclado.

---

## Cenários de uso

- **Site institucional:** presente no topo para garantir acessibilidade e identidade institucional.
- **Aplicações web do governo:** deve permanecer visível também em backoffices e sistemas internos, mantendo a padronização da experiência.

---

## Modo de uso

### Desktop

O GovBar ocupa toda a largura da página e apresenta a identificação do Governo de Pernambuco, juntamente com os controles de acessibilidade.

### Mobile

O GovBar se adapta à largura disponível, mantendo a identificação institucional e os controles de acessibilidade essenciais.

---

## Properties

| Propriedade | Valores | Descrição |
|-------------|---------|-----------|
| Device | `desktop`, `mobile` | Define a variação do componente de acordo com o dispositivo. |