interface IndustryDetail {
  id: string;
  name: string;
  additionalInterestRate: number;
  interestRate: number;
}

type approvalStatus = "approved" | "not_approved";

type revenueCategory = "high" | "medium" | "low";

interface ApprovalInfo {
  status: approvalStatus;
  requestedAmount: number;
  approvedAmount: number;
  maxLoanAmount: number;
  monthlyRevenue: number;
  revenueFactor: number;
  revenueCategory: revenueCategory;
}

interface LoanDetails {
  loanAmount: number;
  loanTermMonths: number;
  annualInterestRate: number;
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
}

export interface CalculateLoanParams {
  industryId: string;
  loanAmount: number;
  loanTermMonths: number;
  monthlyRevenue: number;
}

export interface LoanCalculateResponse {
  industry: IndustryDetail;
  approval: ApprovalInfo;
  loanDetails: LoanDetails;
}

export interface CalculateLoanResult {
  success: boolean;
  data: LoanCalculateResponse;
}

export interface ErrorResponse {
  success: boolean;
  error: string;
  message: string;
  messages: string[];
}
