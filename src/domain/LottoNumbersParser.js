import REGEX from "../constants/Regex.js";

const LottoNumbersParser = {
  parse(input) {
    const splittedInput = this.splitByComma(input).map((value) => value.trim());
    this.validateHasOnlyPositiveInt(splittedInput);
    return this.parseInts(splittedInput);
  },

  splitByComma(value) {
    return value.split(",");
  },

  validateHasOnlyPositiveInt(array) {
    const isAllInt = array.every((value) => REGEX.onlyInt.test(value) && value > 0);
    if (!isAllInt) {
      throw new Error("[ERROR] 입력 값은 모두 양의 정수 형태여야 합니다.");
    }
  },

  parseInts(array) {
    return array.map((value) => parseInt(value, 10));
  },
};

export default LottoNumbersParser;
