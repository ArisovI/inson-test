import clsx from "clsx";
import { IMaskInput } from "react-imask";
import { PHONE_CODES } from "@/shared/config/phone";
import { Select } from "@/shared/ui/select";
import styles from "./phone-input.module.scss";

interface Props {
  code: string;
  value: string;
  onCodeChange: (code: string) => void;
  onChange: (phone: string) => void;
  error?: boolean;
  className?: string;
}

export const PhoneInput = ({ code, value, onCodeChange, onChange, error, className }: Props) => {
  const current = PHONE_CODES.find((item) => item.value === code) ?? PHONE_CODES[0];

  return (
    <div className={clsx(styles.phone, className)}>
      <Select
        variant="outline"
        className={styles.code}
        options={PHONE_CODES}
        value={code}
        error={error}
        onChange={(e) => onCodeChange(e.target.value)}
      />
      <IMaskInput
        type="tel"
        className={clsx(styles.number, error && styles.error)}
        mask={current.mask}
        placeholder={current.placeholder}
        value={value}
        unmask
        onAccept={(phone) => onChange(phone)}
      />
    </div>
  );
};
