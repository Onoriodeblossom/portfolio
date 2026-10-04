import styled from "styled-components";
import { Label } from "./Layout";
import { profile } from "../data";

const Foot = styled.footer`
  padding-block: 28px 56px;
  display: flex;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  color: ${(p) => p.theme.muted};
  font-size: 14px;
`;

export default function Footer() {
  return (
    <Foot>
      <span>
        © {new Date().getFullYear()} {profile.name}. Built with React and styled-components.
      </span>
      <Label>Devfolio</Label>
    </Foot>
  );
}
