import { useState } from "react";
import styled from "styled-components";
import { Section, SectionHead } from "./Layout";
import ProjectCard from "./ProjectCard";
import { projects } from "../data";

const Filters = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  font: 500 14px ${(p) => p.theme.fonts.body};
  color: ${(p) => (p.$active ? p.theme.bg : p.theme.fg)};
  background: ${(p) => (p.$active ? p.theme.fg : p.theme.surface)};
  border: 1px solid ${(p) => (p.$active ? p.theme.fg : p.theme.line)};
  border-radius: 999px;
  padding: 8px 16px;
  cursor: pointer;
`;

/* Auto-fills columns: 3 on desktop, 2 on tablet, 1 on phones */
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
  gap: 24px;
`;

const filters = ["All", "Web", "Mobile"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const shown = projects.filter((p) => filter === "All" || p.kind === filter);

  return (
    <Section id="work">
      <SectionHead label="Selected work" title="Projects">
        <Filters role="group" aria-label="Filter projects">
          {filters.map((f) => (
            <FilterButton
              key={f}
              type="button"
              $active={filter === f}
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
            >
              {f}
            </FilterButton>
          ))}
        </Filters>
      </SectionHead>
      <Grid>
        {shown.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </Grid>
    </Section>
  );
}
