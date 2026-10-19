import clsx from "clsx";
import { Check } from "lucide-react";
import type { InputHTMLAttributes } from "react";
import styles from "./radio-card.module.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  subtitle?: string;
}

export const RadioCard = ({ title, subtitle, className, ...props }: Props) => {
  return (
    <label className={clsx(styles.card, className)}>
      <input {...props} type="radio" className={styles.input} />
      <span className={styles.circle}>
        <Check />
      </span>
      <span className={styles.body}>
        <span className={styles.title}>{title}</span>
        {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
      </span>
    </label>
  );
};
