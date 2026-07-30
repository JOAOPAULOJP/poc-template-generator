import {
  FlexContainer,
  Icon,
  TextLink,
  Typography,
} from "@uigovpe/components";

const navigationItems = [
  { href: "#gestantes", label: "Para gestantes", current: true },
  { href: "#servicos", label: "Serviços" },
  { href: "#tecnologia", label: "Tecnologia" },
  { href: "#duvidas", label: "Dúvidas" },
] as const;

export default function TopNavBar() {
  return (
    <nav className="top-navbar" aria-label="Navegação principal">
      <FlexContainer
        className="top-navbar-content"
        justify="between"
        align="center"
        wrap="wrap"
      >
        <FlexContainer className="top-navbar-start" gap="32" align="center" wrap="wrap">
          <TextLink href="#inicio" className="top-navbar-brand">
            <Typography variant="span" size="lg" fontWeight="bold">
              Colo de Mãe
            </Typography>
          </TextLink>

          <ul className="top-navbar-menu">
            {navigationItems.map(({ href, label, current }) => (
              <li key={href}>
                <TextLink
                  href={href}
                  className="top-navbar-link"
                  aria-current={current ? "page" : undefined}
                >
                  <Typography variant="span" size="default" fontWeight="medium">
                    {label}
                  </Typography>
                </TextLink>
              </li>
            ))}
          </ul>
        </FlexContainer>

        <TextLink href="tel:155" className="top-navbar-call">
          <Icon icon="call" aria-hidden="true" />
          <Typography variant="span" size="default" fontWeight="bold">
            Ligue 155
          </Typography>
        </TextLink>
      </FlexContainer>
    </nav>
  );
}
