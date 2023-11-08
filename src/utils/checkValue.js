export const checkValueIsNumber = (value) => {
  if (isNaN(Number(value))) {
    return false;
  }
  return true;
};

export const checkValueIsInteger = (value) => {
  if (Number.isInteger(value)) {
    return true;
  }
  return false;
};

export const checkValueIsDuplicate = (value) => {
  const isDuplicated = value.some(
    (item) => value.indexOf(item) !== value.lastIndexOf(item)
  );

  return isDuplicated;
};
