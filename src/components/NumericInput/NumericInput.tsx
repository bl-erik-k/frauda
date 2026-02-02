import { memo } from "react";
import type { NumericInputProps } from "./types";

export const NumericInput = memo(
  ({ name, value, unit, onChange, description }: NumericInputProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const digits = e.target.value.replace(/[^\d]/g, "");
      onChange(digits === "" ? 0 : Number(digits));
    };

    return (
      <div className="flex flex-col gap-1">
        <label htmlFor={name}>{name}</label>
        <div className="px-2 gap-2 flex items-center rounded border h-12 border-gray-400 focus-within:border-black">
          <input
            type="text"
            inputMode="numeric"
            placeholder="Enter amount"
            id={name}
            name={name}
            value={value ?? ""}
            onChange={handleChange}
            aria-describedby={`${name}-description`}
            className="w-full border-none outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          />
          <span className="text-black/60" aria-hidden="true">
            {unit}
          </span>
        </div>
        {description && (
          <p id={`${name}-description`} className="self-end text-xs text-black/60">
            {description}
          </p>
        )}
      </div>
    );
  },
);
