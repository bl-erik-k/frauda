import { axiosInstance } from "../axios";
import type { CalculateLoanParams, CalculateLoanResult } from "./types";

export const calculateLoan = async (props: CalculateLoanParams): Promise<CalculateLoanResult> => {
  const response = await axiosInstance.post<CalculateLoanResult>("/loans/calculate", props);
  return response.data;
};
