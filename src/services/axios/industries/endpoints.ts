import { axiosInstance } from "../axios";
import type { IndustriesResult } from "./types";

export const getIndustries = async (): Promise<IndustriesResult> => {
  const { data } = await axiosInstance.get<IndustriesResult>("/industries");
  return data;
};
