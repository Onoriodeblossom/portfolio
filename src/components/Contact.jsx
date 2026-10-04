import { useState } from "react";
import styled from "styled-components";
import { Section, Label } from "./Layout";
import { profile } from "../data";
import { media } from "../theme";

const Panel = styled.div`
  background: ${(p) => p.theme.colors.ink};
  color: #f2f2fa;
  border-radius: 28px;
  padding: clamp(24px, 5vw, 56px);
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
  gap: 32px;
  align-items: center;
  position: relative;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    right: -60px;
    bottom: -80px;
    width: 240px;
    height: 240px;
    border-radius: 50%;
    background: ${(p) => p.theme.colors.violet};
    opacity: 0.85;
  }
  > * {
    position: relative;
    z-index: 1;
  }
  ${media.tablet} {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const Heading = styled.h2`
  color: #fff;
  font-weight: 800;
  font-size: clamp(1.9rem, 4.5vw, 2.9rem);
  letter-spacing: -0.03em;
  margin-top: 8px;
`;

const Text = styled.p`
  color: #c9c8e6;
  margin: 14px 0 0;
  max-width: 46ch;
`;

const Mail = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
  code {
    font-family: ${(p) => p.theme.fonts.mono};
    font-size: 15px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.25);
    padding: 12px 16px;
    border-radius: 12px;
    overflow-wrap: anywhere;
    user-select: all;
    min-width: 0;
  }
  button {
    font: 700 15px ${(p) => p.theme.fonts.body};
    background: ${(p) => p.theme.colors.sun};
    color: ${(p) => p.theme.colors.ink};
    border: 0;
    border-radius: 12px;
    padding: 12px 18px;
    cursor: pointer;
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 14px;
  a {
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.35);
    padding: 8px 14px;
    border-radius: 999px;
    text-decoration: none;
    font-weight: 500;
    font-size: 14px;
    &:hover {
      background: rgba(255, 255, 255, 0.12);
    }
  }
`;

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch (e) {
      /* clipboard blocked: the email is selectable text */
    }
  };

  return (
    <Section id="contact">
      <Panel>
        <div>
          <Label style={{ color: "#c9c8e6" }}>Let's work together</Label>
          <Heading>Have an app in mind?</Heading>
          <Text>
            I'm available for freelance projects and full-time roles. Send me a short message
            about what you want to build.
          </Text>
        </div>
        <div>
          <Mail>
            <code>{profile.email}</code>
            <button type="button" onClick={copy}>
              {copied ? "Copied" : "Copy email"}
            </button>
          </Mail>
          <Socials>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={profile.x} target="_blank" rel="noopener noreferrer">X</a>
          </Socials>
        </div>
      </Panel>
    </Section>
  );
}
