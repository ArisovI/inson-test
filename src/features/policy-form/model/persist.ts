import { loadFromStorage, saveToStorage } from "@/shared/lib/storage";
import type { FormState } from "./types";
import { initialState } from "./form-slice";

export const loadForm = (): FormState => {
  const saved = loadFromStorage<FormState>("policy-form");
  return { ...initialState, ...saved };
};

export const saveForm = (form: FormState) => saveToStorage("policy-form", form);
