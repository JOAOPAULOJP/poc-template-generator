"use client";

import { useMemo, useState } from "react";
import {
  AppLayout,
  AdminSideBar,
  AdminUserBar,
  BreadCrumb,
  Button,
  Card,
  Column,
  Dropdown,
  FlexContainer,
  GovBar,
  Icon,
  InputSearch,
  Paginator,
  Table,
  Tag,
  Typography,
} from "@uigovpe/components";

type Status = "Pendente" | "Em análise" | "Concluído";

type Request = {
  id: string;
  citizen: string;
  service: string;
  date: string;
  status: Status;
};

const requests: Request[] = [
  { id: "2026.000184", citizen: "Maria da Silva", service: "Atualização cadastral", date: "03 ago. 2026", status: "Pendente" },
  { id: "2026.000183", citizen: "João Pedro Santos", service: "Solicitação de documento", date: "03 ago. 2026", status: "Em análise" },
  { id: "2026.000182", citizen: "Ana Carolina Souza", service: "Atualização cadastral", date: "02 ago. 2026", status: "Concluído" },
  { id: "2026.000181", citizen: "Carlos Henrique Lima", service: "Revisão de dados", date: "02 ago. 2026", status: "Pendente" },
  { id: "2026.000180", citizen: "Juliana Ferreira", service: "Solicitação de documento", date: "01 ago. 2026", status: "Em análise" },
];

const statusOptions = [
  { label: "Todos os status", value: "" },
  { label: "Pendentes", value: "Pendente" },
  { label: "Em análise", value: "Em análise" },
  { label: "Concluídos", value: "Concluído" },
];

const statusSeverity = {
  Pendente: "warning",
  "Em análise": "info",
  Concluído: "success",
} as const;

const sidebarSections = [
  {
    id: "principal",
    title: "Principal",
    items: [
      { id: "inicio", label: "Visão geral", link: "/", icon: "dashboard" },
      { id: "solicitacoes", label: "Solicitações", link: "#solicitacoes", icon: "assignment", notificationValue: 12 },
      { id: "cidadaos", label: "Cidadãos", link: "#cidadaos", icon: "groups" },
    ],
  },
  {
    id: "gestao",
    title: "Gestão",
    items: [
      { id: "relatorios", label: "Relatórios", link: "#relatorios", icon: "analytics" },
      { id: "configuracoes", label: "Configurações", link: "#configuracoes", icon: "settings" },
    ],
  },
] as const;

function MetricCard({ icon, label, value, description }: { icon: "assignment" | "pending_actions" | "task_alt"; label: string; value: string; description: string }) {
  return (
    <Card className="metric-card" elevation="low">
      <FlexContainer gap="4" align="start">
        <span className="metric-card-icon" aria-hidden="true"><Icon icon={icon} /></span>
        <FlexContainer direction="col" gap="1">
          <Typography variant="p" size="sm">{label}</Typography>
          <Typography variant="h2" size="xxl" fontWeight="bold">{value}</Typography>
          <Typography variant="small">{description}</Typography>
        </FlexContainer>
      </FlexContainer>
    </Card>
  );
}

export default function BackofficeDashboard() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [first, setFirst] = useState(0);

  const filteredRequests = useMemo(() => requests.filter((request) => {
    const matchesSearch = `${request.id} ${request.citizen} ${request.service}`.toLowerCase().includes(search.toLowerCase());
    return matchesSearch && (!status || request.status === status);
  }), [search, status]);

  return (
    <AppLayout>
      <GovBar />
      <AppLayout.MainLayout>
        <AdminSideBar title="Portal de Gestão" sections={sidebarSections.map((section) => ({ ...section, items: [...section.items] }))} version="Versão 1.0" />
        <AppLayout.ContentSection>
          <AdminUserBar
            user={{ name: "Ana Beatriz", profile: "Gestora" }}
            breadcrumb={{ home: { label: "Início", url: "/" }, items: [{ label: "Visão geral" }] }}
            menuActions={[{ label: "Sair", icon: <Icon icon="logout" />, command: () => undefined }]}
          />
          <AppLayout.MainContent>
            <AppLayout.BreadCrumbSection>
              <BreadCrumb model={[{ label: "Visão geral" }]} home={{ label: "Início", url: "/" }} />
            </AppLayout.BreadCrumbSection>
            <AppLayout.PageContent className="dashboard-content">
          <header className="dashboard-header">
            <div>
              <Typography variant="h1" size="xxxl">Visão geral</Typography>
              <Typography variant="p">Acompanhe as principais informações do Portal de Gestão.</Typography>
            </div>
            <Button label="Nova solicitação" icon="add" />
          </header>

          <section className="metric-grid" aria-label="Indicadores de solicitações">
            <MetricCard icon="assignment" label="Solicitações recebidas" value="128" description="Nos últimos 30 dias" />
            <MetricCard icon="pending_actions" label="Aguardando atendimento" value="12" description="Demandas que exigem ação" />
            <MetricCard icon="task_alt" label="Concluídas" value="96" description="Taxa de conclusão de 75%" />
          </section>

          <section id="solicitacoes" aria-labelledby="requests-title">
            <Card className="requests-card" elevation="low">
              <FlexContainer direction="col" gap="6">
                <FlexContainer justify="between" align="center" wrap="wrap" gap="4">
                  <div>
                    <h2 id="requests-title" className="dashboard-section-title">
                      <Typography variant="span" size="xl" fontWeight="bold">Solicitações recentes</Typography>
                    </h2>
                    <Typography variant="p" size="sm">Consulte e gerencie os atendimentos mais recentes.</Typography>
                  </div>
                  <Button label="Ver todas" outlined icon="arrow_forward" iconPos="right" />
                </FlexContainer>

                <div className="request-filters">
                  <InputSearch inputId="request-search" label="Buscar solicitação" value={search} showClear onChange={(event) => { setSearch(event.target.value); setFirst(0); }} />
                  <Dropdown inputId="request-status" label="Status" value={status} options={statusOptions} onChange={(event) => { setStatus(event.value); setFirst(0); }} />
                </div>

                <div className="table-scroll" tabIndex={0} aria-label="Lista de solicitações recentes">
                  <Table value={filteredRequests} dataKey="id" emptyMessage="Nenhuma solicitação encontrada.">
                    <Column field="id" header="Protocolo" />
                    <Column field="citizen" header="Cidadão" />
                    <Column field="service" header="Serviço" />
                    <Column field="date" header="Atualização" />
                    <Column header="Status" body={(request: Request) => <Tag value={request.status} severity={statusSeverity[request.status]} />} />
                    <Column header="Ações" body={() => <Button aria-label="Ver detalhes da solicitação" icon="visibility" text rounded />} />
                  </Table>
                </div>
                <Paginator first={first} rows={5} totalRecords={filteredRequests.length} onPageChange={(event) => setFirst(event.first)} showCurrentPageReport />
              </FlexContainer>
            </Card>
          </section>
            </AppLayout.PageContent>
          </AppLayout.MainContent>
        </AppLayout.ContentSection>
      </AppLayout.MainLayout>
    </AppLayout>
  );
}
