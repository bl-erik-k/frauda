import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Alert } from "./Alert";
import type { AlertMessage } from "./types";

describe("Alert Component", () => {
  it("when provided with label and messages, then it should render them correctly", () => {
    const messages: AlertMessage[] = [
      { label: "Item 1", message: "Value 1" },
      { label: "Item 2", message: "Value 2" },
    ];

    render(<Alert label="Test Alert" message={messages} type="success" />);

    expect(screen.getByText("Test Alert")).toBeDefined();
    expect(screen.getByText("Item 1")).toBeDefined();
    expect(screen.getByText(": Value 1")).toBeDefined();
    expect(screen.getByText("Item 2")).toBeDefined();
    expect(screen.getByText(": Value 2")).toBeDefined();
  });

  it("when provided with empty messages, then it should render the label only without crashing", () => {
    render(<Alert label="Empty Alert" message={[]} type="info" />);
    expect(screen.getByText("Empty Alert")).toBeDefined();
  });
});
