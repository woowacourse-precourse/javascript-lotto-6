import ERROR_MESSAGE from "./Errors.js";
import { LOTTO_UNIT } from "./constants/constants.js";

class Validator {
  static validateMoneyUnit(inputMoney) {
    if (parseInt(inputMoney, 10) % LOTTO_UNIT.MONEY_UNIT !== 0) {
      throw new Error(ERROR_MESSAGE.moneyUnit);
    }
  }

  static validateInputMoney(inputMoney) {
    if (inputMoney.includes(" ")) {
      throw new Error(ERROR_MESSAGE.moneyValue);
    }

    if (/\D/.test(inputMoney)) {
      throw new Error(ERROR_MESSAGE.moneyValue);
    }
  }

  static validateWinningNumbers(inputNumbers) {
    const numbers = inputNumbers.split(",").map(Number);
    const validNumbers = numbers.filter(
      (number) => number >= 1 && number <= 45
    );

    if (
      numbers.length !== 6 ||
      numbers.some(isNaN) ||
      validNumbers.length !== numbers.length ||
      new Set(numbers).size !== numbers.length
    ) {
      throw new Error(ERROR_MESSAGE.invalidTicketNumbers);
    }
  }

  static validateBonusNumber(inputNumber) {
    const number = parseInt(inputNumber, 10);
    const isValid = number >= 1 && number <= 45;
    if (!isValid) {
      throw new Error(ERROR_MESSAGE.invalidTicketNumbers);
    }
  }
}
export default Validator;
