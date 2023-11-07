export const isInteger = (value) => {
  const regex = /^[0-9]*$/;

  return regex.test(value);
};

export const isEmpty = (value) => {
  if (value === null || value === undefined || value.length === 0) return true;

  return false;
};
