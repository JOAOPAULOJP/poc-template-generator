"use client";

import { FormEvent, useState } from "react";
import {
  Button,
  FlexContainer,
  InputText,
  Message,
  TextLink,
  Typography,
} from "@uigovpe/components";
import AuthenticationLayout from "../components/authentication-layout";

type Feedback = "idle" | "error" | "success";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState<Feedback>("idle");

  const isEmailValid = emailPattern.test(email.trim());

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFeedback(isEmailValid ? "success" : "error");
  }

  return (
    <AuthenticationLayout formLabel="Recuperação de senha">
      <form className="authentication-form" noValidate onSubmit={handleSubmit}>
        <FlexContainer direction="col" gap="6">
          <FlexContainer direction="col" gap="2">
            <Typography variant="h1">Recuperar senha</Typography>
            <Typography variant="p">
              Informe o e-mail cadastrado para receber as instruções de
              recuperação de acesso.
            </Typography>
          </FlexContainer>

          {feedback === "error" && (
            <Message
              severity="error"
              summary="Informe um e-mail válido"
              text="Verifique o endereço de e-mail e tente novamente."
            />
          )}

          {feedback === "success" && (
            <Message
              severity="success"
              summary="Solicitação registrada"
              text="Se o e-mail estiver cadastrado, você receberá as instruções para recuperar sua senha. Nesta POC, nenhuma mensagem é enviada."
            />
          )}

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
            invalid={feedback === "error"}
            supportText="Informe o e-mail utilizado para acessar o sistema."
          />

          <FlexContainer direction="col" gap="4">
            <Button type="submit" label="Enviar instruções" />
            <TextLink href="/login">Voltar para o login</TextLink>
          </FlexContainer>
        </FlexContainer>
      </form>
    </AuthenticationLayout>
  );
}
