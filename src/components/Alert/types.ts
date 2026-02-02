export interface AlertMessage {
  label: string;
  message: string;
}

export interface AlertProps {
  label: string;
  message: AlertMessage[];
  type: "error" | "success" | "info";
}
