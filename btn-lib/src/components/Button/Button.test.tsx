import { render, screen, cleanup } from "@testing-library/react";
import { it, expect, afterEach } from "vitest";
import { Button } from "./Button";

afterEach(() => {
  cleanup();
});

it("applies custom background color", () => {
  render(<Button label="Click me" backgroundColor="red" />);
  const button = screen.getByText("Click me");
  expect(button).toHaveAttribute("style", "background-color: red;");
});


it("applies primary class correctly when primary is true", () => {
  render(<Button label="Click me" primary={true} />);
  const button = screen.getByText("Click me");
  expect(button).toHaveClass("storybook-button--primary");
  expect(button).not.toHaveClass("storybook-button--secondary");
});