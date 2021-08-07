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

type GetTrimmedStringInLowerCaseType = (string: string) => string;

export const getTrimmedStringInLowerCase: GetTrimmedStringInLowerCaseType = (
  string: string,
) => string.trim().toLowerCase();
