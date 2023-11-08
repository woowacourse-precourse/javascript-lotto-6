import REGEX from "../constants/Regex.js";
import { ERROR_MESSAGE } from "../constants/messages.js";
import { TypeValidator } from "../utils/validators.js";

const LottoNumbersParser = {
  parse(input) {
    TypeValidator.isString(input);
    const splittedInput = this.splitByComma(input).map((value) => value.trim());
    this.validateHasOnlyPositiveInt(splittedInput);

    return this.parseInts(splittedInput);
  },

  parseSingle(input) {
    TypeValidator.isString(input);
    this.validateSingle(input);
    return this.parse(input)[0];
  },

  splitByComma(value) {
    return value.split(",");
  },

  parseInts(array) {
    return array.map((value) => parseInt(value, 10));
  },

  validateHasOnlyPositiveInt(array) {
    const isAllInt = array.every((value) => REGEX.onlyInt.test(value) && value > 0);
    if (!isAllInt) {
      throw new Error(ERROR_MESSAGE.hasNotOnlyPostiveInt);
    }
  },

  validateSingle(input) {
    if (input.includes(",")) {
      throw new Error(ERROR_MESSAGE.includeComma);
    }
  },
};

export default LottoNumbersParser;
