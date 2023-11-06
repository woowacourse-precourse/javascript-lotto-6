import { Console } from "@woowacourse/mission-utils";
import { exceptionType, message } from "../constants";

const input = {
  enterPurchaseAmount: async function () {
    const amount = await Console.readLineAsync(message.ENTER_PURCHASE_AMOUNT);
    this.validate(exceptionType.PURCHASE, amount);

    return Number(amount);
  },

  enterWinningNumber: async function () {
    const numbers = await Console.readLineAsync(message.ENTER_WINNING_NUMBER);

    numbers.forEach((number) => {
      this.validate(exceptionType.LOTTO, number);
    });

    return numbers.map((number) => Number(number));
  },

  enterBonusNumber: async function () {
    const number = await Console.readLineAsync(message.ENTER_BONUS_NUMBER);
    this.validate(exceptionType.LOTTO, number);

    return Number(number);
  },

  validate: function (type, value) {
    throwErrorIf(value === "", error.IS_EMPTY);

    const isNotNumber = isNaN(Number(value));

    switch (type) {
      case exceptionType.PURCHASE:
        throwErrorIf(isNotNumber, error.NOT_NUMBER);
      case exceptionType.LOTTO:
        throwErrorIf(isNotNumber, error.NATURAL_NUMBER_IN_RANGE);
    }
  },
};

export default input;
