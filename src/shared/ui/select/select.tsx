import clsx from "clsx";
import type { SelectHTMLAttributes } from "react";
import styles from "./select.module.scss";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  options: {
    value: string | number;
    label: string;
  }[];
  placeholder?: string;
  variant?: "filled" | "outline";
  error?: boolean;
}

export const Select = ({
  options,
  placeholder,
  variant = "filled",
  error = false,
  className,
  ...props
}: Props) => {
  return (
    <select
      className={clsx(styles.select, styles[variant], error && styles.error, className)}
      aria-invalid={error}
      {...props}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
