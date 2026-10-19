import type { SelectHTMLAttributes } from "react";
import { data } from "@/shared/api";
import { Select } from "@/shared/ui/select";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  exclude: (number | null)[];
  error?: boolean;
}

export const CountrySelect = ({ exclude, value, ...props }: Props) => {
  const options = data.countries
    .filter((country) => country.id === value || !exclude.includes(country.id))
    .map((country) => ({ value: country.id, label: country.name }));

  return <Select placeholder="Выберите страну" options={options} value={value} {...props} />;
};
