import { render, screen } from "@testing-library/react";
import UserSearchButton from ".";

test("it should render a button", () => {
  render(<UserSearchButton />);

  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});
