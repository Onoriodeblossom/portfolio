import styled from "styled-components";
import { Section, SectionHead } from "./Layout";
import { stack } from "../data";
import { media } from "../theme";

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Chip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  background: ${(p) => p.theme.surface};
  border: 1px solid ${(p) => p.theme.line};
  padding: 9px 16px 9px 12px;
  border-radius: 999px;
  font-weight: 500;
  i {
    width: 12px;
    height: 12px;
    border-radius: 4px;
    background: ${(p) => p.theme.colors[p.$color]};
  }
  ${media.mobile} {
    padding: 7px 13px 7px 10px;
    font-size: 14px;
  }
`;

export default function Stack() {
  return (
    <Section id="stack">
      <SectionHead label="Tools I use" title="My stack" />
      <List>
        {stack.map((t) => (
          <Chip key={t.name} $color={t.color}>
            <i />
            {t.name}
          </Chip>
        ))}
      </List>
    </Section>
  );
}
