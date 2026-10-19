import clsx from "clsx";
import { Check } from "lucide-react";
import type { InputHTMLAttributes } from "react";
import styles from "./radio.module.scss";

export const Radio = ({
  className,
  children,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <label className={clsx(styles.radio, className)}>
      <input {...props} type="radio" className={styles.input} />
      <span className={styles.circle}>
        <Check />
      </span>
      {children}
    </label>
  );
};
