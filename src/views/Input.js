import { Console } from "@woowacourse/mission-utils";
import { error, inputType, message } from "../constants.js";
import { throwErrorIf } from "../utils/index.js";

const inputView = {
  enterPurchaseAmount: async function () {
    const amount = await Console.readLineAsync(message.ENTER_PURCHASE_AMOUNT);
    this.validate(inputType.PURCHASE, amount);

    return Number(amount);
  },

  enterWinningNumber: async function () {
    const numbers = await Console.readLineAsync(message.ENTER_WINNING_NUMBER);

    return numbers.split(",").map((number) => {
      this.validate(inputType.LOTTO, number);
      return Number(number);
    });
  },

  enterBonusNumber: async function () {
    const number = await Console.readLineAsync(message.ENTER_BONUS_NUMBER);
    this.validate(inputType.LOTTO, number);

    return Number(number);
  },

  validate: function (type, value) {
    throwErrorIf(value.length === 0, error.IS_EMPTY);

    const isNotNumber = isNaN(Number(value));

    if (type === inputType.PURCHASE)
      throwErrorIf(isNotNumber, error.NOT_NUMBER);
    if (type === inputType.LOTTO)
      throwErrorIf(isNotNumber, error.NATURAL_NUMBER_IN_RANGE);
  },
};

export default inputView;
