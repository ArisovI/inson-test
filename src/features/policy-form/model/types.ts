import type { DateValue } from "@/shared/lib/date";

export interface FormState {
  countries: (number | null)[];
  coverage: "single" | "multiple";
  startDate: DateValue;
  endDate: DateValue;
  activity: number;
  phoneCode: string;
  phone: string;
  program: number | null;
}

export type Errors = Partial<Record<"countries" | "startDate" | "endDate" | "phone", string>>;
