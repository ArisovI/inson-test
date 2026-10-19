import { MONTHS } from "@/shared/config/date";

export interface DateValue {
  day: string;
  month: string;
  year: string;
}

export const EMPTY_DATE: DateValue = { day: "", month: "", year: "" };

const pad = (n: number) => String(n).padStart(2, "0");

export const getDays = () =>
  Array.from({ length: 31 }, (_, i) => {
    const day = pad(i + 1);
    return { value: day, label: day };
  });

export const getMonths = () =>
  MONTHS.map((label, i) => ({ value: pad(i + 1), label }));

export const getYears = () => {
  const current = new Date().getFullYear();

  return Array.from({ length: 3 }, (_, i) => {
    const year = String(current + i);
    return { value: year, label: year };
  });
};

export const getToday = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
};

export const isDateFilled = ({ day, month, year }: DateValue) =>
  Boolean(day && month && year);

export const toDate = (value: DateValue) => {
  if (!isDateFilled(value)) return null;

  const day = Number(value.day);
  const month = Number(value.month) - 1;
  const date = new Date(Number(value.year), month, day);

  return date.getDate() === day && date.getMonth() === month ? date : null;
};

export const diffDays = (from: Date, to: Date) =>
  Math.round((to.getTime() - from.getTime()) / 86_400_000);
