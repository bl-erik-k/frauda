export interface NumericInputProps {
  name: string;
  value?: number;
  unit?: string;
  description?: string;
  onChange: (value: number) => void;
}
