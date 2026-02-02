export interface SelectMenuOption {
  id: string;
  name: string;
}

export interface SelectMenuProps {
  name: string;
  options: SelectMenuOption[];
  value?: string;
  onChange: (value: SelectMenuOption) => void;
}
