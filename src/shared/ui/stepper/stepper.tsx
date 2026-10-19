import clsx from "clsx";
import styles from "./stepper.module.scss";

interface Props {
  total: number;
  current: number;
}

export const Stepper = ({ total, current }: Props) => {
  return (
    <div className={styles.stepper}>
      {Array.from({ length: total }, (_, i) => (
        <span key={i} className={clsx(styles.step, i + 1 === current && styles.active)} />
      ))}
    </div>
  );
};
