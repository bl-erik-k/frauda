export interface Industry {
  id: string;
  name: string;
}

export interface IndustriesResult {
  success: boolean;
  data: Industry[];
}
