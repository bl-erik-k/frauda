import { memo } from "react";
import type { ButtonProps } from "./types";

export const Button = memo(({ name, disabled, onClick }: ButtonProps) => {
  return (
    <button
      aria-label={name}
      id={name}
      type="button"
      name={name}
      disabled={disabled}
      onClick={onClick}
      className={`
        bg-purple-800 text-white p-2 rounded 
        hover:bg-purple-900 hover:cursor-pointer
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-900 
        disabled:bg-purple-900 disabled:text-white/70 disabled:cursor-not-allowed disabled:focus-visible:outline-none 
      `}
    >
      {name}
    </button>
  );
});
