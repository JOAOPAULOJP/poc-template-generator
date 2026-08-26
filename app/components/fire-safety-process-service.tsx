"use client";

import { FormEvent, useState } from "react";
import {
  BreadCrumb,
  Button,
  Card,
  FlexContainer,
  GovBar,
  Icon,
  InputText,
  Message,
  RadioButton,
  Tag,
  Typography,
} from "@uigovpe/components";
import styles from "./fire-safety-process-service.module.css";

type SearchMethod = "protocolo" | "cnpj" | "cpf" | "estabelecimento";
type ProcessStatus =
  | "Aguardando pagamento"
  | "Aguardando documentação"
  | "Em andamento"
  | "Em exigência"
  | "Exigência cumprida"
  | "Deferido";

type Process = {
  protocol: string;
  status: ProcessStatus;
  statusDate: string;
  establishment: string;
  document: string;
  address: string;
  applicant: string;
  applicantDocument: string;
  avcb?: { number: string; validity: string };
  history: { date: string; title: string; detail: string }[];
};

const searchOptions: { value: SearchMethod; label: string; placeholder: string; help: string }[] = [
  { value: "protocolo", label: "Número do protocolo", placeholder: "Ex.: 2026.000478", help: "Informe o número completo do processo." },
  { value: "cnpj", label: "CNPJ", placeholder: "Ex.: 12.345.678/0001-90", help: "Informe o CNPJ do estabelecimento." },
  { value: "cpf", label: "CPF", placeholder: "Ex.: 123.456.789-00", help: "Informe o CPF do requerente." },
  { value: "estabelecimento", label: "Nome do estabelecimento", placeholder: "Ex.: Centro Empresarial Boa Viagem", help: "Digite o nome ou parte do nome." },
];

const processes: Process[] = [
  {
    protocol: "2026.000478",
    status: "Deferido",
    statusDate: "20 de agosto de 2026",
    establishment: "Centro Empresarial Boa Viagem",
    document: "12.345.678/0001-90",
    address: "Av. Eng. Domingos Ferreira, 1580, Boa Viagem, Recife - PE",
    applicant: "Mariana Alves de Souza",
    applicantDocument: "***.456.789-**",
    avcb: { number: "AVCB nº 2026.00478", validity: "20 de agosto de 2027" },
    history: [
      { date: "20 ago. 2026", title: "Processo deferido", detail: "O Atestado de Vistoria do Corpo de Bombeiros está disponível para consulta." },
      { date: "12 ago. 2026", title: "Vistoria realizada", detail: "A vistoria técnica foi concluída no estabelecimento." },
      { date: "04 ago. 2026", title: "Pagamento confirmado", detail: "A taxa de vistoria foi identificada." },
      { date: "01 ago. 2026", title: "Processo protocolado", detail: "Sua solicitação foi recebida pelo Corpo de Bombeiros." },
    ],
  },
  {
    protocol: "2026.000455",
    status: "Em exigência",
    statusDate: "18 de agosto de 2026",
    establishment: "Centro Empresarial Boa Viagem - Torre Norte",
    document: "12.345.678/0001-90",
    address: "Av. Eng. Domingos Ferreira, 1580, Boa Viagem, Recife - PE",
    applicant: "Mariana Alves de Souza",
    applicantDocument: "***.456.789-**",
    history: [
      { date: "18 ago. 2026", title: "Exigência emitida", detail: "É necessário apresentar o laudo de manutenção do sistema de hidrantes." },
      { date: "08 ago. 2026", title: "Documentação analisada", detail: "A análise inicial dos documentos foi concluída." },
      { date: "30 jul. 2026", title: "Processo protocolado", detail: "Sua solicitação foi recebida pelo Corpo de Bombeiros." },
    ],
  },
  {
    protocol: "2026.000421",
    status: "Aguardando documentação",
    statusDate: "15 de agosto de 2026",
    establishment: "Centro Empresarial Boa Viagem - Garagem",
    document: "12.345.678/0001-90",
    address: "Av. Eng. Domingos Ferreira, 1580, Boa Viagem, Recife - PE",
    applicant: "Mariana Alves de Souza",
    applicantDocument: "***.456.789-**",
    history: [
      { date: "15 ago. 2026", title: "Documentação pendente", detail: "Envie a planta de segurança contra incêndio atualizada para continuidade da análise." },
      { date: "10 ago. 2026", title: "Processo protocolado", detail: "Sua solicitação foi recebida pelo Corpo de Bombeiros." },
    ],
  },
];

const statusSeverity: Record<ProcessStatus, "success" | "warn" | "info"> = {
  "Aguardando pagamento": "warn",
  "Aguardando documentação": "warn",
  "Em andamento": "info",
  "Em exigência": "warn",
  "Exigência cumprida": "info",
  Deferido: "success",
};

function ProcessStatusTag({ status }: { status: ProcessStatus }) {
  return <Tag value={status} severity={statusSeverity[status]} />;
}

function InfoItem({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className={styles.infoItem}>
      <Typography variant="span" size="sm" fontWeight="medium">{label}</Typography>
      <Typography variant="div">{children}</Typography>
    </div>
  );
}

export default function FireSafetyProcessService() {
  const [method, setMethod] = useState<SearchMethod>("protocolo");
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedProcess, setSelectedProcess] = useState<Process | null>(null);

  const selectedOption = searchOptions.find((option) => option.value === method)!;

  const submitSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!query.trim()) {
      setError(`Informe ${selectedOption.label.toLowerCase()}.`);
      setHasSearched(false);
      return;
    }

    setError("");
    setSelectedProcess(null);
    setIsSearching(true);
    window.setTimeout(() => {
      setIsSearching(false);
      setHasSearched(true);
    }, 450);
  };

  const startNewSearch = () => {
    setSelectedProcess(null);
    setHasSearched(false);
    setQuery("");
    setError("");
  };

  return (
    <div className={styles.page}>
      <GovBar />
      <main className={styles.main}>
        <BreadCrumb model={[{ label: "Consultar processos de vistoria" }]} home={{ label: "Início", url: "/" }} />

        <header className={styles.hero}>
          <div className={styles.heroIcon} aria-hidden="true"><Icon icon="fire_extinguisher" /></div>
          <div>
            <Typography variant="h1" size="xxxl">Consultar processos de vistoria e análise contra incêndio</Typography>
            <Typography variant="p" size="lg">Acompanhe seu processo, veja o histórico de andamento e acesse o AVCB quando ele estiver disponível.</Typography>
            <Typography variant="p" size="sm">Serviço do Corpo de Bombeiros Militar de Pernambuco</Typography>
          </div>
        </header>

        <section aria-labelledby="search-title">
          <Card className={styles.searchCard} elevation="low">
            <Typography variant="h2" size="xl" fontWeight="bold" className={styles.cardTitle} id="search-title">Consulte um processo</Typography>
            <Typography variant="p">Escolha um dado para localizar processos vinculados ao estabelecimento ou ao requerente.</Typography>
            <form onSubmit={submitSearch} noValidate className={styles.searchForm}>
              <fieldset className={styles.searchMethods}>
                <legend><Typography variant="span" size="sm" fontWeight="medium">Buscar por</Typography></legend>
                <div className={styles.radioGroup}>
                  {searchOptions.map((option) => (
                    <div className={styles.radioOption} key={option.value}>
                      <RadioButton inputId={option.value} name="search-method" value={option.value} checked={method === option.value} onChange={() => { setMethod(option.value); setError(""); }} />
                      <label htmlFor={option.value}>{option.label}</label>
                    </div>
                  ))}
                </div>
              </fieldset>
              <div className={styles.searchInputRow}>
                <InputText inputId="process-search" label={selectedOption.label} placeholder={selectedOption.placeholder} supportText={error || selectedOption.help} value={query} aria-invalid={Boolean(error)} onChange={(event) => { setQuery(event.target.value); if (error) setError(""); }} />
                <Button label={isSearching ? "Consultando..." : "Consultar processo"} icon="search" disabled={isSearching} type="submit" />
              </div>
            </form>
          </Card>
        </section>

        {isSearching && <Message severity="info" text="Consultando processos. Aguarde um instante." className={styles.feedback} />}

        {hasSearched && !selectedProcess && (
          <section aria-labelledby="results-title" className={styles.results}>
            <FlexContainer justify="between" align="center" wrap="wrap" gap="4">
              <div>
                <Typography variant="h2" size="xl" fontWeight="bold" id="results-title">Processos encontrados</Typography>
                <Typography variant="p">Encontramos {processes.length} processos para sua consulta.</Typography>
              </div>
              <Button label="Nova consulta" outlined icon="refresh" onClick={startNewSearch} />
            </FlexContainer>
            <div className={styles.resultList}>
              {processes.map((process) => (
                <Card className={styles.processCard} elevation="low" key={process.protocol}>
                  <div className={styles.processCardContent}>
                    <div>
                      <Typography variant="p" size="sm" fontWeight="medium">Protocolo {process.protocol}</Typography>
                      <Typography variant="h3" size="lg" fontWeight="bold">{process.establishment}</Typography>
                      <Typography variant="p" size="sm">CNPJ {process.document} · Atualizado em {process.statusDate}</Typography>
                    </div>
                    <div className={styles.processCardActions}>
                      <ProcessStatusTag status={process.status} />
                      <Button label="Ver processo" outlined icon="arrow_forward" iconPos="right" onClick={() => setSelectedProcess(process)} />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        )}

        {selectedProcess && (
          <section aria-labelledby="detail-title" className={styles.detail}>
            <Button label="Voltar aos resultados" text icon="arrow_back" onClick={() => setSelectedProcess(null)} />
            <div className={styles.detailHeading}>
              <div>
                <Typography variant="p" size="sm" fontWeight="medium">Processo {selectedProcess.protocol}</Typography>
                <Typography variant="h2" size="xxl" fontWeight="bold" id="detail-title">{selectedProcess.establishment}</Typography>
              </div>
              <ProcessStatusTag status={selectedProcess.status} />
            </div>

            <Message severity={selectedProcess.status === "Deferido" ? "success" : "warn"} summary={selectedProcess.status === "Deferido" ? "Processo deferido" : "Este processo precisa de atenção"} text={selectedProcess.status === "Deferido" ? "A vistoria foi aprovada. O AVCB está disponível para acesso abaixo." : selectedProcess.history[0].detail} />

            <div className={styles.detailGrid}>
              <Card className={styles.detailCard} elevation="low">
                <Typography variant="h3" size="lg" fontWeight="bold">Situação atual</Typography>
                <InfoItem label="Situação"><ProcessStatusTag status={selectedProcess.status} /></InfoItem>
                <InfoItem label="Data da situação">{selectedProcess.statusDate}</InfoItem>
                <InfoItem label="Órgão responsável">Corpo de Bombeiros Militar de Pernambuco</InfoItem>
              </Card>
              <Card className={styles.detailCard} elevation="low">
                <Typography variant="h3" size="lg" fontWeight="bold">Dados do estabelecimento</Typography>
                <InfoItem label="Nome">{selectedProcess.establishment}</InfoItem>
                <InfoItem label="CNPJ">{selectedProcess.document}</InfoItem>
                <InfoItem label="Endereço">{selectedProcess.address}</InfoItem>
              </Card>
              <Card className={styles.detailCard} elevation="low">
                <Typography variant="h3" size="lg" fontWeight="bold">Dados do requerente</Typography>
                <InfoItem label="Nome">{selectedProcess.applicant}</InfoItem>
                <InfoItem label="CPF">{selectedProcess.applicantDocument}</InfoItem>
              </Card>
              {selectedProcess.avcb && (
                <Card className={`${styles.detailCard} ${styles.avcbCard}`} elevation="low">
                  <div className={styles.avcbHeading}><span className={styles.avcbIcon} aria-hidden="true"><Icon icon="verified" /></span><Typography variant="h3" size="lg" fontWeight="bold">AVCB disponível</Typography></div>
                  <InfoItem label="Documento">{selectedProcess.avcb.number}</InfoItem>
                  <InfoItem label="Validade">{selectedProcess.avcb.validity}</InfoItem>
                  <Button label="Acessar AVCB" icon="download" onClick={() => undefined} />
                </Card>
              )}
            </div>

            <Card className={styles.historyCard} elevation="low">
              <Typography variant="h3" size="lg" fontWeight="bold">Histórico de andamento</Typography>
              <ol className={styles.timeline}>
                {selectedProcess.history.map((item, index) => (
                  <li key={`${item.date}-${item.title}`} className={styles.timelineItem}>
                    <span className={styles.timelineMarker} aria-hidden="true">{index + 1}</span>
                    <div>
                      <Typography variant="p" size="sm" fontWeight="medium">{item.date}</Typography>
                      <Typography variant="h4" size="default" fontWeight="bold">{item.title}</Typography>
                      <Typography variant="p" size="sm">{item.detail}</Typography>
                    </div>
                  </li>
                ))}
              </ol>
            </Card>
          </section>
        )}
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <Typography variant="p" size="sm" fontWeight="medium">Corpo de Bombeiros Militar de Pernambuco</Typography>
          <Typography variant="p" size="sm">Em caso de emergência, ligue 193.</Typography>
        </div>
      </footer>
    </div>
  );
}
