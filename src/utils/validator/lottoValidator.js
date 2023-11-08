import { MESSAGE_ERROR } from "../../static/Static.js";
import { STATIC_NUMBER } from "../../static/Static.js";

const lottoValidator = {
  validateLength(numbers) {
    if (numbers.length !== STATIC_NUMBER.LottoNumLen) {
      throw new Error(`${MESSAGE_ERROR.header} ${MESSAGE_ERROR.invalidLength}`);
    }
  },

  validateDuplication(numbers) {
    const numSet = new Set(numbers);
    if (numSet.size != STATIC_NUMBER.LottoNumLen) {
      throw new Error(
        `${MESSAGE_ERROR.header} ${MESSAGE_ERROR.duplicatedWinningNums}`
      );
    }
  },
};

export default lottoValidator;
