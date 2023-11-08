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

  validateWinningNums(nums) {
    const numArr = nums.split(SEPARATOR.comma);
    if (numArr.length != STATIC_NUMBER.LottoNumLen) {
      throw new Error(`${MESSAGE_ERROR.header} ${MESSAGE_ERROR.invalidLength}`);
    }
    numArr.map((num) => {
      if (!regExLottoNum.test(num)) {
        throw new Error(`${MESSAGE_ERROR.header} ${MESSAGE_ERROR.invalidNum}`);
      }
    });
    const numSet = new Set(numArr);
    if (numSet.size != STATIC_NUMBER.LottoNumLen) {
      throw new Error(
        `${MESSAGE_ERROR.header} ${MESSAGE_ERROR.duplicatedWinningNums}`
      );
    }

    return numArr;
  },

  validateBonusNum(bonusNum, winningNums) {
    if (!regExLottoNum.test(bonusNum)) {
      throw new Error(`${MESSAGE_ERROR.header} ${MESSAGE_ERROR.invalidNum}`);
    }
    if (winningNums.includes(Number(bonusNum))) {
      throw new Error(`${MESSAGE_ERROR.header} ${MESSAGE_ERROR.inWinningNums}`);
    }
  },
};

export default InputValidator;
