const validateBonusNumber = (lotto, bonus) => {
  bonus = Number(bonus);
  if (isNaN(bonus)) {
    return false;
  }

  if (bonus < 1 || bonus > 45) {
    return false;
  }

  if (lotto.includes(bonus)) {
    return false;
  }

  return true;
};

export default validateBonusNumber;
