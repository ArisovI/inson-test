import clsx from "clsx";
import { Check, X } from "lucide-react";
import type { HTMLAttributes } from "react";
import styles from "./notification.module.scss";

interface Props extends HTMLAttributes<HTMLDivElement> {
  variant?: "success" | "error";
}

export const Notification = ({
  variant = "success",
  title,
  className,
  children,
  ...props
}: Props) => {
  return (
    <div className={clsx(styles.notification, styles[variant], className)} {...props}>
      <span className={styles.icon}>
        {variant === "success" ? <Check /> : <X />}
      </span>

      <div className={styles.body}>
        {title && <div className={styles.title}>{title}</div>}
        <div className={styles.message}>{children}</div>
      </div>
    </div>
  );
};
