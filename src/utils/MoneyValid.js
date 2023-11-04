import NUMBERS from "../constants/numbers.js";
import { MONEY_ERROR } from "../constants/errorMessage.js";
import SYMBOLS from "../constants/symbols.js";

class MoneyValid {
  moneyIsValid(money) {
    if (money.includes(SYMBOLS.space)) {
      throw new Error(`${MONEY_ERROR.space_error}`);
    }
    if (!Number.isInteger(Number(money)) || money.includes(SYMBOLS.dot)) {
      throw new Error(`${MONEY_ERROR.string_error}`);
    }
    if (
      money < NUMBERS.purchase_money ||
      money % NUMBERS.purchase_money !== NUMBERS.zero
    ) {
      throw new Error(`${MONEY_ERROR.amount_error}`);
    }
    return true;
  }
}

export default MoneyValid;
