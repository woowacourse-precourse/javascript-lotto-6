const trimmedNumber = number => {
  return number.trim();
};

const parsedNumber = number => {
  return parseInt(trimmedNumber(number), 10);
};

const validateNumber = number => {
  const trimmed = trimmedNumber(number);
  const parsed = parsedNumber(number);

  if (trimmed === '' || Number.isNaN(parsed)) throw new Error();
  if (trimmed !== parsed.toString()) throw new Error();
};
