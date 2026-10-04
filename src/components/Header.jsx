import styled, { useTheme } from "styled-components";
import Logo from "./Logo";
import { Wrap } from "./Layout";
import { media } from "../theme";

const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background: ${(p) => p.theme.bg};
  border-bottom: 1px solid ${(p) => p.theme.line};
`;

const Inner = styled(Wrap)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px 16px;
  padding-block: 12px;
`;

const Brand = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
`;

const BrandName = styled.b`
  font-family: ${(p) => p.theme.fonts.display};
  font-weight: 800;
  font-size: 22px;
  letter-spacing: -0.02em;
  span {
    color: ${(p) => p.theme.colors.coral};
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const NavLink = styled.a`
  text-decoration: none;
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 999px;
  &:hover {
    background: ${(p) => p.theme.surface};
  }
  ${media.mobile} {
    display: none;
  }
`;

const ThemeButton = styled.button`
  border: 1px solid ${(p) => p.theme.line};
  background: ${(p) => p.theme.surface};
  color: ${(p) => p.theme.fg};
  font: 500 14px ${(p) => p.theme.fonts.body};
  padding: 8px 14px;
  border-radius: 999px;
  cursor: pointer;
  &:hover {
    border-color: ${(p) => p.theme.fg};
  }
`;

export default function Header({ toggleTheme }) {
  const theme = useTheme();
  return (
    <Bar>
      <Inner>
        <Brand href="#top" aria-label="Devfolio home">
          <Logo />
          <BrandName>
            dev<span>folio</span>
          </BrandName>
        </Brand>
        <Nav aria-label="Main">
          <NavLink href="#stack">Stack</NavLink>
          <NavLink href="#work">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <ThemeButton type="button" onClick={toggleTheme}>
            {theme.mode === "dark" ? "Light mode" : "Dark mode"}
          </ThemeButton>
        </Nav>
      </Inner>
    </Bar>
  );
}
