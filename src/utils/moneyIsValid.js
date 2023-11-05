import { MONEY_ERROR } from "../constants/errorMessage.js";
import NUMBERS from "../constants/numbers.js";
import SYMBOLS from "../constants/symbols.js";

const spaceIncluesError = (money) => {
  if (money.includes(SYMBOLS.space)) {
    throw new Error(`${MONEY_ERROR.space_error}`);
  }
  return true;
};

const stringError = (money) => {
  if (!Number.isInteger(Number(money)) || money.includes(SYMBOLS.dot)) {
    throw new Error(`${MONEY_ERROR.string_error}`);
  }
  return true;
};

const purchaseError = (money) => {
  if (
    money < NUMBERS.purchase_money ||
    money % NUMBERS.purchase_money !== NUMBERS.zero
  ) {
    throw new Error(`${MONEY_ERROR.amount_error}`);
  }
  return true;
};

const moneyIsValid = (money) => {
  spaceIncluesError(money);
  stringError(money);
  purchaseError(money);
  return true;
};

export default moneyIsValid;
