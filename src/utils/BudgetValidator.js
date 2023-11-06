import Constant from "./Constant.js";
import ErrorMsg from "./ErrorMsg.js";

const BudgetValidator = {
  isNum(input) {
    if (isNaN(Number(input))) {
      throw new Error(ErrorMsg.Budget.MUST_BE_NUM);
    }
  },
  minIsUnitPrice(input) {
    if (Number(input) < Constant.UNIT_PRICE) {
      throw new Error(ErrorMsg.Budget.MIN_IS_UNIT_PRICE);
    }
  },
};

export default BudgetValidator;
