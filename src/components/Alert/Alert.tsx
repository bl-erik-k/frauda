import { memo } from "react";
import type { AlertProps } from "./types";

export const Alert = memo(({ label, message, type }: AlertProps) => {
  const bgColor = {
    error: "bg-red-500/20",
    success: "bg-green-500/20",
    info: "bg-gray-500/20",
  };

  return (
    <div className={`p-2 rounded ${bgColor[type]}`}>
      <div className="flex flex-row items-center justify-between">
        <p className="font-medium text-lg">{label}</p>
        {type === "success" && (
          <div className="px-1  bg-gray-100 rounded-sm">
            <p className="text-sm">Accepted</p>
          </div>
        )}
        {type === "error" && (
          <div className="px-1  bg-gray-100 rounded-sm">
            <p className="text-sm">Rejected</p>
          </div>
        )}
      </div>

      {message.map((message, index) => (
        <p className="text-gray-600" key={index}>
          {message.label}
          {message.message && <span className="font-medium text-black">: {message.message}</span>}
        </p>
      ))}
    </div>
  );
});
