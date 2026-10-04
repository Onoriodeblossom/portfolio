import styled from "styled-components";

const Card = styled.article`
  background: ${(p) => p.theme.surface};
  border: 1px solid ${(p) => p.theme.line};
  border-radius: 24px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: ${(p) => p.theme.shadow};
  transition: transform 0.18s;
  min-width: 0;
  &:hover {
    transform: translateY(-4px);
  }
`;

const Art = styled.div`
  background: ${(p) => p.theme.colors[p.$color]};
  height: 190px;
  position: relative;
  display: grid;
  place-items: center;
  overflow: hidden;
  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
  }
  &::before {
    width: 150px;
    height: 150px;
    right: -40px;
    top: -50px;
    background: rgba(255, 255, 255, 0.28);
  }
  &::after {
    width: 90px;
    height: 90px;
    left: -26px;
    bottom: -34px;
    background: rgba(22, 21, 43, 0.12);
  }
`;

const Kind = styled.span`
  position: absolute;
  left: 14px;
  top: 14px;
  z-index: 2;
  background: ${(p) => p.theme.colors.ink};
  color: #fff;
  font-family: ${(p) => p.theme.fonts.mono};
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 5px 10px;
  border-radius: 999px;
`;

/* Browser-window mock for web projects */
const Win = styled.div`
  position: relative;
  z-index: 1;
  width: 78%;
  background: ${(p) => p.theme.surface};
  border-radius: 12px;
  box-shadow: 0 14px 28px -10px rgba(22, 21, 43, 0.45);
  padding: 10px;
  display: grid;
  gap: 7px;
`;
const WinTop = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 2px;
  i {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${(p) => p.theme.line};
  }
`;
const Row = styled.div`
  height: 10px;
  border-radius: 4px;
  background: ${(p) => (p.$hi ? p.theme.colors[p.$color] : p.theme.line)};
  width: ${(p) => (p.$hi ? "55%" : "100%")};
`;
const Blocks = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 7px;
  b {
    height: 38px;
    border-radius: 6px;
    background: ${(p) => p.theme.line};
  }
  b:first-child {
    background: ${(p) => p.theme.colors[p.$color]};
  }
`;

/* Phone mock for mobile projects */
const Phone = styled.div`
  position: relative;
  z-index: 1;
  width: 96px;
  height: 160px;
  margin-top: 44px;
  background: ${(p) => p.theme.surface};
  border: 5px solid ${(p) => p.theme.colors.ink};
  border-bottom: 0;
  border-radius: 20px 20px 0 0;
  padding: 12px 8px;
  display: grid;
  align-content: start;
  gap: 7px;
  box-shadow: 0 14px 28px -10px rgba(22, 21, 43, 0.45);
`;
const Pill = styled.div`
  height: 14px;
  width: 60%;
  border-radius: 7px;
  background: ${(p) => p.theme.colors[p.$color]};
`;
const PhoneRow = styled.div`
  height: 20px;
  border-radius: 6px;
  background: ${(p) => (p.$hi ? `${p.theme.colors[p.$color]}99` : p.theme.line)};
`;

const Body = styled.div`
  padding: 22px 22px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
`;
const Name = styled.h3`
  font-weight: 800;
  font-size: 1.5rem;
  letter-spacing: -0.02em;
`;
const Desc = styled.p`
  margin: 0;
  color: ${(p) => p.theme.muted};
`;
const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;
const Tag = styled.span`
  font-family: ${(p) => p.theme.fonts.mono};
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 8px;
  background: ${(p) => p.theme.colors[p.$color]}33;
  border: 1px solid ${(p) => p.theme.colors[p.$color]}88;
`;
const Links = styled.div`
  display: flex;
  gap: 18px;
  margin-top: auto;
  padding-top: 8px;
  font-weight: 700;
  font-size: 15px;
  a {
    text-decoration: underline;
    text-decoration-color: ${(p) => p.theme.colors[p.$color]};
    text-decoration-thickness: 3px;
    text-underline-offset: 5px;
  }
`;

export default function ProjectCard({ project }) {
  const { name, kind, color, description, tags, demo, repo } = project;
  return (
    <Card>
      <Art $color={color}>
        <Kind>{kind}</Kind>
        {kind === "Mobile" ? (
          <Phone>
            <Pill $color={color} />
            <PhoneRow $hi $color={color} />
            <PhoneRow />
            <PhoneRow />
          </Phone>
        ) : (
          <Win>
            <WinTop><i /><i /><i /></WinTop>
            <Row $hi $color={color} />
            <Blocks $color={color}><b /><b /><b /></Blocks>
            <Row />
          </Win>
        )}
      </Art>
      <Body>
        <Name>{name}</Name>
        <Desc>{description}</Desc>
        <Tags>
          {tags.map((t) => (
            <Tag key={t} $color={color}>{t}</Tag>
          ))}
        </Tags>
        <Links $color={color}>
          <a href={demo} aria-label={`Live demo of ${name}`}>Live demo</a>
          <a href={repo} aria-label={`Source code of ${name}`}>GitHub</a>
        </Links>
      </Body>
    </Card>
  );
}
