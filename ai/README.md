# POC Template Generator

Proof of Concept para geração de aplicações Next.js utilizando Inteligência Artificial integrada ao Design System do Governo de Pernambuco.

O objetivo deste projeto é validar um fluxo onde um agente de IA seja capaz de compreender a arquitetura da aplicação, consultar a documentação do Design System e gerar funcionalidades consistentes utilizando componentes oficiais.

---

## Objetivos

Esta POC busca responder às seguintes perguntas:

- É possível gerar interfaces de forma consistente utilizando IA?
- A IA consegue utilizar exclusivamente os componentes do Design System?
- O contexto fornecido por documentos como AGENTS.md e layout.md é suficiente para orientar a geração de código?
- O resultado produzido é fiel ao Design System e à arquitetura da aplicação?

---

## Arquitetura

O projeto utiliza:

- Next.js
- TypeScript
- React
- App Router
- @uigovpe/components
- @uigovpe/styles

---

## Estrutura

```
.
├── app/
├── public/
├── AGENTS.md
├── layout.md
├── package.json
└── README.md
```

---

## Documentação do Projeto

### AGENTS.md

Define as regras que orientam o agente de IA durante o desenvolvimento.

Exemplos:

- arquitetura
- convenções
- componentes permitidos
- regras de implementação
- uso do Storybook

### layout.md

Documenta todas as regras de layout do Design System.

Inclui:

- Grid 1216px
- Breakpoints
- Espaçamentos
- Containers
- Estrutura das páginas
- Posicionamento dos componentes

Este documento funciona como uma fonte de verdade para que a IA produza interfaces consistentes.

---

## Fluxo esperado

```text
Prompt

↓

AGENTS.md

↓

layout.md

↓

Storybook

↓

Componentes oficiais

↓

Código Next.js
```

---

## Storybook

Toda implementação deve utilizar exclusivamente componentes documentados no Storybook oficial.

Exemplos:

- Button
- InputText
- Accordion
- GovBar
- Stepper
- AdminSidebar

---

## Princípios

O agente deve:

- reutilizar componentes
- nunca recriar componentes existentes
- respeitar os tokens do Design System
- manter acessibilidade
- seguir a arquitetura da aplicação
- consultar a documentação antes de implementar qualquer funcionalidade

---

## Como executar

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

### Build

```bash
npm run build
```

---s