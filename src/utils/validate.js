import { LOTTO } from "../constants/lotto.js";
import DuplicateNumbersError from "../error/DuplicateNumbersError.js";
import IncorrectFormatError from "../error/IncorrectFormatError.js";
import IncorrectLottoCountError from "../error/IncorrectLottoCountError.js";
import IncorrectLottoNumberError from "../error/IncorrectLottoNumberError.js";

const between = (val, start, end) => {
  return start <= val && val <= end;
};

const Validate = Object.freeze({
  checkCount(arr, count) {
    if (arr.length !== count) {
      throw new IncorrectLottoCountError();
    }
  },

  checkFormat(arr, type) {
    if (arr.some((elm) => typeof elm !== type)) {
      throw new IncorrectFormatError();
    }
  },

  checkRange(arr, start, end) {
    if (arr.some((elm) => !between(elm, start, end))) {
      throw new IncorrectLottoNumberError();
    }
  },

  checkDuplicate(arr) {
    if (arr.some((elm, index) => arr.includes(elm, index + 1))) {
      throw new DuplicateNumbersError();
    }
  },
});

const LottoValidate = Object.freeze({
  // 로또 번호의 개수가 LOTTO.NUMBER_COUNT와 다르면 IncorrectLottoCountError
  checkCount: (numbers) => Validate.checkCount(numbers, LOTTO.NUMBER_COUNT),

  // 로또 번호가 숫자 형식이 아니면 IncorrectFormatError
  checkFormat: (numbers) => Validate.checkFormat(numbers, "number"),

  // LOTTO.MIN_NUMBER ~ LOTTO.MAX_NUMBER 사이의 숫자가 아니면 IncorrectLottoNumberError
  checkRange: (numbers) => Validate.checkRange(numbers, LOTTO.MIN_NUMBER, LOTTO.MAX_NUMBER),

  // 로또 번호가 중복된 값을 가지면 DuplicateNumbersError
  checkDuplicate: (numbers) => Validate.checkDuplicate(numbers),

  checkAll(numbers) {
    this.checkCount(numbers);
    this.checkFormat(numbers);
    this.checkRange(numbers);
    this.checkDuplicate(numbers);
  },
});

export { Validate, LottoValidate };
