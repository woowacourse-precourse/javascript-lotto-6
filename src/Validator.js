import { ERROR, MONEY_UNIT } from './Constants';

class Validator {
  static validatePurchaseMoney(money) {
    if (!Number.isInteger(money) || money <= 0) {
      throw new Error(ERROR.moneyNumberErrorMessage);
    }

    if (money % MONEY_UNIT !== 0) {
      throw new Error(ERROR.moneyUnitErrorMessage);
    }
  }

  static validateLottoNumbers(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.lottoLengthErrorMessage);
    }

    numbers.forEach((number) => {
      if (!Number.isInteger(number)) {
        throw new Error(ERROR.lottoInvalidErrorMessage);
      }

      if (number < 1 || number > 45) {
        throw new Error(ERROR.lottoRangeErrorMessage);
      }
    });

    if (numbers.length !== new Set(numbers).size) {
      throw new Error(ERROR.lottoDuplicateErrorMessage);
    }
  }

  static vaildateBonusNumber(lotto, number) {
    if (!Number.isInteger(number)) {
      throw new Error(ERROR.bonusInvalidErrorMessage);
    }

    if (number < 1 || number > 45) {
      throw new Error(ERROR.bonusRangeErrorMessage);
    }

    if (lotto.getNumbers().includes(number)) {
      throw new Error(ERROR.bonusDuplicateErrorMessage);
    }
  }
}

export default Validator;
