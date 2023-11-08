import Constant from "./Constant.js";
import ErrorMsg from "./ErrorMsg.js";

const Validator = {
  budgetDivisibleByUnit(input) {
    if (Number(input) % Constant.UNIT_PRICE !== 0) {
      throw new Error(ErrorMsg.BUDGET.DIVISBLE_BY_UNIT_PRICE);
    }
  },
  budgetMin(input) {
    if (Number(input) < Constant.UNIT_PRICE) {
      throw new Error(ErrorMsg.BUDGET.MIN_IS_UNIT_PRICE);
    }
  },
  isLottoNumSeperatedByComma(str) {
    if (!str.includes(",")) {
      throw new Error(ErrorMsg.LOTTO_NUM.IS_NOT_SEPERATED_BY_COMMA);
    }
  },
  lottoNumCount(input) {
    if (input.length !== Constant.NUM_COUNT) {
      throw new Error(ErrorMsg.LOTTO_NUM.WRONG_COUNT);
    }
  },
  isRedundancy(input) {
    const set = new Set(input);
    if (set.size !== Constant.NUM_COUNT) {
      throw new Error(ErrorMsg.LOTTO_NUM.IS_REDUNDANCY);
    }
  },
  isNum(input) {
    if (isNaN(Number(input))) {
      throw new Error(ErrorMsg.IS_NAN);
    }
  },
  checkRange(input) {
    input = Number(input);
    if (input < Constant.MIN || input > Constant.MAX) {
      throw new Error(ErrorMsg.LOTTO_NUM.OUT_OF_RANGE);
    }
  },
};

export default Validator;
