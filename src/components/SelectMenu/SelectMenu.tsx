import { useRef, memo } from "react";
import type { SelectMenuProps } from "./types";

export const SelectMenu = memo(({ name, options, value, onChange }: SelectMenuProps) => {
  const selectRef = useRef<HTMLSelectElement>(null);

  const handleIconClick = () => {
    try {
      selectRef.current?.showPicker();
    } catch (error) {
      selectRef.current?.focus();
      selectRef.current?.click();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = e.target.value;
    const selectedOption = options.find((opt) => opt.id === selectedId);
    if (selectedOption) {
      onChange(selectedOption);
    }
  };

  return (
    <div className="flex flex-col">
      <label htmlFor={name} id={`${name}-label`}>
        {name}
      </label>
      <div className="px-2 gap-2 flex items-center rounded border-1 border-gray-400 h-12 hover:border-black focus-within:border-black cursor-pointer">
        <select
          ref={selectRef}
          name={name}
          id={name}
          value={value ?? ""}
          aria-labelledby={`${name}-label`}
          aria-describedby={`${name}-description`}
          aria-invalid={false}
          onChange={handleChange}
          className="w-full appearance-none border-none focus:ring-0 outline-none cursor-pointer"
        >
          <option key={"placeholder"} disabled value="">
            Select industry
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 flex-shrink-0"
          onClick={handleIconClick}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </div>
  );
});
