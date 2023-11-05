import { LOTTO } from "../constants/lotto.js";
import DuplicateNumbersError from "../error/DuplicateNumbersError.js";
import IncorrectFormatError from "../error/IncorrectFormatError.js";
import IncorrectLottoCountError from "../error/IncorrectLottoCountError.js";
import IncorrectLottoNumberError from "../error/IncorrectLottoNumberError.js";

const between = (val, start, end) => {
  return start <= val && val <= end;
};

const Validate = Object.freeze({
  checkFormat(elm, type) {
    if (typeof elm !== type) {
      throw new IncorrectFormatError();
    }
  },

  checkRange(elm, start, end) {
    this.checkArrFormat([elm, start, end], "number");
    if (!between(elm, start, end)) {
      throw new IncorrectLottoNumberError();
    }
  },

  checkMultiple(targetNumber, number) {
    this.checkArrFormat([targetNumber, number], "number");
    if (!Number.isInteger(targetNumber / number)) {
      throw new IncorrectFormatError();
    }
  },

  checkArrFormat(arr, type) {
    arr.forEach((elm) => this.checkFormat(elm, type));
  },

  checkArrLength(arr, length) {
    if (arr.length !== length) {
      throw new IncorrectLottoCountError();
    }
  },

  checkArrRange(arr, start, end) {
    arr.forEach((elm) => this.checkRange(elm, start, end));
  },

  checkArrDuplicate(arr) {
    if (arr.some((elm, index) => arr.includes(elm, index + 1))) {
      throw new DuplicateNumbersError();
    }
  },
});

const LottoValidate = Object.freeze({
  // 로또 구매 가격이 숫자 형식이 아니면 IncorrectFormatError
  checkFormat: (purchaseAmount, type = "number") => Validate.checkFormat(purchaseAmount, type),

  // 로또 구매 가격이 LOTTO.PRICE의 배수가 아니면 IncorrectFormatError
  checkMultiple: (purchaseAmount, price = LOTTO.PRICE) =>
    Validate.checkMultiple(purchaseAmount, price),

  // 로또 번호의 개수가 LOTTO.NUMBER_COUNT와 다르면 IncorrectLottoCountError
  checkArrLength: (numbers, count = LOTTO.NUMBER_COUNT) => Validate.checkArrLength(numbers, count),

  // 로또 번호가 숫자 형식이 아니면 IncorrectFormatError
  checkArrFormat: (numbers, type = "number") => Validate.checkArrFormat(numbers, type),

  // LOTTO.MIN_NUMBER ~ LOTTO.MAX_NUMBER 사이의 숫자가 아니면 IncorrectLottoNumberError
  checkArrRange: (numbers, start = LOTTO.MIN_NUMBER, end = LOTTO.MAX_NUMBER) =>
    Validate.checkArrRange(numbers, start, end),

  // 로또 번호가 중복된 값을 가지면 DuplicateNumbersError
  checkArrDuplicate: (numbers, answerNumbers = []) =>
    Validate.checkArrDuplicate(numbers.concat(answerNumbers)),

  // 로또 번호 유효성 검사
  checkAllLottoNumbers(numbers, options) {
    this.checkArrLength(numbers, options?.count);
    this.checkArrFormat(numbers, options?.type);
    this.checkArrRange(numbers, options?.start, options?.end);
    this.checkArrDuplicate(numbers, options?.answerNumbers);
  },

  // 로또 구매 금액 유효성 검사
  checkAllPurchaseAmount(purchaseAmount, price) {
    this.checkMultiple(purchaseAmount, price);
  },
});

export { Validate, LottoValidate };
