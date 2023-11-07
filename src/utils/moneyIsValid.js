import { MONEY_ERROR } from "../constants/errorMessage.js";
import NUMBERS from "../constants/numbers.js";
import SYMBOLS from "../constants/symbols.js";

const { space, dot } = SYMBOLS;
const { space_error, string_error, amount_error } = MONEY_ERROR;
const { purchase_money, zero } = NUMBERS;

const spaceIncluesError = (money) => {
  if (money.includes(space)) {
    throw new Error(`${space_error}`);
  }
  return true;
};

const stringError = (money) => {
  if (!Number.isInteger(Number(money)) || money.includes(dot)) {
    throw new Error(`${string_error}`);
  }
  return true;
};

const purchaseError = (money) => {
  if (money < purchase_money || money % purchase_money !== zero) {
    throw new Error(`${amount_error}`);
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
