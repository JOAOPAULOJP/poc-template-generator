# Authentication Pattern A — Split Login

## Purpose

Recommended authentication pattern for internal systems and backoffice applications.

This pattern combines an authentication form with an institutional panel to reinforce identity and trust.

---

## Layout

Desktop

- Two-column layout.
- Left column: authentication form.
- Right column: institutional panel.
- Columns have similar visual weight.

Mobile

- Single-column layout.
- Authentication area first.
- Institutional panel below the form.

---

## Authentication Area

Typical elements:

- Title
- Description
- Email field
- Password field
- Password recovery
- Primary action
- Optional secondary action

The authentication form is always the primary visual focus.

---

## Institutional Area

Typical elements:

- Product name
- Description
- Illustration or graphic
- Organization branding

No interactive controls are allowed.


---


## Reference Implementation

- `desktop-reference.png`

Review the reference image before implementing this pattern.

The reference image is part of the official pattern documentation and should be considered together with this document.

Use it to understand the intended:

- composition;
- visual hierarchy;
- spacing;
- proportions;
- visual balance.

When the written guidelines and the reference image complement each other, consider both before making implementation decisions.

Do not reproduce the reference image literally. Instead, preserve its visual intent while adapting the implementation to the project's content and the Design System.

---

## Composition Rules

- The authentication form must be vertically centered.
- Both columns occupy the full available content height.
- Preserve generous whitespace around the form.
- The authentication area must use the official Design System Card component. Do not replace it with custom containers.
- The institutional panel uses the primary brand color.
- The form area uses a neutral background.
- The institutional panel is a supporting element. Its typography, graphics and visual emphasis must not compete with the authentication form.

---



## Do

- Keep the authentication form as the primary action.
- Reinforce institutional identity.
- Use official Design System components only.

## Don't

- Add secondary content inside the form.
- Compete visually with the authentication flow.
- Introduce additional navigation.