import { data } from "@/shared/api";

export const getPrograms = (countryIds: number[]) => {
  const countries = data.countries.filter((country) => countryIds.includes(country.id));

  return data.programs.filter((program) =>
    countries.every((country) => country.programs.some((item) => item.id === program.id)),
  );
};
