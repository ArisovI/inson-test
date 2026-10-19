import { Radio } from "@/shared/ui/radio";
import { data } from "@/shared/api";
import styles from "./activity-radio-group.module.scss";

interface Props {
  value: number;
  onChange: (id: number) => void;
}

export const ActivityRadioGroup = ({ value, onChange }: Props) => {
  return (
    <div className={styles.group}>
      {data.activities.map((activity) => (
        <Radio
          key={activity.id}
          name="activity"
          checked={value === activity.id}
          onChange={() => onChange(activity.id)}
        >
          {activity.name}
        </Radio>
      ))}
    </div>
  );
};
