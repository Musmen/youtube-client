type CompareFunctionType = (
  firstCompareItem: number,
  secondCompareItem: number,
  isIncreasing: number,
) => number;

export const compare: CompareFunctionType = (
  firstCompareItem: number,
  secondCompareItem: number,
  ascending: number,
) => (firstCompareItem - secondCompareItem) * ascending;

type GetTimeInMilliseconds = (date: string) => number;

export const getTimeInMilliseconds: GetTimeInMilliseconds = (
  date: string,
) => {
  if (date) return new Date(date).getTime();
  return new Date().getTime();
};

type GetTrimmedStringInLowerCaseType = (string: string) => string;

export const getTrimmedStringInLowerCase: GetTrimmedStringInLowerCaseType = (
  string: string,
) => string.trim().toLowerCase();
