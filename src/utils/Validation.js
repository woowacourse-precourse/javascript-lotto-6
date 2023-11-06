export const validateMoney = (money) => {
  if (parseInt(money, 10) % 1000 !== 0) {
    throw new Error('[ERROR] 1000원 단위로 금액을 입력해주세요');
  }
};

export const validateWinningNumbers = (winningNumbers) => {};

export const validateBonusNumber = () => {};
