import clsx from "clsx";
import { Calendar } from "lucide-react";
import { getDays, getMonths, getYears, type DateValue } from "@/shared/lib/date";
import { IconButton } from "@/shared/ui/icon-button";
import { Select } from "@/shared/ui/select";
import styles from "./date-select.module.scss";

interface Props {
  value: DateValue;
  onChange: (value: DateValue) => void;
  error?: boolean;
  className?: string;
}

const days = getDays();
const months = getMonths();
const years = getYears();

export const DateSelect = ({
  value,
  onChange,
  error = false,
  className,
}: Props) => {
  return (
    <div className={clsx(styles.date, className)}>
      <Select
        className={styles.day}
        placeholder="01"
        options={days}
        value={value.day}
        error={error}
        onChange={(e) => onChange({ ...value, day: e.target.value })}
      />
      <Select
        className={styles.month}
        placeholder="Январь"
        options={months}
        value={value.month}
        error={error}
        onChange={(e) => onChange({ ...value, month: e.target.value })}
      />
      <Select
        className={styles.year}
        placeholder="2024"
        options={years}
        value={value.year}
        error={error}
        onChange={(e) => onChange({ ...value, year: e.target.value })}
      />
      <IconButton variant="outline" className={styles.calendar} aria-label="Календарь">
        <Calendar />
      </IconButton>
    </div>
  );
};
