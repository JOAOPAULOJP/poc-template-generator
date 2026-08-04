# Typography

## Objetivo

A tipografia oficial do Design System do Governo de Pernambuco utiliza a fonte **Inter**.

Todas as aplicações devem utilizar esta fonte como tipografia principal.

---

## Instalação

Em aplicações Next.js, utilize a integração oficial do framework.

```tsx
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});
```

---

## Aplicação

A fonte deve ser aplicada globalmente em `app/layout.tsx`.

```tsx
<body className={inter.className}>
    {children}
</body>
```

Nunca aplique a fonte individualmente em páginas ou componentes.

---

## Typography

Sempre que houver necessidade de exibir textos da interface, utilize o componente `Typography` do Design System sempre que disponível.

Evite utilizar elementos HTML estilizados manualmente quando existir um componente equivalente.

---

## Regras

Sempre:

- Utilizar a fonte Inter.
- Configurar a fonte em `app/layout.tsx`.
- Utilizar `next/font/google`.
- Utilizar o componente `Typography` do Design System para textos da interface.

Nunca:

- Utilizar outra fonte como padrão da aplicação.
- Importar a fonte manualmente.
- Aplicar a fonte individualmente em componentes.
- Criar estilos tipográficos que contrariem o Design System.