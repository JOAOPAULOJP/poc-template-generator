import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@uigovpe/styles";
import Providers from "./providers";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Consultar processos de vistoria | Governo de Pernambuco",
  description: "Consulta de processos de vistoria e análise contra incêndio.",
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
      <body className={`${inter.className} min-h-full flex flex-col`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
