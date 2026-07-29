import type { Metadata } from "next";
import "./globals.css";
import "@uigovpe/styles";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Backoffice | Farmácia Digital",
  description: "Gestão de documentos e laudos de orientação farmacêutica.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
