import { useEffect, useState, useCallback } from "react";
import { FormSection } from "./components/FormSection/FormSection";
import { NumericInput } from "./components/NumericInput/NumericInput";
import { SelectMenu } from "./components/SelectMenu/SelectMenu";
import { Button } from "./components/Button/Button";
import { Alert } from "./components/Alert/Alert";
import { getIndustries } from "./services/axios/industries/endpoints";
import type { Industry } from "./services/axios/industries/types";
import { calculateLoan } from "./services/axios/calculate/endpoints";
import type { AlertProps } from "./components/Alert/types";
import { buildSuccessMessages, buildErrorMessages } from "./helper-functions/alertMessageBuilder";

function App() {
  const [monthlyRevenue, setMonthlyRevenue] = useState<number>();
  const [loanAmount, setLoanAmount] = useState<number>();
  const [repaymentDuration, setRepaymentDuration] = useState<number>();
  const [industries, setIndustries] = useState<Industry[]>([]);
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState<AlertProps>({
    label: "Loan Terms",
    message: [{ label: "Calculate your personalized loan terms", message: "" }],
    type: "info",
  });

  const handleMonthlyRevenueChange = useCallback((value: number) => setMonthlyRevenue(value), []);
  const handleLoanAmountChange = useCallback((value: number) => setLoanAmount(value), []);
  const handleRepaymentDurationChange = useCallback(
    (value: number) => setRepaymentDurationChangeInternal(value),
    [],
  );
  const handleIndustryChange = useCallback((value: Industry) => setSelectedIndustry(value), []);

  function setRepaymentDurationChangeInternal(value: number) {
    setRepaymentDuration(value);
  }

  const handleSubmit = useCallback(async () => {
    if (!selectedIndustry || !loanAmount || !repaymentDuration || !monthlyRevenue) return;
    setIsLoading(true);
    try {
      const response = await calculateLoan({
        industryId: selectedIndustry.id,
        loanAmount,
        loanTermMonths: repaymentDuration,
        monthlyRevenue,
      });

      const { loanDetails, approval } = response.data;
      const isApproved = approval.status === "approved";

      const messages = isApproved
        ? buildSuccessMessages(loanDetails)
        : buildErrorMessages(approval.maxLoanAmount);

      setAlert({
        type: isApproved ? "success" : "error",
        label: "Loan Terms",
        message: messages,
      });
    } catch (error) {
      setAlert({
        type: "error",
        label: "System Error",
        message: [{ label: "Failed to calculate loan. Please try again later.", message: "" }],
      });
    } finally {
      setIsLoading(false);
    }
  }, [selectedIndustry, loanAmount, repaymentDuration, monthlyRevenue]);

  useEffect(() => {
    getIndustries().then((response) => {
      setIndustries(response.data);
    });
  }, []);

  const isFormValid =
    !isLoading &&
    selectedIndustry &&
    monthlyRevenue &&
    loanAmount &&
    repaymentDuration &&
    repaymentDuration >= 4 &&
    repaymentDuration <= 48;

  return (
    <div className="max-w-sm bg-white p-4 flex flex-col gap-6">
      <div>
        <h1 className="text-4xl font-medium ">Frauda</h1>
        <p>We are legit, we promise</p>
      </div>
      <Alert label={alert.label} message={alert.message} type={alert.type} />
      <FormSection title="Personal Information" name="personal-info">
        <SelectMenu
          name="Industry"
          options={industries}
          value={selectedIndustry?.id}
          onChange={handleIndustryChange}
        />
        <NumericInput
          name="Monthly Revenue"
          value={monthlyRevenue}
          unit="kr"
          onChange={handleMonthlyRevenueChange}
        />
      </FormSection>
      <FormSection title="Loan Request" name="loan-request">
        <NumericInput
          name="Loan Amount"
          value={loanAmount}
          unit="kr"
          onChange={handleLoanAmountChange}
        />
        <NumericInput
          name="Repayment Duration"
          value={repaymentDuration}
          unit="months"
          description="Must be between 4–48 months"
          onChange={handleRepaymentDurationChange}
        />
      </FormSection>
      <Button
        name={isLoading ? "Calculating..." : "Calculate Loan"}
        onClick={handleSubmit}
        disabled={!isFormValid}
      />
    </div>
  );
}

export default App;
