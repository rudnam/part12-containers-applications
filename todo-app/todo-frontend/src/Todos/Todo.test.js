import { render, screen } from "@testing-library/react";
import Todo from "./Todo";

test("renders todo details properly", () => {
  const todo = {
    text: "Do a barrel roll",
    done: false,
  };

  render(<Todo todo={todo} />);

  const todoTextElement = screen.getByText("Do a barrel roll");
  expect(todoTextElement).toBeInTheDocument();
  const todoDoneElement = screen.getByText("This todo is not done");
  expect(todoDoneElement).toBeInTheDocument();
});
