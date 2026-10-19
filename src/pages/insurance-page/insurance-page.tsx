import { ArrowLeft } from "lucide-react";
import { FormSummary, ProgramStep, TravelStep, useStep } from "@/features/policy-form";
import { IconButton } from "@/shared/ui/icon-button";
import { Stepper } from "@/shared/ui/stepper";
import styles from "./insurance-page.module.scss";

export const InsurancePage = () => {
  const { step, setStep } = useStep();

  return (
    <main className={styles.page}>
      <section className={styles.form}>
        <div className={styles.header}>
          <Stepper total={5} current={step} />
          <IconButton
            variant="accent"
            aria-label="Назад"
            disabled={step === 1}
            onClick={() => setStep(1)}
          >
            <ArrowLeft />
          </IconButton>
        </div>

        {step === 1 ? <TravelStep /> : <ProgramStep />}

        <p className={styles.note}>
          <span className={styles.noteIcon}>!</span>
          Не волнуйтесь! Вы можете покинуть сайт и продолжить с этого момента в любое время
        </p>
      </section>

      <FormSummary />
    </main>
  );
};
