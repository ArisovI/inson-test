import { getPrograms, ProgramList } from "@/entities/program";
import { formatMoney } from "@/shared/lib/format";
import { useAppDispatch, useAppSelector } from "@/shared/store";
import { notify } from "@/shared/model/notification";
import { Button } from "@/shared/ui/button";
import { resetForm, selectCountryIds, selectForm, setProgram } from "../../model/form-slice";
import { useStep } from "../../lib/use-step";
import common from "../step.module.scss";
import styles from "./program-step.module.scss";

export const ProgramStep = () => {
  const dispatch = useAppDispatch();
  const form = useAppSelector(selectForm);
  const countryIds = useAppSelector(selectCountryIds);
  const { setStep } = useStep();

  const programs = getPrograms(countryIds);
  const selected = programs.find((program) => program.id === form.program) ?? programs[0];

  const submit = () => {
    dispatch(
      notify({
        variant: "success",
        title: "Заявка отправлена",
        message: `Полис «${selected.name}» оформлен`,
      }),
    );
    dispatch(resetForm());
    setStep(1);
  };

  return (
    <div className={common.step}>
      <h1 className={common.title}>Выберите программу</h1>

      <ProgramList
        countryIds={countryIds}
        value={selected?.id}
        onChange={(id) => dispatch(setProgram(id))}
      />

      {selected && (
        <div className={styles.actions}>
          <Button variant="link">Сравнить программы</Button>
          <Button fullWidth align="start" className={styles.submit} onClick={submit}>
            <span>Выбрать {selected.name}</span>
            <span>{formatMoney(selected.liability)}</span>
          </Button>
        </div>
      )}
    </div>
  );
};
