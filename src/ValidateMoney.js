const ValidateMoney = (money) => {
  if (money % 1000 !== 0 || money < 1000 || isNaN(money)) {
    throw new Error('[ERROR] 금액은 1000원으로 나누어 떨어져야 합니다.');
  }

  return money / 1000;
};

export default ValidateMoney;
