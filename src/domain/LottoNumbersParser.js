import REGEX from "../constants/Regex.js";
import { validateNumberInRange } from "../utils/validators.js";

const LottoNumbersParser = {
  parse(input) {
    const splittedInput = this.splitByComma(input).map((value) => value.trim());
    this.validateInput(splittedInput);
    return this.parseInts(splittedInput);
  },

  parseSingle(input) {
    return this.parse(input)[0];
  },

  splitByComma(value) {
    return value.split(",");
  },

  validateInput(array) {
    this.validateHasOnlyPositiveInt(array);
    this.validateVaildLottoNumbers(array);
  },

  validateHasOnlyPositiveInt(array) {
    const isAllInt = array.every((value) => REGEX.onlyInt.test(value) && value > 0);
    if (!isAllInt) {
      throw new Error("[ERROR] 입력 값은 모두 양의 정수 형태여야 합니다.");
    }
  },

  validateVaildLottoNumbers(numbers) {
    numbers.forEach((number) => validateNumberInRange(number, 1, 45));
  },

  parseInts(array) {
    return array.map((value) => parseInt(value, 10));
  },
};

export default LottoNumbersParser;
