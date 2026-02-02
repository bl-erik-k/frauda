import { memo } from "react";
import type { FormSectionProps } from "./types";

export const FormSection = memo(({ title, children, name }: FormSectionProps) => {
  return (
    <section aria-labelledby={name} role="group">
      <p id={name} className="font-medium mb-2">
        {title}
      </p>
      <div className="flex flex-col gap-2">{children}</div>
    </section>
  );
});
