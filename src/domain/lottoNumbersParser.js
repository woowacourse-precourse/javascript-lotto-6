import { REGEX } from "../constants/regex.js";

const lottoNumbersParser = {
  parse(input) {
    const inputArray = this.splitByComma(input).map((value) => value.trim());
    this.validateOnlyPositiveInt(inputArray);
    return this.parseInts(inputArray);
  },

  splitByComma(value) {
    return value.split(",");
  },

  validateOnlyPositiveInt(array) {
    const isAllInt = array.every((value) => REGEX.onlyPositiveInt.test(value));
    if (!isAllInt) {
      throw new Error("[ERROR] 입력 값은 모두 양의 정수 형태여야 합니다.");
    }
  },

  parseInts(array) {
    return array.map((value) => parseInt(value, 10));
  },
};

export { lottoNumbersParser };
