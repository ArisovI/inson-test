import { PHONE_CODES } from "@/shared/config/phone";
import { diffDays, getToday, isDateFilled, toDate } from "@/shared/lib/date";
import type { Errors, FormState } from "./types";

const getPhoneLength = (code: string) => {
  const mask = PHONE_CODES.find((item) => item.value === code)?.mask ?? "";
  return mask.replace(/\D/g, "").length;
};

const validateCountries = ({ countries }: FormState) => {
  if (countries.every((id) => id === null)) return "Выберите страну путешествия";
  if (countries.includes(null)) return "Выберите страну или удалите пустое поле";
};

const validateStart = ({ startDate }: FormState, today: Date) => {
  if (!isDateFilled(startDate)) return "Укажите дату начала";

  const start = toDate(startDate);
  if (!start) return "Такой даты не существует";
  if (start < today) return "Дата начала не может быть в прошлом";
};

const validateEnd = ({ startDate, endDate }: FormState) => {
  if (!isDateFilled(endDate)) return "Укажите дату окончания";

  const end = toDate(endDate);
  if (!end) return "Такой даты не существует";

  const start = toDate(startDate);
  if (!start) return;
  if (end < start) return "Дата окончания раньше даты начала";
  if (diffDays(start, end) > 365) return "Срок страхования — не больше 365 дней";
};

const validatePhone = ({ phone, phoneCode }: FormState) => {
  if (!phone) return "Укажите номер телефона";
  if (phone.length < getPhoneLength(phoneCode)) return "Введите номер полностью";
};

export const validate = (form: FormState): Errors => {
  const errors: Errors = {
    countries: validateCountries(form),
    startDate: validateStart(form, getToday()),
    endDate: validateEnd(form),
    phone: validatePhone(form),
  };

  return Object.fromEntries(Object.entries(errors).filter(([, message]) => message));
};
