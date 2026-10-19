import { createSelector, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { data } from "@/shared/api";
import { PHONE_CODES } from "@/shared/config/phone";
import { EMPTY_DATE, type DateValue } from "@/shared/lib/date";
import type { FormState } from "./types";
import { validate } from "./validation";

export const initialState: FormState = {
  countries: [null],
  coverage: "single",
  startDate: EMPTY_DATE,
  endDate: EMPTY_DATE,
  activity: data.activities[0].id,
  phoneCode: PHONE_CODES[0].value,
  phone: "",
  program: null,
};

export const formSlice = createSlice({
  name: "policyForm",
  initialState,
  reducers: {
    setCountry: (state, action: PayloadAction<{ index: number; id: number }>) => {
      state.countries[action.payload.index] = action.payload.id;
      state.program = null;
    },
    addCountry: (state) => {
      if (state.countries.length < 5) state.countries.push(null);
    },
    removeCountry: (state, action: PayloadAction<number>) => {
      if (state.countries.length === 1) return;
      state.countries.splice(action.payload, 1);
      state.program = null;
    },
    setCoverage: (state, action: PayloadAction<"single" | "multiple">) => {
      state.coverage = action.payload;
    },
    setStartDate: (state, action: PayloadAction<DateValue>) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action: PayloadAction<DateValue>) => {
      state.endDate = action.payload;
    },
    setActivity: (state, action: PayloadAction<number>) => {
      state.activity = action.payload;
    },
    setPhoneCode: (state, action: PayloadAction<string>) => {
      state.phoneCode = action.payload;
      state.phone = "";
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setProgram: (state, action: PayloadAction<number>) => {
      state.program = action.payload;
    },
    resetForm: () => initialState,
  },
});

export const {
  setCountry,
  addCountry,
  removeCountry,
  setCoverage,
  setStartDate,
  setEndDate,
  setActivity,
  setPhoneCode,
  setPhone,
  setProgram,
  resetForm,
} = formSlice.actions;

export const selectForm = (state: RootState) => state.policyForm;

export const selectCountryIds = createSelector(selectForm, (form) =>
  form.countries.filter((id): id is number => id !== null),
);

export const selectErrors = createSelector(selectForm, (form) => validate(form));
