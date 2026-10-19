import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import styles from "./notification.module.scss";

interface Props {
  children: ReactNode;
}

export const NotificationStack = ({ children }: Props) => {
  return createPortal(
    <div className={styles.stack}>{children}</div>,
    document.body,
  );
};
