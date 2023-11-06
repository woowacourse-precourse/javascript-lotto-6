export const hasDuplicate = numbers => {
  return !numbers.every(
    (value, index) => !numbers.slice(0, index).includes(value),
  );
};
