import { render, screen } from "@testing-library/react";
import Profile from ".";

test("it should render profile", () => {
  render(<Profile />);

  const profile = screen.getByRole("textbox");

  expect(profile).toBeInTheDocument();
});
