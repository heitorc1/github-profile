import { render, screen } from "@testing-library/react";
import UserSearch from ".";

test("renders input field", () => {
  render(<UserSearch />);

  const input = screen.getByRole("textbox");
  expect(input).toBeInTheDocument();
});
