import { Console } from "@woowacourse/mission-utils";

import { error, exceptionType, message } from "../constants";
import { throwErrorIf } from "../utils";

const inputView = {
  enterPurchaseAmount: async function () {
    const amount = await Console.readLineAsync(message.ENTER_PURCHASE_AMOUNT);
    this.validate(exceptionType.PURCHASE, amount);

    return Number(amount);
  },

  enterWinningNumber: async function () {
    const numbers = await Console.readLineAsync(message.ENTER_WINNING_NUMBER);
    const splited = numbers.split(",");

    splited.forEach((number) => {
      this.validate(exceptionType.LOTTO, number);
    });

    return splited.map((number) => Number(number));
  },

  enterBonusNumber: async function () {
    const number = await Console.readLineAsync(message.ENTER_BONUS_NUMBER);
    this.validate(exceptionType.LOTTO, number);

    return Number(number);
  },

  validate: function (type, value) {
    throwErrorIf(value.length === 0, error.IS_EMPTY);

    const isNotNumber = isNaN(Number(value));

    switch (type) {
      case exceptionType.PURCHASE:
        throwErrorIf(isNotNumber, error.NOT_NUMBER);
      case exceptionType.LOTTO:
        throwErrorIf(isNotNumber, error.NATURAL_NUMBER_IN_RANGE);
    }
  },
};

export default inputView;
