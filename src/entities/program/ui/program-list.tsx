import { formatMoney } from "@/shared/lib/format";
import { RadioCard } from "@/shared/ui/radio-card";
import { getPrograms } from "../api/programs";
import styles from "./program-list.module.scss";

interface Props {
  countryIds: number[];
  value?: number;
  onChange: (id: number) => void;
}

export const ProgramList = ({ countryIds, value, onChange }: Props) => {
  const programs = getPrograms(countryIds);

  if (programs.length === 0) {
    return (
      <p className={styles.empty}>
        Для выбранных стран нет общей программы страхования. Измените список стран
      </p>
    );
  }

  return (
    <div className={styles.list}>
      {programs.map((program) => (
        <RadioCard
          key={program.id}
          name="program"
          checked={program.id === value}
          onChange={() => onChange(program.id)}
          title={program.name}
          subtitle={`Общее покрытие - ${formatMoney(program.liability)}`}
        />
      ))}
    </div>
  );
};
