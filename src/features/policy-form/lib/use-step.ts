import { useSearchParams } from "react-router-dom";
import { useAppSelector } from "@/shared/store";
import { selectErrors } from "../model/form-slice";

export const useStep = () => {
  const [params, setParams] = useSearchParams();
  const errors = useAppSelector(selectErrors);
  const valid = Object.keys(errors).length === 0;

  const step = params.get("step") === "3" && valid ? 3 : 1;
  const setStep = (next: 1 | 3) => setParams({ step: String(next) });

  return { step, setStep };
};
