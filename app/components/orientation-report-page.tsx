"use client";

import { FormEvent, useState } from "react";
import {
  AdminUserBar,
  Button,
  Card,
  Divider,
  FileInput,
  FlexContainer,
  Icon,
  Message,
  Tag,
  Typography,
} from "@uigovpe/components";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

type Feedback =
  | { severity: "error"; summary: string; text: string }
  | { severity: "success"; summary: string; text: string }
  | null;

function isPdf(file: File) {
  return file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf");
}

export default function OrientationReportPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadedFileName, setUploadedFileName] = useState(
    "Laudo_Orientacao_Maria_Silva_28072026.pdf",
  );
  const [feedback, setFeedback] = useState<Feedback>(null);

  function handleFileChange(files: FileList | null) {
    const file = files?.item(0) ?? null;
    setSelectedFile(file);
    setFeedback(null);

    if (!file) return;

    if (!isPdf(file)) {
      setFeedback({
        severity: "error",
        summary: "Formato não permitido",
        text: "Selecione um arquivo em formato PDF.",
      });
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setFeedback({
        severity: "error",
        summary: "Arquivo acima do limite",
        text: "O laudo deve ter, no máximo, 5 MB.",
      });
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!selectedFile) {
      setFeedback({
        severity: "error",
        summary: "Selecione o laudo",
        text: "O envio de um arquivo PDF é obrigatório.",
      });
      return;
    }

    if (!isPdf(selectedFile) || selectedFile.size > MAX_FILE_SIZE) return;

    setUploadedFileName(selectedFile.name);
    setSelectedFile(null);
    setFeedback({
      severity: "success",
      summary: "Laudo atualizado com sucesso",
      text: "O documento foi vinculado ao perfil da paciente e ficará disponível no Portal do Paciente.",
    });
  }

  return (
    <main className="backoffice-page">
      <AdminUserBar
        user={{ name: "Ana Beatriz", profile: "Farmacêutica" }}
        breadcrumb={{
          home: { label: "Início", url: "/" },
          items: [
            { label: "Pacientes", url: "/" },
            { label: "Maria da Silva", url: "/" },
            { label: "Documentos e laudos" },
          ],
        }}
      />

      <section className="backoffice-content">
        <header className="page-header">
          <div>
            <Typography variant="h1">
              Documentos e laudos
            </Typography>
            <Typography variant="p">
              Gerencie os documentos disponibilizados para a paciente.
            </Typography>
          </div>
        </header>

        <Card className="patient-card" elevation="low">
          <FlexContainer direction="row" justify="between" align="center" wrap="wrap" gap="4">
            <FlexContainer direction="row" align="center" gap="3">
              <span className="patient-icon" aria-hidden="true">
                <Icon icon="person" />
              </span>
              <div>
                <Typography variant="h2" size="lg">Maria da Silva</Typography>
                <Typography variant="p" size="sm">CPF: 123.456.789-00 · Prontuário: 00012345</Typography>
              </div>
            </FlexContainer>
            <Tag value="Atendimento ativo" severity="success" />
          </FlexContainer>
        </Card>

        <div className="report-grid">
          <Card className="report-card" elevation="low">
            <FlexContainer direction="col" gap="5">
              <div>
                <Typography variant="h2">Laudo de orientação farmacêutica</Typography>
                <Typography variant="p">
                  Documento oficial disponível para download no Portal do Paciente.
                </Typography>
              </div>

              <Divider />

              <FlexContainer direction="row" gap="3" align="start">
                <span className="document-icon" aria-hidden="true">
                  <Icon icon="picture_as_pdf" size="large" />
                </span>
                <FlexContainer direction="col" gap="1">
                  <Typography variant="h3" size="md">{uploadedFileName}</Typography>
                  <Typography variant="small">Enviado em 28/07/2026 às 14h30 por Ana Beatriz</Typography>
                  <Tag value="Disponível no portal" severity="success" />
                </FlexContainer>
              </FlexContainer>
            </FlexContainer>
          </Card>

          <Card className="upload-card" elevation="low">
            <form noValidate onSubmit={handleSubmit}>
              <FlexContainer direction="col" gap="5">
                <div>
                  <Typography variant="h2">Substituir laudo</Typography>
                  <Typography variant="p">
                    Ao salvar, o novo documento passará a ser o laudo disponível para a paciente.
                  </Typography>
                </div>

                {feedback && (
                  <Message
                    severity={feedback.severity}
                    summary={feedback.summary}
                    text={feedback.text}
                  />
                )}

                <FileInput
                  inputId="orientation-report"
                  label="Arquivo do laudo"
                  accept="application/pdf,.pdf"
                  supportText="Envie um arquivo PDF de até 5 MB."
                  required
                  invalid={feedback?.severity === "error"}
                  fileNameAttachment={selectedFile?.name ?? null}
                  onChange={handleFileChange}
                  onClear={() => {
                    setSelectedFile(null);
                    setFeedback(null);
                  }}
                />

                <Button
                  type="submit"
                  label="Salvar laudo"
                  icon="upload_file"
                  disabled={!selectedFile}
                />
              </FlexContainer>
            </form>
          </Card>
        </div>
      </section>
    </main>
  );
}
