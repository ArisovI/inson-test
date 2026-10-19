import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";
import styles from "./icon-button.module.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "accent" | "filled" | "outline" | "help";
}

export const IconButton = ({
  variant = "filled",
  type = "button",
  className,
  children,
  ...props
}: Props) => {
  return (
    <button
      type={type}
      className={clsx(styles.button, styles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
