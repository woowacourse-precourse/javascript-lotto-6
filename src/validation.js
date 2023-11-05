const isMoneyValid = (input) => {
  if (Number.isNaN(+input)) {
    return "ERROR";
  }
  if (input !== input.trim()) {
    return "ERROR";
  }
  if (Number(input) < 0) {
    return "ERROR";
  }
  return "VALID";
};

export { isMoneyValid };
