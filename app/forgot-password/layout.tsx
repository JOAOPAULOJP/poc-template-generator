import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recuperar senha",
  description: "Solicite instruções para recuperar o acesso à sua conta.",
};

export default function ForgotPasswordLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
