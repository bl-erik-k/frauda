import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { NumericInput } from "./NumericInput";

describe("NumericInput Component", () => {
  it("when rendered with a label and value, then it should display them correctly", () => {
    render(<NumericInput name="Test Input" value={100} onChange={() => {}} />);
    expect(screen.getByLabelText("Test Input")).toBeDefined();
    expect((screen.getByRole("textbox") as HTMLInputElement).value).toBe("100");
  });

  it("when a description is provided, then it should be visible to the user", () => {
    render(
      <NumericInput name="Test Input" value={0} onChange={() => {}} description="Help text" />,
    );
    expect(screen.getByText("Help text")).toBeDefined();
  });
});
