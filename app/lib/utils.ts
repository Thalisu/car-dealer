export const yearsCount = new Date().getFullYear() - 2014
export const currentYears =  Array.from(
    { length: yearsCount },
    (_, index) => new Date().getFullYear() - index
  );