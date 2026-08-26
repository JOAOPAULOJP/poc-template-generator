"use client";

import type { ReactNode } from "react";
import { LayoutProvider, UiProvider } from "@uigovpe/components";

type ProvidersProps = {
  children: ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <LayoutProvider breakpoint={900} template="landingpage">
      <UiProvider>{children}</UiProvider>
    </LayoutProvider>
  );
}
