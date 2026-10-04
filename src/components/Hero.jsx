import styled from "styled-components";
import { profile } from "../data";
import { media } from "../theme";

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
  gap: 40px;
  align-items: center;
  padding-block: 64px 48px;
  ${media.tablet} {
    grid-template-columns: minmax(0, 1fr);
    padding-block: 40px 32px;
  }
`;

const Status = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 7px 14px;
  background: ${(p) => p.theme.surface};
  border: 1px solid ${(p) => p.theme.line};
  border-radius: 999px;
  font-size: 14px;
  font-weight: 500;
  i {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${(p) => p.theme.colors.mint};
    box-shadow: 0 0 0 4px ${(p) => p.theme.colors.mint}4d;
  }
`;

const Title = styled.h1`
  font-weight: 800;
  font-size: clamp(2.5rem, 7vw, 4.9rem);
  letter-spacing: -0.035em;
  margin-top: 22px;
  ${media.mobile} {
    font-size: clamp(2.3rem, 11vw, 3rem);
  }
`;

const Mark = styled.mark`
  background: ${(p) => p.theme.colors[p.$color]};
  color: ${(p) => p.theme.colors.ink};
  padding: 0 0.14em;
  border-radius: 0.16em;
  display: inline-block;
  transform: rotate(${(p) => p.$tilt}deg);
`;

const Lede = styled.p`
  font-size: 1.15rem;
  max-width: 52ch;
  color: ${(p) => p.theme.muted};
  margin: 22px 0 0;
  ${media.mobile} {
    font-size: 1.05rem;
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 30px;
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font: 700 15px ${(p) => p.theme.fonts.body};
  text-decoration: none;
  padding: 13px 22px;
  border-radius: 14px;
  border: 2px solid ${(p) => (p.$solid ? p.theme.colors.coral : p.theme.fg)};
  background: ${(p) => (p.$solid ? p.theme.colors.coral : "transparent")};
  color: ${(p) => (p.$solid ? p.theme.colors.ink : p.theme.fg)};
  box-shadow: ${(p) => (p.$solid ? `4px 4px 0 ${p.theme.fg}` : "none")};
  transition: transform 0.12s, box-shadow 0.12s, background 0.12s;
  &:hover {
    ${(p) =>
      p.$solid
        ? `transform: translate(2px, 2px); box-shadow: 2px 2px 0 ${p.theme.fg};`
        : `background: ${p.theme.surface};`}
  }
  ${media.small} {
    flex: 1 1 100%;
  }
`;

const Code = styled.div`
  background: ${(p) => p.theme.colors.ink};
  color: #edebff;
  border-radius: 20px;
  padding: 20px 22px;
  font-family: ${(p) => p.theme.fonts.mono};
  font-size: 13.5px;
  line-height: 1.8;
  box-shadow: ${(p) => p.theme.shadow};
  border: 1px solid ${(p) => p.theme.line};
  overflow-x: auto;
  min-width: 0;
  pre {
    margin: 0;
    font: inherit;
    white-space: pre;
  }
  ${media.small} {
    font-size: 12px;
    padding: 16px;
  }
`;

const Dots = styled.div`
  display: flex;
  gap: 7px;
  margin-bottom: 14px;
  i {
    width: 11px;
    height: 11px;
    border-radius: 50%;
  }
  i:nth-child(1) { background: ${(p) => p.theme.colors.coral}; }
  i:nth-child(2) { background: ${(p) => p.theme.colors.sun}; }
  i:nth-child(3) { background: ${(p) => p.theme.colors.mint}; }
`;

const Tok = styled.span`
  color: ${(p) => p.$c};
`;

const k = "#FF5FA8"; // keyword
const s = "#2ED8A3"; // string
const f = "#4CC3FF"; // name
const n = "#FFC933"; // number / boolean
const c = "#8F8DB5"; // comment

export default function Hero() {
  return (
    <Grid>
      <div>
        <Status>
          <i /> Open to work
        </Status>
        <Title>
          I <Mark $color="sun" $tilt={-1.5}>build</Mark> apps people{" "}
          <Mark $color="mint" $tilt={1.2}>tap</Mark>, click and{" "}
          <Mark $color="pink" $tilt={-1}>keep</Mark>.
        </Title>
        <Lede>{profile.intro}</Lede>
        <Actions>
          <Button href="#work" $solid>See my projects</Button>
          <Button href="#contact">Get in touch</Button>
        </Actions>
      </div>

      <Code aria-label="Code sample">
        <Dots><i /><i /><i /></Dots>
        <pre>
          <Tok $c={k}>const</Tok> <Tok $c={f}>developer</Tok> = {"{"}
          {"\n  name: "}<Tok $c={s}>"{profile.name}"</Tok>,
          {"\n  web: ["}<Tok $c={s}>"React"</Tok>, <Tok $c={s}>"Next.js"</Tok>],
          {"\n  mobile: ["}<Tok $c={s}>"React Native"</Tok>, <Tok $c={s}>"Expo"</Tok>],
          {"\n  years: "}<Tok $c={n}>3</Tok>,
          {"\n  available: "}<Tok $c={n}>true</Tok>,
          {"\n};\n"}
          <Tok $c={c}>// ship it</Tok>
        </pre>
      </Code>
    </Grid>
  );
}
