import type { ReactNode } from "react";
import { IconButton } from "@/shared/ui/icon-button";
import { Tooltip } from "@/shared/ui/tooltip";
import styles from "./field.module.scss";

interface Props {
  label?: string;
  hint?: string;
  error?: string;
  children: ReactNode;
}

export const Field = ({ label, hint, error, children }: Props) => {
  return (
    <div className={styles.field}>
      <div className={styles.header}>
        {label && <span className={styles.label}>{label}</span>}
        {hint && (
          <Tooltip label={hint} className={styles.hint}>
            <IconButton variant="help" aria-label="Подсказка">
              ?
            </IconButton>
          </Tooltip>
        )}
      </div>
      {children}
      {error && (
        <span className={styles.error} role="alert">
          {error}
        </span>
      )}
    </div>
  );
};
