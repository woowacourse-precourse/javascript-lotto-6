import { STATIC_NUMBER } from "../../static/Static.js";
import { MESSAGE_ERROR } from "../../static/Static.js";

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
    const numsSet = new Set(nums);
    if (numsSet.size != STATIC_NUMBER.LottoNumLen) {
      throw new Error(
        `${MESSAGE_ERROR.header} ${MESSAGE_ERROR.duplicatedWinningNums}`
      );
    }
  },
};

export default InputValidator;
