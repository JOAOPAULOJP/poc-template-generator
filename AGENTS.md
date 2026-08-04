<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This project uses the latest version of Next.js and may contain APIs, conventions and file structures that differ from your training data.

Before writing any code:

- Read the official documentation available inside `node_modules/next/dist/docs/`.
- Follow the current App Router conventions.
- Prefer modern APIs over deprecated ones.
- Do not assume older Next.js behaviors.
- Respect the project architecture.

<!-- END:nextjs-agent-rules -->

# AGENTS.md

## Context

You are working on the **Padrão Digital de Pernambuco**, the official Design System used by the Government of Pernambuco.

The objective of this project is to validate that an AI agent can build production-ready applications using the official Design System.

This repository is a Proof of Concept (POC).

The generated code should be compatible with the development workflow adopted by the engineering team.

---

# Documentation Workflow

This repository contains a structured knowledge base for the Design System.

Before implementing any feature, consult the documentation in the following order:

1. `layout.md`
   - Understand the available application templates and layout rules.

2. `typography.md`

3. `patterns/`
   - Identify the appropriate application pattern and follow its implementation rules.

4. `components/`
   - Read the documentation of every component used by the selected pattern.
   - Respect each component's purpose, usage guidelines and accessibility requirements.

The documentation is the primary source of truth for implementation decisions.

Do not rely only on model knowledge when documentation is available.

---

# Technologies

Always use:

- Next.js (App Router)
- React
- TypeScript
- @uigovpe/components
- @uigovpe/styles

---

# Objective

The goal is NOT simply to generate an interface.

The goal is to generate clean, maintainable and reusable code using the official Design System.

Priorities:

1. Reuse existing components.
2. Follow the Design System.
3. Generate organized code.
4. Keep the project easy to evolve.
5. Respect the project architecture.

Visual appearance is a consequence of correctly using the Design System.

---

# Source of Truth

The documentation available in this repository is the primary source of truth.

When documentation exists:

1. Read the corresponding Pattern.
2. Read the related component documentation.
3. Verify that the component exists in the installed version of `@uigovpe/components`.
4. Only then implement the solution.

Never rely exclusively on prior knowledge when local documentation is available.

---

# Mandatory Workflow

Always follow this sequence.

1. Understand the requested feature.
2. Analyze the content.
3. Propose the page structure.
4. List the Design System components that will be used.
5. Explain implementation decisions.
6. Only then start writing code.

---

# Design System Rules

Always:

- Use components from `@uigovpe/components`.
- Use tokens from `@uigovpe/styles`.
- Respect the official Grid.
- Respect spacing tokens.
- Respect typography tokens.
- Respect color tokens.
- Build responsive interfaces.
- Build accessible interfaces.
- Use the official Inter typography configured globally.

Never:

- Recreate existing Design System components.
- Use hardcoded colors.
- Use arbitrary spacing values.
- Use arbitrary typography values.
- Use external UI libraries.

Do not use:

- Material UI
- Ant Design
- Bootstrap
- Chakra UI
- Tailwind UI
- Any other UI library

---

# Component Selection

When choosing a component:

- Prefer an existing Design System component.
- Explain why the component was selected.
- Never invent props.
- Never modify component behavior unless requested.

If there is uncertainty, consult the available documentation before implementing.

---

# Code Quality

Always generate:

- Clean code
- Small components
- Single Responsibility Principle
- Reusable components
- Strong typing
- Readable code
- Consistent naming

Avoid:

- Large components
- Duplicated code
- Unnecessary abstractions

---

# Project Architecture

Organize the project using reusable sections and components.

Example:

app/

components/

sections/

shared/

Each section should have a single responsibility.

Keep files small.

---

# Accessibility

Always:

- Use semantic HTML.
- Respect heading hierarchy.
- Provide alt text for images.
- Ensure keyboard navigation.
- Use accessible Design System components whenever available.

Accessibility is mandatory.

---


# Application Architecture

Before implementing pages, verify whether the application root (`app/layout.tsx`) is already configured with the required Design System providers.

If the application root (`app/layout.tsx`) is not already configured with the required Design System providers, update it before implementing any pages.

Never add `LayoutProvider` or `UiProvider` inside individual pages.

Global providers belong only to `app/layout.tsx`.




# Responsive Design

Every interface must work correctly on:

- Desktop
- Tablet
- Mobile

Never build desktop-only layouts.

---

## Reference Documentation

When implementing any interface, use the following sources of information in this order:

1. Local project documentation (`layout.md`,  `typography.md`, `patterns/`, `components/`).
2. Installed Design System (`@uigovpe/components`).
3. Official Storybook.

Official Storybook:
https://ligadigital.pe.gov.br/storybook/index.html


---

# Expected Behavior

When receiving a request:

- Think before coding.
- Reuse before creating.
- Explain architectural decisions.
- Respect the Design System.
- Generate production-quality code.

---
## Component Validation

Before using any component from @uigovpe/components:

- Verify that the component is exported by the installed version of the library.
- Never assume a component exists.
- Prefer the installed package over model memory.
- If there is any uncertainty, inspect the installed package or its documentation before implementing.