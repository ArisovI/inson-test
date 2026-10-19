import { Pencil } from "lucide-react";
import { data } from "@/shared/api";
import { useAppSelector } from "@/shared/store";
import { COVERAGE_OPTIONS } from "../../config/form";
import { selectForm } from "../../model/form-slice";
import { formatDate } from "../../lib/format-date";
import { useStep } from "../../lib/use-step";
import styles from "./form-summary.module.scss";

export const FormSummary = () => {
  const form = useAppSelector(selectForm);
  const { step, setStep } = useStep();

  const rows = [
    {
      label: "Страна путешествия",
      value: data.countries
        .filter((country) => form.countries.includes(country.id))
        .map((country) => country.name)
        .join(", "),
    },
    {
      label: "Тип покрытия",
      value: COVERAGE_OPTIONS.find((option) => option.value === form.coverage)
        ?.label,
    },
    { label: "Начало страхования", value: formatDate(form.startDate) },
    { label: "Конец страхования", value: formatDate(form.endDate) },
    {
      label: "Цель",
      value: data.activities.find((activity) => activity.id === form.activity)
        ?.name,
    },
  ];

  return (
    <aside className={styles.summary}>
      <h2 className={styles.title}>Ваши данные</h2>

      <dl className={styles.list}>
        {rows.map((row) => (
          <div key={row.label} className={styles.row}>
            <dt>{row.label}</dt>
            <dd className={styles.value}>
              {row.value || "—"}
              {step === 3 && (
                <button
                  type="button"
                  className={styles.edit}
                  aria-label={`Изменить: ${row.label}`}
                  onClick={() => setStep(1)}
                >
                  <Pencil size={12} />
                </button>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </aside>
  );
};
