import { StatusFilter } from "../StatusFilter/StatusFilter";
import { TaskCounter } from "../TaskCounter/TaskCounter";
import { Section } from "../Section/Section.styled";
import { Title } from "./AppBar.styled";

export const AppBar = () => {
  return (
    <header>
      <Section>
        <Title>Tasks</Title>
        <TaskCounter />
      </Section>
      <Section>
        <Title>Filter by status</Title>
        <StatusFilter />
      </Section>
    </header>
  );
};