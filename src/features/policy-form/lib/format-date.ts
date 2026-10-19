import { isDateFilled, type DateValue } from "@/shared/lib/date";

export const formatDate = (date: DateValue) =>
  isDateFilled(date) ? `${date.day}/${date.month}/${date.year}` : "DD/MM/YYYY";
