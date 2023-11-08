import MESSAGE from "../constants/MESSAGE.js";
import VALIDATE from "../constants/VALIDATE.js";

const Validator = {
  purchase(purchaseAmount) {
    if (!VALIDATE.isPositiveNumber(purchaseAmount)) {
      throw new Error(MESSAGE.ERROR.NOT_POSITIVE_NUMBER);
    }
    if (!VALIDATE.isNotZero(purchaseAmount)) {
      throw new Error(MESSAGE.ERROR.ZERO);
    }
    if (!VALIDATE.isDividedBy1000(purchaseAmount)) {
      throw new Error(MESSAGE.ERROR.NOT_DIVIDED_BY_1000);
    }
  },

  winningNumbers(winningNumbers) {
    if (!VALIDATE.isNotDuplicated(winningNumbers))
      throw new Error(MESSAGE.ERROR.DUPLICATED_NUMBER);

    if (!VALIDATE.isSixNumbers(winningNumbers))
      throw new Error(MESSAGE.ERROR.NOT_SIX_NUMBERS);

    winningNumbers.forEach((number) => {
      if (!VALIDATE.isNumber(number)) throw new Error(MESSAGE.ERROR.NOT_NUMBER);
    });

    winningNumbers.forEach((number) => {
      if (!VALIDATE.isInRange(number))
        throw new Error(MESSAGE.ERROR.NOT_IN_RANGE);
    });
  },

  bonusNumber(winningNumber, bonusNumber) {
    if (!VALIDATE.isNumber(bonusNumber))
      throw new Error(MESSAGE.ERROR.NOT_NUMBER);

    if (!VALIDATE.isInRange(bonusNumber))
      throw new Error(MESSAGE.ERROR.NOT_IN_RANGE);

    if (!VALIDATE.isNotDuplicated([...winningNumber, bonusNumber]))
      throw new Error(MESSAGE.ERROR.DUPLICATED_NUMBER);
  },
};

export default Validator;
