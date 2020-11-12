import * as React from "react";
import { render, screen } from "@testing-library/react";
import TextInput from "../TextInput";

test("Text input is rendered with label", async () => {
  const label = "Name";

  render(<TextInput label={label} />);

  const labelElement = screen.getByLabelText(label);
  expect(labelElement).toBeInTheDocument();
});

test("Text input is prints asterix if TextInput is required", async () => {
  const label = "Name";

  render(<TextInput label={label} required />);

  const labelElement = screen.getByText((content) => content.endsWith("*"));
  expect(labelElement).toBeInTheDocument();
});
