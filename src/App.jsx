import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { lightTheme, darkTheme } from "./theme";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Wrap } from "./components/Layout";

function getInitialMode() {
  try {
    const saved = localStorage.getItem("devfolio-theme");
    if (saved === "light" || saved === "dark") return saved;
  } catch (e) {
    /* storage unavailable, fall through */
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [mode, setMode] = useState(getInitialMode);

  useEffect(() => {
    try {
      localStorage.setItem("devfolio-theme", mode);
    } catch (e) {
      /* ignore */
    }
  }, [mode]);

  const toggleTheme = () => setMode((m) => (m === "dark" ? "light" : "dark"));

  return (
    <ThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <Wrap as="main" id="top">
        <Hero />
        <Stack />
        <Projects />
        <Contact />
        <Footer />
      </Wrap>
    </ThemeProvider>
  );
}
