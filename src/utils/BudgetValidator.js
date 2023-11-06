import ErrorMsg from "./ErrorMsg.js";

const BudgetValidator = {
  isNum(input) {
    if (isNaN(Number(input))) {
      throw new Error(ErrorMsg.Budget.MUST_BE_NUM);
    }
  },
};

export default BudgetValidator;
