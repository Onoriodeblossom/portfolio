import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }
  html { scroll-behavior: smooth; scroll-padding-top: 80px; }
  body {
    margin: 0;
    background: ${(p) => p.theme.bg};
    color: ${(p) => p.theme.fg};
    font-family: ${(p) => p.theme.fonts.body};
    font-size: 16px;
    line-height: 1.6;
    overflow-x: hidden;
    transition: background .2s, color .2s;
  }
  a { color: inherit; }
  h1, h2, h3 {
    font-family: ${(p) => p.theme.fonts.display};
    line-height: 1.05;
    margin: 0;
    text-wrap: balance;
  }
  :focus-visible {
    outline: 3px solid ${(p) => p.theme.colors.sky};
    outline-offset: 3px;
    border-radius: 6px;
  }
  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    * { transition: none !important; animation: none !important; }
  }
`;

export default GlobalStyle;
