import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { SelectMenu } from "./SelectMenu";

describe("SelectMenu Component", () => {
  const options = [
    { id: "1", name: "Industry 1" },
    { id: "2", name: "Industry 2" },
  ];

  it("when rendered with label and options, then it should display all elements correctly", () => {
    render(<SelectMenu name="Industry" options={options} onChange={() => {}} />);
    expect(screen.getByLabelText("Industry")).toBeDefined();
    expect(screen.getByText("Select industry")).toBeDefined();
    expect(screen.getByText("Industry 1")).toBeDefined();
    expect(screen.getByText("Industry 2")).toBeDefined();
  });
});
