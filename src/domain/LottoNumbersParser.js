import REGEX from "../constants/Regex.js";
import { LOTTO_BUSINESS_RULES } from "../constants/lotto.js";
import { ERROR_MESSAGE } from "../constants/messages.js";
import { validateNumberInRange } from "../utils/validators.js";

const LottoNumbersParser = {
  parse(input) {
    const splittedInput = this.splitByComma(input).map((value) => value.trim());
    this.validateInput(splittedInput);

    return this.parseInts(splittedInput);
  },

  parseSingle(input) {
    this.validateSingle(input);
    return this.parse(input)[0];
  },

  splitByComma(value) {
    return value.split(",");
  },

  validateInput(array) {
    this.validateHasOnlyPositiveInt(array);
    this.validateVaildLottoNumbers(array);
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

  validateVaildLottoNumbers(numbers) {
    const { minNumber, maxNumber } = LOTTO_BUSINESS_RULES;
    numbers.forEach((number) => validateNumberInRange(number, minNumber, maxNumber));
  },

  validateSingle(input) {
    if (input.includes(",")) {
      throw new Error(ERROR_MESSAGE.includeComma);
    }
  },
};

export default LottoNumbersParser;
