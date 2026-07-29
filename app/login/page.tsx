"use client";

import { FormEvent, useState } from "react";
import {
  Button,
  Card,
  Checkbox,
  FlexContainer,
  InputPassword,
  InputText,
  Message,
  TextLink,
  Typography,
} from "@uigovpe/components";
import AuthenticationLayout from "../components/authentication-layout";

type Feedback = "idle" | "error" | "info";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepConnected, setKeepConnected] = useState(false);
  const [feedback, setFeedback] = useState<Feedback>("idle");

  const hasInvalidFields = !email.trim() || !password;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFeedback(hasInvalidFields ? "error" : "info");
  }

  return (
    <AuthenticationLayout formLabel="Acesso à conta">
      <Card className="authentication-form">
      <form noValidate onSubmit={handleSubmit}>
        <FlexContainer direction="col" gap="6">
          <FlexContainer direction="col" gap="2">
            <Typography variant="h1">Acesse sua conta</Typography>
            <Typography variant="p">
              Informe seus dados de acesso para continuar.
            </Typography>
          </FlexContainer>

          {feedback === "error" && (
            <Message
              severity="error"
              summary="Preencha os campos obrigatórios"
              text="Informe seu e-mail e sua senha para continuar."
            />
          )}

          {feedback === "info" && (
            <Message
              severity="info"
              summary="Acesso simulado"
              text="Esta POC não realiza autenticação nem envia dados para um serviço externo."
            />
          )}

          <FlexContainer direction="col" gap="4">
            <InputText
              inputId="email"
              label="E-mail"
              type="email"
              autoComplete="email"
              placeholder="ex: joao@gmail.com"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setFeedback("idle");
              }}
              invalid={feedback === "error" && !email.trim()}
              supportText="Informe o e-mail cadastrado."
            />

            <InputPassword
              inputId="password"
              label="Senha"
              autoComplete="current-password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                setFeedback("idle");
              }}
              invalid={feedback === "error" && !password}
            />
          </FlexContainer>

          <FlexContainer direction="col" gap="4" className="login-options">
            <Checkbox
              inputId="keep-connected"
              label="Manter-me conectado"
              checked={keepConnected}
              onChange={(event) => setKeepConnected(Boolean(event.checked))}
            />

            <TextLink href="/forgot-password">Esqueci minha senha</TextLink>
          </FlexContainer>

          <Button className="login-submit" type="submit" label="Entrar" />

        </FlexContainer>
      </form>
      </Card>
    </AuthenticationLayout>
  );
}
