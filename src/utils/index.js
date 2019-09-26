export const getTrimString = (str, length) =>
  str.length > length ? str.slice(0, length - 1) : str;
