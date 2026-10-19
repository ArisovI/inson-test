import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";
import styles from "./button.module.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "link";
  fullWidth?: boolean;
  align?: "center" | "start";
}

export const Button = ({
  variant = "primary",
  fullWidth = false,
  align = "center",
  type = "button",
  className,
  children,
  ...props
}: Props) => {
  const classNames = clsx(
    styles.button,
    styles[variant],
    {
      [styles.fullWidth]: fullWidth,
      [styles.alignStart]: align === "start",
    },
    className,
  );

  return (
    <button type={type} className={classNames} {...props}>
      {children}
    </button>
  );
};
