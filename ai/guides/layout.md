# AI Implementation Guidelines

These guidelines define how AI coding agents should implement interfaces using the Pernambuco Digital Standard.

Always follow these instructions before generating code. NEVER SKIP A STEP. 

--- 
# Design Patterns

Design Patterns define the official page compositions of the Pernambuco Digital Standard.

Before designing or implementing any interface:

1. Check whether an official page pattern already exists.
2. Reuse the closest matching pattern whenever possible.
3. Adapt the pattern to the requested content without changing its core composition.
4. If no suitable pattern exists, follow the general layout rules defined in this document.

Available categories:

- Authentication Patterns
- Page Patterns
- Form Patterns
- Navigation Patterns
- Dashboard Patterns

See the `patterns/` directory for available patterns.

Design Patterns are the preferred way to compose pages in this project.

---

# Layout First

Always define the page structure before placing components.

The layout must follow the rules described in `layout.md`.

Do not build pages by placing components directly on the screen.

---

# Implementation Workflow


Before writing any code:

1. Understand the page objective.
2. Check whether an official Design Pattern exists.
3. Read `layout.md`.
4. Plan the page structure.
5. Identify the required Design System components.
6. Implement the interface.

---



# Design System

Always prioritize components from `@uigovpe/components`.

Do not recreate existing components.

Before implementing a component:

- verify that it exists in the library;
- use the available properties and variants;
- avoid creating custom alternatives.

---

# Code Quality

Generate clean, readable and maintainable code.

Prefer composition over duplication.

Keep components small and reusable.

Respect the project's existing architecture.

---

# Implementation Rules

Always:

- follow the official layout structure;
- use Design System components whenever possible;
- keep spacing and alignment consistent;
- preserve accessibility.

Never:

- create custom components when an official one exists;
- ignore the layout structure;
- invent Design System APIs;
- use arbitrary spacing or layout values.

---

# Goal

Produce interfaces that are consistent with the Pernambuco Digital Standard and are easy to maintain.