import {
  STATIC_NUMBER,
  SEPARATOR,
  MESSAGE_ERROR,
} from "../../static/Static.js";

const regExLottoNum = /^(?:[1-9]|[1-3][0-9]|4[0-5])$/;

const InputValidator = {
  validateEmptyString(input) {
    if (!input) {
      throw new Error(`${MESSAGE_ERROR.header} ${MESSAGE_ERROR.blank}`);
    }
  },

  validatePurchasePrice(price) {
    if (price % STATIC_NUMBER.pricePerLotto != 0) {
      throw new Error(`${MESSAGE_ERROR.header} ${MESSAGE_ERROR.purchasePrice}`);
    }
  },

  validateLength(numArr) {
    if (numArr.length != STATIC_NUMBER.LottoNumLen) {
      throw new Error(`${MESSAGE_ERROR.header} ${MESSAGE_ERROR.invalidLength}`);
    }
  },

  validateNumRange(num) {
    if (!regExLottoNum.test(num)) {
      throw new Error(`${MESSAGE_ERROR.header} ${MESSAGE_ERROR.invalidNum}`);
    }
  },

  validateDuplication(numArr) {
    const numSet = new Set(numArr);
    if (numSet.size != STATIC_NUMBER.LottoNumLen) {
      throw new Error(
        `${MESSAGE_ERROR.header} ${MESSAGE_ERROR.duplicatedWinningNums}`
      );
    }
  },

  validateInWinningNums(bonusNum, winningNums) {
    if (winningNums.includes(Number(bonusNum))) {
      throw new Error(`${MESSAGE_ERROR.header} ${MESSAGE_ERROR.inWinningNums}`);
    }
  },
};

export default InputValidator;
