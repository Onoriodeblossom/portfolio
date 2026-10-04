import styled from "styled-components";
import { media } from "../theme";

export const Wrap = styled.div`
  width: 100%;
  max-width: 1120px;
  margin-inline: auto;
  padding-inline: 20px;
  ${media.small} {
    padding-inline: 16px;
  }
`;

export const Section = styled.section`
  padding-block: 40px;
  ${media.mobile} {
    padding-block: 28px;
  }
`;

export const Label = styled.span`
  font-family: ${(p) => p.theme.fonts.mono};
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${(p) => p.theme.muted};
`;

const HeadRow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px 24px;
  flex-wrap: wrap;
  margin-bottom: 26px;
`;

const Title = styled.h2`
  font-weight: 800;
  font-size: clamp(1.9rem, 4.5vw, 2.9rem);
  letter-spacing: -0.03em;
  margin-top: 8px;
`;

export function SectionHead({ label, title, children }) {
  return (
    <HeadRow>
      <div>
        <Label>{label}</Label>
        <Title>{title}</Title>
      </div>
      {children}
    </HeadRow>
  );
}
