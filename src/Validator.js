import { ERROR_MESSAGE } from "./constants.js";

export const validateInputMoney = (inputMoney) => {
  if (inputMoney % 1000 !== 0) {
    throw new Error(ERROR_MESSAGE.INVAILD_INPUT_MONEY);
  }
};

export const validateBonusNumber = (bonusNumber, winningNumber) => {
  if (isNaN(bonusNumber)) {
    throw new Error(ERROR_MESSAGE.BONUS_NUMBER_NOT_NUMBER);
  }

  if (bonusNumber < 1 || bonusNumber > 45) {
    throw new Error(ERROR_MESSAGE.BONUS_NUMBER_RANGE);
  }

  winningNumber.forEach((number) => {
    if (bonusNumber == number) {
      throw new Error(ERROR_MESSAGE.BONUS_NUMBER_DUPLICATE);
    }
  });
};
