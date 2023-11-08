import { errorMessage, gameConstant } from "../constant.js";

class Validation {
  static userMoney(userMoney) {
    if (!+userMoney) {
      throw new Error(errorMessage.NUMBER_EMPTY_OR_STRING);
    }
    if (userMoney % gameConstant.LOTTO_PRICE) {
      throw new Error(errorMessage.NUMBER_REST);
    }
    if (userMoney < gameConstant.LOTTO_PRICE) {
      throw new Error(errorMessage.NUMBER_SMALL);
    }
  }

  static winningNumber(numbers) {
    const numberArray = numbers.split(",");
    if (numberArray.length !== gameConstant.LOTTO_LENGTH) {
      throw new Error(errorMessage.NUMBER_LENGTH);
    }
    numberArray.forEach((number) => {
      if (!+number) {
        throw new Error(errorMessage.NUMBER_EMPTY_OR_STRING);
      }
      if (number < gameConstant.LOTTO_MIN || number > gameConstant.LOTTO_MAX) {
        throw new Error(errorMessage.NUMBER_NOT_INRANGE);
      }
    });
  }

  static bonusNumber(winningNumbers, bonusNumber) {
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error(errorMessage.BONUSNUMBER_OVERLAP_WINNINGNUMBER);
    }
    if (!+bonusNumber) {
      throw new Error(errorMessage.NUMBER_EMPTY_OR_STRING);
    }
    if (bonusNumber < gameConstant.LOTTO_MIN || bonusNumber > gameConstant.LOTTO_MAX) {
      throw new Error(errorMessage.NUMBER_NOT_INRANGE);
    }
  }
}

export default Validation;
