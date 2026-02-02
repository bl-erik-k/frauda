import type { AlertMessage } from "../components/Alert/types";
import type { LoanDetails } from "../services/axios/calculate/types";

export const buildSuccessMessages = (loanDetails: LoanDetails): AlertMessage[] => [
  {
    label: "Annual Interest Rate",
    message: `${loanDetails.annualInterestRate} %`,
  },
  {
    label: "Total Interest Cost",
    message: `${loanDetails.totalInterest} kr`,
  },
  {
    label: "Total Payment Cost",
    message: `${loanDetails.totalPayment} kr`,
  },
];

export const buildErrorMessages = (maxLoanAmount: number): AlertMessage[] => [
  {
    label: "Max Loan Amount",
    message: `${maxLoanAmount} kr`,
  },
];
