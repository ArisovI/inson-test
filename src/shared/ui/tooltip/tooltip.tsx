import clsx from "clsx";
import { useState, type ReactNode } from "react";
import styles from "./tooltip.module.scss";

interface Props {
  label: string;
  className?: string;
  children: ReactNode;
}

export const Tooltip = ({ label, className, children }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <span
      className={clsx(styles.tooltip, className)}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {children}
      {open && (
        <span className={styles.content} role="tooltip">
          {label}
        </span>
      )}
    </span>
  );
};
