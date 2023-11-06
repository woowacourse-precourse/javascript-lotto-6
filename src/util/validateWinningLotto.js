const validateWinningLotto = (lotto) => {
  if (lotto.length !== 6) return false;

  const uniqueNumbers = new Set();

  for (const number of lotto) {
    if (typeof number !== "number" || number < 1 || number > 45) return false;
    uniqueNumbers.add(number);
  }

  return uniqueNumbers.size === 6;
};

export default validateWinningLotto;
