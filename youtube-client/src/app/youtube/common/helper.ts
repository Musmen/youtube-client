type CompareFunctionType = (
  firstCompareItem: number,
  secondCompareItem: number,
  isIncreasing: boolean,
) => number;

export const compare: CompareFunctionType = (
  firstCompareItem: number,
  secondCompareItem: number,
  isIncreasing: boolean,
) => {
  if (isIncreasing) {
    return firstCompareItem - secondCompareItem;
  }
  return secondCompareItem - firstCompareItem;
};

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
