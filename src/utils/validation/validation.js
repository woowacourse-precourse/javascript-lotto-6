const trimmedNumber = number => {
  return number.trim();
};

const parsedNumber = number => {
  return parseInt(trimmedNumber(number), 10);
};
