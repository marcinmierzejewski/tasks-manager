import { StatusFilter } from "../StatusFilter/StatusFilter";
import { TaskCounter } from "../TaskCounter/TaskCounter";
import { Section } from "../Section/Section.styled";
import { Title, Header } from "./AppBar.styled";

export const AppBar = () => {
  return (
    <Header>
      <Section>
        <Title>Tasks</Title>
        <TaskCounter />
      </Section>
      <Section>
        <Title>Filter by status</Title>
        <StatusFilter />
      </Section>
    </Header>
  );
};