import styled from "styled-components";

const Tile = styled.rect`
  fill: ${(p) => p.theme.logoTile};
`;

const Svg = styled.svg`
  display: block;
  width: 44px;
  height: 44px;
  flex: none;
`;

export default function Logo() {
  return (
    <Svg viewBox="0 0 64 64" aria-hidden="true">
      <Tile width="64" height="64" rx="16" />
      <path
        d="M24 20 L11 32 L24 44"
        fill="none"
        stroke="#FF6B5B"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M37 47 L45 17" fill="none" stroke="#FFC933" strokeWidth="6" strokeLinecap="round" />
      <path
        d="M44 20 L57 32 L44 44"
        fill="none"
        stroke="#2ED8A3"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
