import {
  STATIC_NUMBER,
  SEPARATOR,
  MESSAGE_ERROR,
} from "../../static/Static.js";

const InputValidator = {
  validatePurchasePrice(price) {
    if (!price) {
      throw new Error(`${MESSAGE_ERROR.header} ${MESSAGE_ERROR.blank}`);
    }

    if (price % STATIC_NUMBER.pricePerLotto != 0) {
      throw new Error(`${MESSAGE_ERROR.header} ${MESSAGE_ERROR.purchasePrice}`);
    }
  },

  validateWinningNums(nums) {
    if (!nums) {
      throw new Error(`${MESSAGE_ERROR.header} ${MESSAGE_ERROR.blank}`);
    }

    const numArr = nums.split(SEPARATOR.comma);
    const numSet = new Set(numArr);
    if (numSet.size != STATIC_NUMBER.LottoNumLen) {
      throw new Error(
        `${MESSAGE_ERROR.header} ${MESSAGE_ERROR.duplicatedWinningNums}`
      );
    }
    const regExLottoNum = /^(?:[1-9]|[1-3][0-9]|4[0-5])$/;
    numArr.map((num) => {
      if (!regExLottoNum.test(num)) {
        throw new Error(`${MESSAGE_ERROR.header} ${MESSAGE_ERROR.invalidNum}`);
      }
    });

    return numArr;
  },
};

export default InputValidator;
