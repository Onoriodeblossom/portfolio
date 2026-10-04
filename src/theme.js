const shared = {
  colors: {
    coral: "#FF6B5B",
    sun: "#FFC933",
    mint: "#2ED8A3",
    sky: "#4CC3FF",
    violet: "#9B7BFF",
    pink: "#FF5FA8",
    ink: "#16152B",
  },
  fonts: {
    display: '"Bricolage Grotesque", "Trebuchet MS", system-ui, sans-serif',
    body: '"DM Sans", system-ui, -apple-system, "Segoe UI", sans-serif',
    mono: '"JetBrains Mono", ui-monospace, Menlo, Consolas, monospace',
  },
};

export const lightTheme = {
  ...shared,
  mode: "light",
  bg: "#F4F6FB",
  surface: "#FFFFFF",
  fg: "#16152B",
  muted: "#55546F",
  line: "#DDE0EE",
  logoTile: "#16152B",
  shadow: "0 10px 30px -12px rgba(22,21,43,.18)",
};

export const darkTheme = {
  ...shared,
  mode: "dark",
  bg: "#0E0F1F",
  surface: "#171830",
  fg: "#F2F2FA",
  muted: "#A5A5C4",
  line: "#2B2C4A",
  logoTile: "#F2F2FA",
  shadow: "0 10px 30px -12px rgba(0,0,0,.6)",
};

/* Breakpoints: use inside styled-components, e.g. ${media.tablet} { ... } */
export const media = {
  tablet: "@media (max-width: 900px)",
  mobile: "@media (max-width: 600px)",
  small: "@media (max-width: 400px)",
};
