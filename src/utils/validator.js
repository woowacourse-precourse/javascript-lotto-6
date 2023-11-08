import { ERROR_MESSAGE } from "../constants/messages.js";
import { RANGE } from "../constants/range.js";

const validator = {
  validateArray(numbers) {
    this.checkArrayLength(numbers);
    this.checkArrayRange(numbers);
    this.checkValidArrayElements(numbers);
    this.checkDuplicatedArray(numbers);
  },

  checkArrayLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  },

  checkDuplicatedArray(numbers) {
    if (numbers.length !== new Set(numbers).size) {
      throw new Error(ERROR_MESSAGE.DUPLICATED_WINNING_NUMBER);
    }
  },

  checkValidArrayElements(numbers) {
    if (!numbers[0]) {
      throw new Error(ERROR_MESSAGE.INVALID_WINNING_NUMBER);
    }
  },

  checkArrayRange(numbers) {
    numbers.forEach((number) => {
      if (number < RANGE.START || number > RANGE.END) {
        throw new Error(ERROR_MESSAGE.INVALID_WINNING_NUMBER_RANGE);
      }
    });
  },

  validateString(numbers) {
    this.checkStringIsNumber(numbers);
    this.checkIsPositive(numbers);
    this.checkValidUnit(numbers);
  },

  checkStringIsNumber(numbers) {
    if (isNaN(numbers)) throw new Error(ERROR_MESSAGE.INVALID_NUMBER);
  },

  checkIsPositive(numbers) {
    if (Number(numbers) < 1) throw new Error(ERROR_MESSAGE.INVALID_NUMBER);
  },

  checkValidUnit(numbers) {
    const checkUnit = numbers % 1000;
    if (checkUnit !== 0) throw new Error(ERROR_MESSAGE.INVALID_AMOUNT);
  },

  validateNumber(numbers) {
    this.checkNumberRange(numbers);
    this.checkIsNumber(numbers);
  },

  checkNumberRange(numbers) {
    if (numbers < RANGE.START || numbers > RANGE.END)
      throw new Error(ERROR_MESSAGE.INVALID_WINNING_NUMBER_RANGE);
  },

  checkIsNumber(numbers) {
    if (!numbers) throw new Error(ERROR_MESSAGE.INVALID_BONUS_NUMBER);
  },
};

export default validator;
