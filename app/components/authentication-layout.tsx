import type { ReactNode } from "react";
import { FlexContainer, GovBar, Typography } from "@uigovpe/components";

type AuthenticationLayoutProps = {
  children: ReactNode;
  formLabel: string;
};

export default function AuthenticationLayout({
  children,
  formLabel,
}: AuthenticationLayoutProps) {
  return (
    <main className="authentication-page">
      <GovBar showCookies={false} />

      <section className="authentication-shell" aria-label={formLabel}>
        <section className="authentication-form-area">{children}</section>

        <aside
          className="authentication-institutional-area"
          aria-label="Apresentação do sistema"
        >
          <FlexContainer
            className="authentication-institutional-content"
            direction="col"
            gap="8"
          >
            <Typography
              variant="span"
              fontWeight="bold"
              textTransform="uppercase"
            >
              Governo de Pernambuco
            </Typography>

            <FlexContainer direction="col" gap="4">
              <Typography variant="display" fontWeight="bold">
                Serviços Digitais de Pernambuco
              </Typography>
              <Typography variant="p" size="lg">
                Acesse o sistema de forma simples e segura para continuar seus
                atendimentos.
              </Typography>
            </FlexContainer>
          </FlexContainer>

          <Typography
            className="authentication-institutional-branding"
            variant="small"
          >
            Um ambiente oficial do Governo de Pernambuco.
          </Typography>
        </aside>
      </section>
    </main>
  );
}
