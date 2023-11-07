import { ERROR } from "../constant/gameMessge.js";

function validatePurchaseAmountMinimun(amount) {
  if (amount < 1000) {
    throw new Error(ERROR.purchase.minimunAmount);
  }
}

function validatePurchaseAmountNumeric(amount) {
  if (isNaN(amount)) {
    throw new Error(ERROR.purchase.numeric);
  }
}

function validateAmountUnit(amount) {
  if (amount % 1000 !== 0) {
    throw new Error(ERROR.purchase.amountUnit);
  }
}

function validatePurchaseAmount(amount) {
  validatePurchaseAmountMinimun(amount);
  validatePurchaseAmountNumeric(amount);
  validateAmountUnit(amount);

  return amount;
}

export { validatePurchaseAmount };
