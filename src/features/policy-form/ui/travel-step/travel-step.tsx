import { useState } from "react";
import { Plus, X } from "lucide-react";
import { ActivityRadioGroup } from "@/entities/activity";
import { CountrySelect } from "@/entities/country";
import { useAppDispatch, useAppSelector } from "@/shared/store";
import { Button } from "@/shared/ui/button";
import { DateSelect } from "@/shared/ui/date-select";
import { Field } from "@/shared/ui/field";
import { IconButton } from "@/shared/ui/icon-button";
import { PhoneInput } from "@/shared/ui/phone-input";
import { Radio } from "@/shared/ui/radio";
import { COVERAGE_OPTIONS, HINTS } from "../../config/form";
import {
  addCountry,
  removeCountry,
  selectErrors,
  selectForm,
  setActivity,
  setCountry,
  setCoverage,
  setEndDate,
  setPhone,
  setPhoneCode,
  setStartDate,
} from "../../model/form-slice";
import { useStep } from "../../lib/use-step";
import common from "../step.module.scss";
import styles from "./travel-step.module.scss";

export const TravelStep = () => {
  const dispatch = useAppDispatch();
  const form = useAppSelector(selectForm);
  const allErrors = useAppSelector(selectErrors);
  const [submitted, setSubmitted] = useState(false);
  const errors = submitted ? allErrors : {};
  const lastIndex = form.countries.length - 1;
  const { setStep } = useStep();

  const next = () => {
    setSubmitted(true);
    if (Object.keys(allErrors).length === 0) setStep(3);
  };

  return (
    <div className={common.step}>
      <h1 className={common.title}>Покупка страхового полиса</h1>

      <Field
        label="Страна путешествия"
        hint={HINTS.countries}
        error={errors.countries}
      >
        {form.countries.map((id, index) => (
          <div key={index} className={styles.countryRow}>
            <CountrySelect
              className={styles.country}
              value={id ?? ""}
              exclude={form.countries}
              error={Boolean(errors.countries) && id === null}
              onChange={(e) =>
                dispatch(setCountry({ index, id: Number(e.target.value) }))
              }
            />
            {index > 0 && (
              <IconButton
                aria-label="Удалить страну"
                onClick={() => dispatch(removeCountry(index))}
              >
                <X />
              </IconButton>
            )}
            {index === lastIndex && (
              <IconButton
                aria-label="Добавить страну"
                disabled={form.countries.length >= 5 || id === null}
                onClick={() => dispatch(addCountry())}
              >
                <Plus />
              </IconButton>
            )}
          </div>
        ))}
      </Field>

      <Field label="Тип покрытия" hint={HINTS.coverage}>
        <div className={styles.column}>
          {COVERAGE_OPTIONS.map((option) => (
            <Radio
              key={option.value}
              name="coverage"
              checked={form.coverage === option.value}
              onChange={() => dispatch(setCoverage(option.value))}
            >
              {option.label}
            </Radio>
          ))}
        </div>
      </Field>

      <Field
        label="Начало страхования"
        hint={HINTS.startDate}
        error={errors.startDate}
      >
        <DateSelect
          className={styles.date}
          value={form.startDate}
          error={Boolean(errors.startDate)}
          onChange={(value) => dispatch(setStartDate(value))}
        />
      </Field>

      <Field
        label="Конец страхования"
        hint={HINTS.endDate}
        error={errors.endDate}
      >
        <DateSelect
          className={styles.date}
          value={form.endDate}
          error={Boolean(errors.endDate)}
          onChange={(value) => dispatch(setEndDate(value))}
        />
      </Field>

      <Field hint={HINTS.activity}>
        <ActivityRadioGroup
          value={form.activity}
          onChange={(id) => dispatch(setActivity(id))}
        />
      </Field>

      <Field
        label="Номер мобильного телефона"
        hint={HINTS.phone}
        error={errors.phone}
      >
        <PhoneInput
          className={styles.phone}
          code={form.phoneCode}
          value={form.phone}
          error={Boolean(errors.phone)}
          onCodeChange={(code) => dispatch(setPhoneCode(code))}
          onChange={(phone) => dispatch(setPhone(phone))}
        />
      </Field>

      <Button className={styles.next} onClick={next}>
        Далее
      </Button>
    </div>
  );
};
