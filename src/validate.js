export const validateBonusNumber = (bonusNumber) => {
  // 보너스 번호 검증
  if (isNaN(bonusNumber)) {
    throw new Error(ERROR_MESSAGE.NOT_NUMBER);
  }
  if (bonusNumber < 1 || bonusNumber > 45) {
    throw new Error(ERROR_MESSAGE.OVER_NUMBER);
  }
};

export const validatePrice = (buyPrice) => {
  // 입력 금액 검증
  if (Number(buyPrice) < 1000) {
    throw new Error(ERROR_MESSAGE.UNDER_PRICE);
  }
  if (Number(buyPrice) % 1000 !== 0 && !isNaN(buyPrice)) {
    throw new Error(ERROR_MESSAGE.NOT_PRICE);
  }
};
